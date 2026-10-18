"use client";

import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/container";
import { Kicker } from "@/components/kicker";
import { useSite } from "@/components/site-provider";
import { SERVICES, SHOW_NOTES, pad2 } from "@/lib/content";
import { useSnapScroller } from "@/lib/use-snap-scroller";

export function Services() {
  const { go } = useSite();
  const { ref, state } = useSnapScroller();
  const display = state.end ? SERVICES.length - 1 : state.i;

  return (
    <section id="services" className="overflow-x-clip bg-white py-[clamp(72px,10vw,160px)]">
      <Container>
        <div className="he-intro">
          <div className="he-intro-title" data-reveal="">
            <Kicker>Our Expertise</Kicker>
            <h2 className="m-[20px_0_0_-0.05em] text-[clamp(38px,5.8vw,88px)] leading-[0.97] font-extrabold tracking-[-0.035em] text-balance">
              <span className="block">Electrical Solutions.</span>
              <span className="block">Built Around You.</span>
            </h2>
          </div>
          <p
            className="he-intro-copy m-0 text-[17px] leading-[1.65] text-neutral-700 text-pretty"
            data-reveal=""
            data-delay="100"
          >
            Whether you&apos;re building from scratch, renovating a much-loved home or just need a few extra power points, we bring the same care to every job — from complete new-home installations to lighting, upgrades and everyday electrical work.
          </p>
        </div>

        <div className="mt-[clamp(40px,6vw,80px)] mb-[clamp(32px,4vw,56px)] h-0.5 bg-divider" />

        <div className="he-swipe-hint mt-[-8px] mb-4 items-center justify-between text-[13px] font-semibold text-neutral-700">
          <span>Swipe to see all six services</span>
          <span className="font-extrabold text-ink tabular-nums">
            {pad2(display + 1)} / {pad2(SERVICES.length)}
          </span>
        </div>

        <div ref={ref} className="he-services">
          {SERVICES.map((service, index) => (
            <a
              key={service.title}
              href="#contact"
              onClick={go("contact")}
              data-reveal="desktop"
              data-delay={(index % 3) * 90}
              className="he-service group"
            >
              <div className="he-service-media">
                <img
                  src={service.image}
                  alt={service.alt ?? service.title}
                  draggable={false}
                  loading="lazy"
                  className="he-zoom absolute inset-0 h-full w-full max-w-none object-cover contrast-[1.03] saturate-[1.04]"
                  style={{ objectPosition: service.position ?? "50% 50%" }}
                />
                <span className="pointer-events-none absolute top-0 left-0 bg-white px-3.5 py-2.5 text-[13px] font-extrabold tabular-nums">
                  {pad2(index + 1)}
                </span>
              </div>
              <div className="mt-5 flex flex-col gap-2.5 border-t-2 border-divider pt-[18px] transition-colors duration-300 group-hover:border-accent group-focus-visible:border-accent">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="he-service-title m-0 leading-[1.08] font-extrabold tracking-[-0.02em] text-balance">
                    {service.title}
                  </h3>
                  <span className="flex size-10 shrink-0 items-center justify-center border-2 border-divider text-ink transition-[background-color,border-color,color] duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white group-focus-visible:border-accent group-focus-visible:bg-accent group-focus-visible:text-white">
                    <ArrowUpRight size={16} strokeWidth={2.25} strokeLinecap="square" strokeLinejoin="miter" aria-hidden />
                  </span>
                </div>
                <p className="he-service-copy m-0 text-[15.5px] leading-[1.58] text-neutral-700 text-pretty">
                  {service.description}
                </p>
                {SHOW_NOTES && service.note ? (
                  <span className="mt-0.5 self-start border border-accent px-2.5 py-[3px] text-[11px] tracking-[0.02em] text-accent">
                    {service.note}
                  </span>
                ) : null}
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
