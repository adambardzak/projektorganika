import { NextResponse } from "next/server";

type SubscribePayload = {
  subscriber_data: {
    email: string;
    name: string;
    surname?: string;
  };
  update_existing: boolean;
  trigger_autoresponders: boolean;
  skip_confirmation: boolean;
};

type EcomailList = {
  id: number;
};

const ECOMAIL_BASE_URL = "https://api2.ecomailapp.cz";
const DEFAULT_CIRCLE_COMMUNITY_URL = "https://growmatacademy.circle.so";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function splitFullName(fullName: string): { name: string; surname?: string } {
  const cleaned = fullName.trim().replace(/\s+/g, " ");
  const parts = cleaned.split(" ").filter(Boolean);
  if (parts.length <= 1) {
    return { name: cleaned };
  }

  return {
    name: parts[0],
    surname: parts.slice(1).join(" "),
  };
}

function parseSpaceIds(raw: string | undefined): number[] {
  if (!raw) return [];
  return raw
    .split(",")
    .map((v) => v.trim())
    .filter(Boolean)
    .map((v) => Number(v))
    .filter((n) => Number.isInteger(n) && n > 0);
}

async function addMemberToCircle(params: {
  email: string;
  fullName: string;
  token: string;
  spaceIds: number[];
  communityUrl: string;
}) {
  const { email, fullName, token, spaceIds, communityUrl } = params;
  const baseUrl = communityUrl.replace(/\/+$/, "");

  const response = await fetch(`${baseUrl}/api/admin/v2/community_members`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      name: fullName,
      space_ids: spaceIds,
      send_invitation_email: true,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(details || "Circle API request failed");
  }
}

async function resolveListId(apiKey: string): Promise<number | null> {
  const configuredListId = process.env.ECOMAIL_LIST_ID;
  if (configuredListId && /^\d+$/.test(configuredListId)) {
    return Number(configuredListId);
  }

  const response = await fetch(`${ECOMAIL_BASE_URL}/lists`, {
    method: "GET",
    headers: {
      key: apiKey,
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    return null;
  }

  const lists = (await response.json()) as EcomailList[];
  if (!Array.isArray(lists) || lists.length === 0 || typeof lists[0]?.id !== "number") {
    return null;
  }

  return lists[0].id;
}

export async function POST(req: Request) {
  const apiKey = process.env.ECOMAIL_API_KEY;
  const circleToken = process.env.CIRCLE_API_TOKEN;
  const circleCommunityUrl = process.env.CIRCLE_COMMUNITY_URL || DEFAULT_CIRCLE_COMMUNITY_URL;
  const circleSpaceIds = parseSpaceIds(process.env.CIRCLE_SPACE_IDS);

  if (!apiKey) {
    return NextResponse.json(
      { error: "Chybí serverová konfigurace Ecomail API." },
      { status: 500 },
    );
  }

  if (!circleToken) {
    return NextResponse.json(
      { error: "Chybí serverová konfigurace Circle API tokenu." },
      { status: 500 },
    );
  }

  if (circleSpaceIds.length === 0) {
    return NextResponse.json(
      { error: "Chybí CIRCLE_SPACE_IDS. Nastav ID prostoru v Circle." },
      { status: 500 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Neplatný formát požadavku." }, { status: 400 });
  }

  const data = body as { name?: unknown; email?: unknown; consent?: unknown };
  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim().toLowerCase() : "";
  const consent = data.consent === true;

  if (!name || !email || !consent) {
    return NextResponse.json({ error: "Vyplň prosím jméno, e-mail a souhlas." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Zadej prosím platný e-mail." }, { status: 400 });
  }

  const listId = await resolveListId(apiKey);
  if (!listId) {
    return NextResponse.json(
      { error: "Nepodařilo se najít Ecomail list. Nastav ECOMAIL_LIST_ID." },
      { status: 500 },
    );
  }

  const splitName = splitFullName(name);

  const payload: SubscribePayload = {
    subscriber_data: {
      email,
      name: splitName.name,
      ...(splitName.surname ? { surname: splitName.surname } : {}),
    },
    update_existing: true,
    trigger_autoresponders: true,
    skip_confirmation: true,
  };

  const response = await fetch(`${ECOMAIL_BASE_URL}/lists/${listId}/subscribe`, {
    method: "POST",
    headers: {
      key: apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  if (!response.ok) {
    const details = await response.text();
    return NextResponse.json(
      { error: "Nepodařilo se uložit kontakt do Ecomailu.", details },
      { status: 502 },
    );
  }

  try {
    await addMemberToCircle({
      email,
      fullName: name,
      token: circleToken,
      spaceIds: circleSpaceIds,
      communityUrl: circleCommunityUrl,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Kontakt se uložil do Ecomailu, ale nepodařilo se vytvořit člena v Circle.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
