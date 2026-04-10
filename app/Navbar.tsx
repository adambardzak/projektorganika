"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#jak-to-funguje", label: "Program" },
  { href: "#bonusy", label: "Bonusy" },
  { href: "#recenze", label: "Recenze" },
  { href: "#o-mne", label: "O mně" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar({ ctaLink }: { ctaLink: string }) {
  const [open, setOpen] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowStickyCta(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Top navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#080a08]/70">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 h-14 md:h-16 flex items-center justify-between gap-4">
          <a href="#top" className="shrink-0 flex items-center" aria-label="Projekt Organika">
            <img
              src="/logo.svg"
              alt="Projekt Organika™"
              className="h-8 md:h-9 w-auto"
            />
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-7">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-[#9cb89c] hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <a
              href={ctaLink}
              className="hidden md:inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#143d1a] to-[#1a5c25] border border-[#2a5a2a] px-4 py-2 text-sm font-bold text-white transition-all hover:shadow-[0_0_24px_rgba(74,222,128,0.2)]"
            >
              Koupit za 990 Kč
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="#4ade80"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* Hamburger button (mobile) */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Otevřít menu"
              aria-expanded={open}
              className="md:hidden w-10 h-10 -mr-2 flex items-center justify-center active:scale-90 transition-transform"
            >
              <div className="relative w-5 h-4">
                <span
                  className={`absolute left-0 top-0 w-5 h-[1.5px] bg-white transition-all duration-300 ${
                    open ? "rotate-45 translate-y-[7px]" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] w-5 h-[1.5px] bg-white transition-opacity duration-200 ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[14px] w-5 h-[1.5px] bg-white transition-all duration-300 ${
                    open ? "-rotate-45 -translate-y-[7px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
        {/* Subtle bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1a2a1b] to-transparent" />
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-200 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-[#080a08]/95 backdrop-blur-md"
          onClick={() => setOpen(false)}
        />
        <nav className="relative pt-20 px-6 flex flex-col">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-4 text-xl font-semibold text-white border-b border-[#1a2a1b]"
              style={{
                transform: open ? "translateY(0)" : "translateY(-10px)",
                opacity: open ? 1 : 0,
                transition: `transform 300ms ${i * 40}ms, opacity 300ms ${i * 40}ms`,
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={ctaLink}
            onClick={() => setOpen(false)}
            className="mt-8 w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0a1a0a] via-[#143d1a] to-[#1a5c25] border border-[#2a5a2a] px-6 py-4 text-base font-bold text-white"
            style={{
              transform: open ? "translateY(0)" : "translateY(-10px)",
              opacity: open ? 1 : 0,
              transition: `transform 300ms ${LINKS.length * 40}ms, opacity 300ms ${LINKS.length * 40}ms`,
            }}
          >
            VSTOUPIT ZA 990 KČ
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="#4ade80"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </nav>
      </div>

      {/* Sticky bottom CTA (mobile only, appears after scroll) */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-30 md:hidden px-4 pb-4 pt-6 bg-gradient-to-t from-[#080a08] via-[#080a08]/95 to-transparent transition-all duration-300 ${
          showStickyCta && !open
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <a
          href={ctaLink}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0a1a0a] via-[#143d1a] to-[#1a5c25] border border-[#2a5a2a] px-6 py-4 text-[15px] font-bold text-white shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
        >
          VSTOUPIT DO PROJEKTU ZA 990 KČ
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="#4ade80"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </>
  );
}
