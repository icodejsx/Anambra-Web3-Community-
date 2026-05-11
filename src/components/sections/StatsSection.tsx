"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 6000, suffix: "+", label: "Community Members", sub: "Across campuses & platforms" },
  { value: 5000, suffix: "+", label: "2025 Attendees", sub: "2,500 physical · 2,500 online" },
  { value: 400, suffix: "+", label: "Developers Trained", sub: "Cairo, Solidity & Web3 tools" },
  { value: 4000, suffix: "+", label: "Email Subscribers", sub: "Active newsletter community" },
  { value: 20, suffix: "+", label: "Ecosystem Partners", sub: "Leading Web3 organizations" },
  { value: 3, suffix: "", label: "Conferences Held", sub: "2024, 2025, 2026 upcoming" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        const start = performance.now();
        const duration = 1200;

        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(target * eased));
          if (progress < 1) requestAnimationFrame(tick);
          else setCount(target);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.35 }
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="font-syne font-bold text-4xl sm:text-5xl text-gradient-primary counter-number">
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="relative py-16 sm:py-24 border-y border-primary/10 overflow-hidden defer-section">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(158,148,255,0.06)_0%,transparent_70%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14 scale-reveal">
          <p className="font-mono text-primary/50 text-xs uppercase tracking-[0.3em]">Our Impact In Numbers</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="stagger-child glass rounded-2xl p-4 sm:p-5 text-center group hover:border-primary/35 transition-colors duration-300"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <Counter target={stat.value} suffix={stat.suffix} />
              <div className="text-white font-dm text-xs font-semibold mt-2 mb-1">{stat.label}</div>
              <div className="text-white/35 font-dm text-[10px] leading-tight">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
