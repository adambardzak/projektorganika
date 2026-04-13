"use client";

import { useRef, useState } from "react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="relative rounded-xl md:rounded-2xl overflow-hidden border border-[#1a2a1b] bg-[#0e160f] shadow-[0_0_60px_rgba(74,222,128,0.08)]">
      <video
        ref={videoRef}
        controls
        playsInline
        preload="metadata"
        poster="/vsl-poster.webp"
        className="w-full h-auto aspect-video"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      >
        <source src="/vsl.mp4" type="video/mp4" />
        Tvůj prohlížeč nepodporuje přehrávání videa.
      </video>

      {/* Top label — inside video, doesn't affect layout */}
      {!playing && (
        <button
          type="button"
          onClick={handlePlay}
          className="absolute top-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 bg-black/60 rounded-full px-3 py-1.5 cursor-pointer hover:bg-black/80 transition-colors"
        >
          <span className="w-5 h-5 rounded-full bg-[#4ade80] flex items-center justify-center shrink-0">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="text-white text-[12px] md:text-[13px] font-medium whitespace-nowrap">
            Pusť si úvodní lekci zdarma
          </span>
        </button>
      )}
    </div>
  );
}
