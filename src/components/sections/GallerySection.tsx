"use client";

import Image from "next/image";
import { useRef } from "react";

const communityPhotos = [
  {
    url: "/Anambraweb3conf-599.JPG",
    caption: "Anambra Web3 Conference 2025 — Stanel Dome, Awka",
    span: "col-span-2 row-span-2",
  },
  {
    url: "/Anambraweb3conf-231.JPG",
    caption: "Anambra Web3 Conference 2025 — Stanel Dome, Awka",
    span: "",
  },
  {
    url: "/Anambraweb3conf-290.JPG",
    caption: "Anambra Web3 Conference 2025 — Stanel Dome, Awka",
    span: "",
  },
  {
    url: "/Anambraweb3conf-326.JPG",
    caption: "Anambra Web3 Conference 2025 — Stanel Dome, Awka",
    span: "",
  },
  {
    url: "/Anambraweb3conf-494.JPG",
    caption: "Anambra Web3 Conference 2025 — Stanel Dome, Awka",
    span: "",
  },
  {
    url: "/Anambraweb3conf-488.JPG",
    caption: "Community Networking Night",
    span: "",
  },
  {
    url: "/Anambraweb3conf-216.JPG",
    caption: "Anambra Web3 Conference 2025 — Stanel Dome, Awka",
    span: "col-span-2",
  },
  {
    url: "/Anambraweb3conf-634.JPG",
    caption: "Anambra Web3 Conference 2025 — Stanel Dome, Awka",
    span: "",
  },
];




const communityPhotoSlide = [
  {
    url: "/Anambraweb3conf-689 (1).JPG",
    caption: "Anambra Web3 Conference 2025 — Stanel Dome, Awka",
    span: "col-span-2 row-span-2",
  },
  {
    url: "/Anambraweb3conf-710.JPG",
    caption: "Anambra Web3 Conference 2025 — Stanel Dome, Awka",
    span: "",
  },
  {
    url: "/Anambraweb3conf.JPG",
    caption: "Anambra Web3 Conference 2025 — Stanel Dome, Awka",
    span: "",
  },
  {
    url: "/Anambraweb3conf-549.JPG",
    caption: "Anambra Web3 Conference 2025 — Stanel Dome, Awka",
    span: "",
  },
  {
    url: "/Anambraweb3conf-493.JPG",
    caption: "Anambra Web3 Conference 2025 — Stanel Dome, Awka",
    span: "",
  },
  {
    url: "/Anambraweb3conf-424.JPG",
    caption: "Community Networking Night",
    span: "",
  },
  {
    url: "/Anambraweb3conf-413.JPG",
    caption: "Anambra Web3 Conference 2025 — Stanel Dome, Awka",
    span: "col-span-2",
  },
  {
    url: "/Anambraweb3conf-400.JPG",
    caption: "Anambra Web3 Conference 2025 — Stanel Dome, Awka",
    span: "",
  },
];



// Duplicate photos to fill the marquee strip seamlessly
const marqueePhotos = [...communityPhotoSlide];

export default function GallerySection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="scale-reveal flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-primary/15 text-primary border border-primary/25 mb-4">
              Community Gallery
            </span>
            <h2 className="font-syne font-bold text-4xl md:text-5xl text-white leading-tight">
              See What We&apos;ve{" "}
              <span className="text-gradient">Built Together</span>
            </h2>
          </div>
          <p className="text-white/50 font-dm text-sm max-w-xs leading-relaxed">
            Real moments from our conferences, bootcamps, hackathons and community events across Southeast Nigeria.
          </p>
        </div>
      </div>

      {/* Masonry-style grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px]">
          {communityPhotos.map((photo, i) => (
            <div
              key={i}
              className={`stagger-child img-hover relative rounded-2xl overflow-hidden glass group min-h-[180px] ${photo.span}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Image
                src={photo.url}
                alt={photo.caption}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={82}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white font-dm text-xs font-medium">{photo.caption}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Horizontal scroll marquee strip — using community photos */}
      <div className="mt-10 relative overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-4 animate-marquee"
          style={{ width: "max-content" }}
        >
          {marqueePhotos.map((photo, i) => (
            <div
              key={i}
              className="relative w-56 h-36 rounded-xl overflow-hidden shrink-0 glass img-hover"
            >
              <Image
                src={photo.url}
                alt={photo.caption}
                fill
                className="object-cover"
                sizes="224px"
                quality={82}
              />
            </div>
          ))}
        </div>
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#010147] to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#010147] to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}