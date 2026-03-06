import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function UpcomingCTA() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Big background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(158,148,255,0.14)_0%,transparent_65%)]" />
      <div className="absolute inset-0 dot-grid opacity-20" />

      {/* Animated rings */}
      <div className="absolute left-1/2 top-1/2 pointer-events-none">
        {[300, 500, 700, 900].map((size, i) => (
          <div key={size} className="orbit" style={{
            width: size, height: size,
            animationDuration: `${30 + i * 10}s`,
            animationDirection: i % 2 === 0 ? "normal" : "reverse",
            opacity: 0.15 - i * 0.03,
          }} />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="scale-reveal">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/35 mb-10">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-['Space_Mono'] text-xs font-bold uppercase tracking-widest">
              Conference 2026 — In The Works
            </span>
          </div>

          <h2 className="font-['Syne'] font-bold text-5xl md:text-7xl text-white leading-tight mb-6">
            Be Part of<br />
            <span className="text-gradient">Something</span><br />
            Extraordinary.
          </h2>

          <p className="text-white/55 font-['DM_Sans'] text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            The Anambra Web3 Conference 2026 is shaping up to be our most ambitious edition ever.
            Join thousands of builders, investors, and innovators. Register your interest today and
            be first when tickets drop.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/conference#2026"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-primary text-dark font-['Syne'] font-bold text-base hover:bg-primary-light glow hover:glow-strong transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
            >
              Register Interest <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-primary/40 text-primary font-['Syne'] font-bold text-base hover:bg-primary/10 hover:border-primary transition-all duration-300"
            >
              <Mail size={16} /> Partner With Us
            </Link>
          </div>

          {/* Expected stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { v: "10,000+", l: "Expected Attendees" },
              { v: "50+", l: "Speakers" },
              { v: "30+", l: "Partners" },
              { v: "2026", l: "Year" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl p-5 border-primary/15 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                <div className="font-['Syne'] font-bold text-2xl text-primary mb-1">{s.v}</div>
                <div className="text-white/40 font-['DM_Sans'] text-xs">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
