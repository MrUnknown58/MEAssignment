"use client";
import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";

const clientLogos = [
  "Amer Sports",
  "Arc'teryx",
  "Armstrong Lee & Baker LLP",
  "BNI",
  "Cocolab",
  "Comcast",
  "Delve Risk",
  "Diab Chambers",
  "Esquiretek",
  "Insurance Claim HQ",
  "Jack Wolfskin",
  "The Keenan Law Firm",
  "KGI Bank",
  "Novus Global",
  "Point NorthEast",
  "Ralph Lauren",
  "Salomon",
  "The Simon Law Group",
  "Singtel",
  "Stokes & Associates",
  "Swigart Law Group",
  "Trial Lawyers University",
  "Viva.com",
  "Wilson",
];

export default function ClientLogosSection() {
  // Marquee: duplicate list for seamless looping
  const sequence = [...clientLogos, ...clientLogos];
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState(0);

  useAnimationFrame((t, delta) => {
    // speed in px per ms
    const speed = 0.05; // adjust for faster/slower
    setOffset((prev) => {
      const next = prev + delta * speed;
      // Each item width ~160px (padding); compute total width half (one list)
      const itemWidth = 160;
      const total = itemWidth * clientLogos.length;
      return next >= total ? next - total : next;
    });
  });

  return (
    <section className="py-14 px-0 bg-white border-t border-slate-100 select-none">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-6 text-center">
          <p className="text-xs tracking-widest font-medium text-slate-500 uppercase">
            Trusted by forward-thinking teams
          </p>
        </div>
      </div>
      <div
        ref={containerRef}
        className="relative overflow-hidden border-y border-slate-100 bg-white/60"
      >
        <div
          className="flex whitespace-nowrap will-change-transform"
          style={{ transform: `translateX(-${offset}px)` }}
        >
          {sequence.map((client, i) => (
            <div
              key={i + client}
              className="flex items-center px-24 justify-center w-[160px] h-16 shrink-0"
            >
              <span className="inline-flex items-center gap-3">
                {/* simple SVG mark */}
                <svg
                  aria-hidden="true"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <circle cx="12" cy="12" r="10" fill="#e6eefc" />
                  <path
                    d="M7 12l3 3 7-7"
                    stroke="#2563EB"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm font-medium text-slate-500 opacity-70 hover:opacity-100 transition-colors">
                  {client}
                </span>
              </span>
            </div>
          ))}
        </div>
        {/* gradient fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
}
