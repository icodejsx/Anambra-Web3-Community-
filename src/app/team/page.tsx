import { Metadata } from "next";
import { Twitter, Linkedin, Github, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = { title: "Our Team | Anambra Web3 Community" };



export default function TeamPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="gradient-mesh" />
        <div className="hex-grid" />
        <div className="orb" style={{width:450,height:450,background:"rgba(158,148,255,0.07)",top:"5%",right:"0%",animationDuration:"20s"}} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-['Space_Mono'] font-bold uppercase tracking-widest bg-primary/15 text-primary border border-primary/25 mb-6 stagger-child">
            The People Behind It All
          </span>
          <h1 className="font-['Syne'] font-bold text-5xl md:text-8xl text-white leading-[1.0] mt-4 mb-6 stagger-child">
            Meet the <span className="text-gradient">Team</span>
          </h1>
          <p className="text-white/55 font-['DM_Sans'] text-xl max-w-2xl mx-auto stagger-child">
            A dedicated group of builders, educators, and innovators committed to transforming Southeast Nigeria&apos;s Web3 landscape.
          </p>
        </div>
      </section>

      {/* Team grid */}
      <section className="py-12 border-t border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {teamMembers.map((member, i) => (
              <div
                key={`${member.name}-${i}`}
                className={`stagger-child glass shimmer rounded-3xl overflow-hidden group hover:border-primary/40 hover:-translate-y-2 transition-all duration-500 ${member.featured ? "border-primary/30 glow" : ""}`}
                style={{transitionDelay:`${i*80}ms`}}
              >
                {/* Photo */}
                <div className="img-hover h-96 overflow-hidden relative">
                  <img src={member.avatar} alt={member.name} className="w-full h-full object-cover object-top" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#010147] via-transparent to-transparent" />
                  {member.featured && (
                    <div className="absolute top-4 right-4 px-2.5 py-1 bg-primary text-dark text-xs font-['Space_Mono'] font-bold rounded-full">
                      ★ Co-Founder
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="font-['Syne'] font-bold text-white text-lg mb-0.5">{member.name}</h3>
                  <div className="text-primary font-['Space_Mono'] text-xs uppercase tracking-widest mb-3">{member.role}</div>
                  <p className="text-white/45 font-['DM_Sans'] text-sm leading-relaxed mb-5">{member.bio}</p>
                  <div className="flex items-center gap-2">
                    {[{icon:Twitter,href:member.twitter},{icon:Linkedin,href:member.linkedin},{icon:Github,href:member.github}].map(({icon:Icon,href})=>(
                      <a key={href} href={href} className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center text-primary/50 hover:text-primary hover:bg-primary/18 transition-all duration-200">
                        <Icon size={14} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-24 border-t border-primary/10">
        <div className="max-w-3xl mx-auto px-4 text-center scale-reveal">
          <h2 className="font-['Syne'] font-bold text-4xl text-white mb-4">Want to Join the Team?</h2>
          <p className="text-white/55 font-['DM_Sans'] mb-8">We&apos;re always looking for passionate builders, educators, and community leaders to help grow the Anambra Web3 ecosystem.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-primary text-dark font-['Syne'] font-bold hover:bg-primary-light transition-all glow hover:scale-105">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
