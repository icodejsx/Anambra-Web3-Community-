"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

const WORDS = ["Developers", "Builders", "Founders", "Innovators", "Creators"];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);

  // Typewriter
  useEffect(() => {
    const target = WORDS[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % WORDS.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex]);

  // Stagger reveal on mount
  useEffect(() => {
    const items = titleRef.current?.querySelectorAll(".stagger-child");
    items?.forEach((el, i) => {
      setTimeout(() => el.classList.add("visible"), 200 + i * 120);
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#010147]" />
      <div className="gradient-mesh" />
      <div className="hex-grid" />

      {/* Orbit rings */}
      <div className="orb" style={{ width: 600, height: 600, background: "rgba(158,148,255,0.06)", top: "50%", right: "-10%", animationDuration: "20s", animationDelay: "0s" }} />
      <div className="orb" style={{ width: 350, height: 350, background: "rgba(123,111,255,0.08)", top: "10%", left: "5%", animationDuration: "15s", animationDelay: "3s" }} />
      <div className="orb" style={{ width: 200, height: 200, background: "rgba(196,190,255,0.07)", bottom: "15%", left: "40%", animationDuration: "12s", animationDelay: "6s" }} />

      {/* Orbit decorations */}
      <div className="orbit" style={{ width: 500, height: 500, top: "50%", right: "8%", animationDuration: "40s" }} />
      <div className="orbit" style={{ width: 350, height: 350, top: "50%", right: "8%", animationDuration: "25s", animationDirection: "reverse" }} />
      <div className="orbit" style={{ width: 200, height: 200, top: "50%", right: "8%", animationDuration: "15s" }} />

      {/* Floating blockchain art */}
      <div className="absolute right-0 top-0 w-1/ h-full hidden lg:block pointer-events-none overflow-hidden">
        <BlockchainArt />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl lg:mx-[200px] px-4 sm:px-6 lg:px-8 lg:py-16 py-10">
        <div ref={titleRef} className="max-w-3xl">
          {/* Badge */}
          <div className="stagger-child mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 text-xs font-mono font-bold uppercase tracking-widest text-primary">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              🇳🇬 Southeast Nigeria&apos;s #1 Web3 Community
            </span>
          </div>

          {/* Main heading */}
          <div className="stagger-child mb-1">
            <h1 className="font-syne font-bold text-[clamp(3rem,8vw,6rem)] leading-[1.0] text-white">
              Building
            </h1>
          </div>
          <div className="stagger-child mb-1">
            <h1 className="font-syne font-bold text-[clamp(3rem,8vw,6rem)] leading-[1.0] text-gradient">
             
              Web3's
            </h1>
          </div>
          <div className="stagger-child mb-1">
            <h1 className="font-syne font-bold text-[clamp(3rem,8vw,6rem)] leading-[1.0] text-white">
            Future in
            </h1>
          </div>
          <div className="stagger-child mb-1">
            <h1 className="font-syne font-bold text-[clamp(3rem,8vw,6rem)] leading-[1.0] text-primary">
              Anambra &
            </h1>
          </div>

          <div className="stagger-child mb-1">
            <h1 className="font-syne font-bold text-[clamp(3rem,8vw,6rem)] leading-[1.0] text-primary">
              Beyond
            </h1>
          </div>

          {/* Typewriter */}
          <div className="stagger-child mb-6">
            <p className="text-white/50 font-dm text-xl">
              We train{" "}
              <span className="text-primary font-bold type-cursor">
                {displayed}
              </span>
            </p>
          </div>

          {/* Sub */}
          <div className="stagger-child mb-10">
            <p className="text-white/55 font-dm text-lg leading-relaxed max-w-xl">
              From Anambra to the world educating developers,creators, Designers, founders, hosting world-class conferences,
              and connecting Southeast Nigeria to the global Web3 ecosystem.
            </p>
          </div>

          {/* CTAs */}
          <div className="stagger-child flex flex-wrap items-center gap-4 mb-14">
            <MagneticButton href="/conference#2026" primary>
              Join 2026 Conference <ArrowRight size={18} />
            </MagneticButton>
            <MagneticButton href="/about">
              <Play size={15} fill="currentColor" />
              Our Story
            </MagneticButton>
          </div>

          {/* Stats row */}
          <div className="stagger-child flex flex-wrap items-center gap-8 pt-8 border-t border-white/5">
            {[
              { v: "6,000+", l: "Community Members" },
              { v: "10,000+", l: "2025 Attendees" },
              { v: "400+", l: "Devs Trained" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-syne font-bold text-3xl text-primary">{s.v}</div>
                <div className="text-white/40 font-dm text-sm">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/25 text-[10px] font-mono tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent animate-bounce" />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#010147] to-transparent pointer-events-none" />
    </section>
  );
}

// Magnetic button
function MagneticButton({ children, href, primary }: { children: React.ReactNode; href: string; primary?: boolean }) {
  const btnRef = useRef<HTMLAnchorElement>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };
  const onMouseLeave = () => {
    if (btnRef.current) btnRef.current.style.transform = "";
  };

  return (
    <Link
      ref={btnRef}
      href={href}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`inline-flex items-center gap-2 px-7 py-4 rounded-2xl font-syne font-bold text-base transition-all duration-300 ${
        primary
          ? "bg-primary text-dark hover:bg-primary-light glow hover:glow-strong hover:scale-105"
          : "border border-primary/40 text-primary hover:bg-primary/10 hover:border-primary"
      }`}
      style={{ transition: "transform 0.15s cubic-bezier(.25,.46,.45,.94), background 0.2s, box-shadow 0.2s" }}
    >
      {children}
    </Link>
  );
}

// Animated SVG blockchain art
function BlockchainArt() {
  return (
    <div className="w-full h-full flex items-center justify-center opacity-30">
      <svg viewBox="0 0 500 600" className="w-[90%] h-[90%]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow-f">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9e94ff" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#c4beff" stopOpacity="0.2"/>
          </linearGradient>
        </defs>

        {/* Animated lines */}
        {[
          [100,80,300,180],[300,180,400,350],[400,350,250,480],[250,480,80,380],
          [80,380,100,80],[100,80,400,350],[300,180,80,380],[80,380,300,180],
          [250,480,300,180],[100,80,250,480],
        ].map(([x1,y1,x2,y2],i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="url(#lineGrad)" strokeWidth="0.8" strokeOpacity="0.5"
            strokeDasharray="4 6"
          >
            <animate attributeName="stroke-dashoffset" from="0" to="100" dur={`${8+i*1.5}s`} repeatCount="indefinite"/>
          </line>
        ))}

        {/* Nodes */}
        {[
          {cx:100,cy:80,r:16,delay:"0s"},
          {cx:300,cy:180,r:22,delay:"0.5s"},
          {cx:400,cy:350,r:18,delay:"1s"},
          {cx:250,cy:480,r:14,delay:"1.5s"},
          {cx:80,cy:380,r:20,delay:"2s"},
          {cx:200,cy:260,r:12,delay:"2.5s"},
          {cx:350,cy:100,r:10,delay:"3s"},
        ].map((n,i) => (
          <g key={i} filter="url(#glow-f)">
            <circle cx={n.cx} cy={n.cy} r={n.r+8} fill="rgba(158,148,255,0.06)">
              <animate attributeName="r" values={`${n.r+6};${n.r+14};${n.r+6}`} dur="4s" begin={n.delay} repeatCount="indefinite"/>
            </circle>
            <circle cx={n.cx} cy={n.cy} r={n.r} fill="none" stroke="#9e94ff" strokeWidth="1.5" strokeOpacity="0.7">
              <animate attributeName="stroke-opacity" values="0.7;1;0.7" dur="3s" begin={n.delay} repeatCount="indefinite"/>
            </circle>
            <circle cx={n.cx} cy={n.cy} r={n.r/2} fill="rgba(158,148,255,0.5)">
              <animate attributeName="r" values={`${n.r/2};${n.r/1.5};${n.r/2}`} dur="3s" begin={n.delay} repeatCount="indefinite"/>
            </circle>
          </g>
        ))}

        {/* Floating hex shapes */}
        {[[160,200],[320,420],[420,150],[140,480]].map(([cx,cy],i) => (
          <polygon key={i}
            points={`${cx},${cy-20} ${cx+17},${cy-10} ${cx+17},${cy+10} ${cx},${cy+20} ${cx-17},${cy+10} ${cx-17},${cy-10}`}
            fill="none" stroke="rgba(158,148,255,0.3)" strokeWidth="1">
            <animateTransform attributeName="transform" type="rotate" from={`0 ${cx} ${cy}`} to={`360 ${cx} ${cy}`} dur={`${20+i*8}s`} repeatCount="indefinite"/>
            <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur={`${4+i}s`} repeatCount="indefinite"/>
          </polygon>
        ))}
      </svg>
    </div>
  );
}
