"use client";

import { useEffect, useRef, useState } from "react";



const stats = [
  { value: 6000, suffix: "+", label: "Community Members", sub: "Across campuses & platforms", icon: ""},
  { value: 5000, suffix: "+", label: "2025 Attendees", sub: "2,500 physical · 2,500 online", icon: "" },
  { value: 400, suffix: "+", label: "Developers Trained", sub: "Cairo, Solidity & Web3 tools", icon: "" },
  { value: 4000, suffix: "+", label: "Email Subscribers", sub: "Active newsletter community", icon: "" },
  { value: 20, suffix: "+", label: "Ecosystem Partners", sub: "Leading Web3 organizations", icon: "" },
  { value: 3, suffix: "", label: "Conferences Held", sub: "2024, 2025, 2026 upcoming", icon:  "" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1800, steps = 60, step = target / steps;
        let c = 0;
        const t = setInterval(() => {
          c += step;
          if (c >= target) { setCount(target); clearInterval(t); }
          else setCount(Math.floor(c));
        }, duration / steps);
      }
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <div ref={ref} className="font-['Syne'] font-bold text-5xl text-gradient-primary counter-number">{count.toLocaleString()}{suffix}</div>;
}

export default function StatsSection() {
  return (
    <section className="relative py-24 border-y border-primary/10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(158,148,255,0.06)_0%,transparent_70%)]" />

      {/* Decorative linesd */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 scale-reveal">
          <p className="font-['Space_Mono'] text-primary/50 text-xs uppercase tracking-[0.3em]">Our Impact In Numbers</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="stagger-child glass shimmer rounded-2xl p-5 text-center group hover:border-primary/35 transition-all duration-500 border-glow-anim"
              style={{ transitionDelay: `${i * 60}ms`, animationDelay: `${i * 0.5}s`, animationDuration: "4s" }}
            >
              <div className="text-2xl mb-3">{stat.icon}</div>
              <Counter target={stat.value} suffix={stat.suffix} />
              <div className="text-white font-['DM_Sans'] text-xs font-semibold mt-2 mb-1">{stat.label}</div>
              <div className="text-white/35 font-['DM_Sans'] text-[10px] leading-tight">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
