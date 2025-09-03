"use client";
import { motion, useAnimationFrame } from "framer-motion";
import { useRef } from "react";
import { fadeInUp } from "../lib/animationVariants";

const testimonials = [
  {
    role: "Senior Product Manager (L7)",
    quote:
      "Mobius filtered noise, tuned my positioning and had high‑fit applications out within days— interviews arrived 5x faster than my solo search.",
  },
  {
    role: "VP Engineering Candidate",
    quote:
      "The resume rebuild plus tailored exec narrative unlocked conversations at firms that previously ignored cold outreach.",
  },
  {
    role: "Data Science Lead",
    quote:
      "Weekly curated pipeline + transparent reporting removed guesswork and let me focus on technical interview prep only.",
  },
  {
    role: "Go-To-Market Director",
    quote:
      "Application strategy ruthlessly prioritized roles; the hit rate on recruiter responses noticeably jumped within two weeks.",
  },
  {
    role: "Cloud Infrastructure Architect",
    quote:
      "Mobius converted fragmented accomplishments into an impact narrative that resonated with hiring panels immediately.",
  },
  {
    role: "Operations Leader",
    quote:
      "Daily status updates and analyst support kept momentum— I never felt in the dark about pipeline health.",
  },
];

function Marquee() {
  const base = [...testimonials, ...testimonials];
  const containerRef = useRef<HTMLDivElement | null>(null);
  const xRef = useRef(0);

  useAnimationFrame((_, delta) => {
    const speed = 28;
    xRef.current -= (speed * delta) / 1000;
    const container = containerRef.current;
    if (!container) return;
    const totalWidth = container.scrollWidth / 2; // width of one sequence
    if (Math.abs(xRef.current) >= totalWidth) {
      xRef.current += totalWidth; // reset seamlessly
    }
    container.style.transform = `translateX(${xRef.current}px)`;
  });

  return (
    <div className="relative overflow-hidden group">
      <div
        ref={containerRef}
        className="flex gap-6 will-change-transform select-none py-4"
        aria-hidden
      >
        {base.map((t, i) => (
          <div
            key={i}
            className="relative w-[260px] sm:w-[300px] md:w-[340px] lg:w-[360px] flex-shrink-0 p-5 sm:p-6 rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="absolute -top-3 left-5 text-5xl text-indigo-200 select-none">
              “
            </div>
            <p className="text-slate-700 text-[13px] sm:text-sm leading-relaxed mb-4 pt-4">
              {t.quote}
            </p>
            <div className="text-xs font-semibold tracking-wide text-indigo-600 uppercase">
              {t.role}
            </div>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute top-0 left-0 w-12 sm:w-20 md:w-24 h-full bg-gradient-to-r from-white via-white/70 to-transparent" />
      <div className="pointer-events-none absolute top-0 right-0 w-12 sm:w-20 md:w-24 h-full bg-gradient-to-l from-white via-white/70 to-transparent" />
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-28 px-6 bg-white border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <div className="text-sm font-medium tracking-widest text-slate-600 uppercase mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Candidate Outcomes & Feedback
          </h2>
          <p className="mt-5 max-w-3xl mx-auto text-slate-600 text-sm md:text-base leading-relaxed">
            Representative anonymized feedback illustrating velocity,
            positioning impact and operational transparency delivered by the
            platform + analyst team.
          </p>
        </motion.div>

        <Marquee />
      </div>
    </section>
  );
}
