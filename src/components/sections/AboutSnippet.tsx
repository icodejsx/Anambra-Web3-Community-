import Link from "next/link";
import { ArrowRight, Zap, Users, Globe, BookOpen } from "lucide-react";

const pillars = [
  { icon: BookOpen, title: "Education First", description: "Blockchain fundamentals to advanced smart contract development — we meet learners at every level.", color: "text-emerald-400", bg: "bg-emerald-400/10" },
  { icon: Users, title: "Community Driven", description: "A tight-knit builder community where developers, founders, and creators grow together.", color: "text-primary", bg: "bg-primary/10" },
  { icon: Zap, title: "Hands-On Building", description: "Hackathons, bootcamps, and live projects that transform learners into real Web3 builders.", color: "text-amber-400", bg: "bg-amber-400/10" },
  { icon: Globe, title: "Global Connections", description: "Bridging Southeast Nigeria's talent to global Web3 ecosystems and opportunities.", color: "text-rose-400", bg: "bg-rose-400/10" },
];

export default function AboutSnippet() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background art */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary/8 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div className="scale-reveal">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-['Space_Mono'] font-bold uppercase tracking-widest bg-primary/15 text-primary border border-primary/25 mb-6">
              Who We Are
            </span>
            <h2 className="font-['Syne'] font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
              Southeast Nigeria&apos;s
              <br />
              <span className="text-gradient">Blockchain Movement</span>
            </h2>
            <p className="text-white/60 font-['DM_Sans'] text-base leading-relaxed mb-5">
              The Anambra Web3 Community was born from a bold vision — to bring blockchain
              education, innovation, and opportunity to young people in Anambra State at a time
              when Web3 awareness in the region was almost nonexistent.
            </p>
            <p className="text-white/50 font-['DM_Sans'] text-base leading-relaxed mb-8">
              Since 2023, we&apos;ve grown from a small group of enthusiasts to Southeast Nigeria&apos;s
              most impactful Web3 ecosystem — hosting massive conferences, running developer
              bootcamps, and connecting local talent to global opportunities.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-primary font-['Syne'] font-bold hover:gap-4 transition-all duration-300 group">
              Read our full story
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Timeline pills */}
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { year: "2023", label: "Founded" },
                { year: "2024", label: "First Conference — 1,700 Attendees" },
                { year: "2025", label: "5,000+ at Conference 2.0" },
                { year: "2026", label: "Conference 3.0 Coming" },
              ].map((t) => (
                <div key={t.year} className="flex items-center gap-2 px-3 py-1.5 glass rounded-full">
                  <span className="font-['Space_Mono'] text-primary text-xs font-bold">{t.year}</span>
                  <span className="text-white/50 text-xs font-['DM_Sans']">{t.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="stagger-child glass shimmer rounded-2xl p-6 group hover:border-primary/35 transition-all duration-500"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className={`w-11 h-11 rounded-xl ${pillar.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={22} className={pillar.color} />
                  </div>
                  <h3 className="font-['Syne'] font-bold text-white text-sm mb-2">{pillar.title}</h3>
                  <p className="text-white/45 font-['DM_Sans'] text-xs leading-relaxed">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
