"use client";

import { useEffect, useRef, useState } from "react";

type CaseStudy = {
  before: string;
  after: string;
  handle?: string;
  result?: string;
};

export function CaseStudiesCarousel({ cases }: { cases: CaseStudy[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pauseUntilRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const getStep = () => {
      const firstCard = container.querySelector<HTMLElement>("[data-card]");
      if (!firstCard) return 0;
      return firstCard.offsetWidth + 20;
    };

    const advance = () => {
      if (Date.now() < pauseUntilRef.current) return;
      const step = getStep();
      if (!step) return;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const nextPos = container.scrollLeft + step;
      if (nextPos > maxScroll - 4) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: step, behavior: "smooth" });
      }
    };

    const interval = setInterval(advance, 4000);

    const pause = () => {
      pauseUntilRef.current = Date.now() + 6000;
    };

    const onScroll = () => {
      const step = getStep();
      if (!step) return;
      const idx = Math.round(container.scrollLeft / step);
      setActiveIndex(Math.max(0, Math.min(cases.length - 1, idx)));
    };

    container.addEventListener("pointerdown", pause);
    container.addEventListener("wheel", pause, { passive: true });
    container.addEventListener("touchstart", pause, { passive: true });
    container.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      clearInterval(interval);
      container.removeEventListener("pointerdown", pause);
      container.removeEventListener("wheel", pause);
      container.removeEventListener("touchstart", pause);
      container.removeEventListener("scroll", onScroll);
    };
  }, [cases.length]);

  const scrollToIndex = (i: number) => {
    const container = containerRef.current;
    if (!container) return;
    const firstCard = container.querySelector<HTMLElement>("[data-card]");
    if (!firstCard) return;
    const step = firstCard.offsetWidth + 20;
    pauseUntilRef.current = Date.now() + 6000;
    container.scrollTo({ left: step * i, behavior: "smooth" });
  };

  return (
    <>
      <div
        ref={containerRef}
        className="overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex gap-5 md:gap-6 px-4 md:px-6 pb-4">
          {cases.map((c, i) => (
            <div
              key={i}
              data-card
              className="snap-center shrink-0 w-[75vw] max-w-[300px] md:w-[300px]"
            >
              <div className="flex flex-col items-center gap-3">
                <img
                  src={c.before}
                  alt="Před"
                  loading="lazy"
                  className="w-full rounded-lg"
                />
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="shrink-0"
                  aria-hidden="true"
                >
                  <path
                    d="M12 5v14M6 13l6 6 6-6"
                    stroke="#4ade80"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <img
                  src={c.after}
                  alt="Po"
                  loading="lazy"
                  className="w-full rounded-lg"
                />
                {(c.handle || c.result) && (
                  <div className="text-center mt-1">
                    {c.handle && (
                      <p className="text-white font-semibold text-[13px] md:text-sm">
                        {c.handle}
                      </p>
                    )}
                    {c.result && (
                      <p className="text-[#4ade80] text-[12px] md:text-[13px] mt-0.5 leading-tight">
                        {c.result}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator — dots */}
      <div className="flex items-center justify-center gap-2 mt-6 md:mt-8">
        {cases.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => scrollToIndex(i)}
            aria-label={`Přejít na slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeIndex === i
                ? "w-8 bg-[#4ade80]"
                : "w-1.5 bg-[#1a2a1b] hover:bg-[#2a4a2a]"
            }`}
          />
        ))}
      </div>
    </>
  );
}
