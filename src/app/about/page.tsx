import { Metadata } from "next";
import { StatCard } from "@/components/ui";
import { CheckCircle, Target, Eye, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Anambra Web3 Community",
  description: "Our story — from a small group to Southeast Nigeria's #1 blockchain ecosystem.",
};

const timeline = [
  { year: "2023", title: "The Beginning", description: "A small group of Web3 enthusiasts gathered in Awka with one bold vision. Community meetups, awareness sessions. 100+ early members joined.", color: "bg-emerald-400" },
  { year: "2024 Q1", title: "Crypto for Newbies", description: "The 21-day program launched, training 200+ beginners on blockchain, wallets, DeFi, and NFTs.", color: "bg-primary" },
  { year: "2024 Q2", title: "Cairo Developers Bootcamp", description: "7-week Cairo smart contract bootcamp introduced Starknet development to 50+ Southeast Nigerian developers.", color: "bg-amber-400" },
  { year: "2024 Q4", title: "Conference 1.0 — 1,700 Attendees", description: "First-ever Anambra Web3 Conference. 1,700+ attendees, 25+ speakers, 20+ partners, 50+ jobs created.", color: "bg-rose-400" },
  { year: "2025", title: "Conference 2.0 — 5,000 Attendees", description: "Limitless Possibilities. 2,500 physical + 2,500 online. Southeast Nigeria's biggest blockchain event.", color: "bg-primary" },
  { year: "2026", title: "Conference 3.0 — In Preparation", description: "10,000+ expected. International speakers, a massive hackathon, partnerships reshaping African Web3.", color: "bg-primary-light" },
];

