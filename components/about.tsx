import { CtaButton } from "@/components/cta-button";
import { Container } from "@/components/container";
import { Kicker } from "@/components/kicker";
import { PHONE_DISPLAY, PHONE_HREF, PRINCIPLES } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="bg-neutral-100 py-[clamp(72px,10vw,160px)]">
      <Container className="flex flex-wrap items-stretch gap-[clamp(40px,6vw,96px)]">
        <figure data-reveal="" className="m-0 flex min-w-0 flex-[1_1_440px] flex-col">
          <div className="he-about-media">
            <img
              src="/img/p6.webp"
              alt="A Hanna Electrical electrician on a scaffold fitting downlights into a raked ceiling"
              loading="lazy"
              className="absolute inset-0 h-full w-full max-w-none object-cover object-[42%_75%] contrast-[1.03] saturate-[1.04]"
            />
            <figcaption className="absolute bottom-0 left-0 m-0 flex items-center gap-2.5 bg-white px-4 py-3 text-[13px] text-ink">
              <span className="size-2 shrink-0 bg-accent" aria-hidden />
              On the tools — fitting downlights in a raked ceiling.
            </figcaption>
          </div>
        </figure>

        <div data-reveal="" data-delay="120" className="min-w-0 max-w-[620px] flex-[1_1_440px] self-start">
          <Kicker>Get to Know Us</Kicker>
          <h2 className="m-[20px_0_0_-0.05em] text-[clamp(38px,4.8vw,72px)] leading-[0.98] font-extrabold tracking-[-0.035em]">
            <span className="block">Good Work.</span>
            <span className="block">Honest Service.</span>
            <span className="block">No Shortcuts.</span>
          </h2>
          <div className="mt-8 flex flex-col gap-4 text-[17px] leading-[1.65] text-neutral-700">
            <p className="m-0 text-pretty">
              Hanna Electrical is a locally owned Christchurch business built on more than 30 years in the electrical industry. We look after homeowners, builders and renovators across the city — from full new-build installations to the smaller jobs that make a home work better.
            </p>
            <p className="m-0 text-pretty">
              Our approach is simple. We listen to what you need, give you straight advice and do the job properly the first time. No cutting corners, no unnecessary extras — just quality work you can rely on.
            </p>
          </div>
          <div className="mt-9 flex flex-col">
            {PRINCIPLES.map((item, index) => (
              <div
                key={item[0]}
                className={`grid grid-cols-[44px_1fr] gap-3.5 border-t-2 border-divider py-[18px] ${index === PRINCIPLES.length - 1 ? "border-b-2" : ""}`}
              >
                <span className="pt-[3px] text-[13px] font-extrabold text-accent-700 tabular-nums">{item[0]}</span>
                <div>
                  <div className="text-lg font-extrabold tracking-[-0.01em]">{item[1]}</div>
                  <div className="mt-1 text-[15px] leading-[1.55] text-neutral-700">{item[2]}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <CtaButton href="#contact" gap={40} className="px-[22px] py-[18px] text-base">
              Talk to Us About Your Project
            </CtaButton>
            <a
              href={PHONE_HREF}
              className="border-b-2 border-accent pb-0.5 text-base font-extrabold text-ink no-underline"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
