"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "organika-consent";
const STORAGE_VERSION = 1;

export type ConsentCategories = {
  necessary: true; // always on
  analytics: boolean;
  marketing: boolean;
};

type StoredConsent = {
  v: number;
  categories: ConsentCategories;
  ts: number;
};

const DEFAULT_CATEGORIES: ConsentCategories = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export function getConsent(): ConsentCategories | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    if (parsed.v !== STORAGE_VERSION || !parsed.categories) return null;
    return { ...DEFAULT_CATEGORIES, ...parsed.categories, necessary: true };
  } catch {
    return null;
  }
}

export function setConsent(categories: ConsentCategories) {
  if (typeof window === "undefined") return;
  const payload: StoredConsent = {
    v: STORAGE_VERSION,
    categories: { ...categories, necessary: true },
    ts: Date.now(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  window.dispatchEvent(
    new CustomEvent<ConsentCategories>("organika-consent", {
      detail: payload.categories,
    }),
  );
}

/** Call from anywhere to reopen the banner (e.g. footer link). */
export function openCookieSettings() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event("organika-cookie-reopen"));
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    if (getConsent() === null) {
      const t = setTimeout(() => setVisible(true), 400);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    const reopen = () => {
      const current = getConsent();
      if (current) {
        setAnalytics(current.analytics);
        setMarketing(current.marketing);
      }
      setShowDetails(true);
      setVisible(true);
    };
    window.addEventListener("organika-cookie-reopen", reopen);
    return () => window.removeEventListener("organika-cookie-reopen", reopen);
  }, []);

  // Lock body scroll while details modal is open
  useEffect(() => {
    if (visible && showDetails) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible, showDetails]);

  const commit = (next: ConsentCategories) => {
    setConsent(next);
    setVisible(false);
    setShowDetails(false);
  };

  const acceptAll = () =>
    commit({ necessary: true, analytics: true, marketing: true });
  const rejectAll = () =>
    commit({ necessary: true, analytics: false, marketing: false });
  const saveChoice = () =>
    commit({ necessary: true, analytics, marketing });

  if (!visible) return null;

  return (
    <>
      {/* ====== Compact bottom banner ====== */}
      {!showDetails && (
        <div
          role="dialog"
          aria-labelledby="cookie-banner-title"
          className="fixed inset-x-0 bottom-0 z-[60] px-3 pb-3 pt-4 md:px-6 md:pb-6 md:pt-6 animate-[cookieSlideUp_300ms_ease-out]"
        >
          <div className="max-w-[1100px] mx-auto rounded-2xl border border-[#1a2a1b] bg-[#0e160f]/95 backdrop-blur-xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] p-4 md:p-5">
            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-5">
              <div className="flex-1 text-[13px] md:text-sm text-[#c8d6c8] leading-relaxed">
                <p id="cookie-banner-title">
                  <span className="text-white font-semibold">
                    Používáme cookies
                  </span>{" "}
                  pro provoz stránky, měření návštěvnosti a marketing. Můžeš
                  přijmout vše, odmítnout nepovinné nebo si vybrat jen některé
                  kategorie. Víc v{" "}
                  <a
                    href="/zasady-ochrany-osobnich-udaju"
                    className="underline text-[#9cb89c] hover:text-white"
                  >
                    zásadách ochrany osobních údajů
                  </a>
                  .
                </p>
              </div>
              <div className="grid grid-cols-2 md:flex md:items-center gap-2 shrink-0 w-full md:w-auto">
                <button
                  type="button"
                  onClick={rejectAll}
                  className="col-span-1 px-4 py-2.5 rounded-lg border border-[#2a3a2b] text-[13px] md:text-sm text-[#9cb89c] hover:text-white hover:border-[#4a5a4b] transition-colors"
                >
                  Odmítnout vše
                </button>
                <button
                  type="button"
                  onClick={() => setShowDetails(true)}
                  className="col-span-1 px-4 py-2.5 rounded-lg border border-[#2a3a2b] text-[13px] md:text-sm text-[#9cb89c] hover:text-white hover:border-[#4a5a4b] transition-colors"
                >
                  Nastavení
                </button>
                <button
                  type="button"
                  onClick={acceptAll}
                  className="col-span-2 md:col-auto px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#143d1a] to-[#1a5c25] border border-[#2a5a2a] text-[13px] md:text-sm font-semibold text-white hover:shadow-[0_0_24px_rgba(74,222,128,0.2)] transition-all"
                >
                  Přijmout vše
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ====== Details / categories modal ====== */}
      {showDetails && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-details-title"
          className="fixed inset-0 z-[70] flex items-end md:items-center justify-center p-0 md:p-6 animate-[cookieFadeIn_200ms_ease-out]"
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowDetails(false)}
          />
          <div className="relative w-full md:max-w-[560px] max-h-[92vh] overflow-y-auto rounded-t-2xl md:rounded-2xl border border-[#1a2a1b] bg-[#0e160f] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]">
            <div className="p-5 md:p-7">
              <div className="flex items-start justify-between gap-4 mb-5">
                <h2
                  id="cookie-details-title"
                  className="text-xl md:text-2xl font-bold text-white tracking-tight"
                >
                  Nastavení cookies
                </h2>
                <button
                  type="button"
                  aria-label="Zavřít"
                  onClick={() => setShowDetails(false)}
                  className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-[#2a3a2b] text-[#9cb89c] hover:text-white hover:border-[#4a5a4b] transition-colors"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>

              <p className="text-[13px] md:text-sm text-[#c8d6c8] leading-relaxed mb-6">
                Vyber si, které cookies můžeme používat. Svoji volbu můžeš
                kdykoliv změnit. Víc informací v{" "}
                <a
                  href="/zasady-ochrany-osobnich-udaju"
                  className="underline text-[#9cb89c] hover:text-white"
                >
                  zásadách ochrany osobních údajů
                </a>
                .
              </p>

              <div className="space-y-3">
                <CategoryRow
                  title="Nezbytné cookies"
                  description="Zajišťují základní fungování stránky (platba, bezpečnost). Nelze vypnout."
                  checked={true}
                  disabled={true}
                  onChange={() => {}}
                />
                <CategoryRow
                  title="Analytické cookies"
                  description="Anonymně měří návštěvnost a chování na stránce. Pomáhají nám pochopit, co funguje."
                  checked={analytics}
                  disabled={false}
                  onChange={setAnalytics}
                />
                <CategoryRow
                  title="Marketingové cookies"
                  description="Umožňují měřit účinnost reklam a zobrazovat relevantní obsah (Meta Pixel, Google Ads)."
                  checked={marketing}
                  disabled={false}
                  onChange={setMarketing}
                />
              </div>

              <div className="mt-6 flex flex-col-reverse md:flex-row md:items-center gap-2 md:gap-3">
                <button
                  type="button"
                  onClick={rejectAll}
                  className="md:flex-1 px-4 py-3 rounded-lg border border-[#2a3a2b] text-[13px] md:text-sm text-[#9cb89c] hover:text-white hover:border-[#4a5a4b] transition-colors"
                >
                  Odmítnout nepovinné
                </button>
                <button
                  type="button"
                  onClick={saveChoice}
                  className="md:flex-1 px-4 py-3 rounded-lg border border-[#2a3a2b] text-[13px] md:text-sm text-white hover:border-[#4a5a4b] transition-colors"
                >
                  Uložit výběr
                </button>
                <button
                  type="button"
                  onClick={acceptAll}
                  className="md:flex-1 px-5 py-3 rounded-lg bg-gradient-to-r from-[#143d1a] to-[#1a5c25] border border-[#2a5a2a] text-[13px] md:text-sm font-semibold text-white hover:shadow-[0_0_24px_rgba(74,222,128,0.2)] transition-all"
                >
                  Přijmout vše
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes cookieSlideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes cookieFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
}

function CategoryRow({
  title,
  description,
  checked,
  disabled,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  disabled: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-xl border border-[#1a2a1b] bg-[#141e15]">
      <div className="flex-1 min-w-0">
        <p className="text-[14px] md:text-[15px] font-semibold text-white mb-1">
          {title}
        </p>
        <p className="text-[12px] md:text-[13px] text-[#9cb89c] leading-relaxed">
          {description}
        </p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={title}
        disabled={disabled}
        onClick={() => !disabled && onChange(!checked)}
        className={`relative shrink-0 w-11 h-6 rounded-full transition-colors ${
          checked
            ? "bg-gradient-to-r from-[#143d1a] to-[#1a5c25]"
            : "bg-[#1a2a1b]"
        } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}
