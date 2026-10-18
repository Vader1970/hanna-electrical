"use client";

import { Phone } from "lucide-react";
import { CtaButton } from "@/components/cta-button";
import { useSite } from "@/components/site-provider";
import { PHONE_HREF } from "@/lib/content";

export function MobileBar() {
  const { pastHero, nearEnd, menuOpen, lightboxOpen } = useSite();
  const show = pastHero && !nearEnd && !menuOpen && !lightboxOpen;

  return (
    <div
      data-show={show ? "true" : "false"}
      className="he-mobile-bar fixed inset-x-0 bottom-0 z-[140] border-t-2 border-divider bg-white px-3 pt-2.5 pb-[calc(10px+env(safe-area-inset-bottom))]"
    >
      <CtaButton
        href={PHONE_HREF}
        variant="ink-line"
        className="w-full px-4 py-[15px] text-[15px]"
        icon={<Phone size={18} strokeWidth={2} strokeLinecap="square" strokeLinejoin="miter" aria-hidden />}
      >
        Call Us
      </CtaButton>
      <CtaButton href="#contact" variant="primary-line" className="w-full px-4 py-[15px] text-[15px]">
        Get a Quote
      </CtaButton>
    </div>
  );
}
