"use client";

import { ArrowRight, Phone, X } from "lucide-react";
import { CtaButton } from "@/components/cta-button";
import { Logo } from "@/components/logo";
import { useSite } from "@/components/site-provider";
import { NAV, PHONE_HREF, EMAIL, EMAIL_HREF, pad2 } from "@/lib/content";
import { cn } from "@/lib/cn";

function MenuIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M3 8h18" strokeLinecap="square" />
      <path d="M3 16h18" strokeLinecap="square" />
    </svg>
  );
}

export function Header() {
  const { solid, active, menuOpen, toggleMenu, go } = useSite();
  const ink = solid ? "text-ink" : "text-white";

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[160] border-b-2 transition-[background-color,border-color] duration-[400ms] ease-[ease]",
          solid ? "border-divider bg-white" : "border-transparent",
          !solid && menuOpen && "bg-neutral-900",
          !solid && !menuOpen && "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-16 max-w-[1440px] items-center gap-8 px-[var(--edge)] min-[1100px]:h-20">
          <a href="#home" onClick={go("home")} aria-label="Hanna Electrical — back to top" className="mr-auto flex items-center">
            <Logo inverted={!solid} className="h-[21px] min-[1100px]:h-7" />
          </a>

          <nav aria-label="Main" className="hidden items-center gap-[30px] min-[1100px]:flex">
            {NAV.map((item) => {
              const current = active === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={go(item.id)}
                  aria-current={current ? "true" : undefined}
                  className={cn(
                    "border-b-2 pt-2 pb-1.5 text-[15px] font-semibold no-underline transition-colors duration-300 hover:text-accent-400",
                    current ? "border-accent" : "border-transparent",
                    solid
                      ? current
                        ? "text-ink"
                        : "text-neutral-700"
                      : current
                        ? "text-white"
                        : "text-[color-mix(in_srgb,white_82%,transparent)]",
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden min-[1100px]:flex">
            <CtaButton
              href="#contact"
              gap={28}
              className="px-[18px] py-[13px] text-[15px]"
              icon={<ArrowRight size={16} strokeWidth={2.25} strokeLinecap="square" strokeLinejoin="miter" aria-hidden />}
            >
              Get a Quote
            </CtaButton>
          </div>

          <div className="flex items-center gap-1 -mr-2.5 min-[1100px]:hidden">
            <a href={PHONE_HREF} aria-label="Call 027 412 2479" className={cn("flex size-12 items-center justify-center", ink)}>
              <Phone size={22} strokeWidth={2} strokeLinecap="square" strokeLinejoin="miter" aria-hidden />
            </a>
            <button
              type="button"
              onClick={toggleMenu}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className={cn("flex size-12 cursor-pointer items-center justify-center border-0 bg-transparent", ink)}
            >
              {menuOpen ? (
                <X size={26} strokeWidth={2} strokeLinecap="square" strokeLinejoin="miter" aria-hidden />
              ) : (
                <MenuIcon />
              )}
            </button>
          </div>
        </div>
      </header>

      {menuOpen ? (
        <div
          role="dialog"
          aria-label="Menu"
          className="fixed inset-0 z-[150] flex flex-col overflow-y-auto bg-neutral-900 px-[var(--edge)] pt-[88px] pb-7 text-white"
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {NAV.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={go(item.id)}
                className="flex items-baseline gap-5 border-b-2 border-[color-mix(in_srgb,white_14%,transparent)] py-4 text-white no-underline"
              >
                <span className="text-[13px] font-semibold text-accent-400 tabular-nums">{pad2(index + 1)}</span>
                <span className="text-[clamp(30px,8vw,44px)] leading-none font-extrabold tracking-[-0.025em]">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>
          <div className="mt-auto grid grid-cols-2 gap-2.5 pt-9">
            <CtaButton
              href={PHONE_HREF}
              variant="light-quiet"
              gap={12}
              className="w-full px-[18px] py-[18px] text-base"
              icon={<Phone size={18} strokeWidth={2} strokeLinecap="square" strokeLinejoin="miter" aria-hidden />}
            >
              Call Us
            </CtaButton>
            <CtaButton href="#contact" variant="primary-line" className="w-full px-[18px] py-[18px] text-base">
              Get a Quote
            </CtaButton>
            <a
              href={EMAIL_HREF}
              className="col-span-2 mt-2 text-[15px] text-[color-mix(in_srgb,white_78%,transparent)] no-underline"
            >
              {EMAIL}
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
