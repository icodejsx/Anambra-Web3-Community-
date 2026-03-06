const partners = [
  { name: "Web3Bridge", icon: "🌉" },
  { name: "Ethereum Nigeria", icon: "⟠" },
  { name: "SuperteamNG", icon: "⚡" },
  { name: "Women in DeFi", icon: "♀" },
  { name: "GDG Onitsha", icon: "🔷" },
  { name: "Starknet", icon: "★" },
  { name: "Web3Ladies", icon: "💜" },
  { name: "Blockchain Nigeria", icon: "🔗" },
  { name: "Solana Foundation", icon: "◎" },
];

export default function PartnersSection() {
  const doubled = [...partners, ...partners];
  return (
    <section className="py-20 relative overflow-hidden border-y border-primary/8">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(158,148,255,0.04)_0%,transparent_70%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="scale-reveal text-center">
          <span className="font-['Space_Mono'] text-primary/40 text-[10px] uppercase tracking-[0.35em]">
            Trusted By &amp; Partnered With
          </span>
          <h2 className="font-['Syne'] font-bold text-3xl text-white mt-3">
            Backed by the Best in <span className="text-gradient">Web3</span>
          </h2>
        </div>
      </div>
      <div className="relative">
        <div className="flex gap-5 animate-marquee whitespace-nowrap">
          {doubled.map((p, i) => (
            <div key={i} className="inline-flex items-center gap-2.5 glass rounded-xl px-5 py-3 shrink-0 hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5 cursor-none">
              <span className="text-lg">{p.icon}</span>
              <span className="font-['Syne'] font-bold text-white/65 text-sm">{p.name}</span>
            </div>
          ))}
        </div>
        <div className="absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-[#010147] to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 h-full w-28 bg-gradient-to-l from-[#010147] to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
