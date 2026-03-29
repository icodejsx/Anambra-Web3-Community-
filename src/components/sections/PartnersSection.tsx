import Image from "next/image";

const partners = [
  { name: "Web3Bridge", logo: "/superteam.jpg" },
  { name: "Ethereum Nigeria", logo: "/eth.jpg" },
  { name: "SuperteamNG", logo: "/superteam.jpg" },
  { name: "Women in DeFi", logo: "/women.jpg" },
  { name: "GDG Onitsha", logo: "/gdd.png" },
  { name: "Starknet", logo: "/starknet.png" },
  { name: "Web3 Nigeria", logo: "/web3nigeria.jpg" },
  { name: "Starknet Foundation", logo: "/starknet.png" },
];

type Partner = {
  name: string;
  logo?: string;
  icon?: string;
};

export default function PartnersSection() {
  const doubled = [...partners, ...partners];

  return (
    <section className="py-20 relative overflow-hidden border-y border-primary/8">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(158,148,255,0.04)_0%,transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="scale-reveal text-center">
          <span className="font-mono text-primary/40 text-[10px] uppercase tracking-[0.35em]">
            Trusted By &amp; Partnered With
          </span>
          <h2 className="font-syne font-bold text-3xl text-white mt-3">
            Backed by the Best in <span className="text-gradient">Web3</span>
          </h2>
        </div>
      </div>

      <div className="relative">
        <div className="flex gap-5 animate-marquee whitespace-nowrap">
          {doubled.map((p: Partner, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-3 glass rounded-xl px-5 py-3 shrink-0 hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5 cursor-none"
            >
              {p.logo ? (
                <div className="relative w-8 h-8 rounded-md overflow-hidden shrink-0 flex items-center justify-center bg-white/10">
                  <Image
                    src={p.logo}
                    alt={p.name}
                    width={32}
                    height={32}
                    className="object-contain"
                    sizes="32px"
                    quality={85}
                  />
                </div>
              ) : (
                <span className="text-lg leading-none">{p.icon}</span>
              )}
              <span className="font-syne font-bold text-white/65 text-sm whitespace-nowrap">
                {p.name}
              </span>
            </div>
          ))}
        </div>

        <div className="absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-[#010147] to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 h-full w-28 bg-gradient-to-l from-[#010147] to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}