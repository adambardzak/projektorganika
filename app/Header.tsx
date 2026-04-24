"use client";

import { useEffect, useState } from "react";
import { Wordmark } from "./Wordmark";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#080a08]/75 border-b border-[#1a2a1b]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="h-8 md:h-9 border-b border-[#1a2a1b] bg-[#0d120d]/90 backdrop-blur-xl flex items-center justify-center px-3">
        <p className="text-center text-[#e2a84b] font-semibold text-[10px] md:text-xs tracking-wide uppercase leading-tight">
          ⚠️ Pozor: Kapacita zdarma je omezená! (zbývá 100 míst)
        </p>
      </div>
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-center">
        <a href="#top" className="shrink-0" aria-label="Projekt Organika">
          <Wordmark />
        </a>
      </div>
    </header>
  );
}
