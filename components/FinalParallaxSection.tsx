"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

/*
  Recreated final callout section inspired by live site block:
  Tagline: PRECISE. PRIVATE. POWERFUL.
  Stacked giant words (Build / Your / AI / Workforce) then (With / Personal / AI)
  Parallax: second column moves at slightly different rate.
*/

const WORDS_LEFT = ["Build", "Your", "AI", "Workforce"];
const WORDS_RIGHT = ["Powered", "by", "Mobius"];

export default function FinalParallaxSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const ySlow = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const yFast = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <div ref={containerRef} className="relative">
      <section
        id="final-callout"
        className="relative overflow-hidden bg-slate-950 text-white py-40 px-6 border-t border-slate-800"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(99,102,241,0.28),transparent_60%)]"
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto">
          <p
            className="text-xs md:text-sm font-light tracking-wider mb-10 text-indigo-200"
            style={{ fontWeight: 300 }}
          >
            PRECISE. PRIVATE. POWERFUL.
          </p>
          <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-start">
            <motion.div style={{ y: ySlow }} className="space-y-4 md:space-y-6">
              {WORDS_LEFT.map((w) => (
                <h2
                  key={w}
                  className="text-[56px] leading-[64px] md:text-[80px] md:leading-[96px] font-semibold tracking-tight"
                  style={{ fontWeight: 600 }}
                >
                  {w}
                </h2>
              ))}
            </motion.div>
            <motion.div style={{ y: yFast }} className="space-y-4 md:space-y-6">
              {WORDS_RIGHT.map((w) => (
                <h2
                  key={w}
                  className="text-[56px] leading-[64px] md:text-[80px] md:leading-[96px] font-semibold tracking-tight"
                  style={{ fontWeight: 600 }}
                >
                  {w}
                </h2>
              ))}
              <div className="pt-4">
                <a
                  href="#"
                  className="inline-flex items-center px-10 py-4 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-sm font-medium shadow-sm hover:from-indigo-400 hover:to-cyan-400 transition-colors"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
