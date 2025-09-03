"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "../lib/animationVariants";
import Image from "next/image";
import { TypewriterEffect } from "./Typewriter";

export default function CollaborationSection() {
  const words = [
    { text: "Human" },
    { text: "analysts" },
    { text: "executive" },
    { text: "coaching" },
    { text: "and" },
    { text: "AI" },
    { text: "tooling" },
    { text: "operate" },
    { text: "as" },
    { text: "a" },
    { text: "blended" },
    { text: "pod." },
    { text: "You" },
    { text: "approve" },
    { text: "strategy;" },
    { text: "we" },
    { text: "execute" },
    { text: "sourcing," },
    { text: "tailoring" },
    { text: "and" },
    { text: "submission" },
    { text: "with" },
    { text: "full" },
    { text: "visibility." },
    { text: "Feedback" },
    { text: "cycles" },
    { text: "tighten" },
    { text: "weekly" },
    { text: "so" },
    { text: "positioning" },
    { text: "improves" },
    { text: "as" },
    { text: "the" },
    { text: "market" },
    { text: "responds." },
  ];
  return (
    <section
      id="collaboration"
      className="relative py-12 px-6 bg-white border-t border-slate-100"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-sm font-medium tracking-widest text-slate-600 uppercase mb-4">
            Data Intelligence
          </div>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-slate-900">
            Harness Data & AI for Collaborative Success
          </h2>
        </motion.div>

        <motion.div
          className="pb-16 md:pb-24 flex justify-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="w-full max-w-3xl">
            <div className="flex flex-col md:flex-row gap-6">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="p-8 md:p-10 flex items-center md:items-start gap-4 md:w-1/3 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-100 shadow-sm"
              >
                <div className="text-left flex flex-col items-end">
                  <div className="text-xs font-medium text-slate-500 bg-slate-100 inline-block px-3 py-1 rounded-full">
                    ADVISOR
                  </div>
                  <div className="font-bold text-lg mt-3">Alex Langowski</div>
                  <div className="text-slate-600 whitespace-nowrap pb-4">
                    Data & AI Executive
                  </div>
                  <Image
                    src="https://static.wixstatic.com/media/41ecaa_7713ca9839394c54a8ceaad11b7edf40~mv2.jpeg/v1/fill/w_338,h_322,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202024-01-28%20at%202_19_46%20PM.jpeg"
                    alt="Alex Langowski"
                    width={56}
                    height={56}
                    className="rounded-full object-cover shadow"
                  />
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="rounded-2xl p-6 shadow-xl border border-slate-100 flex items-start min-h-[18rem] md:min-h-[16rem] w-full md:w-2/3 bg-gradient-to-tr from-indigo-50/60 to-white"
              >
                <div className="w-full relative overflow-hidden">
                  <div className="absolute -left-4 top-2 pointer-events-none">
                    <span className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-slate-100 opacity-60 tracking-tight">
                      HYBRID
                    </span>
                  </div>

                  <div className="relative z-10">
                    <div className="text-slate-600 text-left leading-relaxed text-sm md:text-base pr-2 md:pr-4">
                      <TypewriterEffect words={words} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="p-4 mb-18 flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/wade-message.png"
            alt="Message asking the AI to create a quarterly business report"
            width={600}
            height={400}
            className="object-cover"
          />
          <Image
            src="/liam-persona.png"
            alt="Alpine Tech Solutions Q3 2024 report showing strong revenue growth"
            width={600}
            height={400}
            className="object-cover mt-6"
          />
        </motion.div>
      </div>
    </section>
  );
}
