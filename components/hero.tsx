import { ArrowDown } from "lucide-react";
import { CtaButton } from "@/components/cta-button";
import { HeroVideo } from "@/components/hero-video";
import { JumpLink } from "@/components/jump-link";
import { Kicker } from "@/components/kicker";
import { SHOW_NOTES } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="home"
      className="he-hero relative h-[92vh] max-h-[1100px] min-h-[620px] overflow-hidden bg-neutral-900 text-white"
    >
      <HeroVideo />
      <div className="he-hero-shade pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[200px] bg-[linear-gradient(180deg,color-mix(in_srgb,#17191c_60%,transparent),transparent)]" />

      <div className="he-hero-copy relative mx-auto flex h-full max-w-[1440px] flex-col justify-end px-[var(--edge)] pb-[clamp(116px,15vh,168px)]">
        <Kicker tone="white">Christchurch Electrical Services</Kicker>
        <h1 className="m-[24px_0_0_-0.055em] text-[clamp(46px,9.2vw,140px)] leading-[0.93] font-extrabold tracking-[-0.04em] text-balance text-white">
          <span className="block">
            Electrical Work<span className="text-accent">.</span>
          </span>
          <span className="block">
            Done Right<span className="text-accent">.</span>
          </span>
        </h1>
        <p className="mt-7 max-w-[500px] text-[clamp(16px,1.35vw,19px)] leading-[1.6] text-[color-mix(in_srgb,white_90%,transparent)] text-pretty">
          From new builds and renovations to lighting and everyday electrical work. Quality workmanship backed by over 30 years of industry experience.
        </p>
        <div className="mt-9 flex flex-wrap items-stretch gap-3">
          <CtaButton
            href="#contact"
            variant="primary-line"
            className="max-w-[260px] flex-1 basis-[230px] px-[22px] py-[19px] text-base whitespace-nowrap"
          >
            Request a Quote
          </CtaButton>
          <CtaButton
            href="#services"
            variant="light"
            className="w-max max-w-full shrink px-[22px] py-[19px] text-base whitespace-nowrap"
            icon={<ArrowDown size={18} strokeWidth={2.25} strokeLinecap="square" strokeLinejoin="miter" aria-hidden />}
          >
            Explore Our Services
          </CtaButton>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0">
        <div className="mx-auto max-w-[1440px] px-[var(--edge)]">
          <div className="flex h-[72px] items-center justify-between gap-6 border-t-2 border-[color-mix(in_srgb,white_24%,transparent)] text-sm text-[color-mix(in_srgb,white_82%,transparent)]">
            <span className="font-semibold">The quality work you deserve</span>
            <div className="flex items-center gap-6">
              {SHOW_NOTES ? (
                <span className="hidden border border-[color-mix(in_srgb,white_40%,transparent)] px-2 py-1 text-[11px] tracking-[0.1em] uppercase min-[640px]:inline-block">
                  Illustrative footage
                </span>
              ) : null}
              <JumpLink
                to="services"
                className="flex items-center gap-3.5 text-xs font-semibold tracking-[0.14em] text-inherit uppercase no-underline"
              >
                Scroll
                <span
                  aria-hidden
                  className="relative block h-10 w-0.5 overflow-hidden bg-[color-mix(in_srgb,white_28%,transparent)]"
                >
                  <span className="he-cue absolute top-0 left-0 h-4 w-0.5 bg-accent" />
                </span>
              </JumpLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
