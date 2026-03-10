import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";

const conferences = [
  {
    year: "2024",
    edition: "1.0",
    theme: "Exploring the Decentralized web",
    date: "2024",
    location: "Awka, Anambra State",
    attendees: "1,700+",
    speakers: "25+",
    partners: "20+",
    status: "past" as const,
    image: "/IMG-20241103-WA0117.jpg",
    description: "The first-ever Anambra Web3 Conference that put Southeast Nigeria on the blockchain map. 1,700+ attendees, 25 speakers, 15 hackathon projects, 50+ jobs created.",
  },
  {
    year: "2025",
    edition: "2.0",
    theme: "Limitless Possibilities",
    date: "November 1, 2025",
    location: "Stanel Dome, Awka",
    attendees: "5,000+",
    speakers: "30+",
    partners: "25+",
    status: "past" as const,
    image: "/Anambraweb3conf-386.JPG",
    description: "5,000 attendees — 2,500 physical at Stanel Dome and 2,500 live on Twitter. Southeast Nigeria's largest Web3 event ever. Hackathon, masterclasses, investors, and global speakers.",
  },
  {
    year: "2026",
    edition: "3.0",
    theme: "The World is Watching",
    date: "2026 — Stay Tuned",
    location: "Anambra State, Nigeria",
    attendees: "10,000+",
    speakers: "50+",
    partners: "30+",
    status: "upcoming" as const,
    image: "/Anambraweb3conf-354.JPG",
    description: "The biggest edition yet is being planned. 10,000+ expected attendees, international speakers, a massive hackathon, and partnerships that will reshape African Web3.",
  },
];

export default function ConferenceHighlight() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(158,148,255,0.06)_0%,transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scale-reveal flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-['Space_Mono'] font-bold uppercase tracking-widest bg-primary/15 text-primary border border-primary/25 mb-4">
              Flagship Event
            </span>
            <h2 className="font-['Syne'] font-bold text-4xl md:text-5xl text-white leading-tight">
              The Anambra Web3{" "}
              <span className="text-gradient">Conference</span>
            </h2>
          </div>
          <Link href="/conference" className="inline-flex items-center gap-2 text-primary font-['Syne'] font-bold text-sm hover:gap-3 transition-all duration-300 group">
            View all editions <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {conferences.map((conf, i) => (
            <div
              key={conf.year}
              className={`stagger-child glass shimmer rounded-3xl overflow-hidden flex flex-col group hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 ${conf.status === "upcoming" ? "border-primary/35 glow" : ""}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Image */}
              <div className="img-hover h-44 relative overflow-hidden">
                <img src={conf.image} alt={`Conference ${conf.year}`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#010147] via-transparent to-transparent" />

                {/* Year overlay */}
                <div className="absolute top-4 left-4">
                  <span className="font-['Space_Mono'] font-bold text-3xl text-white/20">{conf.year}</span>
                </div>

                {conf.status === "upcoming" && (
                  <div className="absolute top-4 right-4">
                    <span className="px-2.5 py-1 bg-primary text-dark text-xs font-['Space_Mono'] font-bold rounded-full animate-pulse">
                      UPCOMING
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="font-['Space_Mono'] text-primary/50 text-[10px] uppercase tracking-widest mb-2">Edition {conf.edition}</div>
                <h3 className="font-['Syne'] font-bold text-xl text-white mb-1">Anambra Web3 Conference {conf.edition}</h3>
                <p className="text-primary font-['DM_Sans'] text-sm mb-4 italic">&ldquo;{conf.theme}&rdquo;</p>
                <p className="text-white/45 font-['DM_Sans'] text-sm leading-relaxed mb-5 flex-1">{conf.description}</p>

                {/* Meta */}
                <div className="space-y-1.5 mb-5">
                  <div className="flex items-center gap-2 text-white/35 text-xs font-['DM_Sans']"><Calendar size={11} className="text-primary/60" />{conf.date}</div>
                  <div className="flex items-center gap-2 text-white/35 text-xs font-['DM_Sans']"><MapPin size={11} className="text-primary/60" />{conf.location}</div>
                  <div className="flex items-center gap-2 text-white/35 text-xs font-['DM_Sans']"><Users size={11} className="text-primary/60" />{conf.attendees} Attendees</div>
                </div>

                {/* Mini stats */}
                <div className="grid grid-cols-3 gap-2 mb-5">
                  {[{v:conf.attendees,l:"Attendees"},{v:conf.speakers,l:"Speakers"},{v:conf.partners,l:"Partners"}].map(s=>(
                    <div key={s.l} className="bg-primary/6 rounded-xl p-2 text-center">
                      <div className="font-['Syne'] font-bold text-primary text-sm">{s.v}</div>
                      <div className="text-white/35 text-[10px]">{s.l}</div>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/conference#${conf.year}`}
                  className={`inline-flex items-center justify-center gap-2 py-3 rounded-xl font-['Syne'] font-bold text-sm transition-all duration-300 group/btn ${
                    conf.status === "upcoming"
                      ? "bg-primary text-dark hover:bg-primary-light glow"
                      : "border border-primary/25 text-primary hover:bg-primary/10 hover:border-primary/50"
                  }`}
                >
                  {conf.status === "upcoming" ? "Register Interest" : "View Highlights"}
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
