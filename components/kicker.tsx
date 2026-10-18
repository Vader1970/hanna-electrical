import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Kicker({
  children,
  tone = "accent",
}: {
  children: ReactNode;
  tone?: "accent" | "bright" | "white";
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 text-[13px] font-semibold tracking-[0.14em] uppercase",
        tone === "white" && "text-white",
        tone === "bright" && "text-accent-400",
        tone === "accent" && "text-accent-700",
      )}
    >
      <span className="size-2.5 shrink-0 bg-accent" aria-hidden />
      {children}
    </div>
  );
}
