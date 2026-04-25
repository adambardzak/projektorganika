import type { Metadata } from "next";
import { Header } from "../Header";
import { StickyCta } from "../StickyCta";

export const metadata: Metadata = {
  title: "Zásady ochrany osobních údajů — Projekt Organika™",
  robots: { index: false, follow: true },
};

const CTA_LINK = "https://growmatacademy.circle.so/sign_up";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen pb-20 md:pb-0">
      <Header />
      <StickyCta ctaLink={CTA_LINK} />

      <section className="px-5 md:px-6 pt-28 md:pt-36 pb-20 max-w-[760px] mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
          Zásady ochrany osobních údajů
        </h1>
        <p className="text-sm text-[#7a8a7a] mb-10">
          Poslední aktualizace: 13. dubna 2026
        </p>

        <div className="space-y-8 text-[#c8d6c8] leading-relaxed">
          <p>
            Tyto zásady popisují, jak zpracováváme osobní údaje návštěvníků
            stránky <strong>projektorganika.cz</strong> v souladu s nařízením
            GDPR (EU 2016/679) a zákonem č. 110/2019 Sb.
          </p>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              1. Správce osobních údajů
            </h2>
            <p>
              <strong>Matyáš Linda</strong>
              <br />
              IČO: 14275589
              <br />
              Sídlo: Velké Popovice 502, 251 69 Velké Popovice
              <br />
              Email: linmat.7@gmail.com
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              2. Jaké údaje zpracováváme
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Fakturační údaje</strong> při koupi produktu (jméno,
                e-mail, adresa) — prostřednictvím platební brány Stripe.
              </li>
              <li>
                <strong>Analytická data</strong> o návštěvnosti stránky (IP
                adresa, prohlížeč, zdroj návštěvy, chování na stránce).
              </li>
              <li>
                <strong>Cookies a reklamní identifikátory</strong> pro měření
                konverzí reklam (Meta Pixel, Google Analytics) — pouze s tvým
                souhlasem.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              3. Právní základ zpracování
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Plnění smlouvy</strong> (čl. 6 odst. 1 písm. b) GDPR) —
                zpracování objednávky a přístup do produktu.
              </li>
              <li>
                <strong>Oprávněný zájem</strong> (čl. 6 odst. 1 písm. f) GDPR) —
                základní analytika návštěvnosti, zabezpečení stránky.
              </li>
              <li>
                <strong>Souhlas</strong> (čl. 6 odst. 1 písm. a) GDPR) — cookies
                pro marketingové a analytické účely.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              4. Cookies a tracking
            </h2>
            <p>
              Na stránce používáme nezbytné cookies (pro fungování), a po udělení
              souhlasu také analytické a marketingové cookies třetích stran.
              Svůj souhlas můžeš kdykoliv odvolat smazáním cookies ve svém
              prohlížeči.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">5. Tvoje práva</h2>
            <p>Podle GDPR máš právo:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>na přístup ke svým osobním údajům</li>
              <li>na opravu nepřesných údajů</li>
              <li>na výmaz údajů („právo být zapomenut")</li>
              <li>na omezení zpracování</li>
              <li>na přenositelnost údajů</li>
              <li>vznést námitku proti zpracování</li>
              <li>
                podat stížnost u Úřadu pro ochranu osobních údajů (
                <a
                  href="https://www.uoou.cz"
                  className="underline text-[#9cb89c] hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  uoou.cz
                </a>
                )
              </li>
            </ul>
            <p>Pro uplatnění práv nás kontaktuj na linmat.7@gmail.com.</p>
          </section>
        </div>
      </section>
    </main>
  );
}