const values = [
  { title: "Education First", desc: "We believe knowledge is the greatest equalizer. Every initiative starts with learning." },
  { title: "Community Over Competition", desc: "We build together. Every member's win is the community's win." },
  { title: "Builder Mindset", desc: "We don't just talk about Web3 — we build it. Real projects, real impact." },
  { title: "Inclusive by Design", desc: "From beginners to PhDs, students to CEOs — everyone has a place here." },
  { title: "Long-term Thinking", desc: "We're planting seeds for a decade of impact, not just the next event." },
  { title: "Global Standards, Local Roots", desc: "World-class programs rooted deeply in Anambra's culture and context." },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="gradient-mesh" />
        <div className="hex-grid" />
        <div className="orb" style={{width:500,height:500,background:"rgba(158,148,255,0.07)",top:"20%",right:"-5%",animationDuration:"18s"}} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-['Space_Mono'] font-bold uppercase tracking-widest bg-primary/15 text-primary border border-primary/25 mb-6 stagger-child">
                Our Story
              </span>
              <h1 className="font-['Syne'] font-bold text-5xl md:text-7xl text-white leading-[1.0] mb-6 stagger-child">
                Born in <span className="text-gradient">Anambra.</span><br />
                Built for<br />the World.
              </h1>
              <p className="text-white/55 font-['DM_Sans'] text-xl leading-relaxed stagger-child">
                From a small WhatsApp group to Southeast Nigeria&apos;s most impactful blockchain ecosystem — this is our story.
              </p>
            </div>

            {/* Collage */}
            <div className="grid grid-cols-2 gap-3 stagger-child">
              <div className="img-hover col-span-2 h-48 rounded-2xl overflow-hidden glass">
                <img src="/Anambraweb3conf-400.JPG" alt="Conference" className="w-full h-full object-cover" />
              </div>
              <div className="img-hover h-32 rounded-2xl overflow-hidden glass">
                <img src="/Anambraweb3conf-549.JPG" alt="Community" className="w-full h-full object-cover" />
              </div>
              <div className="img-hover h-32 rounded-2xl overflow-hidden glass">
                <img src="/Anambraweb3conf-362.JPG" alt="Hackathon" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <StatCard value={6000} label="Community Members" suffix="+" />
            <StatCard value={5000} label="2025 Attendees" suffix="+" />
            <StatCard value={400} label="Devs Trained" suffix="+" />
            <StatCard value={20} label="Ecosystem Partners" suffix="+" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass shimmer rounded-3xl p-8 scale-reveal">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <Target size={24} className="text-primary" />
              </div>
              <div className="font-['Space_Mono'] text-primary/50 text-xs uppercase tracking-widest mb-3">Our Mission</div>
              <h2 className="font-['Syne'] font-bold text-2xl text-white mb-4">Empowering the Next Generation</h2>
              <p className="text-white/55 font-['DM_Sans'] text-base leading-relaxed">
                To educate young people about blockchain, train developers, create digital economy jobs,
                support startups, and build a strong network of Web3 builders across Nigeria.
              </p>
            </div>
            <div className="glass shimmer rounded-3xl p-8 scale-reveal" style={{transitionDelay:"0.15s"}}>
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <Eye size={24} className="text-primary" />
              </div>
              <div className="font-['Space_Mono'] text-primary/50 text-xs uppercase tracking-widest mb-3">Our Vision</div>
              <h2 className="font-['Syne'] font-bold text-2xl text-white mb-4">Anambra as Africa&apos;s Web3 Hub</h2>
              <p className="text-white/55 font-['DM_Sans'] text-base leading-relaxed">
                To build the most impactful Web3 ecosystem in Southeast Nigeria, producing globally
                competitive developers, creators, founders, and innovators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 border-t border-primary/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scale-reveal text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-['Space_Mono'] font-bold uppercase tracking-widest bg-primary/15 text-primary border border-primary/25 mb-4">Our Journey</span>
            <h2 className="font-['Syne'] font-bold text-4xl md:text-5xl text-white mt-2">From Inception to <span className="text-gradient">Impact</span></h2>
          </div>

          <div className="relative space-y-6">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
            {timeline.map((item, i) => (
              <div key={item.year} className="stagger-child relative pl-16" style={{transitionDelay:`${i*90}ms`}}>
                <div className={`absolute left-4 top-5 w-4 h-4 rounded-full ${item.color} border-4 border-[#010147] -translate-x-1/2 shadow-lg`} style={{boxShadow:`0 0 12px 2px ${item.color === "bg-primary" ? "rgba(158,148,255,0.5)" : "rgba(255,255,255,0.1)"}`}} />
                <div className="glass shimmer rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-x-1">
                  <div className="font-['Space_Mono'] text-primary font-bold text-sm mb-2">{item.year}</div>
                  <h3 className="font-['Syne'] font-bold text-xl text-white mb-2">{item.title}</h3>
                  <p className="text-white/50 font-['DM_Sans'] text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 border-t border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scale-reveal text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-['Space_Mono'] font-bold uppercase tracking-widest bg-primary/15 text-primary border border-primary/25 mb-4">Our Values</span>
            <h2 className="font-['Syne'] font-bold text-4xl text-white mt-2">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((v, i) => (
              <div key={v.title} className="stagger-child glass shimmer rounded-2xl p-6 group hover:border-primary/35 transition-all duration-500 hover:-translate-y-1" style={{transitionDelay:`${i*70}ms`}}>
                <CheckCircle size={20} className="text-primary mb-4" />
                <h3 className="font-['Syne'] font-bold text-white text-base mb-2">{v.title}</h3>
                <p className="text-white/45 font-['DM_Sans'] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-primary/10">
        <div className="max-w-3xl mx-auto px-4 text-center scale-reveal">
          <h2 className="font-['Syne'] font-bold text-4xl text-white mb-4">Join the Movement</h2>
          <p className="text-white/55 font-['DM_Sans'] mb-8">Whether you&apos;re a developer, student, founder, or just curious — there&apos;s a place for you.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/events" className="px-7 py-3.5 rounded-2xl bg-primary text-dark font-['Syne'] font-bold hover:bg-primary-light transition-all glow hover:glow-strong hover:scale-105">Explore Programs</Link>
            <Link href="/team" className="px-7 py-3.5 rounded-2xl border border-primary/40 text-primary font-['Syne'] font-bold hover:bg-primary/10 hover:border-primary transition-all">Meet the Team</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
