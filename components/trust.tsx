import { BadgeCheck, History, House, MapPin, type LucideIcon } from "lucide-react";
import { Container } from "@/components/container";
import { TRUST } from "@/lib/content";

const ICONS: Record<(typeof TRUST)[number]["icon"], LucideIcon> = {
  history: History,
  house: House,
  pin: MapPin,
  badge: BadgeCheck,
};

export function Trust() {
  return (
    <section aria-label="Why Hanna Electrical" className="bg-neutral-100 py-[clamp(40px,6vw,72px)]">
      <Container>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,150px),1fr))] gap-x-[clamp(16px,2.4vw,32px)] gap-y-8">
          {TRUST.map((item, index) => {
            const Icon = ICONS[item.icon];
            return (
              <div
                key={item.n}
                data-reveal=""
                data-delay={index * 80}
                className="flex flex-col gap-2.5 border-t-2 border-ink pt-[18px]"
              >
                <div className="flex items-center justify-between text-accent">
                  <span className="text-[13px] font-semibold text-neutral-700 tabular-nums">{item.n}</span>
                  <Icon size={22} strokeWidth={1.75} strokeLinecap="square" strokeLinejoin="miter" aria-hidden />
                </div>
                <div className="text-[clamp(17px,1.5vw,21px)] leading-[1.15] font-extrabold tracking-[-0.015em]">
                  {item.title}
                </div>
                <p className="m-0 text-[15px] leading-[1.55] text-neutral-700 text-pretty">{item.body}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
