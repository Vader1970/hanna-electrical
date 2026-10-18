"use client";

import { useEffect, useState } from "react";
import { Maximize2 } from "lucide-react";
import { Container } from "@/components/container";
import { Kicker } from "@/components/kicker";
import { PagerButton } from "@/components/pager-button";
import { useSite } from "@/components/site-provider";
import { GALLERY, pad2 } from "@/lib/content";
import { useSnapScroller } from "@/lib/use-snap-scroller";

export function WorkGallery() {
  const { setLightboxOpen } = useSite();
  const { ref, state, scrollToIndex } = useSnapScroller();
  const [index, setIndex] = useState(-1);
  const display = state.end ? GALLERY.length - 1 : state.i;
  const active = index >= 0 ? GALLERY[index] : null;

  useEffect(() => {
    setLightboxOpen(index >= 0);
    document.body.style.overflow = index >= 0 ? "hidden" : "";
  }, [index, setLightboxOpen]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
      setLightboxOpen(false);
    };
  }, [setLightboxOpen]);

  useEffect(() => {
    if (index < 0) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIndex(-1);
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setIndex((current) => (current + 1) % GALLERY.length);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setIndex((current) => (current - 1 + GALLERY.length) % GALLERY.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  const close = () => setIndex(-1);
  const step = (direction: number) => setIndex((current) => (current + direction + GALLERY.length) % GALLERY.length);

  return (
    <section id="work" className="bg-neutral-900 pt-[clamp(72px,10vw,160px)] pb-[clamp(64px,8vw,120px)] text-white">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-x-16 gap-y-6">
          <div data-reveal="" className="min-w-0 flex-[1_1_520px]">
            <Kicker tone="bright">Our Work</Kicker>
            <h2 className="m-[20px_0_0_-0.05em] text-[clamp(38px,5.8vw,88px)] leading-[0.97] font-extrabold tracking-[-0.035em] text-white">
              Quality You Can See.
            </h2>
          </div>
          <p
            data-reveal=""
            data-delay="100"
            className="m-0 max-w-[46ch] text-[17px] leading-[1.65] text-[color-mix(in_srgb,white_74%,transparent)] text-pretty min-[1024px]:pb-3"
          >
            A selection of recent jobs — new builds, upgrades and the finishing details in between. Select any photo to view it full size.
          </p>
        </div>
      </Container>

      <div ref={ref} className="he-strip mt-[clamp(40px,5vw,72px)]">
        {GALLERY.map((item, itemIndex) => (
          <figure key={item.src + item.caption} className="he-shot m-0 flex flex-col gap-3.5">
            <button
              type="button"
              onClick={() => setIndex(itemIndex)}
              aria-label={`Open photo ${itemIndex + 1}: ${item.caption}`}
              className="group relative block aspect-[4/5] w-full cursor-zoom-in overflow-hidden border-0 bg-neutral-800 p-0"
            >
              <span
                role="img"
                aria-label={item.caption}
                className="he-zoom absolute inset-0 bg-no-repeat contrast-[1.03] saturate-[1.04]"
                style={{
                  backgroundImage: `url("${item.src}")`,
                  backgroundSize: item.size,
                  backgroundPosition: item.position,
                }}
              />
              <span className="absolute right-0 bottom-0 flex size-11 items-center justify-center bg-[color-mix(in_srgb,#1B1D20_72%,transparent)] text-white transition-colors duration-300 group-hover:bg-accent group-focus-visible:bg-accent">
                <Maximize2 size={16} strokeWidth={2.25} strokeLinecap="square" strokeLinejoin="miter" aria-hidden />
              </span>
            </button>
            <figcaption className="m-0 flex gap-3 text-sm leading-[1.45] text-[color-mix(in_srgb,white_76%,transparent)]">
              <span className="font-extrabold text-white tabular-nums">{pad2(itemIndex + 1)}</span>
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <Container className="mt-[clamp(28px,3vw,44px)]">
        <div className="grid grid-cols-[1fr_auto] items-center gap-x-5 gap-y-2 border-t-2 border-[color-mix(in_srgb,white_14%,transparent)] pt-5 min-[540px]:grid-cols-[auto_minmax(0,1fr)_auto]">
          <span className="min-w-[62px] text-[15px] font-extrabold tabular-nums">
            {pad2(display + 1)} / {pad2(GALLERY.length)}
          </span>
          <div className="col-span-2 flex h-11 min-w-0 items-center gap-1 min-[540px]:col-span-1 min-[540px]:col-start-2 min-[540px]:row-start-1">
            {GALLERY.map((item, itemIndex) => {
              const current = itemIndex === display;
              return (
                <button
                  key={item.caption}
                  type="button"
                  onClick={() => scrollToIndex(itemIndex)}
                  aria-label={`Go to photo ${itemIndex + 1}`}
                  aria-current={current ? "true" : undefined}
                  className="flex h-11 min-w-6 max-w-14 flex-1 cursor-pointer items-center border-0 bg-transparent p-0"
                >
                  <span
                    className={`block h-[3px] w-full transition-colors duration-300 ${current ? "bg-accent" : "bg-[color-mix(in_srgb,white_22%,transparent)]"}`}
                  />
                </button>
              );
            })}
          </div>
          <div className="col-start-2 row-start-1 flex items-center gap-5 min-[540px]:col-start-3">
            <PagerButton
              direction="prev"
              tone="prev-light"
              label="Previous photo"
              disabled={state.start}
              onClick={() => scrollToIndex(state.i - 1)}
            />
            <PagerButton
              direction="next"
              tone="next"
              label="Next photo"
              disabled={state.end}
              onClick={() => scrollToIndex(state.i + 1)}
            />
          </div>
        </div>
      </Container>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={close}
          className="fixed inset-0 z-[300] flex flex-col bg-[color-mix(in_srgb,#1B1D20_97%,transparent)] text-white"
        >
          <div className="flex h-20 items-center justify-between px-[clamp(16px,3vw,40px)]">
            <span className="text-[15px] font-extrabold tabular-nums">
              {pad2(index + 1)} / {pad2(GALLERY.length)}
            </span>
            <PagerButton tone="close" icon="close" size={52} label="Close photo viewer" onClick={close} />
          </div>
          <div className="flex min-h-0 flex-1 items-center justify-center gap-4 px-[clamp(8px,2vw,32px)]">
            <PagerButton
              direction="prev"
              tone="prev-overlay"
              size={52}
              label="Previous photo"
              onClick={() => step(-1)}
            />
            <div
              className="flex h-full min-w-0 max-w-[1100px] flex-1 items-center justify-center"
              onClick={(event) => event.stopPropagation()}
            >
              <img src={active.src} alt={active.caption} className="max-h-full max-w-full object-contain" />
            </div>
            <PagerButton direction="next" tone="next" size={52} label="Next photo" onClick={() => step(1)} />
          </div>
          <div className="flex gap-3 px-[clamp(16px,3vw,40px)] pt-5 pb-7 text-[15px] text-[color-mix(in_srgb,white_82%,transparent)]">
            <span className="mt-1.5 size-2.5 shrink-0 bg-accent" aria-hidden />
            {active.caption}
          </div>
        </div>
      ) : null}
    </section>
  );
}
