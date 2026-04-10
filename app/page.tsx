import { Navbar } from "./Navbar";

export default function Home() {
  const CTA_LINK = "https://buy.stripe.com/00w28k0i6fn9esUaH5e3e00";

  const MOCKUP = "/LANDING%20PAGE%20GRAFIKA/MOCKUP.png";
  const VYSLEDEK_1 = "/LANDING%20PAGE%20V%C3%9DSLEDKY/25.png";
  const VYSLEDEK_2 = "/LANDING%20PAGE%20V%C3%9DSLEDKY/26.png";
  const VYSLEDEK_3 = "/LANDING%20PAGE%20V%C3%9DSLEDKY/27.png";
  const VYSLEDEK_4 = "/LANDING%20PAGE%20V%C3%9DSLEDKY/28.png";
  const VYSLEDEK_5 = "/LANDING%20PAGE%20V%C3%9DSLEDKY/29.png";
  const RECENZE_1 = "/RECENZE%20TEXT/IMG_2755%20(1).jpg";
  const RECENZE_2 = "/RECENZE%20TEXT/IMG_4563.jpg";
  const RECENZE_3 = "/RECENZE%20TEXT/IMG_6931%20(1).jpg";
  const RECENZE_4 = "/RECENZE%20TEXT/N%C3%A1vrh%20bez%20n%C3%A1zvu%20(3).png";
  const RECENZE_5 = "/RECENZE%20TEXT/RECNZE%205%20(P%C5%99%C3%ADsp%C4%9Bvek%20na%20Instagramu%20(4%20%205)).png";
  const RECENZE_6 = "/RECENZE%20TEXT/RECENZE%206.png";
  const RECENZE_7 = "/RECENZE%20TEXT/Sn%C3%ADmek%20obrazovky%202026-04-05%20v%2023.44.20.png";

  return (
    <main id="top" className="min-h-screen overflow-x-hidden relative pb-20 md:pb-0">
      <Navbar ctaLink={CTA_LINK} />

      {/* Top & bottom edge gradients with morphing animation */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[30px] left-0 right-0 h-[100px] blur-[30px] animate-[morphTop_20s_ease-in-out_infinite]" style={{ background: "linear-gradient(90deg, #3d5a1a, #1a5040, #2a4a20)" }} />
        <div className="absolute -bottom-[30px] left-0 right-0 h-[100px] blur-[30px] animate-[morphBottom_22s_ease-in-out_infinite]" style={{ background: "linear-gradient(90deg, #4a5a1a, #1a5025, #2a5a3a)" }} />
      </div>

      <style>{`
        @keyframes morphTop {
          0%, 100% { border-radius: 0 0 30% 70%; transform: scaleY(1); }
          25% { border-radius: 0 0 60% 40%; transform: scaleY(1.15); }
          50% { border-radius: 0 0 40% 60%; transform: scaleY(0.9); }
          75% { border-radius: 0 0 70% 30%; transform: scaleY(1.1); }
        }
        @keyframes morphBottom {
          0%, 100% { border-radius: 60% 40% 0 0; transform: scaleY(1); }
          25% { border-radius: 35% 65% 0 0; transform: scaleY(1.1); }
          50% { border-radius: 70% 30% 0 0; transform: scaleY(0.9); }
          75% { border-radius: 45% 55% 0 0; transform: scaleY(1.15); }
        }
      `}</style>

      {/* ==================== HERO ==================== */}
      <section className="relative z-10 md:min-h-[100dvh] flex flex-col items-center md:justify-center px-5 md:px-6 pt-20 md:pt-28 pb-8 md:pb-20">
        <p className="text-[#e2a84b] font-medium text-[12px] md:text-lg mb-2 md:mb-6 tracking-wide text-center">
          Podnikáš ve zdraví a Instagram tě ignoruje?
        </p>

        <h1 className="text-center max-w-[860px] font-bold leading-[1.05] tracking-tight text-[1.875rem] sm:text-[2.25rem] md:text-[3.75rem]">
          Z 0 na <span className="text-[#4ade80]">10&nbsp;000+ sledujících</span> a{" "}
          <span className="text-[#4ade80]">20 klientů</span> za 40 dnů.
        </h1>

        <p className="mt-3 md:mt-6 text-center text-[14px] md:text-lg text-[#9cb89c] max-w-[560px] leading-snug">
          3denní online trénink pro experty ve zdraví. Bez trendů, bez strašení — krok za krokem.
        </p>

        {/* Hero Mockup */}
        <div className="mt-5 md:mt-10 w-full max-w-[720px] relative">
          <div className="absolute -inset-4 md:-inset-10 bg-[radial-gradient(ellipse_at_center,rgba(74,222,128,0.12)_0%,transparent_65%)] pointer-events-none" />
          <img
            src={MOCKUP}
            alt="Projekt Organika — ukázka tréninku"
            className="relative w-full h-auto rounded-xl md:rounded-2xl"
          />
        </div>

        {/* Social proof bar — single compact row on mobile */}
        <div className="mt-5 md:mt-10 w-full max-w-[860px] flex flex-wrap items-center justify-center gap-x-3 md:gap-x-8 gap-y-2">
          {/* Stars + rating */}
          <div className="flex items-center gap-1.5 md:gap-3">
            <div className="flex items-center gap-0.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#e2a84b" className="md:w-[18px] md:h-[18px]">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-white font-bold text-[12px] md:text-base">5,0</span>
          </div>

          <div className="w-px h-4 md:h-10 bg-[#1a2a1b]" />

          {/* Clients avatars */}
          <div className="flex items-center gap-1.5 md:gap-3">
            <div className="flex -space-x-1.5 md:-space-x-2">
              {[
                "linear-gradient(135deg, #4ade80, #1a5c25)",
                "linear-gradient(135deg, #e2a84b, #8a5a1a)",
                "linear-gradient(135deg, #6b9b6b, #2a4a2a)",
              ].map((bg, i) => (
                <div
                  key={i}
                  className="w-5 h-5 md:w-9 md:h-9 rounded-full border-[1.5px] md:border-2 border-[#0a0e0a]"
                  style={{ background: bg }}
                />
              ))}
            </div>
            <span className="text-white font-bold text-[12px] md:text-base">6+ expertů</span>
          </div>

          <div className="w-px h-4 md:h-10 bg-[#1a2a1b]" />

          {/* Big views number */}
          <div className="flex items-center gap-1.5 md:gap-3">
            <span className="text-base md:text-3xl font-bold text-white tracking-tight">30M+</span>
            <span className="text-[11px] md:text-[13px] text-[#6b8a6b]">zhlédnutí</span>
          </div>
        </div>

        <a
          href={CTA_LINK}
          className="mt-5 md:mt-10 w-full md:w-auto flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0a1a0a] via-[#143d1a] to-[#1a5c25] border border-[#2a5a2a] px-6 md:px-8 py-4 text-[15px] md:text-lg font-bold text-white transition-all hover:from-[#0f220f] hover:via-[#1a4d20] hover:to-[#22702e] hover:shadow-[0_0_40px_rgba(74,222,128,0.15)] active:scale-[0.98]"
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
        <div className="max-w-[900px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
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
        <div className="max-w-[600px] mx-auto">
          <h2 className="font-bold leading-tight tracking-tight text-center mb-8 md:mb-14 text-2xl md:text-[2.5rem]">
            Tohle znáš, že?
          </h2>

          <img src="/sad.webp" alt="" className="w-full max-h-[300px] md:max-h-[400px] rounded-2xl mb-8 md:mb-14 object-cover" />

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

          <div className="mt-10 md:mt-14 py-6 md:py-8 border-t border-b border-[#1a2a1b]">
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
        <div className="max-w-[600px] mx-auto relative z-10">
          <h2 className="font-bold leading-tight tracking-tight text-center mb-8 md:mb-14 text-2xl md:text-[2.5rem]">
            Tohle můžeš být <span className="text-[#4ade80]">TY:</span>
          </h2>

          <img src="/happy.webp" alt="" className="w-full max-h-[300px] md:max-h-[400px] rounded-2xl mb-8 md:mb-14 object-cover" />

          <div className="space-y-5 md:space-y-7">
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

          <div className="mt-10 md:mt-14 py-6 md:py-8 border-t border-b border-[#1a2a1b]">
            <p className="text-center text-lg md:text-2xl font-semibold leading-snug">
              Nejde jen o Instagram. Jde o to, abys přestal/a pochybovat o tom, co víš —{" "}
              <span className="text-[#4ade80]">a začal/a tím měnit životy.</span>
            </p>
          </div>

          <div className="my-12 md:my-16 w-full h-px bg-gradient-to-r from-transparent via-[#1a2a1b] to-transparent" />

          <div className="text-center">
            <h3 className="font-bold leading-tight tracking-tight text-xl md:text-[2rem]">
              Převezmi ověřený &bdquo;Growmat&ldquo; systém.
            </h3>
            <p className="mt-5 md:mt-6 text-[#c5d8c5] text-[15px] md:text-lg leading-relaxed">
              3-fázový systém, který proměňuje <strong className="text-white">neviditelné experty v autority se stabilním přísunem klientů.</strong>
            </p>

            <div className="mt-6 md:mt-8 flex flex-col items-start max-w-[440px] mx-auto gap-2.5 md:gap-3 text-[15px] md:text-base">
              {[
                "Funguje jen s telefonem — bez mravenčí práce",
                "Funguje s hodinou denně",
                "Funguje bez koruny do reklamy",
                "Funguje od nuly — a rychle",
              ].map((line, i) => (
                <div key={i} className="flex items-start gap-3 text-[#c5d8c5] text-left">
                  <span className="text-[#4ade80] mt-0.5 shrink-0">&rarr;</span>
                  <span>{line}</span>
                </div>
              ))}
            </div>

            <a
              href={CTA_LINK}
              className="mt-8 md:mt-10 w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0a1a0a] via-[#143d1a] to-[#1a5c25] border border-[#2a5a2a] px-6 md:px-8 py-4 text-base md:text-lg font-bold text-white transition-all hover:from-[#0f220f] hover:via-[#1a4d20] hover:to-[#22702e] hover:shadow-[0_0_40px_rgba(74,222,128,0.15)] active:scale-[0.98]"
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
          <div className="text-center mb-10 md:mb-16">
            <div className="text-xs font-medium tracking-widest text-[#4ade80] uppercase mb-3">Co získáš</div>
            <h2 className="font-bold leading-tight tracking-tight text-2xl md:text-[2.5rem]">3 dny, 3 jasné výstupy.</h2>
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
              <div key={d.num} className="w-full flex flex-col items-center">
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
          <h2 className="font-bold leading-tight tracking-tight text-center mb-3 text-2xl md:text-[2.5rem]">
            + 7 bonusů navíc
          </h2>
          <p className="text-center text-[15px] md:text-lg text-[#9cb89c] mb-10 md:mb-14">
            Vše je součástí Projektu Organika.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
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
      <section id="recenze" className="px-6 py-16 md:py-32">
        <div className="max-w-[600px] md:max-w-[900px] mx-auto">
          <h2 className="font-bold leading-tight tracking-tight text-center mb-3 text-2xl md:text-[2.5rem]">
            Tohle nejsou sliby.
          </h2>
          <p className="text-center text-lg md:text-2xl font-semibold text-[#4ade80] mb-8 md:mb-12">
            Tohle jsou čísla.
          </p>

          {/* Text testimonials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {[RECENZE_1, RECENZE_2, RECENZE_3, RECENZE_4, RECENZE_5, RECENZE_6, RECENZE_7].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Recenze ${i + 1}`}
                className="rounded-xl w-full border border-[#1a2a1b] bg-[#0e160f]"
              />
            ))}
          </div>

          {/* Results screenshots */}
          <div className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {[VYSLEDEK_1, VYSLEDEK_2, VYSLEDEK_3, VYSLEDEK_4, VYSLEDEK_5].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Výsledek ${i + 1}`}
                className="rounded-xl w-full border border-[#1a2a1b] bg-[#0e160f]"
              />
            ))}
          </div>

          <div className="mt-10 md:mt-14 text-center py-6 md:py-8 border-t border-[#1a2a1b]">
            <p className="text-2xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              6 účtů z 0 na 10K+. 20 000 000+ zhlédnutí.
            </p>
            <p className="text-base md:text-lg text-[#9cb89c] mt-2">
              Stovky klientů pro mé klienty. <span className="text-[#4ade80]">0 Kč do reklamy.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ==================== CASE STUDY ==================== */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-[600px] md:max-w-[800px] mx-auto">
          <div className="rounded-2xl border border-[#1a2a1b] bg-[#0e160f] p-6 md:p-12">
            <div className="text-xs font-medium tracking-widest text-[#4ade80] uppercase mb-4">
              Případová studie
            </div>

            <h2 className="font-bold leading-tight tracking-tight text-xl md:text-[2.25rem]">
              @celiso.cz:{" "}
              <span className="text-[#4ade80]">Z 0 na 10 000 sledujících</span> a +20 klientů za 40 dnů
            </h2>

            <p className="mt-4 md:mt-6 text-[#9cb89c] leading-relaxed text-[15px] md:text-lg">
              Celostní medicína. Nula příspěvků. Žádná reklama. Taková byla startovní pozice.
            </p>

            <div className="mt-6 md:mt-8 space-y-4">
              <p className="text-[#c5d8c5] leading-relaxed text-[15px] md:text-base">
                <span className="text-[#4ade80] font-semibold">40 dnů:</span>{" "}
                <strong className="text-white">10 000+ sledujících</strong> a první klienti z Instagramu.
              </p>
              <p className="text-[#c5d8c5] leading-relaxed text-[15px] md:text-base">
                <span className="text-[#4ade80] font-semibold">6 měsíců:</span>{" "}
                <strong className="text-white">700+ kvalifikovaných leadů.</strong> Dnes 30&nbsp;000+ sledujících a stabilní přísun klientů každý měsíc.
              </p>
            </div>

            <div className="mt-8 md:mt-10 text-center">
              <div className="inline-block">
                <div className="w-8 h-px bg-[#4ade80]/40 mx-auto mb-4" />
                <p className="text-lg md:text-xl font-semibold italic">
                  Žádná náhoda. Žádný trend. <span className="text-[#4ade80] not-italic">Ověřený systém.</span>
                </p>
                <div className="w-8 h-px bg-[#4ade80]/40 mx-auto mt-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT / BIO ==================== */}
      <section id="o-mne" className="px-6 py-16 md:py-32">
        <div className="max-w-[600px] md:max-w-[800px] mx-auto">
          <div className="text-xs font-medium tracking-widest text-[#4ade80] uppercase mb-4">Kdo za tím stojí?</div>

          <img src="/maty.png" alt="Matyáš Linda" className="w-full md:float-left md:w-56 md:mr-8 md:mb-4 rounded-2xl mb-6 object-cover object-[center_20%] max-h-[300px] md:max-h-[320px]" />

          <h2 className="font-bold text-2xl md:text-3xl mb-5 md:mb-6">Matyáš Linda</h2>

          <div className="space-y-4 text-[#c5d8c5] leading-relaxed text-[15px] md:text-lg">
            <p>
              Před dvěma lety mi obchodní partner vzal všechno — podcastové účty s 30&nbsp;000 sledujícími. Ze dne na den jsem stál na nule. S&nbsp;dluhy. Bez příjmu.
            </p>
            <p>
              Začal jsem znovu. Vzal jsem všechno, co jsem se naučil o sociálních sítích, a začal systematicky budovat profily pro experty ve zdraví.
            </p>
            <p className="text-white font-medium">
              Za poslední rok: 6 účtů z nuly na 10 000+ sledujících. 20 milionů organických zhlédnutí. Desítky klientů pro každého. 0 Kč do reklamy.
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
          <div className="mt-8 md:mt-10 rounded-2xl border border-[#1a2a1b] bg-[#0e160f] p-5 md:p-8">
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
          <div className="mt-6 md:mt-8 rounded-2xl border border-[#4ade80]/30 bg-[#0e160f] p-6 md:p-12 text-center relative overflow-hidden">
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
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0a1a0a] via-[#143d1a] to-[#1a5c25] border border-[#2a5a2a] px-6 py-4 md:px-10 md:py-5 text-lg md:text-xl font-bold text-white transition-all hover:from-[#0f220f] hover:via-[#1a4d20] hover:to-[#22702e] hover:shadow-[0_0_40px_rgba(74,222,128,0.15)] active:scale-[0.98]"
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
          <h2 className="font-bold leading-tight tracking-tight text-center mb-8 md:mb-14 text-2xl md:text-[2.5rem]">
            Nejčastější otázky
          </h2>

          <div className="divide-y divide-[#1a2a1b]">
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
          <h2 className="font-bold leading-tight tracking-tight mb-6 md:mb-8 text-xl md:text-[2rem]">Máš 2 možnosti:</h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 text-left mb-8 md:mb-12">
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

          <h3 className="font-bold leading-tight mb-8 md:mb-10 text-lg md:text-[2rem]">
            Tvoje expertiza si zaslouží být vidět.{" "}
            <span className="text-[#4ade80]">Dej jí systém.</span>
          </h3>

          <a
            href={CTA_LINK}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0a1a0a] via-[#143d1a] to-[#1a5c25] border border-[#2a5a2a] px-6 md:px-10 py-4 md:py-5 text-lg md:text-xl font-bold text-white transition-all hover:from-[#0f220f] hover:via-[#1a4d20] hover:to-[#22702e] hover:shadow-[0_0_40px_rgba(74,222,128,0.15)] active:scale-[0.98]"
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

          <img src="/logo.svg" alt="Projekt Organika™" className="h-6 md:h-8 mx-auto mt-8 opacity-30" />

          <p className="mt-4 text-[10px] md:text-xs text-[#1a2a1b]">
            &copy; {new Date().getFullYear()} Projekt Organika™ &middot; Growmat Academy
          </p>
        </div>
      </footer>
    </main>
  );
}
