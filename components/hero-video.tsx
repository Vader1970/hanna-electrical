"use client";

import { useEffect, useRef } from "react";

export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      if (motion.matches) {
        video.removeAttribute("autoplay");
        video.pause();
      } else {
        video.autoplay = true;
        const pending = video.play();
        if (pending) pending.catch(() => undefined);
      }
    };

    sync();
    motion.addEventListener("change", sync);
    return () => motion.removeEventListener("change", sync);
  }, []);

  return (
    <video
      ref={ref}
      className="he-hero-video absolute inset-0 h-full w-full max-w-none object-cover"
      src="/img/hero.mp4"
      poster="/img/hero-poster.png"
      muted
      autoPlay
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
    />
  );
}
