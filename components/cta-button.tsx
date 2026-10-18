"use client";

import type { MouseEvent, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { useSite } from "@/components/site-provider";

type Variant = "primary" | "primary-line" | "light" | "light-dim" | "light-quiet" | "ink-line";

const variants: Record<Variant, string> = {
  primary: "border-0 bg-accent text-white hover:bg-accent-600 active:bg-accent-700",
  "primary-line": "border-2 border-accent bg-accent text-white hover:bg-accent-600 active:bg-accent-700",
  light:
    "border-2 border-[color-mix(in_srgb,white_50%,transparent)] bg-transparent text-white hover:border-white hover:bg-[color-mix(in_srgb,white_12%,transparent)]",
  "light-dim":
    "border-2 border-[color-mix(in_srgb,white_28%,transparent)] bg-transparent text-white hover:border-white hover:bg-[color-mix(in_srgb,white_8%,transparent)]",
  "light-quiet": "border-2 border-[color-mix(in_srgb,white_40%,transparent)] bg-transparent text-white",
  "ink-line":
    "border-2 border-ink bg-transparent text-ink hover:bg-[color-mix(in_srgb,#17191C_7%,transparent)] active:bg-[color-mix(in_srgb,#17191C_14%,transparent)]",
};

type Props = {
  href?: string;
  type?: "button" | "submit";
  variant?: Variant;
  className?: string;
  children: ReactNode;
  icon?: ReactNode | null;
  gap?: number;
};

function DefaultArrow({ size = 18 }: { size?: number }) {
  return <ArrowRight size={size} strokeWidth={2.25} strokeLinecap="square" strokeLinejoin="miter" aria-hidden />;
}

export function CtaButton({
  href,
  type = "button",
  variant = "primary",
  className,
  children,
  icon,
  gap = 28,
}: Props) {
  const { go } = useSite();
  const glyph = icon === undefined ? <DefaultArrow /> : icon;
  const classNames = cn(
    "inline-flex cursor-pointer items-center justify-between font-extrabold leading-[1.2] no-underline transition-[background-color,border-color,color] duration-[250ms]",
    variants[variant],
    className,
  );

  if (href) {
    const hash = href.startsWith("#") ? href.slice(1) : "";
    const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
      if (hash) go(hash)(event);
    };
    return (
      <a href={href} onClick={onClick} className={classNames} style={{ gap }}>
        <span>{children}</span>
        {glyph ? <span className="inline-flex shrink-0">{glyph}</span> : null}
      </a>
    );
  }

  return (
    <button type={type} className={classNames} style={{ gap }}>
      <span>{children}</span>
      {glyph ? <span className="inline-flex shrink-0">{glyph}</span> : null}
    </button>
  );
}
