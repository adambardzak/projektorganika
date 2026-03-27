export default function Home() {
  const CTA_LINK = "https://buy.stripe.com/00w28k0i6fn9esUaH5e3e00";

  return (
    <main className="min-h-screen overflow-x-hidden relative">
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
      <section className="relative z-10 min-h-[100dvh] flex flex-col items-center justify-center px-6 py-16 md:py-20">
        <img src="/logo.svg" alt="Projekt Organika™" className="h-8 md:h-10 mb-8 md:mb-10" />

        <p className="text-[#e2a84b] font-medium text-sm md:text-lg mb-5 md:mb-6 tracking-wide text-center">
          Podnikáš ve zdraví a cítíš, že Instagram je proti tobě?
        </p>

        <h1 className="text-center max-w-[900px] font-bold leading-[1.1] tracking-tight text-[1.75rem] md:text-[3.25rem]">
          Máš expertizu. Máš co říct.{" "}
          <span className="text-[#4ade80]">Ale Instagram to nevidí.</span>
        </h1>

        <h2 className="mt-4 md:mt-5 text-center max-w-[800px] font-semibold leading-tight tracking-tight text-lg md:text-2xl text-[#c5d8c5]">
          Problém není v&nbsp;tobě — je v&nbsp;systému, který ti chybí.
        </h2>

        {/* Decorative line */}
        <div className="mt-6 md:mt-8 w-16 h-px bg-gradient-to-r from-transparent via-[#4ade80]/60 to-transparent" />

        <p className="mt-5 md:mt-6 text-center text-base md:text-xl text-[#9cb89c]">
          Žádné honění trendů. Žádné strašení. Ověřený systém, krok za krokem.
        </p>

        <p className="mt-5 md:mt-8 text-center text-[15px] md:text-lg text-[#c5d8c5] max-w-[680px] leading-relaxed px-2">
          <strong className="text-white">3denní online trénink</strong> pro
          experty ve zdraví, kteří mají{" "}
          <strong className="text-white">plnou hlavu vědomostí a zkušeností</strong> — ale neví,{" "}
          <span className="text-[#4ade80]">jak je přetavit do obsahu, který přitahuje správné lidi a prodává.</span>
        </p>

        {/* Video placeholder */}
        <div className="mt-8 md:mt-12 w-full max-w-[720px] aspect-video rounded-2xl border border-[#1a2a1b] bg-[#0e160f] flex items-center justify-center overflow-hidden group cursor-pointer relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,60,20,0.08)_0%,transparent_70%)]" />
          <div className="relative flex flex-col items-center gap-3">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[#4ade80]/40 flex items-center justify-center transition-transform group-hover:scale-110">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="ml-1">
                <path d="M8 5.14v14.72L19 12 8 5.14z" fill="#4ade80" />
              </svg>
            </div>
            <span className="text-xs md:text-sm text-[#9cb89c]">Pusť si úvodní lekci — 2 min</span>
          </div>
        </div>

        {/* CTA */}
        <a
          href={CTA_LINK}
          className="mt-8 md:mt-10 w-full md:w-auto flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0a1a0a] via-[#143d1a] to-[#1a5c25] border border-[#2a5a2a] px-6 md:px-8 py-4 text-base md:text-lg font-bold text-white transition-all hover:from-[#0f220f] hover:via-[#1a4d20] hover:to-[#22702e] hover:shadow-[0_0_40px_rgba(74,222,128,0.15)] active:scale-[0.98]"
        >
          CHCI SYSTÉM ZA ZVÝHODNĚNÝCH 990 KČ
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        <p className="mt-3 text-[11px] md:text-xs text-[#6b8a6b] flex items-center gap-2 md:gap-3">
          <span>Bezpečná platba</span><span>·</span><span>Okamžitý přístup</span><span>·</span><span>Doživotní členství</span>
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

      {/* ==================== CASE STUDY ==================== */}
      <section className="px-6 py-16 md:py-32">
        <div className="max-w-[600px] md:max-w-[800px] mx-auto">
          <div className="rounded-2xl border border-[#1a2a1b] bg-[#0e160f] p-6 md:p-12">
            <div className="text-xs font-medium tracking-widest text-[#4ade80] uppercase mb-4 md:mb-6">
              Případová studie
            </div>

            <h2 className="font-bold leading-tight tracking-tight text-xl md:text-[2.5rem]">
              Profil @celiso.cz:{" "}
              <span className="text-[#4ade80]">Z&nbsp;0 na 10&nbsp;000 sledujících</span>{" "}
              a +20 platících klientů za 40 dnů
            </h2>

            <p className="mt-4 md:mt-6 text-[#9cb89c] leading-relaxed text-[15px] md:text-lg">
              Celostní medicína. Klienti z doporučení. Nula příspěvků. Přesně tohle byla naše startovní pozice s klientem.
            </p>

            <div className="mt-6 md:mt-8 space-y-6 md:space-y-8">
              <p className="text-[#c5d8c5] leading-relaxed text-[15px] md:text-base">
                <span className="text-[#4ade80] font-semibold">Za 40 dnů:</span>{" "}
                <strong className="text-white">10 000+ sledujících a první noví klienti z Instagramu.</strong> Bez koruny do reklamy.
              </p>
              <p className="text-[#c5d8c5] leading-relaxed text-[15px] md:text-base">
                <span className="text-[#4ade80] font-semibold">Za 6 měsíců:</span>{" "}
                <strong className="text-white">700+ kvalifikovaných leadů</strong> — lidí, kteří aktivně chtěli služby celostní medicíny. Dnes má přes 30&nbsp;000 sledujících a stabilní přísun nových klientů každý měsíc.
              </p>
            </div>

            {/* Screenshot placeholder */}
            <div className="mt-8 md:mt-10 w-full aspect-[16/9] rounded-xl border border-[#1a2a1b] bg-[#0a0e0a] flex items-center justify-center">
              <span className="text-xs md:text-sm text-[#4a6b4a]">[ Screenshot: Před/po analytika @celiso.cz ]</span>
            </div>

            {/* Pull quote */}
            <div className="mt-8 md:mt-10 text-center">
              <div className="inline-block">
                <div className="w-8 h-px bg-[#4ade80]/40 mx-auto mb-4" />
                <p className="text-lg md:text-xl font-semibold italic">
                  Tohle nebyla náhoda. Tohle nebyl trend. Byl to <span className="text-[#4ade80] not-italic">systém</span>.
                </p>
                <p className="text-lg md:text-xl font-semibold mt-1">A teď ho můžeš mít i ty.</p>
                <div className="w-8 h-px bg-[#4ade80]/40 mx-auto mt-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PAIN POINTS ==================== */}
      <section className="px-6 py-16 md:py-32">
        <div className="max-w-[600px] mx-auto">
          <h2 className="font-bold leading-tight tracking-tight text-center mb-8 md:mb-14 text-2xl md:text-[2.5rem]">
            Tohle znáš, že?
          </h2>

          <img src="/sad.webp" alt="" className="w-full max-h-[300px] md:max-h-[400px] rounded-2xl mb-8 md:mb-14 object-cover" />

          <div className="space-y-6 md:space-y-8">
            <p className="text-[#c5d8c5] leading-[1.75] text-[15px] md:text-xl">
              <strong className="text-white">Máš v hlavě tolik vědomostí — ale nedokážeš je dostat ven</strong>{" "}
              do formy, která na Instagramu funguje. Jak dlouhý popisek? Jak video? Co vlastně sdílet?
            </p>
            <p className="text-[#c5d8c5] leading-[1.75] text-[15px] md:text-xl">
              <strong className="text-white">Přijde ti, že účty ve zdraví vypadají všechny stejně</strong>{" "}
              — generické rady, &bdquo;sněz tohle a stane se zázrak.&ldquo; Ty to tak dělat nechceš. Ale nevíš,{" "}
              <strong className="text-white">jak být svůj/svá a zároveň efektivní.</strong>
            </p>
            <p className="text-[#c5d8c5] leading-[1.75] text-[15px] md:text-xl">
              <strong className="text-white">Zkoušel/a jsi to po svém — a nefungovalo to.</strong>{" "}
              Dřív stačila fotka, dnes už ne. Instagram se změnil a ty cítíš, že tě ten algoritmus ignoruje.
            </p>
            <p className="text-[#c5d8c5] leading-[1.75] text-[15px] md:text-xl">
              <strong className="text-white">Rodina a známí se tě roky ptají na rady</strong>{" "}
              — ale na Instagramu ticho. Žádná interakce. Žádná komunita. Jen pár známých, co pasivně sledují a nikdy nereagují.
            </p>
            <p className="text-[#c5d8c5] leading-[1.75] text-[15px] md:text-xl">
              <strong className="text-white">Máš strašně moc informací</strong>{" "}
              z kurzů a rádců — cílovka, trendy, konzistence. Ale čím víc rad, tím víc zmatku. A čím víc zmatku,{" "}
              <strong className="text-white">tím víc pochybuješ o sobě.</strong>
            </p>
          </div>

          {/* Highlighted closing */}
          <div className="mt-10 md:mt-14 py-6 md:py-8 border-t border-b border-[#1a2a1b]">
            <p className="text-center text-lg md:text-2xl font-semibold leading-snug">
              Problém nikdy nebyl v&nbsp;tom, co víš. Problém byl v&nbsp;tom, že ti nikdo neukázal{" "}
              <span className="text-[#4ade80]">JAK</span> to sdílet tak, aby to fungovalo.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== TRANSFORMATION ==================== */}
      <section className="px-6 py-16 md:py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,60,20,0.06)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-[600px] mx-auto relative z-10">
          <h2 className="font-bold leading-tight tracking-tight text-center mb-8 md:mb-14 text-2xl md:text-[2.5rem]">
            Teď si představ, že za <span className="text-[#4ade80]">3–6 měsíců:</span>
          </h2>

          <img src="/happy.webp" alt="" className="w-full max-h-[300px] md:max-h-[400px] rounded-2xl mb-8 md:mb-14 object-cover" />

          <div className="space-y-6 md:space-y-8">
            <p className="text-[#c5d8c5] leading-[1.75] text-[15px] md:text-xl">
              <strong className="text-white">Přes den ti napadají nápady a souvislosti</strong>{" "}
              — a přesně víš, jak z nich udělat obsah, který lidi zajímá. Víš co tvořit, jak a proč to funguje.
            </p>
            <p className="text-[#c5d8c5] leading-[1.75] text-[15px] md:text-xl">
              <strong className="text-white">Sdílíš své myšlenky bez strachu</strong>{" "}
              — autenticky, po svém, bez strašení a bez pocitu, že musíš být někdo jiný. A lidi na to reagují.
            </p>
            <p className="text-[#c5d8c5] leading-[1.75] text-[15px] md:text-xl">
              <strong className="text-white">Přibývají ti relevantní sledující</strong>{" "}
              — ne čísla kvůli číslům, ale skutečná komunita lidí, kteří se zajímají o to samé co ty. A komunikují s tebou.
            </p>
            <p className="text-[#c5d8c5] leading-[1.75] text-[15px] md:text-xl">
              <strong className="text-white">Klienti ti píšou sami.</strong>{" "}
              Nehoníš se za nimi. Nemusíš nikoho přesvědčovat. Tvůj profil a obsah to dělá za tebe.
            </p>
            <p className="text-[#c5d8c5] leading-[1.75] text-[15px] md:text-xl">
              <strong className="text-white">Konečně máš klid</strong>{" "}
              — protože víš, že to funguje. Víš, že nemusíš chodit zpět do práce, kterou nechceš dělat. A můžeš se na 100 % věnovat tomu, v čem jsi nejlepší.
            </p>
          </div>

          {/* Highlighted closing */}
          <div className="mt-10 md:mt-14 py-6 md:py-8 border-t border-b border-[#1a2a1b]">
            <p className="text-center text-lg md:text-2xl font-semibold leading-snug">
              Nejde jen o Instagram. Jde o to, abys konečně přestal/a pochybovat o tom, co víš —{" "}
              <span className="text-[#4ade80]">a začal/a tím měnit životy.</span>
            </p>
          </div>

          {/* Decorative line */}
          <div className="my-12 md:my-16 w-full h-px bg-gradient-to-r from-transparent via-[#1a2a1b] to-transparent" />

          {/* System pitch */}
          <div className="text-center">
            <h3 className="font-bold leading-tight tracking-tight text-xl md:text-[2rem]">
              Jak to funguje? Ukradni můj &bdquo;Growmat&ldquo; systém.
            </h3>
            <p className="mt-5 md:mt-6 text-[#c5d8c5] text-[15px] md:text-lg leading-relaxed">
              Trénink Projekt Organika ti dá{" "}
              <strong className="text-white">ověřený 3-fázový systém, který proměňuje neviditelné experty v autority se stabilním přísunem klientů:</strong>
            </p>

            <div className="mt-6 md:mt-8 flex flex-col items-start max-w-[400px] mx-auto gap-2.5 md:gap-3 text-[15px] md:text-base">
              {[
                "Funguje jen s telefonem — žádné programování, žádná mravenčí práce",
                "Funguje s hodinou denně — aby ti zůstal čas na rodinu, klienty a sebe",
                "Funguje bez koruny do reklamy — čistě organicky",
                "Funguje od nuly — a rychle. I když zatím nemáš ani jeden příspěvek.",
              ].map((line, i) => (
                <div key={i} className="flex items-start gap-3 text-[#c5d8c5] text-left">
                  <span className="text-[#4ade80] mt-0.5 shrink-0">&rarr;</span>
                  <span>{line}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 md:mt-8 text-[#c5d8c5] text-[15px] md:text-lg leading-relaxed">
              <strong className="text-white">Není to další kurz, kde se budeš měsíce učit teorii.</strong>{" "}
              Je to kompletní systém na zlatém podnose — krok za krokem, s přesným plánem co dělat každý den.
            </p>

            <a
              href={CTA_LINK}
              className="mt-8 md:mt-10 w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0a1a0a] via-[#143d1a] to-[#1a5c25] border border-[#2a5a2a] px-6 md:px-8 py-4 text-base md:text-lg font-bold text-white transition-all hover:from-[#0f220f] hover:via-[#1a4d20] hover:to-[#22702e] hover:shadow-[0_0_40px_rgba(74,222,128,0.15)] active:scale-[0.98]"
            >
              CHCI KOMPLETNÍ SYSTÉM — 990 KČ
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ==================== 3 DAY BREAKDOWN ==================== */}
      <section className="px-6 py-16 md:py-32">
        <div className="max-w-[600px] md:max-w-[800px] mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <div className="text-xs font-medium tracking-widest text-[#4ade80] uppercase mb-3">Co získáš</div>
            <h2 className="font-bold leading-tight tracking-tight text-2xl md:text-[2.5rem]">CO DNES ZÍSKÁŠ:</h2>
          </div>

          {/* Day cards with numbers and connecting lines */}
          <div className="flex flex-col items-center">
            {[
              {
                num: "01",
                day: "Den 1",
                title: "Profil, ze kterého je jasné, proč jsi autorita",
                subtitle: "Nastavíš se mnou profil krok za krokem tak, aby návštěvník do 3 sekund věděl: „Tohle je přesně ten člověk, kterého hledám.\"",
                text: <>Nastavíš profil přesně tak, jak vypadaly účty, které vyrostly na 10K+ a generovaly <strong className="text-white">desítky klientů měsíčně.</strong> Ne poznámky — <strong className="text-white">hotový profil.</strong></>,
              },
              {
                num: "02",
                day: "Den 2",
                title: "Jak dostat myšlenku z hlavy do obsahu, který lidi zajímá",
                subtitle: "Natočíš 1. úspěšné video s mou pomocí. Dnes.",
                text: <>Odhalíš přesný systém, díky kterému videa mých klientů sbírají miliony zhlédnutí — a zároveň přivádějí klienty. <strong className="text-white">Budeš přesně vědět, jak vzít svůj nápad a zpracovat ho do formy, která na Instagramu funguje — bez strašení, bez generických rad, po svém.</strong></>,
              },
              {
                num: "03",
                day: "Den 3",
                title: 'Kompletní mapa od 0 po stabilní příjem',
                subtitle: 'Ukradneš můj 3-fázový "Growmat" systém co přivádí klienty ve zdraví pomocí Instagramu a AI — za 1-2 hodiny práce denně.',
                text: <>Odejdeš s konkrétním plánem a kroky, díky kterým nebudeš přemýšlet &bdquo;co mám dnes postovat.&ldquo; <strong className="text-white">Na celý týden dopředu budeš vědět co, jak a proč sdílíš.</strong></>,
              },
            ].map((d, i) => (
              <div key={d.num} className="w-full flex flex-col items-center">
                {/* Number */}
                <span className="text-3xl md:text-4xl font-bold text-[#4ade80]/20 mb-3">{d.num}</span>

                {/* Card */}
                <div className="w-full rounded-2xl border border-[#1a2a1b] bg-[#0e160f] p-5 md:p-8">
                  <p className="text-[10px] md:text-xs text-[#4ade80] font-medium tracking-wider uppercase mb-1">{d.day}</p>
                  <h3 className="font-bold text-base md:text-xl mb-3 md:mb-4">{d.title}</h3>
                  <p className="text-[#e2a84b] font-medium text-xs md:text-sm mb-3">{d.subtitle}</p>
                  <p className="text-[#c5d8c5] leading-relaxed text-[15px] md:text-lg">{d.text}</p>
                </div>

                {/* Connector line between cards */}
                {i < 2 && <div className="w-px h-6 md:h-8 bg-[#4ade80]/20" />}
              </div>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-10">
            <a
              href={CTA_LINK}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0a1a0a] via-[#143d1a] to-[#1a5c25] border border-[#2a5a2a] px-6 md:px-8 py-4 text-base md:text-lg font-bold text-white transition-all hover:from-[#0f220f] hover:via-[#1a4d20] hover:to-[#22702e] hover:shadow-[0_0_40px_rgba(74,222,128,0.15)] active:scale-[0.98]"
            >
              CHCI KOMPLETNÍ SYSTÉM — 990 KČ
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ==================== BONUSES ==================== */}
      <section className="px-6 py-16 md:py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(20,60,20,0.05)_0%,transparent_50%)] pointer-events-none" />
        <div className="max-w-[600px] md:max-w-[800px] mx-auto relative z-10">
          <h2 className="font-bold leading-tight tracking-tight text-center mb-3 text-2xl md:text-[2.5rem]">
            Navíc dostaneš:
          </h2>
          <p className="text-center text-[15px] md:text-lg text-[#9cb89c] mb-10 md:mb-14">
            Tyhle bonusy jsou součástí Projektu Organika:
          </p>

          <div className="space-y-4 md:space-y-6">
            {[
              {
                n: "01",
                title: "Rozbor 5 virálních videí, co získala miliony zhlédnutí",
                text: <>Přestaň hádat, co funguje — podívej se přesně, proč to funguje. Rozeberu ti krok za krokem <strong className="text-white">5 reálných příspěvků mých klientů ze zdraví,</strong> které nasbíraly miliony organických zhlédnutí. <strong className="text-white">Tohle je rozdíl mezi &bdquo;zkouším, co zabere&ldquo; a &bdquo;vím přesně, co natočit a proč.&ldquo;</strong></>,
              },
              {
                n: "02",
                title: "3 případové studie klientů: kompletní nahlédnutí pod pokličku",
                text: <>3 reální klienti. 3 různé zdravotní obory. 1 systém. Ukážu ti přesně, co dělali v prvním týdnu, jak vypadal jejich obsah, odkud přišli klienti a co konkrétně fungovalo. <strong className="text-white">Nebudeš si vymýšlet vlastní cestu naslepo — vezmeš si mapu, která už někoho dovedla do cíle.</strong></>,
              },
              {
                n: "03",
                title: "Dárek v hodnotě 10 000 Kč pro ty, co to myslí vážně",
                text: <>Dokonči všechny lekce a úkoly ve 3denním tréninku — a odemkni odměnu, která ti dá masivní náskok. <strong className="text-white">Detaily odhalím uvnitř</strong> — ale věř mi: tohle je důvod, proč budeš chtít dokončit každý úkol do posledního.</>,
              },
            ].map((b) => (
              <div key={b.n} className="rounded-2xl border border-[#1a2a1b] bg-[#0e160f] p-5 md:p-8 flex gap-4 md:gap-6">
                {/* Large decorative number */}
                <span className="shrink-0 text-4xl md:text-5xl font-bold text-[#4ade80]/15 leading-none mt-1">{b.n}</span>
                <div>
                  <h3 className="font-bold text-base md:text-xl leading-tight mb-2 md:mb-3">{b.title}</h3>
                  <p className="text-[#c5d8c5] leading-relaxed text-[15px] md:text-lg">{b.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Value summary */}
          <div className="mt-8 md:mt-10 text-center py-5 md:py-6 border-t border-b border-[#1a2a1b]">
            <p className="text-[15px] md:text-lg text-[#9cb89c]">
              Hodnota bonusů: <strong className="text-white">15 000+ Kč.</strong> Tvoje cena:{" "}
              <strong className="text-[#4ade80] text-xl md:text-2xl">0 Kč</strong>{" "}
              — jsou součástí Projektu Organika.
            </p>
          </div>

          <div className="text-center mt-6 md:mt-8">
            <a
              href={CTA_LINK}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0a1a0a] via-[#143d1a] to-[#1a5c25] border border-[#2a5a2a] px-6 md:px-8 py-4 text-base md:text-lg font-bold text-white transition-all hover:from-[#0f220f] hover:via-[#1a4d20] hover:to-[#22702e] hover:shadow-[0_0_40px_rgba(74,222,128,0.15)] active:scale-[0.98]"
            >
              CHCI SYSTÉM + VŠECHNY BONUSY ZA 990 KČ
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ==================== SOCIAL PROOF ==================== */}
      <section className="px-6 py-16 md:py-32">
        <div className="max-w-[600px] md:max-w-[900px] mx-auto">
          <h2 className="font-bold leading-tight tracking-tight text-center mb-3 text-2xl md:text-[2.5rem]">
            Tohle nejsou sliby.
          </h2>
          <p className="text-center text-lg md:text-2xl font-semibold text-[#4ade80] mb-8 md:mb-12">
            Tohle jsou čísla.
          </p>

          {/* Testimonials */}
          <div className="grid grid-cols-2 gap-3 md:gap-5 max-w-[500px] mx-auto">
            <img src="/recenze/recenze-1.png" alt="Recenze" className="rounded-xl w-full" />
            <img src="/recenze/recenze-2.png" alt="Recenze" className="rounded-xl w-full" />
          </div>

          {/* Results */}
          <div className="mt-6 md:mt-12 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="aspect-square rounded-xl border border-[#1a2a1b] bg-[#0e160f] flex items-center justify-center">
                <span className="text-[10px] md:text-xs text-[#4a6b4a]">[ Výsledek #{n} ]</span>
              </div>
            ))}
          </div>

          {/* Big summary stat */}
          <div className="mt-10 md:mt-14 text-center py-6 md:py-8 border-t border-[#1a2a1b]">
            <p className="text-3xl md:text-5xl font-bold text-white tracking-tight">6 účtů z 0 na 10K+. Přes 20 000 000 zhlédnutí.</p>
            <p className="text-base md:text-lg text-[#9cb89c] mt-2">Stovky klientů pro mé klienty. <span className="text-[#4ade80]">0 Kč do reklamy.</span></p>
          </div>

          <div className="text-center mt-4 md:mt-6">
            <a
              href={CTA_LINK}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0a1a0a] via-[#143d1a] to-[#1a5c25] border border-[#2a5a2a] px-6 md:px-8 py-4 text-base md:text-lg font-bold text-white transition-all hover:from-[#0f220f] hover:via-[#1a4d20] hover:to-[#22702e] hover:shadow-[0_0_40px_rgba(74,222,128,0.15)] active:scale-[0.98]"
            >
              VSTOUPIT DO PROJEKTU ORGANIKA ZA 990 KČ
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT / BIO ==================== */}
      <section className="px-6 py-16 md:py-32">
        <div className="max-w-[600px] md:max-w-[800px] mx-auto">
          <div className="text-xs font-medium tracking-widest text-[#4ade80] uppercase mb-4">Kdo za tím stojí?</div>

          <img src="/maty.png" alt="Matyáš Linda" className="w-full md:float-left md:w-56 md:mr-8 md:mb-4 rounded-2xl mb-6 object-cover object-[center_20%] max-h-[300px] md:max-h-[320px]" />

          <h2 className="font-bold text-2xl md:text-3xl mb-5 md:mb-6">Matyáš Linda</h2>

          <div className="space-y-4 text-[#c5d8c5] leading-relaxed text-[15px] md:text-lg">
            <p>
              Před dvěma lety mi obchodní partner ukradl všechno, co jsme spolu vybudovali — podcastové účty s 30&nbsp;000 sledujícími, na kterých jsem dřel měsíce. Ze dne na den jsem stál na nule. S&nbsp;dluhy. Bez domova. Bez příjmu. Bez plánu.
            </p>
            <p>
              Měl jsem dvě možnosti: buď se zhroutit, nebo začít znovu — tentokrát líp.
            </p>
            <p>
              Rozhodl jsem se pro druhou. Vzal jsem všechno, co jsem se naučil o sociálních sítích, a začal budovat profily pro experty ve zdraví. Ne teorie z kurzů — praxe. Reálné účty, reálné výsledky.
            </p>
            <p className="text-white font-medium">
              Za poslední rok: 6 účtů z nuly na 10 000+ sledujících. Přes 20 milionů organických zhlédnutí. Desítky nových klientů pro každého z nich. Vše bez jediné koruny do reklamy.
            </p>
            <p>
              Dnes pomáhám podnikatelům ve zdraví dostat jejich expertizu k lidem, kteří ji potřebují. Beru to, v čem jsi opravdu dobrý/á — a dávám ti systém, který to promění v obsah, komunitu a klienty.
            </p>
          </div>

          {/* Signature quote */}
          <div className="mt-8 md:mt-10 pl-4 md:pl-6 border-l-2 border-[#4ade80]/40">
            <p className="text-[#4ade80] font-medium italic text-base md:text-lg">
              Protože tvoje znalosti mohou lidem měnit životy. Chybí ti jen systém, aby se o nich svět dozvěděl.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== PRICING ==================== */}
      <section id="platba" className="px-6 py-16 md:py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(74,222,128,0.04)_0%,transparent_50%)] pointer-events-none" />
        <div className="max-w-[500px] md:max-w-[640px] mx-auto relative z-10">
          <div className="text-center">
            <div className="text-xs font-medium tracking-widest text-[#4ade80] uppercase mb-4">Tvoje investice</div>

            <p className="mt-3 text-[#9cb89c] text-[15px] md:text-lg leading-relaxed">
              Najít si kouče na Instagram tě vyjde na 5 000–15 000 Kč za hodinu. Agentura? 20 000+ Kč měsíčně. A většina z nich nemá ani zlomek výsledků, které vidíš výše.
            </p>

            <p className="mt-3 text-[#c5d8c5] text-[15px] md:text-lg leading-relaxed">
              Projekt Organika ti dá <strong className="text-white">kompletní systém + šablony + případové studie + soutěž o mentoring + doživotní přístup.</strong>
            </p>
          </div>

          {/* Price card */}
          <div className="mt-8 md:mt-12 rounded-2xl border border-[#4ade80]/30 bg-[#0e160f] p-6 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4ade80]/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4ade80]/20 to-transparent" />

            <p className="text-[#9cb89c] text-sm md:text-lg">Hodnota:</p>
            <p className="text-xl md:text-3xl text-[#6b8a6b] line-through mt-1">22 900 Kč</p>

            <div className="my-4 md:my-6 w-12 h-px bg-[#4ade80]/30 mx-auto" />

            <p className="text-[#4ade80] text-xs md:text-sm font-medium tracking-wider uppercase">Dnes pouze</p>
            <p className="text-5xl md:text-7xl font-bold text-white mt-1">990 Kč</p>

            <p className="mt-5 md:mt-6 text-[#c5d8c5] text-sm md:text-base leading-relaxed max-w-[420px] mx-auto">
              A pokud ti trénink nepřinese alespoň 3 konkrétní &bdquo;aha momenty&ldquo;, které změní tvůj přístup k Instagramu, napiš mi —{" "}
              <strong className="text-white">vrátím ti peníze.</strong> Bez otázek.
            </p>

            <div className="mt-5 md:mt-8 py-3 px-4 md:py-4 md:px-6 rounded-xl bg-[#141e15]/50 border border-[#1a2a1b]/50 inline-block">
              <p className="text-[#e2a84b] font-medium text-sm md:text-base">Zvýhodněná cena 990 Kč platí pro prvních 100 účastníků.</p>
              <p className="text-xs md:text-sm text-[#9cb89c] mt-1">Jakmile jich bude 100, cena se zvýší na 1 990 Kč.</p>
            </div>

            <div className="mt-5 md:mt-8">
              <a
                href={CTA_LINK}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0a1a0a] via-[#143d1a] to-[#1a5c25] border border-[#2a5a2a] px-6 py-4 md:px-10 md:py-5 text-lg md:text-xl font-bold text-white transition-all hover:from-[#0f220f] hover:via-[#1a4d20] hover:to-[#22702e] hover:shadow-[0_0_40px_rgba(74,222,128,0.15)] active:scale-[0.98]"
              >
                VSTOUPIT ZA ZVÝHODNĚNÝCH 990 KČ
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            <p className="mt-3 text-[11px] md:text-xs text-[#6b8a6b] flex items-center justify-center gap-2 md:gap-3">
              <span>Bezpečná platba</span><span>·</span><span>Okamžitý přístup</span><span>·</span><span>Doživotní členství</span>
            </p>
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="px-6 py-16 md:py-32">
        <div className="max-w-[600px] md:max-w-[700px] mx-auto">
          <h2 className="font-bold leading-tight tracking-tight text-center mb-8 md:mb-14 text-2xl md:text-[2.5rem]">
            Nejčastější otázky
          </h2>

          <div className="divide-y divide-[#1a2a1b]">
            {[
              {
                q: "Mám v hlavě spoustu informací a zkoušel/a jsem už různé kurzy. Čím je tohle jiné?",
                a: "Většina kurzů ti přidá další informace na hromadu — „buď konzistentní, najdi si cílovku, sleduj trendy.\" Jenže ty nemáš problém s informacemi. Máš jich až moc. Projekt Organika ti nedá další teorii. Dá ti systém, který všechno zjednoduší: přesně co sdílet, jak to zpracovat a proč to funguje. Méně přemýšlení, víc výsledků.",
              },
              {
                q: "Nechci dělat generický obsah a strašit lidi. Bude to fungovat i když chci být autentický/á?",
                a: "Přesně na tohle je Growmat systém postavený. Neučím tě honit trendy nebo dělat clickbait. Učím tě, jak vzít tvoje myšlenky — tak jak je máš v hlavě — a zpracovat je do formy, která přitahuje správné lidi. Po svém, bez kompromisů na autenticitě.",
              },
              {
                q: "Nemám zkušenosti s natáčením — zvládnu to?",
                a: "Ano. Systém je navržený tak, aby fungoval i bez mluvení na kameru. Ukážu ti přesné formáty, které nevyžadují žádné technické dovednosti — stačí telefon a 1 hodina denně. Žádné programování, žádná mravenčí práce.",
              },
              {
                q: "Nechci se honit za čísly. Chci relevantní komunitu.",
                a: "To je přesně ten správný přístup — a je to přesně to, co systém dělá. Nestavíme čísla kvůli číslům. Stavíme komunitu lidí, kteří se zajímají o tvoje téma, interagují s tvým obsahem a časem se stávají klienty. Kvalita, ne kvantita.",
              },
              {
                q: "Bojím se, že to bude časově náročné a zase se budu učit něco složitého.",
                a: "Celý trénink je 3 dny. Systém je navržený na 1-2 hodiny denně. Nejde o to trávit hodiny tvorbou — jde o to přesně vědět co dělat a neztrácet čas přemýšlením „co mám dnes postovat.\" Méně práce, víc výsledků.",
              },
              {
                q: "Už mám web a klienty z doporučení — k čemu mi to bude?",
                a: "Web čeká, až ho někdo najde. Instagram aktivně přivádí lidi k tobě. Většina mých klientů měla web a klienty z doporučení — ale teprve Instagram jim dal jistotu, že nepřijdou o příjem, když se zrovna nikdo neozve.",
              },
              {
                q: "Co když to u mě nebude fungovat?",
                a: "Systém fungoval u 6 různých účtů v různých zdravotních tématech. Pokud ho aplikuješ, fungovat bude. A pokud ti trénink nepřinese alespoň 3 konkrétní „aha momenty\", vrátím ti peníze. Jednoduché.",
              },
              {
                q: "Je to i pro lidi mimo zdraví?",
                a: "Ne. Projekt Organika je výhradně pro oblast zdraví — fyzické, mentální, celostní. Pokud v těchto oblastech pomáháš lidem, jsi tu správně.",
              },
              {
                q: "Jak dlouho mám přístup?",
                a: "Navždy. Zaplatíš jednou, máš doživotní přístup ke všemu obsahu i budoucím aktualizacím.",
              },
              {
                q: "Je to živý trénink nebo nahrávka?",
                a: "Kombinace. Trénink probíhá v uzavřené skupině na Circle — dostaneš video lekce, praktické úkoly a možnost soutěžit o 1:1 mentoring. Na konci každé lekce máš praktický akční krok. Vše si pustíš vlastním tempem.",
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
                Zavřeš tuhle stránku. Za rok budeš stále hledat další kurz, další rady, další strategii — a stále cítit, že Instagram je proti tobě. Stále budeš radit rodině a známým, kteří tvoje rady stejně nevyužijí — zatímco lidi, kterým bys opravdu mohl/a změnit život, o tobě neví.
              </p>
            </div>
            <div className="rounded-xl border border-[#4ade80]/30 bg-[#0e160f] p-5 md:p-6">
              <p className="text-xs text-[#4ade80] font-medium mb-2">Možnost 2</p>
              <p className="text-[#c5d8c5] leading-relaxed text-sm md:text-base">
                Vstoupíš do Projektu Organika. Za 3 dny budeš přesně vědět, jak dostat své myšlenky z hlavy do obsahu, který funguje. Za měsíc budeš mít první relevantní sledující a interakce. A za rok? Za rok budeš ten expert / ta expertka, za kterou si lidi přijdou — ne proto, že honíš trendy, ale proto, že jsi konečně dal/a svému know-how systém, který si zaslouží.
              </p>
            </div>
          </div>

          {/* Decorative line */}
          <div className="w-12 h-px bg-[#4ade80]/40 mx-auto mb-6 md:mb-8" />

          <h3 className="font-bold leading-tight mb-8 md:mb-10 text-lg md:text-[2rem]">
            Tvoje expertiza si zaslouží být vidět.{" "}
            <span className="text-[#4ade80]">Dej jí systém, který jí to umožní.</span>
          </h3>

          <a
            href={CTA_LINK}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0a1a0a] via-[#143d1a] to-[#1a5c25] border border-[#2a5a2a] px-6 md:px-10 py-4 md:py-5 text-lg md:text-xl font-bold text-white transition-all hover:from-[#0f220f] hover:via-[#1a4d20] hover:to-[#22702e] hover:shadow-[0_0_40px_rgba(74,222,128,0.15)] active:scale-[0.98]"
          >
            ZAČÍT TEĎ ZA ZVÝHODNĚNÝCH 990 KČ
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <p className="mt-3 text-[11px] md:text-xs text-[#6b8a6b] flex items-center justify-center gap-2 md:gap-3">
            <span>Bezpečná platba</span><span>·</span><span>Okamžitý přístup</span><span>·</span><span>Doživotní členství</span>
          </p>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="px-6 py-12 md:py-16 border-t border-[#1a2a1b]">
        <div className="max-w-[500px] md:max-w-[600px] mx-auto text-center">
          <p className="text-[#9cb89c] leading-relaxed text-sm md:text-base">
            <strong className="text-white">P.S.</strong> Zvýhodněná cena 990 Kč platí jen do naplnění prvních 100 míst. Potom se cena vrací na 1 990 Kč — bez výjimek, bez prodlužování.
            @celiso.cz dnes má přes 30 000 sledujících a stabilní přísun klientů každý měsíc. Jediný rozdíl mezi ním a tebou? On ten systém už má. Teď ho můžeš mít i ty.
          </p>

          <div className="mt-6 flex items-center justify-center gap-2 md:gap-4 text-[10px] md:text-xs text-[#4a6b4a] flex-wrap">
            <span>Bezpečná platba</span><span>·</span><span>Okamžitý přístup</span><span>·</span><span>Podpora přes email</span><span>·</span><span>Doživotní členství</span>
          </div>

          <img src="/logo.svg" alt="Projekt Organika™" className="h-6 md:h-8 mx-auto mt-6 opacity-30" />

          <p className="mt-4 text-[10px] md:text-xs text-[#1a2a1b]">
            &copy; {new Date().getFullYear()} Projekt Organika™ &middot; Growmat Academy
          </p>
        </div>
      </footer>
    </main>
  );
}
