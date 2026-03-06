"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Conference",
    href: "/conference",
    children: [
      { label: "Conference 2024", href: "/conference#2024" },
      { label: "Conference 2025", href: "/conference#2025" },
      { label: "Conference 2026", href: "/conference#2026" },
    ],
  },
  { label: "Events", href: "/events" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-dark shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center glow group-hover:glow-strong transition-all duration-300">
              <span className="text-dark font-heading font-bold text-lg">A</span>
            </div>
            <div>
              <div className="font-heading font-bold text-white text-sm leading-tight">
                ANAMBRA
              </div>
              <div className="font-heading font-bold text-primary text-sm leading-tight tracking-widest">
                WEB3
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setDropdown(link.label)}
                onMouseLeave={() => setDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg font-body text-sm font-medium transition-all duration-200 ${
                    pathname === link.href
                      ? "text-primary bg-primary/10"
                      : "text-white/80 hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown size={14} className={`transition-transform duration-200 ${dropdown === link.label ? "rotate-180" : ""}`} />
                  )}
                </Link>
                {link.children && dropdown === link.label && (
                  <div className="absolute top-full left-0 mt-2 w-52 glass-dark rounded-xl overflow-hidden shadow-xl shadow-black/30 border border-primary/10">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-3 text-sm text-white/80 hover:text-primary hover:bg-primary/10 transition-all duration-200 font-body"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/conference#2026"
              className="px-5 py-2.5 rounded-xl bg-primary text-dark font-heading font-bold text-sm hover:bg-primary-light transition-all duration-200 glow hover:glow-strong"
            >
              Join 2026 →
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2 rounded-lg hover:bg-primary/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden glass-dark border-t border-primary/10">
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-body text-sm font-medium transition-all ${
                    pathname === link.href
                      ? "text-primary bg-primary/10"
                      : "text-white/80 hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-4 space-y-1 mt-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 rounded-lg text-xs text-white/60 hover:text-primary hover:bg-primary/5 transition-all"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link
                href="/conference#2026"
                onClick={() => setIsOpen(false)}
                className="block text-center px-5 py-3 rounded-xl bg-primary text-dark font-heading font-bold text-sm"
              >
                Join 2026 Conference →
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
