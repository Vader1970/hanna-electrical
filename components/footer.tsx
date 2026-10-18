import { ArrowRight, ArrowUp } from "lucide-react";
import { Container } from "@/components/container";
import { CtaButton } from "@/components/cta-button";
import { JumpLink } from "@/components/jump-link";
import { Logo } from "@/components/logo";
import { EMAIL, EMAIL_HREF, NAV, PHONE_DISPLAY, PHONE_HREF, SHOW_NOTES } from "@/lib/content";

export function Footer() {
  return (
    <footer id="site-footer" className="bg-ink text-white">
      <Container className="pt-[clamp(56px,7vw,104px)] pb-10 md:pb-8">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-x-10 gap-y-11">
          <div className="flex max-w-[360px] flex-col gap-5">
            <Logo inverted className="h-[30px] self-start" />
            <p className="m-0 text-[15px] leading-[1.6] text-[color-mix(in_srgb,white_72%,transparent)] text-pretty">
              A locally owned electrical business in Christchurch, New Zealand. New builds, renovations, lighting and everyday electrical work.
            </p>
          </div>
          <div>
            <div className="border-b-2 border-[color-mix(in_srgb,white_16%,transparent)] pb-4 text-xs font-semibold tracking-[0.14em] text-accent-400 uppercase">
              Explore
            </div>
            <nav aria-label="Footer" className="mt-[18px] flex flex-col gap-2.5">
              {NAV.map((item) => (
                <JumpLink
                  key={item.id}
                  to={item.id}
                  className="self-start text-[15px] text-[color-mix(in_srgb,white_82%,transparent)] no-underline hover:text-white"
                >
                  {item.label}
                </JumpLink>
              ))}
            </nav>
          </div>
          <div>
            <div className="border-b-2 border-[color-mix(in_srgb,white_16%,transparent)] pb-4 text-xs font-semibold tracking-[0.14em] text-accent-400 uppercase">
              Contact
            </div>
            <div className="mt-[18px] flex flex-col gap-2.5 text-[15px]">
              <a href={PHONE_HREF} className="text-lg font-extrabold text-white no-underline hover:text-accent-400">
                {PHONE_DISPLAY}
              </a>
              <a
                href={EMAIL_HREF}
                className="text-[color-mix(in_srgb,white_82%,transparent)] no-underline wrap-anywhere hover:text-white"
              >
                {EMAIL}
              </a>
              <span className="text-[color-mix(in_srgb,white_82%,transparent)]">Christchurch, New Zealand</span>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4">
            <div className="text-[clamp(22px,2vw,28px)] leading-[1.1] font-extrabold tracking-[-0.02em]">
              The quality work you deserve.
            </div>
            <CtaButton
              href="#contact"
              gap={32}
              className="px-[18px] py-3.5 text-[15px]"
              icon={<ArrowRight size={16} strokeWidth={2.25} strokeLinecap="square" strokeLinejoin="miter" aria-hidden />}
            >
              Get a Quote
            </CtaButton>
          </div>
        </div>

        <div className="mt-[clamp(48px,6vw,88px)] flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t-2 border-[color-mix(in_srgb,white_16%,transparent)] pt-6 text-[13px] text-[color-mix(in_srgb,white_66%,transparent)]">
          <span>© 2026 Hanna Electrical. All rights reserved.</span>
          {/* {SHOW_NOTES ? <span>Hero footage is illustrative and does not show completed Hanna Electrical projects.</span> : null} */}
          <JumpLink to="home" className="flex items-center gap-2 font-semibold text-white no-underline hover:text-accent-400">
            Back to top
            <ArrowUp size={14} strokeWidth={2.25} strokeLinecap="square" strokeLinejoin="miter" aria-hidden />
          </JumpLink>
        </div>
      </Container>
    </footer>
  );
}
