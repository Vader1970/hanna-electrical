"use client";

import type { ReactNode } from "react";
import { useSite } from "@/components/site-provider";

export function JumpLink({
  to,
  className,
  children,
}: {
  to: string;
  className?: string;
  children: ReactNode;
}) {
  const { go } = useSite();
  return (
    <a href={`#${to}`} onClick={go(to)} className={className}>
      {children}
    </a>
  );
}
