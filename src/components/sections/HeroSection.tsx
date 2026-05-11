"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

const WORDS = ["Developers", "Builders", "Founders", "Innovators", "Creators"];

const HERO_FACES = [
  {
    src: "/Anambraweb3conf-290.JPG",
    alt: "Community member at Anambra Web3 Conference",
    cx: 100,
    cy: 80,
    r: 16,
  },
  {
    src: "/Anambraweb3conf-326.JPG",
    alt: "Community member at Anambra Web3 Conference",
    cx: 300,
    cy: 180,
    r: 22,
  },
  {
    src: "/Anambraweb3conf-488.JPG",
    alt: "Community member at Anambra Web3 Conference",
    cx: 400,
    cy: 350,
    r: 18,
  },
  {
    src: "/Anambraweb3conf-231.JPG",
    alt: "Community member at Anambra Web3 Conference",
    cx: 250,
    cy: 480,
    r: 14,
  },
  {
    src: "/Anambraweb3conf-494.JPG",
    alt: "Community member at Anambra Web3 Conference",
    cx: 80,
    cy: 380,
    r: 20,
  },
];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

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

  return (
    <section className="relative min-h-[100svh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[#010147]" />
      <div className="gradient-mesh" />
      <div className="hex-grid hidden md:block" />

      <div className="orb hidden lg:block" style={{ width: 600, height: 600, background: "rgba(158,148,255,0.06)", top: "50%", right: "-10%", animationDuration: "20s" }} />
      <div className="orb hidden lg:block" style={{ width: 350, height: 350, background: "rgba(123,111,255,0.08)", top: "10%", left: "5%", animationDuration: "15s", animationDelay: "3s" }} />

      <div className="absolute right-0 top-0 hidden lg:block w-1/2 h-full pointer-events-none overflow-hidden">
        <BlockchainArt />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="max-w-3xl">
          <div className="stagger-child mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 text-xs font-mono font-bold uppercase tracking-widest text-primary">
              <span className="w-2 h-2 bg-primary rounded-full" />
              🇳🇬 Southeast Nigeria&apos;s #1 Web3 Community
            </span>
            <div className="mt-4 flex flex-wrap items-center gap-2 lg:hidden">
              {HERO_FACES.map((face) => (
                <div
                  key={face.src}
                  className="relative h-9 w-9 overflow-hidden rounded-full border border-primary/35 bg-primary/10 shadow-[0_0_16px_rgba(158,148,255,0.25)]"
                >
                  <Image
                    src={face.src}
                    alt={face.alt}
                    fill
                    className="object-cover object-center"
                    sizes="36px"
                    quality={80}
                  />
                </div>
              ))}
              <span className="font-dm text-xs text-white/45">Community members across Anambra</span>
            </div>
          </div>

          <div className="stagger-child mb-1">
            <h1 className="font-syne font-bold text-[clamp(2.5rem,8vw,6rem)] leading-[1.0] text-white">
              Building
            </h1>
          </div>
          <div className="stagger-child mb-1">
            <h1 className="font-syne font-bold text-[clamp(2.5rem,8vw,6rem)] leading-[1.0] text-gradient">
              Web3&apos;s
            </h1>
          </div>
          <div className="stagger-child mb-1">
            <h1 className="font-syne font-bold text-[clamp(2.5rem,8vw,6rem)] leading-[1.0] text-white">
              Future in
            </h1>
          </div>
          <div className="stagger-child mb-1">
            <h1 className="font-syne font-bold text-[clamp(2.5rem,8vw,6rem)] leading-[1.0] text-primary">
              Anambra &
            </h1>
          </div>
          <div className="stagger-child mb-1">
            <h1 className="font-syne font-bold text-[clamp(2.5rem,8vw,6rem)] leading-[1.0] text-primary">
              Beyond
            </h1>
          </div>

          <div className="stagger-child mb-6">
            <p className="text-white/50 font-dm text-lg sm:text-xl">
              We train{" "}
              <span className="text-primary font-bold type-cursor">
                {displayed}
              </span>
            </p>
          </div>

          <div className="stagger-child mb-10">
            <p className="text-white/55 font-dm text-base sm:text-lg leading-relaxed max-w-xl">
              From Anambra to the world educating developers, creators, designers, founders, hosting world-class conferences,
              and connecting Southeast Nigeria to the global Web3 ecosystem.
            </p>
          </div>

          <div className="stagger-child flex flex-wrap items-center gap-3 sm:gap-4 mb-14">
            <Link
              href="/conference#2026"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl bg-primary text-dark font-syne font-bold text-sm sm:text-base transition-colors duration-200 hover:bg-primary-light glow"
            >
              Join 2026 Conference <ArrowRight size={18} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl border border-primary/40 text-primary font-syne font-bold text-sm sm:text-base transition-colors duration-200 hover:bg-primary/10 hover:border-primary"
            >
              <Play size={15} fill="currentColor" />
              Our Story
            </Link>
          </div>

          <div className="stagger-child grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 border-t border-white/5">
            {[
              { v: "6,000+", l: "Community Members" },
              { v: "10,000+", l: "2025 Attendees" },
              { v: "400+", l: "Devs Trained" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-syne font-bold text-2xl sm:text-3xl text-primary">{s.v}</div>
                <div className="text-white/40 font-dm text-sm">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2">
        <span className="text-white/25 text-[10px] font-mono tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-primary/50 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-[#010147] to-transparent pointer-events-none" />
    </section>
  );
}

function BlockchainArt() {
  return (
    <div className="w-full h-full flex items-center justify-center opacity-90">
      <svg viewBox="0 0 500 600" className="w-[90%] h-[90%]" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9e94ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#c4beff" stopOpacity="0.2" />
          </linearGradient>
          {HERO_FACES.map((face, i) => (
            <clipPath id={`hero-face-${i}`} key={face.src}>
              <circle cx={face.cx} cy={face.cy} r={face.r} />
            </clipPath>
          ))}
        </defs>
        {[
          [100, 80, 300, 180],
          [300, 180, 400, 350],
          [400, 350, 250, 480],
          [250, 480, 80, 380],
          [80, 380, 100, 80],
        ].map(([x1, y1, x2, y2], i) => (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="url(#lineGrad)"
            strokeWidth="0.8"
            strokeOpacity="0.45"
          />
        ))}
        {HERO_FACES.map((face, i) => (
          <g key={face.src}>
            <circle cx={face.cx} cy={face.cy} r={face.r + 8} fill="rgba(158,148,255,0.08)" />
            <image
              href={face.src}
              x={face.cx - face.r}
              y={face.cy - face.r}
              width={face.r * 2}
              height={face.r * 2}
              clipPath={`url(#hero-face-${i})`}
              preserveAspectRatio="xMidYMin slice"
            />
            <circle
              cx={face.cx}
              cy={face.cy}
              r={face.r}
              fill="none"
              stroke="#c4beff"
              strokeWidth="1.5"
              strokeOpacity="0.85"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
