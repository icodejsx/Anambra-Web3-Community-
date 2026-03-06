"use client";

import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";

export function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const steps = 60; const step = target / steps;
        let c = 0;
        const t = setInterval(() => {
          c += step;
          if (c >= target) { setCount(target); clearInterval(t); }
          else setCount(Math.floor(c));
        }, 1800 / steps);
      }
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export function FadeInSection({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => setVisible(true), delay); obs.disconnect(); }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className={clsx("transition-all duration-700", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10", className)}>
      {children}
    </div>
  );
}

export function Badge({ children, variant = "primary" }: { children: React.ReactNode; variant?: "primary" | "outline" | "dark" }) {
  return (
    <span className={clsx(
      "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-['Space_Mono'] font-bold uppercase tracking-widest",
      variant === "primary" && "bg-primary/15 text-primary border border-primary/25",
      variant === "outline" && "bg-transparent text-primary border border-primary/50",
      variant === "dark" && "bg-dark/60 text-white/60 border border-white/10"
    )}>
      {children}
    </span>
  );
}

export function SectionHeader({ eyebrow, title, subtitle, centered = false }: { eyebrow?: string; title: React.ReactNode; subtitle?: string; centered?: boolean }) {
  return (
    <div className={clsx("mb-16", centered && "text-center")}>
      {eyebrow && <div className={clsx("mb-4", centered && "flex justify-center")}><Badge>{eyebrow}</Badge></div>}
      <h2 className="font-['Syne'] font-bold text-4xl md:text-5xl text-white leading-tight mb-4">{title}</h2>
      {subtitle && <p className={clsx("text-white/55 font-['DM_Sans'] text-lg leading-relaxed", centered ? "max-w-2xl mx-auto" : "max-w-xl")}>{subtitle}</p>}
    </div>
  );
}

export function StatCard({ value, label, suffix }: { value: number; label: string; suffix?: string }) {
  return (
    <div className="glass shimmer rounded-2xl p-6 text-center group hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
      <div className="font-['Syne'] font-bold text-4xl md:text-5xl text-gradient-primary mb-2">
        <AnimatedCounter target={value} suffix={suffix || "+"} />
      </div>
      <div className="text-white/55 font-['DM_Sans'] text-sm">{label}</div>
    </div>
  );
}
