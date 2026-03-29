import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code2, BookOpen, Zap, Mic } from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    tag: "Beginner",
    tagColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    title: "21 Crypto for Newbies",
    description: "A 21-day structured program that takes complete beginners from zero to their first crypto wallet, DeFi interactions, and Web3 career path.",
    stats: "500+ trained",
    image: "/AB635644-977D-477B-A2EA-DAC89BB286A2_1_105_c.jpeg",
    href: "/events#crypto-newbies",
  },
  {
    icon: Code2,
    tag: "Developer",
    tagColor: "text-primary bg-primary/10 border-primary/20",
    title: "Cairo Smart Contract Bootcamp",
    description: "7-week intensive bootcamp on Starknet smart contract development using Cairo. Layer 2, ZK tech, and real dApp deployment.",
    stats: "100+ devs graduated",
    image: "/F9A4DF7F-1F48-49D8-B14E-0E53408252D5.jpeg",
    href: "/events#cairo-bootcamp",
  },
  {
    icon: Zap,
    tag: "Builder",
    tagColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    title: "Web3 Hackathon",
    description: "48-hour buildathons where developers ship real Web3 products, get mentored by senior engineers, and compete for funding prizes.",
    stats: "15 projects shipped",
    image: "/534A7BB3-89CF-460F-90F6-8910CE543DD6.jpeg",
    href: "/events#hackathon",
  },
  {
    icon: Mic,
    tag: "Community",
    tagColor: "text-rose-400 bg-rose-400/10 border-rose-400/20",
    title: "Web3 Meetups & Spaces",
    description: "Regular offline meetups in Awka and weekly Twitter Spaces connecting builders to experts, mentors and global ecosystem leaders.",
    stats: "Thousands reached",
    image: "/6C45A565-D38C-451A-ACFF-C1340B2411E2_1_102_o.jpeg",
    href: "/events#meetups",
  },
];

export default function ProgramsSection() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(158,148,255,0.05)_0%,transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scale-reveal flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-primary/15 text-primary border border-primary/25 mb-4">
              Training Programs
            </span>
            <h2 className="font-syne font-bold text-4xl md:text-5xl text-white leading-tight">
              Learn. Build. <span className="text-gradient">Ship.</span>
            </h2>
          </div>
          <Link href="/events" className="inline-flex items-center gap-2 text-primary font-syne font-bold text-sm hover:gap-3 transition-all group">
            All programs <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {programs.map((prog, i) => {
            const Icon = prog.icon;
            return (
              <Link href={prog.href} key={prog.title}>
                <div
                  className="stagger-child glass shimmer rounded-2xl overflow-hidden group hover:border-primary/35 hover:-translate-y-1 transition-all duration-500 h-full cursor-none"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Image header */}
                  <div className="img-hover h-40 overflow-hidden relative">
                    <Image
                      src={prog.image}
                      alt={prog.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={82}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#010147]/80" />
                    <span className={`absolute top-4 left-4 inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider border ${prog.tagColor}`}>
                      {prog.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-syne font-bold text-lg text-white group-hover:text-primary transition-colors">{prog.title}</h3>
                      <ArrowRight size={16} className="text-primary/40 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                    </div>
                    <p className="text-white/50 font-dm text-sm leading-relaxed mb-4">{prog.description}</p>
                    <span className="font-mono text-xs font-bold text-primary">✓ {prog.stats}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
