import { NextResponse } from "next/server";

type SubscribePayload = {
  subscriber_data: {
    email: string;
    name: string;
  };
  update_existing: boolean;
  trigger_autoresponders: boolean;
  skip_confirmation: boolean;
};

type EcomailList = {
  id: number;
};

const ECOMAIL_BASE_URL = "https://api2.ecomailapp.cz";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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

  if (!apiKey) {
    return NextResponse.json(
      { error: "Chybí serverová konfigurace Ecomail API." },
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

  const payload: SubscribePayload = {
    subscriber_data: {
      email,
      name,
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

  return NextResponse.json({ ok: true });
}
