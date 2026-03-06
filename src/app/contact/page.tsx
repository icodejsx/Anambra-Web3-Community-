import { Metadata } from "next";
import { Mail, Twitter, MessageCircle, MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = { title: "Contact | Anambra Web3 Community" };

const contactOptions = [
  { icon: Mail, title: "General Inquiries", desc: "Questions about community, programs, or membership", value: "hello@anambraweb3.com", href: "mailto:hello@anambraweb3.com" },
  { icon: Twitter, title: "Twitter / X", desc: "Follow us and slide into our DMs", value: "@anambraweb3conf", href: "https://x.com/anambraweb3conf" },
  { icon: MessageCircle, title: "WhatsApp Community", desc: "Join our active WhatsApp community group", value: "Join Community", href: "#" },
  { icon: MapPin, title: "Based In", desc: "Southeast Nigeria", value: "Awka, Anambra State, Nigeria", href: "#" },
];

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="gradient-mesh" />
        <div className="hex-grid" />
        <div className="absolute left-1/2 top-1/2 pointer-events-none">
          {[200,400].map((s,i)=>(
            <div key={s} className="orbit" style={{width:s,height:s,animationDuration:`${20+i*12}s`,animationDirection:i%2===0?"normal":"reverse"}} />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-['Space_Mono'] font-bold uppercase tracking-widest bg-primary/15 text-primary border border-primary/25 mb-6 stagger-child">
            Get In Touch
          </span>
          <h1 className="font-['Syne'] font-bold text-5xl md:text-8xl text-white leading-[1.0] mt-4 mb-6 stagger-child">
            Let&apos;s Build<br /><span className="text-gradient">Together.</span>
          </h1>
          <p className="text-white/55 font-['DM_Sans'] text-xl max-w-xl mx-auto stagger-child">
            Partner, sponsor, speak, or just say hello — we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 border-t border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left */}
            <div className="scale-reveal">
              <h2 className="font-['Syne'] font-bold text-2xl text-white mb-8">Find Us Here</h2>
              <div className="space-y-4 mb-10">
                {contactOptions.map((opt) => {
                  const Icon = opt.icon;
                  return (
                    <a key={opt.title} href={opt.href} target={opt.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                      className="flex items-start gap-4 glass shimmer rounded-2xl p-5 group hover:border-primary/35 hover:-translate-x-1 transition-all duration-300">
                      <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary/25 transition-colors">
                        <Icon size={18} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-['Syne'] font-bold text-white text-sm mb-0.5">{opt.title}</div>
                        <div className="text-white/35 font-['DM_Sans'] text-xs mb-1">{opt.desc}</div>
                        <div className="text-primary font-['Space_Mono'] text-xs">{opt.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="font-['Syne'] font-bold text-white text-base mb-4">How Can We Work Together?</h3>
                <div className="space-y-2">
                  {["Sponsor a Conference or Program","Speak at an Event","Partner with the Community","Host a Workshop or Bootcamp","Feature Your Web3 Opportunity","Media & Press Inquiries"].map(item=>(
                    <div key={item} className="flex items-center gap-2 text-white/50 font-['DM_Sans'] text-sm hover:text-white/70 transition-colors">
                      <ArrowRight size={12} className="text-primary" />{item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="scale-reveal" style={{transitionDelay:"0.15s"}}>
              <div className="glass shimmer rounded-3xl p-8">
                <h2 className="font-['Syne'] font-bold text-2xl text-white mb-1">Send a Message</h2>
                <p className="text-white/40 font-['DM_Sans'] text-sm mb-8">We respond within 24–48 hours.</p>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/45 font-['DM_Sans'] text-xs mb-2 uppercase tracking-wider">First Name</label>
                      <input type="text" placeholder="First name" className="w-full bg-white/3 border border-primary/15 rounded-xl px-4 py-3 text-white font-['DM_Sans'] text-sm placeholder-white/20 focus:outline-none focus:border-primary/50 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-white/45 font-['DM_Sans'] text-xs mb-2 uppercase tracking-wider">Last Name</label>
                      <input type="text" placeholder="Last name" className="w-full bg-white/3 border border-primary/15 rounded-xl px-4 py-3 text-white font-['DM_Sans'] text-sm placeholder-white/20 focus:outline-none focus:border-primary/50 transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/45 font-['DM_Sans'] text-xs mb-2 uppercase tracking-wider">Email</label>
                    <input type="email" placeholder="you@example.com" className="w-full bg-white/3 border border-primary/15 rounded-xl px-4 py-3 text-white font-['DM_Sans'] text-sm placeholder-white/20 focus:outline-none focus:border-primary/50 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-white/45 font-['DM_Sans'] text-xs mb-2 uppercase tracking-wider">Reason</label>
                    <select className="w-full bg-[#010147] border border-primary/15 rounded-xl px-4 py-3 text-white/60 font-['DM_Sans'] text-sm focus:outline-none focus:border-primary/50 transition-colors">
                      <option value="">Select a reason</option>
                      <option>Conference Sponsorship</option>
                      <option>Speaker Application</option>
                      <option>Partnership</option>
                      <option>Workshop / Bootcamp</option>
                      <option>Media / Press</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white/45 font-['DM_Sans'] text-xs mb-2 uppercase tracking-wider">Message</label>
                    <textarea rows={5} placeholder="Tell us more..." className="w-full bg-white/3 border border-primary/15 rounded-xl px-4 py-3 text-white font-['DM_Sans'] text-sm placeholder-white/20 focus:outline-none focus:border-primary/50 transition-colors resize-none" />
                  </div>
                  <button className="w-full py-4 rounded-2xl bg-primary text-dark font-['Syne'] font-bold text-sm hover:bg-primary-light transition-all glow hover:glow-strong hover:scale-[1.02]">
                    Send Message →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
