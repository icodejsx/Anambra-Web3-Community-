import Link from "next/link";
import { Twitter, Mail, MessageCircle, Youtube, Instagram } from "lucide-react";

const footerLinks = {
  Community: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Events", href: "/events" },
    { label: "Contact", href: "/contact" },
  ],
  Conference: [
    { label: "Conference 2024", href: "/conference#2024" },
    { label: "Conference 2025", href: "/conference#2025" },
    { label: "Conference 2026 (Coming)", href: "/conference#2026" },
  ],
  Programs: [
    { label: "Crypto for Newbies", href: "/events#crypto-newbies" },
    { label: "Cairo Bootcamp", href: "/events#cairo-bootcamp" },
    { label: "Hackathon", href: "/events#hackathon" },
    { label: "Web3 Meetups", href: "/events#meetups" },
  ],
};

const socials = [
  { icon: Twitter, href: "https://x.com/anambraweb3conf", label: "Twitter/X" },
  { icon: Mail, href: "mailto:hello@anambraweb3.com", label: "Email" },
  { icon: MessageCircle, href: "#", label: "Telegram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-primary/10 mt-20">
      {/* Glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-dark font-heading font-bold text-lg">A</span>
              </div>
              <div>
                <div className="font-heading font-bold text-white text-sm">ANAMBRA</div>
                <div className="font-heading font-bold text-primary text-sm tracking-widest">WEB3</div>
              </div>
            </Link>
            <p className="text-white/60 font-body text-sm leading-relaxed mb-6 max-w-xs">
              Building the Future of Web3 in Southeast Nigeria. Educating, training, and empowering the next generation of blockchain innovators.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-white/60 hover:text-primary hover:border-primary/30 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-heading font-bold text-white text-sm uppercase tracking-widest mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-primary text-sm font-body transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "6,000+", label: "Community Members" },
            { value: "5,000+", label: "2025 Attendees" },
            { value: "400+", label: "Developers Trained" },
            { value: "20+", label: "Ecosystem Partners" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading font-bold text-primary text-xl">{stat.value}</div>
              <div className="text-white/40 text-xs font-body mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-body">
            © {new Date().getFullYear()} Anambra Web3 Community. All rights reserved.
          </p>
          <p className="text-white/30 text-xs font-body">
            Built with 💜 in Anambra, Southeast Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
