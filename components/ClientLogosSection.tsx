"use client";
import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";

const clientLogos = [
  "Mobius Clients",
  "Recruiting Partners",
  "Resume Platform",
  "Mobius Clients",
  "Recruiting Partners",
  "Resume Platform",
  "Mobius Clients",
  "Recruiting Partners",
  "Resume Platform",
  "Mobius Clients",
  "Recruiting Partners",
  "Resume Platform",
  "Mobius Clients",
  "Recruiting Partners",
  "Resume Platform",
  "Mobius Clients",
  "Recruiting Partners",
  "Resume Platform",
  "Mobius Clients",
  "Recruiting Partners",
  "Resume Platform",
  "Mobius Clients",
  "Recruiting Partners",
  "Resume Platform",
];

export default function ClientLogosSection() {
  const sequence = [...clientLogos, ...clientLogos];
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState(0);

  useAnimationFrame((t, delta) => {
    const speed = 0.05;
    setOffset((prev) => {
      const next = prev + delta * speed;
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
              className="flex items-center px-8 sm:px-10 md:px-12 justify-center w-[140px] sm:w-[150px] md:w-[160px] h-14 sm:h-16 shrink-0"
            >
              <img
                src="https://static.wixstatic.com/media/5bc310_986847197cba4b5ebf919aad737b3f29~mv2.png"
                alt="Mobius logo"
                className="h-7 sm:h-8 object-contain"
              />
            </div>
          ))}
        </div>
        {/* gradient fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 md:w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 md:w-24 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
}
