import { cn } from "@/lib/cn";

export function Logo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <img
      src="/img/logo.png"
      alt="Hanna Electrical"
      width={407}
      height={60}
      className={cn("w-auto max-w-none", className)}
      style={inverted ? { filter: "url(#heRev)" } : undefined}
    />
  );
}
