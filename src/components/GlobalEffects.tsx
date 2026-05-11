"use client";

import { useEffect, useRef } from "react";

export default function GlobalEffects() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const progress = progressRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.documentElement.classList.toggle("motion-reduce", reducedMotion);

    let scrollRaf = 0;
    const onScroll = () => {
      if (!progress || scrollRaf) return;
      scrollRaf = requestAnimationFrame(() => {
        scrollRaf = 0;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const pct = height <= 0 ? 0 : (window.scrollY / height) * 100;
        progress.style.width = `${pct}%`;
      });
    };

    const revealObs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("visible");
          revealObs.unobserve(entry.target);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -4% 0px" }
    );

    const observeReveals = () => {
      document
        .querySelectorAll(".stagger-child:not(.visible), .scale-reveal:not(.visible)")
        .forEach((el) => revealObs.observe(el));
    };

    observeReveals();

    let revealDebounce: ReturnType<typeof setTimeout> | null = null;
    const mutObs = new MutationObserver(() => {
      if (revealDebounce) clearTimeout(revealDebounce);
      revealDebounce = setTimeout(() => {
        revealDebounce = null;
        observeReveals();
      }, 150);
    });
    mutObs.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      if (scrollRaf) cancelAnimationFrame(scrollRaf);
      if (revealDebounce) clearTimeout(revealDebounce);
      window.removeEventListener("scroll", onScroll);
      mutObs.disconnect();
      revealObs.disconnect();
    };
  }, []);

  return <div id="scroll-progress" ref={progressRef} style={{ width: "0%" }} />;
}
