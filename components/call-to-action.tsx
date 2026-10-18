import { Phone } from "lucide-react";
import { Container } from "@/components/container";
import { CtaButton } from "@/components/cta-button";
import { Kicker } from "@/components/kicker";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/content";

export function CallToAction() {
  return (
    <section aria-label="Get in touch" className="bg-neutral-900 text-white">
      <Container className="py-[clamp(80px,10vw,150px)]">
        <div className="flex flex-wrap items-end justify-between gap-y-10 gap-x-[clamp(48px,6vw,112px)]">
          <div data-reveal="" className="min-w-0 flex-[1_1_600px]">
            <Kicker tone="bright">Ready When You Are</Kicker>
            <h2 className="m-[24px_0_0_-0.055em] text-[clamp(44px,7.2vw,112px)] leading-[0.93] font-extrabold tracking-[-0.04em] text-white">
              <span className="block">Let&apos;s Get Your</span>
              <span className="block">
                Project Moving<span className="text-accent">.</span>
              </span>
            </h2>
          </div>
          <div
            data-reveal=""
            data-delay="120"
            className="flex min-w-0 flex-[0_1_440px] flex-col gap-7 border-t-2 border-accent pt-7"
          >
            <p className="m-0 text-[clamp(17px,1.4vw,20px)] leading-[1.6] text-[color-mix(in_srgb,white_72%,transparent)] text-pretty">
              Planning a renovation, building a new home or need electrical work done? Get in touch and let&apos;s talk about what you need.
            </p>
            <div className="flex flex-col gap-3">
              <CtaButton href="#contact" className="px-[22px] py-5 text-[17px]">
                Get in Touch
              </CtaButton>
              <CtaButton
                href={PHONE_HREF}
                variant="light-dim"
                className="px-[22px] py-[19px] text-[17px]"
                icon={<Phone size={18} strokeWidth={2} strokeLinecap="square" strokeLinejoin="miter" aria-hidden />}
              >
                <span>
                  Or call <span className="tabular-nums">{PHONE_DISPLAY}</span>
                </span>
              </CtaButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
