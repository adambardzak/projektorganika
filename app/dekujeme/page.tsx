"use client";

import { useEffect } from "react";
import Link from "next/link";
import { track } from "@vercel/analytics";

export default function ThankYouPage() {
  useEffect(() => {
    track("purchase", { currency: "CZK", value: 990 });

    if (typeof window.fbq === "function") {
      window.fbq("track", "Purchase", {
        currency: "CZK",
        value: 990,
      });
    }

    if (typeof window.gtag === "function") {
      window.gtag("event", "purchase", {
        currency: "CZK",
        value: 990,
      });
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#0b140c] text-white px-6 py-20 flex items-center justify-center">
      <section className="w-full max-w-[760px] rounded-2xl border border-[#1f3621] bg-[#0f1c11] p-8 md:p-12 text-center">
        <img
          src="/img/grafika/mockup.webp"
          alt="Projekt Organika mockup"
          className="mx-auto mb-6 w-full max-w-[420px] rounded-xl border border-[#244226] bg-[#0b140c]"
        />

        <p className="text-[#4ade80] font-semibold tracking-wide text-sm">OBJEDNÁVKA DOKONČENA</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">Děkujeme za nákup</h1>
        <p className="mt-4 text-[#b9cdb9] text-base md:text-lg leading-relaxed">
          Platba proběhla úspěšně. Přístupové údaje ti dorazí na e-mail během několika minut.
        </p>

        <Link
          href="https://growmatacademy.circle.so/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#0a1a0a] via-[#143d1a] to-[#1a5c25] border border-[#2a5a2a] px-6 py-3 font-semibold text-white hover:from-[#0f220f] hover:via-[#1a4d20] hover:to-[#22702e] transition-all"
        >
          Vstoupit do Projektu Organika
        </Link>
      </section>
    </main>
  );
}
