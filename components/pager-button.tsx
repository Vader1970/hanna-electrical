"use client";

import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/cn";

type Tone = "next" | "prev-light" | "prev-overlay" | "prev-dark" | "close";

export function PagerButton({
  direction = "next",
  label,
  onClick,
  disabled,
  tone,
  size = 56,
  icon = "arrow",
}: {
  direction?: "prev" | "next";
  label: string;
  onClick: () => void;
  disabled?: boolean;
  tone: Tone;
  size?: 52 | 56;
  icon?: "arrow" | "close";
}) {
  const Arrow = direction === "prev" ? ArrowLeft : ArrowRight;
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
      className={cn(
        "inline-flex shrink-0 cursor-pointer items-center justify-center border-2 transition-[background-color,border-color,color] duration-[250ms] disabled:cursor-not-allowed disabled:opacity-45",
        size === 52 ? "size-[52px]" : "size-14",
        tone === "next" &&
          "border-accent bg-accent text-white enabled:hover:bg-accent-600 enabled:active:bg-accent-700",
        tone === "prev-light" &&
          "border-[color-mix(in_srgb,white_45%,transparent)] bg-transparent text-white enabled:hover:border-white enabled:hover:bg-white enabled:hover:text-ink",
        tone === "prev-overlay" &&
          "border-[color-mix(in_srgb,white_40%,transparent)] bg-transparent text-white enabled:hover:border-white enabled:hover:bg-white enabled:hover:text-ink",
        tone === "prev-dark" &&
          "border-divider bg-transparent text-ink enabled:hover:border-ink enabled:hover:bg-ink enabled:hover:text-white",
        tone === "close" &&
          "border-[color-mix(in_srgb,white_40%,transparent)] bg-transparent text-white enabled:hover:bg-white enabled:hover:text-ink",
      )}
    >
      {icon === "close" ? (
        <X size={20} strokeWidth={2} strokeLinecap="square" strokeLinejoin="miter" aria-hidden />
      ) : (
        <Arrow size={20} strokeWidth={2.25} strokeLinecap="square" strokeLinejoin="miter" aria-hidden />
      )}
    </button>
  );
}
