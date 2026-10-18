"use client";

import { useCallback, useEffect, useState } from "react";

export type SnapState = { i: number; start: boolean; end: boolean };

export function measureSnap(el: HTMLElement): SnapState {
  const pad = parseFloat(getComputedStyle(el).paddingLeft) || 0;
  const max = el.scrollWidth - el.clientWidth;
  let i = 0;
  Array.from(el.children).forEach((child, index) => {
    if ((child as HTMLElement).offsetLeft - pad <= el.scrollLeft + 24) i = index;
  });
  return {
    i,
    start: el.scrollLeft <= 4,
    end: max <= 4 || el.scrollLeft >= max - 4,
  };
}

export function useSnapScroller() {
  const [node, setNode] = useState<HTMLDivElement | null>(null);
  const [state, setState] = useState<SnapState>({ i: 0, start: true, end: false });

  const ref = useCallback((el: HTMLDivElement | null) => {
    setNode(el);
  }, []);

  useEffect(() => {
    if (!node) return;
    const sync = () => {
      const next = measureSnap(node);
      setState((prev) =>
        prev.i === next.i && prev.start === next.start && prev.end === next.end ? prev : next,
      );
    };
    sync();
    node.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      node.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [node]);

  const scrollToIndex = useCallback(
    (index: number) => {
      if (!node) return;
      const items = node.children;
      if (!items.length) return;
      const next = Math.max(0, Math.min(items.length - 1, index));
      const pad = parseFloat(getComputedStyle(node).paddingLeft) || 0;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      node.scrollTo({
        left: (items[next] as HTMLElement).offsetLeft - pad,
        behavior: reduce ? "auto" : "smooth",
      });
    },
    [node],
  );

  return { ref, state, scrollToIndex };
}
