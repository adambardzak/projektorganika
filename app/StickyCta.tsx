"use client";

import { useEffect, useState } from "react";
import { TrackedCtaLink } from "./TrackedCtaLink";

export function StickyCta({ ctaLink }: { ctaLink: string }) {
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [consentResolved, setConsentResolved] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowStickyCta(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const stored =
      typeof window !== "undefined"
        ? localStorage.getItem("organika-consent")
        : null;
    setConsentResolved(stored !== null);
    const onConsent = () => setConsentResolved(true);
    window.addEventListener("organika-consent", onConsent);
    return () => window.removeEventListener("organika-consent", onConsent);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-30 md:hidden px-4 pb-4 pt-6 bg-gradient-to-t from-[#080a08] via-[#080a08]/95 to-transparent transition-all duration-300 ${
        showStickyCta && consentResolved
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <TrackedCtaLink
        href={ctaLink}
        className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0a1a0a] via-[#143d1a] to-[#1a5c25] border border-[#2a5a2a] px-6 py-4 text-[15px] font-bold text-white shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
      >
        VSTOUPIT DO TRÉNINKU ZDARMA
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 12h14M13 6l6 6-6 6"
            stroke="#4ade80"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </TrackedCtaLink>
    </div>
  );
}
