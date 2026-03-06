import { Metadata } from "next";
import { BookOpen, Code2, Zap, Mic, Calendar, Clock, Users, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = { title: "Events & Programs | Anambra Web3 Community" };

const programs = [
  {
    id: "crypto-newbies", icon: BookOpen, tag: "Beginner", tagColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    title: "21 Days Crypto for Newbies",
    image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=700&q=80",
    description: "The most accessible Web3 education program in Southeast Nigeria. 21-day journey covering blockchain fundamentals to your first DeFi transaction.",
    duration: "21 Days", format: "Online (Twitter Spaces & WhatsApp)", participants: "500+ trained", status: "Recurring",
    highlights: ["What is money & blockchain","Bitcoin & Ethereum fundamentals","Wallets & security best practices","Crypto exchanges (CEX vs DEX)","DeFi, NFTs & digital ownership","Web3 career paths","Content creation in Web3","Crypto scam awareness","Trading basics","Real-life use cases"],
  },
  {
    id: "cairo-bootcamp", icon: Code2, tag: "Developer", tagColor: "text-primary bg-primary/10 border-primary/20",
    title: "Cairo Smart Contract Bootcamp",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=700&q=80",
    description: "Intensive 7-week program on Starknet smart contract development using Cairo. Built for developers ready to build real Layer 2 decentralized applications.",
    duration: "7 Weeks", format: "Online + Offline (Hybrid)", participants: "100+ developers", status: "Completed — Next cohort TBA",
    highlights: ["Introduction to smart contracts","Cairo programming language","Starknet architecture & L2","Zero-knowledge (ZK) technology","Building dApps","Smart contract security","Deploying on Starknet testnet","Project development","Mentorship from engineers","Job placement support"],
  },
  {
    id: "hackathon", icon: Zap, tag: "Builder", tagColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    title: "Web3 Hackathon",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=700&q=80",
    description: "48-72 hour intense buildathons where developers form teams and ship real Web3 products. Projects get mentorship, investor exposure, and funding opportunities.",
    duration: "48–72 Hours", format: "In-person + Online", participants: "15+ projects built", status: "Held at Conferences",
    highlights: ["Team formation & ideation","Mentorship from senior engineers","Access to APIs and tools","Live building sessions","Demos to investors","Prizes and funding","Web3 ecosystem networking","Post-hackathon incubation"],
  },
  {
    id: "meetups", icon: Mic, tag: "Community", tagColor: "text-rose-400 bg-rose-400/10 border-rose-400/20",
    title: "Web3 Meetups & Twitter Spaces",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&q=80",
    description: "Regular offline and online sessions connecting the community to experts, mentors, and the latest in blockchain.",
    duration: "Ongoing", format: "Offline + Twitter Spaces", participants: "Thousands reached", status: "Active",
    highlights: ["Monthly meetups in Awka","Weekly Twitter Spaces","Guest speakers from top protocols","Developer study groups","Project showcase sessions","Career guidance","Networking events","Women in Web3 sessions"],
  },
];

export default function EventsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="gradient-mesh" />
        <div className="hex-grid" />
        <div className="orb" style={{width:400,height:400,background:"rgba(158,148,255,0.07)",top:"10%",right:"5%",animationDuration:"16s"}} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-['Space_Mono'] font-bold uppercase tracking-widest bg-primary/15 text-primary border border-primary/25 mb-6 stagger-child">
            Programs & Events
          </span>
          <h1 className="font-['Syne'] font-bold text-5xl md:text-8xl text-white leading-[1.0] mt-4 mb-6 stagger-child">
            Learn.<br /><span className="text-gradient">Build.</span><br />Connect.
          </h1>
          <p className="text-white/55 font-['DM_Sans'] text-xl max-w-xl stagger-child">
            From beginner-friendly crypto education to advanced developer bootcamps — our programs meet you exactly where you are.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="border-t border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {programs.map((prog, i) => {
            const Icon = prog.icon;
            return (
              <div key={prog.id} id={prog.id} className="py-24 scroll-mt-20 border-b border-primary/8 last:border-0">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                  {/* Content */}
                  <div className={`${i%2!==0?"lg:order-2":""} scale-reveal`}>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-['Space_Mono'] font-bold uppercase tracking-widest border mb-4 ${prog.tagColor}`}>
                      {prog.tag} · {prog.status}
                    </span>
                    <h2 className="font-['Syne'] font-bold text-3xl md:text-4xl text-white mb-4">{prog.title}</h2>
                    <p className="text-white/55 font-['DM_Sans'] text-base leading-relaxed mb-6">{prog.description}</p>
                    <div className="flex flex-wrap gap-4 mb-6">
                      {[{icon:Clock,val:prog.duration},{icon:Calendar,val:prog.format},{icon:Users,val:prog.participants}].map(({icon:I,val})=>(
                        <div key={val} className="flex items-center gap-2 text-white/45 font-['DM_Sans'] text-sm">
                          <I size={13} className="text-primary" />{val}
                        </div>
                      ))}
                    </div>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary text-dark font-['Syne'] font-bold text-sm hover:bg-primary-light transition-all glow hover:scale-105">
                      Join Next Cohort <ArrowRight size={15} />
                    </Link>
                  </div>

                  {/* Visual */}
                  <div className={`${i%2!==0?"lg:order-1":""} stagger-child`}>
                    <div className="glass shimmer rounded-3xl overflow-hidden">
                      <div className="img-hover h-52 overflow-hidden">
                        <img src={prog.image} alt={prog.title} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <div className={`w-8 h-8 rounded-lg ${prog.tagColor.split(" ")[1]} flex items-center justify-center`}>
                            <Icon size={16} className={prog.tagColor.split(" ")[0]} />
                          </div>
                          <span className="font-['Syne'] font-bold text-white text-sm">What You&apos;ll Learn</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          {prog.highlights.map(h=>(
                            <div key={h} className="flex items-start gap-2 text-white/50 font-['DM_Sans'] text-xs">
                              <CheckCircle size={12} className="text-primary shrink-0 mt-0.5" />{h}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
