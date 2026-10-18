"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { NAV } from "@/lib/content";

type GoHandler = (event: { preventDefault: () => void }) => void;

type SiteContextValue = {
  solid: boolean;
  active: string;
  menuOpen: boolean;
  toggleMenu: () => void;
  pastHero: boolean;
  nearEnd: boolean;
  lightboxOpen: boolean;
  setLightboxOpen: (open: boolean) => void;
  go: (id: string) => GoHandler;
};

const SiteContext = createContext<SiteContextValue | null>(null);

export function useSite() {
  const value = useContext(SiteContext);
  if (!value) throw new Error("useSite must be used within SiteProvider");
  return value;
}

export function SiteProvider({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [pastHero, setPastHero] = useState(false);
  const [nearEnd, setNearEnd] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const goHandlers = useRef(new Map<string, GoHandler>());

  useLayoutEffect(() => {
    const sync = () => {
      let nextActive = "home";
      for (const item of NAV) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top < 180) nextActive = item.id;
      }
      const y = window.scrollY || 0;
      const vh = window.innerHeight;
      const contact = document.getElementById("contact");
      const nextScrolled = y > 40;
      const nextPast = y > vh * 0.7;
      const nextNear = !!(contact && contact.getBoundingClientRect().top < vh * 0.85);

      setScrolled((value) => (value === nextScrolled ? value : nextScrolled));
      setActive((value) => (value === nextActive ? value : nextActive));
      setPastHero((value) => (value === nextPast ? value : nextPast));
      setNearEnd((value) => (value === nextNear ? value : nextNear));
    };

    sync();
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  useEffect(() => {
    let observer: IntersectionObserver | undefined;
    const timer = window.setTimeout(() => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce || !("IntersectionObserver" in window)) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "none";
            observer?.unobserve(el);
          });
        },
        { rootMargin: "0px 0px -6% 0px", threshold: 0.06 },
      );

      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
          el.style.opacity = "";
          el.style.transform = "";
          return;
        }
        const desktopOnly = el.getAttribute("data-reveal") === "desktop";
        const delay = desktopOnly && window.innerWidth < 1024 ? 0 : Number(el.dataset.delay || 0);
        el.style.opacity = "0";
        el.style.transform = "translateY(24px)";
        el.style.transition = `opacity .8s cubic-bezier(.2,.7,.2,1) ${delay}ms, transform .8s cubic-bezier(.2,.7,.2,1) ${delay}ms`;
        observer?.observe(el);
      });
    }, 80);

    return () => {
      window.clearTimeout(timer);
      observer?.disconnect();
    };
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = useCallback((id: string) => {
    const existing = goHandlers.current.get(id);
    if (existing) return existing;
    const handler: GoHandler = (event) => {
      event.preventDefault();
      setMenuOpen(false);
      const el = document.getElementById(id);
      if (!el) return;
      const narrow = window.innerWidth < 1100;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const top =
        id === "home"
          ? 0
          : el.getBoundingClientRect().top + window.scrollY - (narrow ? 64 : 80) + 2;
      window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
    };
    goHandlers.current.set(id, handler);
    return handler;
  }, []);

  const toggleMenu = useCallback(() => setMenuOpen((open) => !open), []);

  const value = useMemo<SiteContextValue>(
    () => ({
      solid: scrolled && !menuOpen,
      active,
      menuOpen,
      toggleMenu,
      pastHero,
      nearEnd,
      lightboxOpen,
      setLightboxOpen,
      go,
    }),
    [scrolled, menuOpen, active, toggleMenu, pastHero, nearEnd, lightboxOpen, go],
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}
