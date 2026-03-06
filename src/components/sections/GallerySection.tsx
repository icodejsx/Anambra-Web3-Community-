"use client";

import { useRef } from "react";

// Using Unsplash photos as placeholders — replace with actual community photos
const communityPhotos = [
  {
    url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    caption: "Anambra Web3 Conference 2025 — Stanel Dome, Awka",
    span: "col-span-2 row-span-2",
  },
  {
    url: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&q=80",
    caption: "Developer Bootcamp Session",
    span: "",
  },
  {
    url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80",
    caption: "Conference Speaker Stage",
    span: "",
  },
  {
    url: "https://images.unsplash.com/photo-1559223607-180cd2c3f28e?w=600&q=80",
    caption: "Crypto for Newbies Training",
    span: "",
  },
  {
    url: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=600&q=80",
    caption: "Hackathon Teams Building",
    span: "",
  },
  {
    url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
    caption: "Community Networking Night",
    span: "",
  },
  {
    url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    caption: "Cairo Smart Contract Bootcamp Graduation",
    span: "col-span-2",
  },
];

export default function GallerySection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="scale-reveal flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-['Space_Mono'] font-bold uppercase tracking-widest bg-primary/15 text-primary border border-primary/25 mb-4">
              📸 Community Gallery
            </span>
            <h2 className="font-['Syne'] font-bold text-4xl md:text-5xl text-white leading-tight">
              See What We&apos;ve{" "}
              <span className="text-gradient">Built Together</span>
            </h2>
          </div>
          <p className="text-white/50 font-['DM_Sans'] text-sm max-w-xs leading-relaxed">
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
              className={`stagger-child img-hover relative rounded-2xl overflow-hidden glass group ${photo.span}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white font-['DM_Sans'] text-xs font-medium">{photo.caption}</p>
              </div>
              {/* Shine */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="mt-10 relative overflow-hidden">
        <div ref={scrollRef} className="flex gap-4 animate-marquee" style={{ width: "max-content" }}>
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-56 h-36 rounded-xl overflow-hidden shrink-0 glass img-hover">
              <img
                src={`https://images.unsplash.com/photo-${["1540575467063","1591115765373","1475721027785","1559223607180","1551818255","1504384308090","1517245386807","1529156069898"][i % 8]}?w=400&q=70`}
                alt="Community event"
                className="w-full h-full object-cover"
                loading="lazy"
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
