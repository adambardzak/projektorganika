export default function Home() {
  const CTA_LINK = "https://buy.stripe.com/00w28k0i6fn9esUaH5e3e00";

  return (
    <main className="min-h-screen overflow-x-hidden relative">
      {/* Animated ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[150px] -left-[150px] w-[300px] h-[300px] rounded-full bg-[#0a2510] opacity-60 blur-[120px] animate-[drift1_20s_ease-in-out_infinite]" />
        <div className="absolute top-[40%] -right-[120px] w-[250px] h-[250px] rounded-full bg-[#0a2010] opacity-50 blur-[100px] animate-[drift2_25s_ease-in-out_infinite]" />
        <div className="absolute bottom-[5%] -left-[100px] w-[280px] h-[280px] rounded-full bg-[#0a2510] opacity-50 blur-[110px] animate-[drift3_22s_ease-in-out_infinite]" />
      </div>

      <style>{`
        @keyframes drift1 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(80px, 60px); }
          50% { transform: translate(40px, 120px); }
          75% { transform: translate(-40px, 60px); }
        }
        @keyframes drift2 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-60px, -40px); }
          50% { transform: translate(-100px, 30px); }
          75% { transform: translate(-30px, -80px); }
        }
        @keyframes drift3 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(70px, -50px); }
          50% { transform: translate(-30px, -90px); }
          75% { transform: translate(50px, -30px); }
        }
      `}</style>

      {/* ==================== HERO ==================== */}
      <section className="relative z-10 min-h-[100dvh] flex flex-col items-center justify-center px-6 py-16 md:py-20">
        <img src="/logo.svg" alt="Projekt Organika™" className="h-8 md:h-10 mb-8 md:mb-10" />

        <p className="text-[#e2a84b] font-medium text-sm md:text-lg mb-5 md:mb-6 tracking-wide text-center">
          Podnikáš ve zdraví a čekáš na doporučení?
        </p>

        <h1 className="text-center max-w-[900px] font-bold leading-[1.1] tracking-tight text-[1.75rem] md:text-[3.25rem]">
          Získej systém, díky kterému experti ve zdraví získali{" "}
          <span className="text-[#4ade80]">z&nbsp;0 na 10&nbsp;000+ sledujících</span>{" "}
          a <span className="text-[#4ade80]">20+ klientů</span> za 40 dnů.
        </h1>

        {/* Decorative line */}
        <div className="mt-6 md:mt-8 w-16 h-px bg-gradient-to-r from-transparent via-[#4ade80]/60 to-transparent" />

        <p className="mt-5 md:mt-6 text-center text-base md:text-xl text-[#9cb89c]">
          Bez reklam. Bez agentury. Jen přes telefon.
        </p>

        <p className="mt-5 md:mt-8 text-center text-[15px] md:text-lg text-[#c5d8c5] max-w-[680px] leading-relaxed px-2">
          <strong className="text-white">3denní online trénink</strong> pro
          experty ve zdraví, kteří chtějí přestat čekat na doporučení — a začít
          systematicky přitahovat klienty pomocí osobní značky za 1&nbsp;hodinu denně{" "}
          <span className="text-[#4ade80]">&quot;na automat&quot;</span>.
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
          CHCI SYSTÉM ZA 990 KČ
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
              Celostní medicína. Klienti z doporučení. Nula příspěvků. Přesně tohle byla naše startovní pozice.
            </p>

            <div className="mt-6 md:mt-8 space-y-6 md:space-y-8">
              <p className="text-[#c5d8c5] leading-relaxed text-[15px] md:text-base">
                <span className="text-[#4ade80] font-semibold">Za 40 dnů:</span>{" "}
                <strong className="text-white">10 000+ sledujících a první noví klienti z Instagramu.</strong> Bez koruny do reklamy.
              </p>
              <p className="text-[#c5d8c5] leading-relaxed text-[15px] md:text-base">
                <span className="text-[#4ade80] font-semibold">Za 6 měsíců:</span>{" "}
                <strong className="text-white">700+ kvalifikovaných leadů.</strong> Dnes má přes 30&nbsp;000 sledujících a stabilní přísun klientů.
              </p>
              <p className="text-[#c5d8c5] leading-relaxed text-[15px] md:text-base">
                <span className="text-[#4ade80] font-semibold">Dnes:</span>{" "}
                <strong className="text-white">Plný kalendář klientů každý měsíc.</strong> Bez závislosti na doporučeních.
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
                  Tohle nebyla náhoda. Byl to <span className="text-[#4ade80] not-italic">systém</span>.
                </p>
                <p className="text-lg md:text-xl font-semibold mt-1">Teď je řada na Tobě.</p>
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
            Přečti si tohle a řekni mi, jestli se v&nbsp;tom nepoznáváš:
          </h2>

          <img src="/sad.webp" alt="" className="w-full max-h-[300px] md:max-h-[400px] rounded-2xl mb-8 md:mb-14 object-cover" />

          <div className="space-y-6 md:space-y-8">
            <p className="text-[#c5d8c5] leading-[1.75] text-[15px] md:text-xl">
              <strong className="text-white">Každý měsíc žiješ v nejistotě</strong>{" "}
              — přijdou klienti, nebo nepřijdou? A ta nejistota tě vyčerpává víc než samotná práce.
            </p>
            <p className="text-[#c5d8c5] leading-[1.75] text-[15px] md:text-xl">
              <strong className="text-white">Sleduješ, jak experti s polovičním know-how</strong>{" "}
              mají plné kalendáře… zatímco ty čekáš na další doporučení od známého.
            </p>
            <p className="text-[#c5d8c5] leading-[1.75] text-[15px] md:text-xl">
              <strong className="text-white">Víš, že Instagram je příležitost.</strong>{" "}
              Ale pokaždé, když ho otevřeš, cítíš frustraci — protože nemáš jasný systém.
            </p>
            <p className="text-[#c5d8c5] leading-[1.75] text-[15px] md:text-xl">
              A mezitím? <strong className="text-white">Lidi, kterým bys mohl změnit život, o tobě prostě neví</strong>{" "}
              — a místo tebe najdou někoho s lepším marketingem a horší odborností.
            </p>
          </div>

          {/* Highlighted closing */}
          <div className="mt-10 md:mt-14 py-6 md:py-8 border-t border-b border-[#1a2a1b]">
            <p className="text-center text-lg md:text-2xl font-semibold leading-snug">
              Každý den, kdy nejsi vidět, přicházíš o&nbsp;klienty, kteří Tě právě teď potřebují.{" "}
              <span className="text-[#4ade80]">Jen&nbsp;tě&nbsp;nevidí.</span>
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

          <div className="space-y-6 md:space-y-8">
            <p className="text-[#c5d8c5] leading-[1.75] text-[15px] md:text-xl">
              Přestaneš být &quot;ten šikovný odborník, o kterém nikdo neví&quot; — a{" "}
              <strong className="text-white">staneš se autoritou, kterou lidi sledují, sdílejí a doporučují</strong> i cizím.
            </p>
            <p className="text-[#c5d8c5] leading-[1.75] text-[15px] md:text-xl">
              <strong className="text-white">Klienti Ti píšou sami</strong>{" "}
              — ne proto, že tě doporučil kamarád, ale proto, že viděli tvůj obsah a řekli si: &quot;Tohle je přesně ten člověk, kterého hledám.&quot;
            </p>
            <p className="text-[#c5d8c5] leading-[1.75] text-[15px] md:text-xl">
              <strong className="text-white">Tvůj kalendář se plní</strong>{" "}
              bez toho, abys někoho prosil, přesvědčoval nebo dával slevy.
            </p>
            <p className="text-[#c5d8c5] leading-[1.75] text-[15px] md:text-xl">
              <strong className="text-white">Tvá odbornost pracuje pro Tebe 24/7</strong> — a přesně víš, co dělat.
            </p>
            <p className="text-[#c5d8c5] leading-[1.75] text-[15px] md:text-xl">
              <strong className="text-white">Máš kompletní systém od A do Z,</strong>{" "}
              co Tě dostane na oči statisícům klientů a přivádí poptávky &quot;na automat&quot;.
            </p>
          </div>

          {/* Decorative line */}
          <div className="my-12 md:my-16 w-full h-px bg-gradient-to-r from-transparent via-[#1a2a1b] to-transparent" />

          {/* System pitch */}
          <div className="text-center">
            <h3 className="font-bold leading-tight tracking-tight text-xl md:text-[2rem]">
              Ukradni můj systém, co funguje expertům ve zdraví, jako ty.
            </h3>
            <p className="mt-5 md:mt-6 text-[#c5d8c5] text-[15px] md:text-lg leading-relaxed">
              Projekt Organika ti dá{" "}
              <strong className="text-white">ověřený 3-fázový proces, který proměňuje neviditelné experty v autority s plnými kalendáři:</strong>
            </p>

            <div className="mt-6 md:mt-8 flex flex-col items-start max-w-[320px] mx-auto gap-2.5 md:gap-3 text-[15px] md:text-base">
              {["Funguje jen s telefonem", "Funguje s hodinou denně", "Funguje bez koruny do reklamy", "Funguje od nuly — a rychle."].map((line, i) => (
                <div key={i} className="flex items-center gap-3 text-[#c5d8c5]">
                  <span className="text-[#4ade80]">&rarr;</span>
                  <span>{line}</span>
                </div>
              ))}
            </div>

            <a
              href={CTA_LINK}
              className="mt-8 md:mt-10 w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0a1a0a] via-[#143d1a] to-[#1a5c25] border border-[#2a5a2a] px-6 md:px-8 py-4 text-base md:text-lg font-bold text-white transition-all hover:from-[#0f220f] hover:via-[#1a4d20] hover:to-[#22702e] hover:shadow-[0_0_40px_rgba(74,222,128,0.15)] active:scale-[0.98]"
            >
              CHCI PLNÝ KALENDÁŘ — 990 KČ
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
              { num: "01", day: "Den 1", title: "Předtím, než začneš tvořit…", warn: "Jedno špatné rozhodnutí na startu = tisíce zhlédnutí, nula klientů.", text: <>Nastavíš profil přesně tak, jak vypadaly účty, které vyrostly na 10K+. Ne poznámky — <strong className="text-white">hotový profil.</strong></> },
              { num: "02", day: "Den 2", title: "Obsah, ze kterého chodí klienti", warn: "Jak oslovit +100 000 relevantních lidí jedním videem.", text: <>Odhalíš tajemství milionových videí mých klientů. A natočíš 1. video s mou pomocí. <strong className="text-white">Krok za krokem. Dnes.</strong></> },
              { num: "03", day: "Den 3", title: "Kompletní mapa od 0 po stabilní příjem", warn: 'Ukradneš můj "Growmat" systém — klienti přes Instagram a AI.', text: <>Celý systém od A do Z: fáze růstu, automatizace, škálování. <strong className="text-white">Z profilu uděláš magnet na klienty.</strong></> },
            ].map((d, i) => (
              <div key={d.num} className="w-full flex flex-col items-center">
                {/* Number */}
                <span className="text-3xl md:text-4xl font-bold text-[#4ade80]/20 mb-3">{d.num}</span>

                {/* Card */}
                <div className="w-full rounded-2xl border border-[#1a2a1b] bg-[#0e160f] p-5 md:p-8">
                  <p className="text-[10px] md:text-xs text-[#4ade80] font-medium tracking-wider uppercase mb-1">{d.day}</p>
                  <h3 className="font-bold text-base md:text-xl mb-3 md:mb-4">{d.title}</h3>
                  <p className="text-[#e2a84b] font-medium text-xs md:text-sm mb-3">{d.warn}</p>
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
            Ale to není všechno.
          </h2>
          <p className="text-center text-[15px] md:text-lg text-[#9cb89c] mb-10 md:mb-14">
            Tyhle bonusy dostaneš k tomu:
          </p>

          <div className="space-y-4 md:space-y-6">
            {[
              { n: "01", title: "Rozbor 5 virálních videí, co získala miliony zhlédnutí", text: <>Uvidíš přesně, proč fungují — a jak to zopakovat u sebe. <strong className="text-white">Rozdíl mezi &quot;zkouším, co zabere&quot; a &quot;vím přesně, co natočit.&quot;</strong></> },
              { n: "02", title: "3 případové studie klientů: kompletní nahlédnutí pod pokličku", text: <>3 reální klienti. 3 různé obory. 1 systém. <strong className="text-white">Vezmeš si mapu, která už někoho dovedla do cíle.</strong></> },
              { n: "03", title: "Dárek v hodnotě 10 000 Kč pro ty, co to myslí vážně", text: <>Dokonči všechny lekce a odemkni odměnu. <strong className="text-white">Detaily uvnitř</strong> — tohle je důvod dokončit každý úkol.</> },
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
              <strong className="text-[#4ade80] text-xl md:text-2xl">0 Kč</strong>
            </p>
          </div>

          <div className="text-center mt-6 md:mt-8">
            <a
              href={CTA_LINK}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0a1a0a] via-[#143d1a] to-[#1a5c25] border border-[#2a5a2a] px-6 md:px-8 py-4 text-base md:text-lg font-bold text-white transition-all hover:from-[#0f220f] hover:via-[#1a4d20] hover:to-[#22702e] hover:shadow-[0_0_40px_rgba(74,222,128,0.15)] active:scale-[0.98]"
            >
              CHCI SYSTÉM + BONUSY ZA 990 KČ
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
            <p className="text-4xl md:text-6xl font-bold text-white tracking-tight">20 000 000+</p>
            <p className="text-sm md:text-base text-[#9cb89c] mt-2">organických zhlédnutí. <span className="text-[#4ade80]">0 Kč do reklamy.</span></p>
          </div>

          <div className="text-center mt-4 md:mt-6">
            <a
              href={CTA_LINK}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0a1a0a] via-[#143d1a] to-[#1a5c25] border border-[#2a5a2a] px-6 md:px-8 py-4 text-base md:text-lg font-bold text-white transition-all hover:from-[#0f220f] hover:via-[#1a4d20] hover:to-[#22702e] hover:shadow-[0_0_40px_rgba(74,222,128,0.15)] active:scale-[0.98]"
            >
              VSTOUPIT DO PROJEKTU ORGANIKA
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
              Před dvěma lety mi obchodní partner ukradl všechno — podcastové účty s 30&nbsp;000 sledujícími. Ze dne na den jsem stál na nule. S&nbsp;dluhy. Bez domova. Bez příjmu.
            </p>
            <p>
              Měl jsem dvě možnosti: buď se zhroutit, nebo začít znovu — tentokrát líp.
            </p>
            <p className="text-white font-medium">
              Za poslední rok: 6 účtů z nuly na 10 000+ sledujících. Přes 20 milionů organických zhlédnutí. Vše bez jediné koruny do reklamy.
            </p>
            <p>
              Dnes pomáhám podnikatelům ve zdraví proměnit Instagram na jejich hlavní zdroj klientů.
            </p>
          </div>

          {/* Signature quote */}
          <div className="mt-8 md:mt-10 pl-4 md:pl-6 border-l-2 border-[#4ade80]/40">
            <p className="text-[#4ade80] font-medium italic text-base md:text-lg">
              Protože tvoje znalosti mohou lidem měnit životy. Mojí rolí je zajistit, aby o nich svět věděl.
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
              Kouč na Instagram: 5 000–15 000 Kč/h. Agentura: 20 000+ Kč/měsíc.
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
              Pokud ti trénink nepřinese alespoň 3 &bdquo;aha momenty&ldquo;, napiš mi —{" "}
              <strong className="text-white">vrátím ti peníze.</strong>
            </p>

            <div className="mt-5 md:mt-8 py-3 px-4 md:py-4 md:px-6 rounded-xl bg-[#141e15]/50 border border-[#1a2a1b]/50 inline-block">
              <p className="text-[#e2a84b] font-medium text-sm md:text-base">Prvních 100 účastníků za tuhle cenu.</p>
              <p className="text-xs md:text-sm text-[#9cb89c] mt-1">Potom 1 990 Kč.</p>
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
              { q: "Nemám zkušenosti s natáčením — zvládnu to?", a: "Ano. Systém funguje i bez mluvení na kameru. Stačí telefon a 1 hodina denně." },
              { q: "Už mám web a klienty z doporučení — k čemu mi to bude?", a: "Web čeká, až ho někdo najde. Instagram aktivně přivádí lidi k tobě. Teprve Instagram mým klientům naplnil kalendáře." },
              { q: "Musím být online každý den?", a: "Ne. Growmat systém je na 1\u20132 hodiny denně." },
              { q: "Čím se tohle liší od kurzů na sociální sítě?", a: 'Většina kurzů ti řekne \u201Ebuď konzistentní.\u201C Projekt Organika ti dá konkrétní systém \u2014 co postovat, jak to strukturovat, jak z toho udělat klienty.' },
              { q: "Co když to u mě nebude fungovat?", a: 'Systém fungoval u 6 různých účtů. Pokud ti trénink nepřinese alespoň 3 \u201Eaha momenty\u201C, vrátím ti peníze.' },
              { q: "Je to i pro lidi mimo zdraví?", a: "Ne. Výhradně pro oblast zdraví — fyzické, mentální, celostní." },
              { q: "Jak dlouho mám přístup?", a: "Navždy. Doživotní přístup ke všemu obsahu i aktualizacím." },
              { q: "Je to živý trénink nebo nahrávka?", a: "Kombinace. Video lekce, úkoly a možnost soutěžit o 1:1 mentoring. Vlastním tempem." },
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
                Zavřeš stránku. Za rok budeš stále žít z doporučení a sledovat, jak kolegové s horší odborností plní kalendáře.
              </p>
            </div>
            <div className="rounded-xl border border-[#4ade80]/30 bg-[#0e160f] p-5 md:p-6">
              <p className="text-xs text-[#4ade80] font-medium mb-2">Možnost 2</p>
              <p className="text-[#c5d8c5] leading-relaxed text-sm md:text-base">
                Vstoupíš do Projektu Organika. Za 3 dny systém. Za měsíc první klienty z Instagramu.
              </p>
            </div>
          </div>

          {/* Decorative line */}
          <div className="w-12 h-px bg-[#4ade80]/40 mx-auto mb-6 md:mb-8" />

          <h3 className="font-bold leading-tight mb-8 md:mb-10 text-lg md:text-[2rem]">
            Tvoje odbornost si zaslouží být vidět.{" "}
            <span className="text-[#4ade80]">Dej jí systém, který z ní udělá plný kalendář.</span>
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
            <span>Bezpečná platba</span><span>·</span><span>Okamžitý přístup</span><span>·</span><span>Doživotní členství</span>
          </p>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="px-6 py-12 md:py-16 border-t border-[#1a2a1b]">
        <div className="max-w-[500px] md:max-w-[600px] mx-auto text-center">
          <p className="text-[#9cb89c] leading-relaxed text-sm md:text-base">
            <strong className="text-white">P.S.</strong> Zvýhodněná cena 990 Kč platí jen do naplnění prvních 100 míst.
            @celiso.cz má přes 30 000 sledujících a plný kalendář. Jediný rozdíl mezi ním a tebou? On ten systém už má.
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
