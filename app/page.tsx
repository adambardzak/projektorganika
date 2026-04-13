import { Header } from "./Header";
import { StickyCta } from "./StickyCta";
import { CaseStudiesCarousel } from "./CaseStudiesCarousel";
import { Wordmark } from "./Wordmark";
import { ScrollReveal } from "./ScrollReveal";

export default function Home() {
  const CTA_LINK = "https://buy.stripe.com/00w28k0i6fn9esUaH5e3e00";

  const MOCKUP = "/img/grafika/mockup.webp";
  const RECENZE_1 = "/img/recenze/img-2755-1.webp";
  const RECENZE_2 = "/img/recenze/img-4563.webp";
  const RECENZE_3 = "/img/recenze/img-6931-1.webp";
  const RECENZE_4 = "/img/recenze/navrh-bez-nazvu-3.webp";
  const RECENZE_5 = "/img/recenze/recnze-5-prispevek-na-instagramu-4-5.webp";
  const RECENZE_6 = "/img/recenze/recenze-6.webp";
  const RECENZE_7 = "/img/recenze/snimek-obrazovky-2026-04-05-v-23-44-20.webp";

  return (
    <main id="top" className="min-h-screen overflow-x-hidden relative pb-20 md:pb-0">
      <Header />
      <StickyCta ctaLink={CTA_LINK} />
      <ScrollReveal />

      {/* ==================== HERO ==================== */}
      <section className="relative z-10 md:min-h-[100dvh] flex flex-col items-center md:justify-center px-5 md:px-6 pt-24 md:pt-28 pb-6 md:pb-20">
        <p
          data-reveal
          className="text-[#e2a84b] font-medium text-[12px] md:text-lg mb-2 md:mb-6 tracking-wide text-center"
        >
          Podnikáš ve zdraví a Instagram tě ignoruje?
        </p>

        <h1
          data-reveal
          data-reveal-delay="1"
          className="text-center max-w-[860px] font-bold leading-[1.05] tracking-tight text-[1.875rem] sm:text-[2.25rem] md:text-[3.75rem]"
        >
          Z 0 na <span className="text-[#4ade80]">10&nbsp;000+ sledujících</span> a{" "}
          <span className="text-[#4ade80]">20 klientů</span> za 40 dnů.
        </h1>

        <p
          data-reveal
          data-reveal-delay="2"
          className="mt-2 md:mt-6 text-center text-[14px] md:text-lg text-[#9cb89c] max-w-[560px] leading-snug"
        >
          3denní online trénink pro experty ve zdraví. Bez trendů, bez strašení — krok za krokem.
        </p>

        {/* Hero VSL Video */}
        <div data-reveal data-reveal-delay="3" className="mt-4 md:mt-10 w-full max-w-[720px] relative">
          <div className="absolute -inset-4 md:-inset-10 bg-[radial-gradient(ellipse_at_center,rgba(74,222,128,0.12)_0%,transparent_65%)] pointer-events-none anim-breathe" />
          <div className="relative rounded-xl md:rounded-2xl overflow-hidden border border-[#1a2a1b] bg-[#0e160f] shadow-[0_0_60px_rgba(74,222,128,0.08)]">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/vsl-poster.webp"
              className="w-full h-auto aspect-video"
            >
              <source src="/vsl.mp4" type="video/mp4" />
              Tvůj prohlížeč nepodporuje přehrávání videa.
            </video>
          </div>
        </div>

        {/* Social proof — author card + rating pill */}
        <div className="mt-4 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 md:gap-8">
          {/* Author card */}
          <div className="flex items-center gap-3">
            <img
              src="/img/maty.webp"
              alt="Matyáš Linda"
              className="w-11 h-11 md:w-14 md:h-14 rounded-full object-cover border border-[#1a2a1b] shrink-0"
            />
            <div className="min-w-0">
              <p className="flex items-center gap-1.5 text-white font-semibold text-[14px] md:text-base leading-tight">
                Matyáš Linda
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="shrink-0 md:w-[17px] md:h-[17px]"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="11" fill="#4ade80" />
                  <path
                    d="M7.5 12.5l3 3 6-6.5"
                    stroke="#0a120b"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </p>
              <p className="text-[12px] md:text-sm text-[#9cb89c] mt-0.5 leading-tight">
                Zakladatel Growmat Academy
              </p>
            </div>
          </div>

          {/* Experts pill — stars + avatars + count */}
          <div className="flex items-center gap-2 md:gap-2.5 rounded-full border border-[#1a2a1b] bg-[#0e160f]/60 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2">
            <div className="flex items-center gap-0.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <svg
                  key={i}
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="#e2a84b"
                  className="md:w-[14px] md:h-[14px]"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <div className="h-3.5 md:h-4 w-px bg-[#1a2a1b]" />
            <div className="flex -space-x-1.5">
              {[
                { src: "/img/experti/vermione.png", alt: "Vermione" },
                { src: "/img/experti/martin.png", alt: "Martin" },
                { src: "/img/experti/celiso.png", alt: "Celiso" },
              ].map((e, i) => (
                <img
                  key={i}
                  src={e.src}
                  alt={e.alt}
                  className="w-5 h-5 md:w-6 md:h-6 rounded-full object-cover border-[1.5px] border-[#0a120b] bg-[#0e160f]"
                />
              ))}
            </div>
            <span className="text-white font-semibold text-[12px] md:text-[14px]">
              50+ expertů
            </span>
          </div>
        </div>

        {/* Views sub-line */}
        <p className="mt-3 md:mt-5 text-[13px] md:text-base text-[#9cb89c]">
          <span className="text-white font-bold text-[15px] md:text-lg">30M+</span> organických zhlédnutí
        </p>

        <a
          href={CTA_LINK}
          data-reveal
          className="relative overflow-hidden anim-shimmer mt-4 md:mt-10 w-full md:w-auto flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0a1a0a] via-[#143d1a] to-[#1a5c25] border border-[#2a5a2a] px-6 md:px-8 py-4 text-[15px] md:text-lg font-bold text-white transition-all hover:from-[#0f220f] hover:via-[#1a4d20] hover:to-[#22702e] hover:shadow-[0_0_40px_rgba(74,222,128,0.15)] active:scale-[0.98]"
        >
          CHCI SYSTÉM ZA 990 KČ
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        <p className="mt-2.5 text-[10px] md:text-xs text-[#6b8a6b] flex items-center gap-2 md:gap-3">
          <span>🔒 Bezpečná platba</span><span>·</span><span>Okamžitý přístup</span><span>·</span><span>Doživotně</span>
        </p>
      </section>

      {/* ==================== BIG STATS STRIP ==================== */}
      <section className="relative z-10 py-10 md:py-16 border-y border-[#1a2a1b]/60 overflow-hidden">
        <div data-reveal className="max-w-[900px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { num: "6", label: "účtů z 0 na 10K+" },
            { num: "30M+", label: "organických zhlédnutí" },
            { num: "700+", label: "leadů za 6 měsíců" },
            { num: "0 Kč", label: "investováno do reklamy" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl md:text-5xl font-bold text-[#4ade80] tracking-tight">{s.num}</p>
              <p className="text-xs md:text-sm text-[#9cb89c] mt-1 md:mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== PAIN POINTS ==================== */}
      <section className="px-6 py-16 md:py-32">
        <div className="max-w-[600px] md:max-w-[1100px] mx-auto">
          <h2
            data-reveal
            className="font-bold leading-tight tracking-tight text-center mb-10 md:mb-16 text-2xl md:text-[2.5rem]"
          >
            Tohle znáš, že?
          </h2>

          <div data-reveal className="md:grid md:grid-cols-[1fr_1.2fr] md:gap-12 lg:gap-16 md:items-center">
            <img
              src="/sad.webp"
              alt=""
              className="w-full max-h-[300px] md:max-h-none md:aspect-[4/5] rounded-2xl mb-8 md:mb-0 object-cover"
            />

            <div className="space-y-5 md:space-y-7">
              <p className="text-[#c5d8c5] leading-[1.65] text-[15px] md:text-xl">
                <strong className="text-white">Máš v hlavě hromadu vědomostí</strong> — ale nedokážeš je dostat ven do formy, která na Instagramu funguje.
              </p>
              <p className="text-[#c5d8c5] leading-[1.65] text-[15px] md:text-xl">
                <strong className="text-white">Účty ve zdraví vypadají všechny stejně.</strong> Ty to tak dělat nechceš — ale nevíš, jak být svůj/svá a zároveň efektivní.
              </p>
              <p className="text-[#c5d8c5] leading-[1.65] text-[15px] md:text-xl">
                <strong className="text-white">Zkoušel/a jsi to po svém — a nic.</strong> Algoritmus tě ignoruje.
              </p>
              <p className="text-[#c5d8c5] leading-[1.65] text-[15px] md:text-xl">
                <strong className="text-white">Máš hromadu rad z kurzů.</strong> Čím víc rad, tím víc zmatku. A tím víc pochybuješ o sobě.
              </p>
            </div>
          </div>

          <div className="max-w-[700px] mx-auto mt-10 md:mt-16 py-6 md:py-8 border-t border-b border-[#1a2a1b]">
            <p className="text-center text-lg md:text-2xl font-semibold leading-snug">
              Problém nikdy nebyl v&nbsp;tom, co víš. Chyběl ti systém{" "}
              <span className="text-[#4ade80]">JAK</span> to sdílet.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== TRANSFORMATION ==================== */}
      <section className="px-6 py-16 md:py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,60,20,0.06)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-[600px] md:max-w-[1100px] mx-auto relative z-10">
          <h2
            data-reveal
            className="font-bold leading-tight tracking-tight text-center mb-8 md:mb-16 text-2xl md:text-[2.5rem]"
          >
            Tohle můžeš být <span className="text-[#4ade80]">TY:</span>
          </h2>

          <div data-reveal className="md:grid md:grid-cols-[1.2fr_1fr] md:gap-12 lg:gap-16 md:items-center">
            <img
              src="/happy.webp"
              alt=""
              className="w-full max-h-[300px] md:max-h-none md:aspect-[4/5] rounded-2xl mb-8 md:mb-0 object-cover md:order-2"
            />

            <div className="space-y-5 md:space-y-7 md:order-1">
              <p className="text-[#c5d8c5] leading-[1.65] text-[15px] md:text-xl">
                <strong className="text-white">Víš přesně, co tvořit</strong> — a proč to funguje.
              </p>
              <p className="text-[#c5d8c5] leading-[1.65] text-[15px] md:text-xl">
                <strong className="text-white">Sdílíš bez strachu</strong> — autenticky, po svém. A lidi reagují.
              </p>
              <p className="text-[#c5d8c5] leading-[1.65] text-[15px] md:text-xl">
                <strong className="text-white">Přibývá ti relevantní komunita</strong> — lidi, které tvoje téma baví.
              </p>
              <p className="text-[#c5d8c5] leading-[1.65] text-[15px] md:text-xl">
                <strong className="text-white">Klienti ti píšou sami.</strong> Nehoníš se za nimi. Profil to dělá za tebe.
              </p>
            </div>
          </div>

          <div className="max-w-[700px] mx-auto mt-10 md:mt-16 py-6 md:py-8 border-t border-b border-[#1a2a1b]">
            <p className="text-center text-lg md:text-2xl font-semibold leading-snug">
              Nejde jen o Instagram. Jde o to, abys přestal/a pochybovat o tom, co víš —{" "}
              <span className="text-[#4ade80]">a začal/a tím měnit životy.</span>
            </p>
          </div>

          <div className="max-w-[600px] md:max-w-[720px] mx-auto mt-16 md:mt-24 text-center">
            <h3
              data-reveal
              className="font-bold leading-tight tracking-tight text-xl md:text-[2rem]"
            >
              Převezmi ověřený &bdquo;Growmat&ldquo; systém.
            </h3>
            <p className="mt-5 md:mt-6 text-[#c5d8c5] text-[15px] md:text-lg leading-relaxed">
              3-fázový systém, který proměňuje <strong className="text-white">neviditelné experty v autority se stabilním přísunem klientů.</strong>
            </p>

            <div data-reveal className="mt-10 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0 border-y border-[#1a2a1b]/60 py-10 md:py-12">
              {[
                {
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="6" y="2" width="12" height="20" rx="2.5" />
                      <path d="M10 18h4" />
                    </svg>
                  ),
                  title: "Jen telefon",
                  sub: "Bez mravenčí práce",
                },
                {
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9.5" />
                      <path d="M12 7v5l3.5 2" />
                    </svg>
                  ),
                  title: "Hodina denně",
                  sub: "Vejde se do dne",
                },
                {
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="6" width="20" height="12" rx="2" />
                      <circle cx="12" cy="12" r="2.2" />
                      <path d="M5.5 12h.01M18.5 12h.01" />
                    </svg>
                  ),
                  title: "0 Kč reklama",
                  sub: "Jen organický dosah",
                },
                {
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2L3 14h8l-1 8 11-13h-8l0-7z" />
                    </svg>
                  ),
                  title: "Od nuly rychle",
                  sub: "Žádné měsíce čekání",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center text-center px-2 md:px-5 ${
                    i > 0 ? "md:border-l md:border-[#1a2a1b]/60" : ""
                  }`}
                >
                  <div className="text-[#4ade80] mb-4 md:mb-5">{item.icon}</div>
                  <p className="font-semibold text-white text-[14px] md:text-[15px] leading-tight tracking-tight">
                    {item.title}
                  </p>
                  <p className="text-[#6b8a6b] text-[12px] md:text-[13px] mt-1.5 leading-tight">
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>

            <a
              href={CTA_LINK}
              className="mt-8 md:mt-12 w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0a1a0a] via-[#143d1a] to-[#1a5c25] border border-[#2a5a2a] px-6 md:px-8 py-4 text-base md:text-lg font-bold text-white transition-all hover:from-[#0f220f] hover:via-[#1a4d20] hover:to-[#22702e] hover:shadow-[0_0_40px_rgba(74,222,128,0.15)] active:scale-[0.98]"
            >
              CHCI SYSTÉM — 990 KČ
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ==================== 3 DAY BREAKDOWN ==================== */}
      <section id="jak-to-funguje" className="px-6 py-16 md:py-32">
        <div className="max-w-[600px] md:max-w-[820px] mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <div className="text-xs font-medium tracking-widest text-[#4ade80] uppercase mb-3">Co získáš</div>
            <h2
              data-reveal
              className="font-bold leading-tight tracking-tight text-2xl md:text-[2.5rem]"
            >
              3 dny, 3 jasné výstupy.
            </h2>
          </div>

          {/* Course content preview */}
          <div data-reveal className="mb-12 md:mb-16 relative">
            <div className="absolute -inset-4 md:-inset-10 bg-[radial-gradient(ellipse_at_center,rgba(74,222,128,0.08)_0%,transparent_65%)] pointer-events-none anim-breathe" />
            <img
              src={MOCKUP}
              alt="Ukázka obsahu tréninku Projekt Organika"
              className="relative w-full h-auto rounded-xl md:rounded-2xl"
            />
          </div>

          <div className="flex flex-col items-center">
            {[
              {
                num: "01",
                day: "Den 1",
                value: "3 990 Kč",
                title: "Profil, ze kterého je jasné, proč jsi autorita",
                subtitle: 'Návštěvník do 3 sekund ví: „Tohle je ten, koho hledám."',
                bullets: [
                  <>Bio, popisek a vizuální identita — <strong className="text-white">přesná struktura 10K+ účtů</strong></>,
                  <>Highlights a úvodní příspěvky</>,
                  <><strong className="text-white">Hotový profesionální profil</strong> na konci dne</>,
                ],
              },
              {
                num: "02",
                day: "Den 2",
                value: "4 990 Kč",
                title: "Jak dostat myšlenku z hlavy do obsahu, který lidi zajímá",
                subtitle: "Natočíš svůj 1. úspěšný příspěvek — dnes.",
                bullets: [
                  <>Ověřený systém tvorby obsahu, který <strong className="text-white">přivádí klienty</strong></>,
                  <><strong className="text-white">3 formáty</strong> co fungují ve zdraví — bez šaškování na kameru</>,
                  <>První hotový příspěvek připravený k publikaci</>,
                ],
              },
              {
                num: "03",
                day: "Den 3",
                value: "5 990 Kč",
                title: "Kompletní mapa od 0 po stabilní příjem",
                subtitle: "3-fázový Growmat systém — 1–2 hodiny denně.",
                bullets: [
                  <><strong className="text-white">Fáze 1: Viditelnost</strong> — prvních pár set sledujících</>,
                  <><strong className="text-white">Fáze 2: Důvěra</strong> — komunita, která ti věří</>,
                  <><strong className="text-white">Fáze 3: Klienti</strong> + plán na 2 týdny dopředu</>,
                ],
              },
            ].map((d, i) => (
              <div
                key={d.num}
                data-reveal
                data-reveal-delay={String(i + 1)}
                className="w-full flex flex-col items-center"
              >
                <span className="text-3xl md:text-4xl font-bold text-[#4ade80]/20 mb-3">{d.num}</span>

                <div className="w-full rounded-2xl border border-[#1a2a1b] bg-[#0e160f] p-5 md:p-8">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[10px] md:text-xs text-[#4ade80] font-medium tracking-wider uppercase">{d.day}</p>
                    <p className="text-[10px] md:text-xs text-[#6b8a6b] italic">hodnota: {d.value}</p>
                  </div>
                  <h3 className="font-bold text-base md:text-xl mb-3 leading-tight">{d.title}</h3>
                  <p className="text-[#e2a84b] font-medium text-xs md:text-sm mb-4 md:mb-5">{d.subtitle}</p>
                  <ul className="space-y-2 md:space-y-2.5">
                    {d.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-[#c5d8c5] leading-relaxed text-[14px] md:text-[15px]">
                        <span className="text-[#4ade80] mt-1 shrink-0">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {i < 2 && <div className="w-px h-6 md:h-8 bg-[#4ade80]/20" />}
              </div>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-10">
            <a
              href={CTA_LINK}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0a1a0a] via-[#143d1a] to-[#1a5c25] border border-[#2a5a2a] px-6 md:px-8 py-4 text-base md:text-lg font-bold text-white transition-all hover:from-[#0f220f] hover:via-[#1a4d20] hover:to-[#22702e] hover:shadow-[0_0_40px_rgba(74,222,128,0.15)] active:scale-[0.98]"
            >
              CHCI SYSTÉM — 990 KČ
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ==================== BONUSES ==================== */}
      <section id="bonusy" className="px-6 py-16 md:py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(20,60,20,0.05)_0%,transparent_50%)] pointer-events-none" />
        <div className="max-w-[600px] md:max-w-[820px] mx-auto relative z-10">
          <h2
            data-reveal
            className="font-bold leading-tight tracking-tight text-center mb-3 text-2xl md:text-[2.5rem]"
          >
            + 7 bonusů navíc
          </h2>
          <p
            data-reveal
            data-reveal-delay="1"
            className="text-center text-[15px] md:text-lg text-[#9cb89c] mb-10 md:mb-14"
          >
            Vše je součástí Projektu Organika.
          </p>

          <div data-reveal className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {[
              {
                n: "01",
                value: "4 990 Kč",
                title: "5 ověřených šablon úspěšných příspěvků",
                text: "Od hooku po CTA. Za 15 minut vytvoříš svůj první příspěvek.",
              },
              {
                n: "02",
                value: "3 990 Kč",
                title: "Rozbor 5 virálních videí s miliony zhlédnutí",
                text: "Ukážu ti přesně, proč to funguje — ne jen že to funguje.",
              },
              {
                n: "03",
                value: "4 990 Kč",
                title: "3 případové studie klientů",
                text: "3 klienti. 3 obory. 1 systém. Reálné screenshoty, čísla a kroky.",
              },
              {
                n: "04",
                value: "2 990 Kč",
                title: "Uzavřená komunita na Circle",
                text: "Ptej se na cokoliv. Odpovědi od člověka, co vybudoval 6 účtů z nuly.",
              },
              {
                n: "05",
                value: "4 990 Kč",
                title: "Osobní zpětná vazba na úkoly",
                text: "Odevzdáš úkol, dostaneš osobní feedback — co funguje, co upravit.",
              },
              {
                n: "06",
                value: "10 000 Kč",
                title: "Sleva 10 000 Kč do Growmat Academy",
                text: "Dokonči trénink a odemkni zvýhodněný vstup do 55-lekcového programu.",
              },
              {
                n: "07",
                value: "5 000 Kč",
                title: "Šance na 1:1 Mentoring zdarma",
                text: "60 minut mentoringu. Dokonči úkoly a kvalifikuješ se.",
              },
            ].map((b) => (
              <div key={b.n} className="rounded-2xl border border-[#1a2a1b] bg-[#0e160f] p-5 md:p-6 flex gap-4">
                <span className="shrink-0 text-3xl md:text-4xl font-bold text-[#4ade80]/15 leading-none mt-1">{b.n}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-2 mb-1.5">
                    <span className="text-[10px] md:text-xs tracking-wider uppercase text-[#4ade80] font-medium">🎁 Bonus</span>
                    <span className="text-[10px] md:text-xs text-[#6b8a6b] italic shrink-0">{b.value}</span>
                  </div>
                  <h3 className="font-bold text-[15px] md:text-base leading-tight mb-2">{b.title}</h3>
                  <p className="text-[#c5d8c5] leading-relaxed text-[13px] md:text-sm">{b.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Value summary */}
          <div className="mt-8 md:mt-10 text-center py-5 md:py-6 border-t border-b border-[#1a2a1b]">
            <p className="text-[15px] md:text-lg text-[#9cb89c]">
              Hodnota bonusů: <strong className="text-white">36 950 Kč.</strong> Tvoje cena:{" "}
              <strong className="text-[#4ade80] text-xl md:text-2xl">0 Kč</strong>
            </p>
          </div>

          <div className="text-center mt-6 md:mt-8">
            <a
              href={CTA_LINK}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0a1a0a] via-[#143d1a] to-[#1a5c25] border border-[#2a5a2a] px-6 md:px-8 py-4 text-base md:text-lg font-bold text-white transition-all hover:from-[#0f220f] hover:via-[#1a4d20] hover:to-[#22702e] hover:shadow-[0_0_40px_rgba(74,222,128,0.15)] active:scale-[0.98]"
            >
              CHCI VŠE ZA 990 KČ
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ==================== SOCIAL PROOF ==================== */}
      <section id="recenze" className="px-4 md:px-6 py-16 md:py-32">
        <div className="max-w-[900px] mx-auto">
          <h2
            data-reveal
            className="font-bold leading-tight tracking-tight text-center mb-3 text-2xl md:text-[2.5rem]"
          >
            Tohle nejsou sliby.
          </h2>
          <p
            data-reveal
            data-reveal-delay="1"
            className="text-center text-lg md:text-2xl font-semibold text-[#4ade80] mb-8 md:mb-12"
          >
            Tohle jsou čísla.
          </p>

          {/* Text testimonials */}
          <div data-reveal className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {[RECENZE_1, RECENZE_2, RECENZE_3, RECENZE_4, RECENZE_5, RECENZE_6, RECENZE_7].map((src, i) => (
              <img
                key={i}
                src={src}
                loading="lazy"
                alt={`Recenze ${i + 1}`}
                className="rounded-xl w-full border border-[#1a2a1b] bg-[#0e160f]"
              />
            ))}
          </div>
        </div>

        <div className="max-w-[900px] mx-auto mt-12 md:mt-20 text-center py-6 md:py-8 border-t border-[#1a2a1b]">
          <p className="text-2xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            6 účtů z 0 na 10K+. 30 000 000+ zhlédnutí.
          </p>
          <p className="text-base md:text-lg text-[#9cb89c] mt-2">
            Stovky klientů pro mé klienty. <span className="text-[#4ade80]">0 Kč do reklamy.</span>
          </p>
        </div>
      </section>

      {/* ==================== CASE STUDIES ==================== */}
      <section id="case-studies" className="py-16 md:py-32">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10 md:mb-16 px-4 md:px-6">
            <div className="text-xs font-medium tracking-widest text-[#4ade80] uppercase mb-3">
              Případové studie
            </div>
            <h2
              data-reveal
              className="font-bold leading-tight tracking-tight text-2xl md:text-[2.5rem]"
            >
              Jak to vypadá v praxi
            </h2>
          </div>

          <CaseStudiesCarousel
            cases={[
              {
                before: "/img/case-studies/vermione-pred.webp",
                after: "/img/case-studies/vermione-po.webp",
                handle: "@vermionekremy",
                result: "Z 0 na 13K+ sledujících",
              },
              {
                before: "/img/case-studies/celiso-pred.webp",
                after: "/img/case-studies/celiso-po-1.webp",
                handle: "@celiso.cz",
                result: "30 000+ sledujících za 3 měsíce",
              },
              {
                before: "/img/case-studies/martin-pred.webp",
                after: "/img/case-studies/martin-po.webp",
                handle: "@jidlosmartinem",
                result: "Z 0 na 17K+ sledujících",
              },
              {
                before: "/img/case-studies/gabi-pred.webp",
                after: "/img/case-studies/gabi-po.webp",
                handle: "@zmenasgabi",
                result: "z 0 na 4K+ sledujících",
              },
              {
                before: "/img/case-studies/mitolife-pred.webp",
                after: "/img/case-studies/mito-po.webp",
                handle: "@mitolife_cz",
                result: "45 000+ sledujících",
              },
              {
                before: "/img/case-studies/sober-pred-1-1.webp",
                after: "/img/case-studies/sober-boys-po.webp",
                handle: "@soberboys.podcast",
                result: "Z 0 na 15K+ sledujících",
              },
              {
                before: "/img/case-studies/socialmaty-pred-1.webp",
                after: "/img/case-studies/maty-po.webp",
                handle: "@socialmaty",
                result: "Z 0 na 13K+ sledujících",
              },
              {
                after: "/img/case-studies/marie-po.webp",
                handle: "@zijulip",
              },
              {
                after: "/img/case-studies/vasek-po.webp",
                handle: "@vasekjindrich",
              },
            ]}
          />
        </div>
      </section>

      {/* ==================== ABOUT / BIO ==================== */}
      <section id="o-mne" className="px-6 py-16 md:py-32">
        <div className="max-w-[600px] md:max-w-[800px] mx-auto">
          <div className="text-xs font-medium tracking-widest text-[#4ade80] uppercase mb-4">Kdo za tím stojí?</div>

          <img data-reveal src="/img/maty.webp" alt="Matyáš Linda" className="w-full md:float-left md:w-56 md:mr-8 md:mb-4 rounded-2xl mb-6 object-cover object-[center_20%] max-h-[300px] md:max-h-[320px]" />

          <h2 data-reveal data-reveal-delay="1" className="flex items-center gap-2.5 font-bold text-2xl md:text-3xl mb-2">
            Matyáš Linda
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              className="shrink-0 md:w-6 md:h-6"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="11" fill="#4ade80" />
              <path
                d="M7.5 12.5l3 3 6-6.5"
                stroke="#0a120b"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </h2>
          <p className="text-[#4ade80] font-medium text-sm md:text-base mb-3 md:mb-4">
            Expert na sociální sítě ve zdraví
          </p>

          <a
            href="https://instagram.com/socialmaty"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mb-5 md:mb-6 px-3.5 py-2 rounded-full border border-[#1a2a1b] bg-[#0e160f]/60 hover:border-[#2a4a2a] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            <span className="text-white font-semibold text-[13px] md:text-sm">@socialmaty</span>
            <span className="text-[#6b8a6b] text-[12px] md:text-[13px]">· sleduj na Instagramu</span>
          </a>

          <div className="space-y-4 text-[#c5d8c5] leading-relaxed text-[15px] md:text-lg">
            <p>
              Před dvěma lety mi obchodní partner vzal všechno — podcastové účty s 30&nbsp;000 sledujícími. Ze dne na den jsem stál na nule. S&nbsp;dluhy. Bez příjmu.
            </p>
            <p>
              Začal jsem znovu. Vzal jsem všechno, co jsem se naučil o sociálních sítích, a začal systematicky budovat profily pro experty ve zdraví.
            </p>
            <p className="text-white font-medium">
              Za poslední rok: 6 účtů z nuly na 10 000+ sledujících. 30 milionů organických zhlédnutí. Desítky klientů pro každého. 0 Kč do reklamy.
            </p>
          </div>

          <div className="mt-8 md:mt-10 pl-4 md:pl-6 border-l-2 border-[#4ade80]/40">
            <p className="text-[#4ade80] font-medium italic text-base md:text-lg">
              Tvoje znalosti mohou lidem měnit životy. Chybí ti jen systém, aby se o nich svět dozvěděl.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== PRICING ==================== */}
      <section id="platba" className="px-6 py-16 md:py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(74,222,128,0.04)_0%,transparent_50%)] pointer-events-none" />
        <div className="max-w-[500px] md:max-w-[720px] mx-auto relative z-10">
          <div className="text-center">
            <div className="text-xs font-medium tracking-widest text-[#4ade80] uppercase mb-4">Tvoje investice</div>
            <p className="text-[#9cb89c] text-[14px] md:text-base leading-relaxed">
              Kouč na Instagram: 5 000–15 000 Kč / hodinu. Agentura: 20 000+ Kč / měsíc.{" "}
              <span className="text-white">A většina z nich nemá ani zlomek těchto výsledků.</span>
            </p>
          </div>

          {/* Value breakdown */}
          <div data-reveal className="mt-8 md:mt-10 rounded-2xl border border-[#1a2a1b] bg-[#0e160f] p-5 md:p-8">
            <p className="text-[10px] md:text-xs tracking-wider uppercase text-[#4ade80] font-medium mb-4">
              3denní trénink · 14 970 Kč
            </p>
            <ul className="space-y-2.5 md:space-y-3">
              {[
                { t: "Den 1 — Profil autority", v: "3 990 Kč" },
                { t: "Den 2 — Obsah, který prodává", v: "4 990 Kč" },
                { t: "Den 3 — Kompletní mapa od 0 po příjem", v: "5 990 Kč" },
              ].map((item, i) => (
                <li key={i} className="flex items-start justify-between gap-3 text-[13px] md:text-[15px]">
                  <span className="text-[#c5d8c5] flex items-start gap-2">
                    <span className="text-[#4ade80] mt-0.5 shrink-0">✓</span>
                    <span>{item.t}</span>
                  </span>
                  <span className="text-[#6b8a6b] shrink-0 tabular-nums">{item.v}</span>
                </li>
              ))}
            </ul>

            <div className="my-5 md:my-6 h-px bg-[#1a2a1b]" />

            <p className="text-[10px] md:text-xs tracking-wider uppercase text-[#4ade80] font-medium mb-4">
              Bonusy · 36 950 Kč
            </p>
            <ul className="space-y-2.5 md:space-y-3">
              {[
                { t: "5 šablon úspěšných příspěvků", v: "4 990 Kč" },
                { t: "Rozbor 5 virálních videí", v: "3 990 Kč" },
                { t: "3 případové studie klientů", v: "4 990 Kč" },
                { t: "Uzavřená komunita na Circle", v: "2 990 Kč" },
                { t: "Osobní zpětná vazba na úkoly", v: "4 990 Kč" },
                { t: "Sleva do Growmat Academy", v: "10 000 Kč" },
                { t: "Šance na 1:1 Mentoring", v: "5 000 Kč" },
              ].map((item, i) => (
                <li key={i} className="flex items-start justify-between gap-3 text-[13px] md:text-[15px]">
                  <span className="text-[#c5d8c5] flex items-start gap-2">
                    <span className="text-[#4ade80] mt-0.5 shrink-0">🎁</span>
                    <span>{item.t}</span>
                  </span>
                  <span className="text-[#6b8a6b] shrink-0 tabular-nums">{item.v}</span>
                </li>
              ))}
            </ul>

            <div className="my-5 md:my-6 h-px bg-[#1a2a1b]" />

            <div className="flex items-center justify-between text-sm md:text-base">
              <span className="text-[#9cb89c]">Celková hodnota:</span>
              <span className="text-[#6b8a6b] line-through text-lg md:text-2xl tabular-nums">51 920 Kč</span>
            </div>
          </div>

          {/* Price card */}
          <div data-reveal data-reveal-delay="1" className="mt-6 md:mt-8 rounded-2xl border border-[#4ade80]/30 bg-[#0e160f] p-6 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4ade80]/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4ade80]/20 to-transparent" />

            <p className="text-[#4ade80] text-xs md:text-sm font-medium tracking-wider uppercase">Dnes pouze</p>
            <p className="text-5xl md:text-7xl font-bold text-white mt-1">990 Kč</p>

            <p className="mt-5 md:mt-6 text-[#c5d8c5] text-sm md:text-base leading-relaxed max-w-[420px] mx-auto">
              Pokud ti trénink nepřinese alespoň 3 konkrétní &bdquo;aha momenty&ldquo;,{" "}
              <strong className="text-white">vrátím ti peníze.</strong> Bez otázek.
            </p>

            <div className="mt-5 md:mt-8 py-3 px-4 md:py-4 md:px-6 rounded-xl bg-[#141e15]/50 border border-[#1a2a1b]/50 inline-block">
              <p className="text-[#e2a84b] font-medium text-sm md:text-base">
                ⏰ 990 Kč jen pro prvních 100 lidí. Pak 1 990 Kč.
              </p>
            </div>

            <div className="mt-5 md:mt-8">
              <a
                href={CTA_LINK}
                className="relative overflow-hidden anim-shimmer w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0a1a0a] via-[#143d1a] to-[#1a5c25] border border-[#2a5a2a] px-6 py-4 md:px-10 md:py-5 text-lg md:text-xl font-bold text-white transition-all hover:from-[#0f220f] hover:via-[#1a4d20] hover:to-[#22702e] hover:shadow-[0_0_40px_rgba(74,222,128,0.15)] active:scale-[0.98]"
              >
                VSTOUPIT ZA 990 KČ
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            <p className="mt-3 text-[11px] md:text-xs text-[#6b8a6b] flex items-center justify-center gap-2 md:gap-3">
              <span>🔒 Bezpečná platba</span><span>·</span><span>Okamžitý přístup</span><span>·</span><span>Doživotní členství</span>
            </p>
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section id="faq" className="px-6 py-16 md:py-32">
        <div className="max-w-[600px] md:max-w-[700px] mx-auto">
          <h2
            data-reveal
            className="font-bold leading-tight tracking-tight text-center mb-8 md:mb-14 text-2xl md:text-[2.5rem]"
          >
            Nejčastější otázky
          </h2>

          <div data-reveal data-reveal-delay="1" className="divide-y divide-[#1a2a1b]">
            {[
              {
                q: "Čím je tohle jiné od jiných kurzů?",
                a: "Většina kurzů ti naloží další informace. Ty jich ale máš až moc. Projekt Organika ti dá jednoduchý ověřený systém — přesně co sdílet, jak a proč to funguje. Méně přemýšlení, víc výsledků.",
              },
              {
                q: "Nemám zkušenosti s natáčením — zvládnu to?",
                a: "Ano. Systém funguje i bez mluvení na kameru. Stačí telefon a 15 minut denně. Navíc dostaneš 5 hotových šablon, které tě provedou tvorbou prvního příspěvku krok za krokem.",
              },
              {
                q: "Funguje to, i když chci být autentický/á a nestrašit lidi?",
                a: "Přesně na tohle je Growmat systém postavený. Žádné trendy, žádný clickbait. Vezmeš svoje myšlenky — tak jak jsou — a zpracuješ je do formy, která přitahuje správné lidi. Všech 6 účtů rostlo autenticky.",
              },
              {
                q: "Kolik času mě to zabere?",
                a: "Trénink je 3 dny. Systém je navržený na 1–2 hodiny denně. Každá lekce má jasný výstup, který dokončíš do konce dne.",
              },
              {
                q: "Už mám web a klienty z doporučení — k čemu mi to bude?",
                a: "Web čeká, až ho někdo najde. Instagram aktivně přivádí lidi k tobě. Stabilní a předvídatelný kanál, který pracuje pro tebe i když spíš.",
              },
              {
                q: "Co když to u mě nebude fungovat?",
                a: "Systém fungoval u 6 různých účtů v různých zdravotních oborech. Pokud ti trénink nepřinese alespoň 3 konkrétní „aha momenty\", vrátím ti peníze. Bez otázek.",
              },
              {
                q: "Je to jen pro zdraví? Jak dlouho mám přístup?",
                a: "Ano, jen pro oblast zdraví (fyzické, mentální, celostní). Přístup je doživotní — zaplatíš jednou a máš navždy i budoucí aktualizace.",
              },
            ].map((faq, i) => (
              <details key={i} className="group py-5 md:py-6 cursor-pointer">
                <summary className="flex items-center justify-between gap-3 list-none font-semibold text-[15px] md:text-lg text-white hover:text-[#4ade80] transition-colors">
                  {faq.q}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 transition-transform group-open:rotate-45">
                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </summary>
                <p className="mt-3 text-[#9cb89c] leading-relaxed text-sm md:text-base pr-6">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="px-6 py-16 md:py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(74,222,128,0.03)_0%,transparent_50%)] pointer-events-none" />
        <div className="max-w-[500px] md:max-w-[700px] mx-auto relative z-10 text-center">
          <h2 data-reveal className="font-bold leading-tight tracking-tight mb-6 md:mb-8 text-xl md:text-[2rem]">
            Máš 2 možnosti:
          </h2>

          <div data-reveal data-reveal-delay="1" className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 text-left mb-8 md:mb-12">
            <div className="rounded-xl border border-[#1a2a1b] bg-[#0e160f] p-5 md:p-6">
              <p className="text-xs text-[#6b8a6b] font-medium mb-2">Možnost 1</p>
              <p className="text-[#9cb89c] leading-relaxed text-sm md:text-base">
                Zavřeš stránku. Za rok budeš hledat další kurz, další strategii — a stále cítit, že Instagram je proti tobě.
              </p>
            </div>
            <div className="rounded-xl border border-[#4ade80]/30 bg-[#0e160f] p-5 md:p-6">
              <p className="text-xs text-[#4ade80] font-medium mb-2">Možnost 2</p>
              <p className="text-[#c5d8c5] leading-relaxed text-sm md:text-base">
                Vstoupíš. Za 3 dny budeš vědět jak. Za měsíc první sledující. Za rok budeš ta autorita, za kterou si lidi chodí.
              </p>
            </div>
          </div>

          <div className="w-12 h-px bg-[#4ade80]/40 mx-auto mb-6 md:mb-8" />

          <h3
            data-reveal
            className="font-bold leading-tight mb-8 md:mb-10 text-lg md:text-[2rem]"
          >
            Tvoje expertiza si zaslouží být vidět.{" "}
            <span className="text-[#4ade80]">Dej jí systém.</span>
          </h3>

          <a
            href={CTA_LINK}
            data-reveal
            data-reveal-delay="1"
            className="relative overflow-hidden anim-shimmer w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0a1a0a] via-[#143d1a] to-[#1a5c25] border border-[#2a5a2a] px-6 md:px-10 py-4 md:py-5 text-lg md:text-xl font-bold text-white transition-all hover:from-[#0f220f] hover:via-[#1a4d20] hover:to-[#22702e] hover:shadow-[0_0_40px_rgba(74,222,128,0.15)] active:scale-[0.98]"
          >
            ZAČÍT TEĎ ZA 990 KČ
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <p className="mt-3 text-[11px] md:text-xs text-[#6b8a6b] flex items-center justify-center gap-2 md:gap-3">
            <span>🔒 Bezpečná platba</span><span>·</span><span>Okamžitý přístup</span><span>·</span><span>Doživotní členství</span>
          </p>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="px-6 py-12 md:py-16 border-t border-[#1a2a1b]">
        <div className="max-w-[500px] md:max-w-[640px] mx-auto text-center">
          <p className="text-[#9cb89c] leading-relaxed text-sm md:text-base">
            <strong className="text-white">P.S.</strong> 990 Kč platí jen pro prvních 100 míst. Pak 1 990 Kč. @celiso.cz má dnes 30&nbsp;000+ sledujících. Jediný rozdíl mezi ním a tebou? On ten systém už má.
          </p>

          <Wordmark size="sm" className="mt-8 opacity-60" />

          <p className="mt-4 text-[10px] md:text-xs text-[#1a2a1b]">
            &copy; {new Date().getFullYear()} Projekt Organika™ &middot; Growmat Academy
          </p>

          <a
            href="https://appitect.eu"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-[10px] md:text-xs text-[#6b8a6b]/40 hover:text-[#6b8a6b]/70 transition-colors"
          >
            Made by Appitect
          </a>
        </div>
      </footer>
    </main>
  );
}
