import { Metadata } from "next";
import { Calendar, MapPin, Users, Mic, Award, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = { title: "Conference | Anambra Web3 Community" };

const conf2024Photos = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&q=80",
  "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=500&q=80",
  "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=500&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=700&q=80",
];

const conf2025Photos = [
  "https://images.unsplash.com/photo-1559223607-180cd2c3f28e?w=700&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&q=80",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&q=80",
  "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=700&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80",
];

const conf2025Highlights = [
  "2,500 physical attendees at Stanel Dome",
  "2,500 live viewers on Twitter",
  "30+ world-class speakers",
  "Live hackathon with funding prizes",
  "Masterclass sessions for developers",
  "International Web3 partnerships signed",
  "5 startup pitches to investors",
  "Cairo & Solidity workshops",
];

const conf2024Speakers = [
  "Web3Bridge Team","Ethereum Nigeria Lead","SuperteamNG Co-Lead","Harrison Obiefule",
  "DeFi Protocol Founders","Starknet Developers","Women in DeFi Leaders",
  "Startup Founders","NFT Artists","Cairo Developers","Blockchain Educators",
];

export default function ConferencePage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="gradient-mesh" />
        <div className="hex-grid" />
        {/* Rings */}
        <div className="absolute left-1/2 top-1/2 pointer-events-none">
          {[200,400,600].map((s,i) => (
            <div key={s} className="orbit" style={{width:s,height:s,animationDuration:`${25+i*10}s`,animationDirection:i%2===0?"normal":"reverse",opacity:0.2-i*0.05}} />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-['Space_Mono'] font-bold uppercase tracking-widest bg-primary/15 text-primary border border-primary/25 mb-6 stagger-child">
            🎤 Flagship Event
          </span>
          <h1 className="font-['Syne'] font-bold text-5xl md:text-8xl text-white leading-[1.0] mt-4 mb-6 stagger-child">
            The Anambra<br /><span className="text-gradient">Web3 Conference</span>
          </h1>
          <p className="text-white/55 font-['DM_Sans'] text-xl max-w-2xl mx-auto stagger-child">
            Southeast Nigeria&apos;s most electrifying blockchain event — where builders, founders, investors, and innovators converge.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-12 stagger-child">
            {["2024","2025","2026"].map(y => (
              <a key={y} href={`#${y}`} className="px-5 py-2.5 rounded-xl glass font-['Syne'] font-bold text-sm text-white/65 hover:text-primary hover:border-primary/40 transition-all duration-300">
                Conference {y}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2024 ── */}
      <section id="2024" className="py-24 border-t border-primary/10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scale-reveal mb-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-['Space_Mono'] font-bold uppercase tracking-widest bg-white/5 text-white/50 border border-white/10 mb-4">2024 Edition</span>
            <h2 className="font-['Syne'] font-bold text-4xl md:text-6xl text-white">
              Conference <span className="text-gradient">1.0</span>
            </h2>
            <p className="text-white/40 font-['DM_Sans'] text-xl italic mt-2">&ldquo;The Beginning&rdquo;</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="stagger-child">
              <p className="text-white/65 font-['DM_Sans'] text-base leading-relaxed mb-5">
                The first-ever Anambra Web3 Conference was a historic moment. Over 1,700 attendees
                converged in Awka — many experiencing a blockchain event for the very first time.
              </p>
              <p className="text-white/50 font-['DM_Sans'] text-base leading-relaxed mb-8">
                25+ speakers from Web3Bridge, Ethereum Nigeria, SuperteamNG, and Women in DeFi.
                15 hackathon projects built. 50+ job opportunities created. Southeast Nigeria&apos;s
                Web3 scene was officially on the map.
              </p>
              <div className="grid grid-cols-3 gap-3 mb-8">
                {[{v:"1,700+",l:"Attendees"},{v:"25+",l:"Speakers"},{v:"20+",l:"Partners"},{v:"15",l:"Hack Projects"},{v:"50+",l:"Jobs Created"},{v:"7 Wks",l:"Cairo Bootcamp"}].map(s=>(
                  <div key={s.l} className="glass rounded-xl p-3 text-center hover:border-primary/30 transition-all duration-300">
                    <div className="font-['Syne'] font-bold text-primary text-lg">{s.v}</div>
                    <div className="text-white/40 font-['DM_Sans'] text-xs mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
              <div className="glass rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3"><Mic size={15} className="text-primary" /><span className="font-['Syne'] font-bold text-white text-sm">Featured Speakers</span></div>
                <div className="flex flex-wrap gap-2">
                  {conf2024Speakers.map(s=>(
                    <span key={s} className="px-2.5 py-1 bg-primary/8 text-primary/70 text-xs font-['DM_Sans'] rounded-full border border-primary/10">{s}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Photo grid */}
            <div className="stagger-child grid grid-cols-2 gap-3" style={{transitionDelay:"0.15s"}}>
              {conf2024Photos.map((url, i) => (
                <div key={i} className={`img-hover rounded-2xl overflow-hidden glass ${i === 0 ? "col-span-2 h-52" : "h-36"}`}>
                  <img src={url} alt={`Conference 2024 photo ${i+1}`} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2025 ── */}
      <section id="2025" className="py-24 border-t border-primary/10 scroll-mt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(158,148,255,0.07)_0%,transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scale-reveal mb-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-['Space_Mono'] font-bold uppercase tracking-widest bg-primary/15 text-primary border border-primary/25 mb-4">2025 Edition · Biggest Ever</span>
            <h2 className="font-['Syne'] font-bold text-4xl md:text-6xl text-white">
              Conference <span className="text-gradient">2.0</span>
            </h2>
            <p className="text-primary font-['DM_Sans'] text-xl italic mt-2">&ldquo;Limitless Possibilities&rdquo;</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Photos */}
            <div className="stagger-child grid grid-cols-2 gap-3">
              {conf2025Photos.map((url, i) => (
                <div key={i} className={`img-hover rounded-2xl overflow-hidden glass ${i===0?"col-span-2 h-56":i===1||i===2?"h-40":"h-32"}`}>
                  <img src={url} alt={`Conference 2025 photo ${i+1}`} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>

            <div className="stagger-child" style={{transitionDelay:"0.15s"}}>
              <p className="text-white/65 font-['DM_Sans'] text-base leading-relaxed mb-5">
                Conference 2.0 shattered every record. At Stanel Dome, Awka — 2,500 people on
                the ground. Another 2,500 watching live on Twitter. 5,000 total — making it the
                most-attended Web3 event in Southeast Nigeria&apos;s history.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[{v:"5,000+",l:"Total Attendees",s:"Biggest ever"},{v:"2,500",l:"Physical",s:"Stanel Dome, Awka"},{v:"2,500",l:"Online",s:"Twitter Live"},{v:"30+",l:"Speakers",s:"Global & local"}].map(s=>(
                  <div key={s.l} className="glass rounded-xl p-4">
                    <div className="font-['Syne'] font-bold text-primary text-2xl">{s.v}</div>
                    <div className="text-white font-['DM_Sans'] text-xs font-semibold mt-1">{s.l}</div>
                    <div className="text-white/35 font-['DM_Sans'] text-xs">{s.s}</div>
                  </div>
                ))}
              </div>
              <div className="glass rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3"><Award size={15} className="text-primary" /><span className="font-['Syne'] font-bold text-white text-sm">Event Highlights</span></div>
                <div className="grid grid-cols-1 gap-1.5">
                  {conf2025Highlights.map(h=>(
                    <div key={h} className="flex items-center gap-2 text-white/55 font-['DM_Sans'] text-xs">
                      <CheckCircle size={12} className="text-primary shrink-0" />{h}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2026 ── */}
      <section id="2026" className="py-24 border-t border-primary/10 scroll-mt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(158,148,255,0.12)_0%,transparent_65%)]" />
        <div className="absolute inset-0 dot-grid opacity-15" />
        <div className="absolute left-1/2 top-1/2 pointer-events-none">
          {[300,550,800].map((s,i)=>(
            <div key={s} className="orbit" style={{width:s,height:s,animationDuration:`${25+i*10}s`,animationDirection:i%2===0?"normal":"reverse"}} />
          ))}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scale-reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/40 mb-8">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary font-['Space_Mono'] text-xs font-bold uppercase tracking-widest">2026 Conference — In Preparation</span>
            </div>
            <h2 className="font-['Syne'] font-bold text-5xl md:text-7xl text-white leading-tight mb-4">
              Conference <span className="text-gradient">3.0</span>
            </h2>
            <p className="text-primary font-['DM_Sans'] text-xl italic mb-8">&ldquo;The World is Watching&rdquo;</p>
            <p className="text-white/55 font-['DM_Sans'] text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Conference 3.0 is being designed to be our most ambitious event. 10,000+ expected
              attendees, international speakers, a massive hackathon with funding prizes, and
              partnerships that will reshape the African Web3 landscape.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[{v:"10,000+",l:"Expected Attendees"},{v:"50+",l:"Speakers"},{v:"30+",l:"Partners"},{v:"2026",l:"Year"}].map(s=>(
                <div key={s.l} className="glass rounded-2xl p-5 glow hover:glow-strong transition-all duration-300 hover:-translate-y-1">
                  <div className="font-['Syne'] font-bold text-primary text-2xl">{s.v}</div>
                  <div className="text-white/45 font-['DM_Sans'] text-xs mt-1">{s.l}</div>
                </div>
              ))}
            </div>

            {/* Registration form */}
            <div className="glass rounded-3xl p-8 text-left max-w-lg mx-auto">
              <h3 className="font-['Syne'] font-bold text-white text-xl mb-1">Register Your Interest</h3>
              <p className="text-white/45 font-['DM_Sans'] text-sm mb-6">First to know when tickets drop.</p>
              <div className="space-y-3">
                <input type="text" placeholder="Full Name" className="w-full bg-white/4 border border-primary/18 rounded-xl px-4 py-3 text-white font-['DM_Sans'] text-sm placeholder-white/25 focus:outline-none focus:border-primary/50 transition-colors" />
                <input type="email" placeholder="Email Address" className="w-full bg-white/4 border border-primary/18 rounded-xl px-4 py-3 text-white font-['DM_Sans'] text-sm placeholder-white/25 focus:outline-none focus:border-primary/50 transition-colors" />
                <select className="w-full bg-[#010147] border border-primary/18 rounded-xl px-4 py-3 text-white/60 font-['DM_Sans'] text-sm focus:outline-none focus:border-primary/50 transition-colors">
                  <option value="">I am a...</option>
                  <option>Developer / Builder</option>
                  <option>Startup Founder</option>
                  <option>Student</option>
                  <option>Investor</option>
                  <option>Speaker</option>
                  <option>Sponsor / Partner</option>
                </select>
                <button className="w-full py-3.5 rounded-xl bg-primary text-dark font-['Syne'] font-bold text-sm hover:bg-primary-light transition-all glow hover:glow-strong">
                  Register Interest →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor CTA */}
      <section className="py-20 border-t border-primary/10">
        <div className="max-w-4xl mx-auto px-4 text-center scale-reveal">
          <h2 className="font-['Syne'] font-bold text-3xl text-white mb-4">Sponsor the Conference</h2>
          <p className="text-white/55 font-['DM_Sans'] mb-8">Reach thousands of Nigeria&apos;s most engaged Web3 builders, developers, and founders.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-primary text-dark font-['Syne'] font-bold hover:bg-primary-light transition-all glow hover:scale-105">
            Become a Sponsor <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
