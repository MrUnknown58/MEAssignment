"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "../lib/animationVariants";
import Image from "next/image";
import { TypewriterEffect, TypewriterEffectSmooth } from "./Typewriter";

export default function PersonasSection() {
  const words = [
    { text: "Nicole" },
    { text: "is" },
    { text: "an" },
    { text: "Executive" },
    { text: "coach" },
    { text: "at" },
    { text: "Mobius" },
    { text: "specializing" },
    { text: "in" },
    { text: "resume" },
    { text: "builds" },
    { text: "and" },
    { text: "career" },
    { text: "advisory." },
    { text: "With" },
    { text: "a" },
    { text: "B.S." },
    { text: "in" },
    { text: "Business" },
    { text: "Administration" },
    { text: "from" },
    { text: "UC" },
    { text: "Berkeley" },
    { text: "and" },
    { text: "7+" },
    { text: "years" },
    { text: "of" },
    { text: "experience" },
    { text: "in" },
    { text: "AI-driven" },
    { text: "product" },
    { text: "strategy," },
    { text: "she" },
    { text: "has" },
    { text: "seen" },
    { text: "firsthand" },
    { text: "how" },
    { text: "the" },
    { text: "proper" },
    { text: "positioning" },
    { text: "opens" },
    { text: "doors." },
    { text: "She" },
    { text: "takes" },
    { text: "a" },
    { text: "targeted," },
    { text: "results-driven" },
    { text: "approach" },
    { text: "to" },
    { text: "help" },
    { text: "clients" },
    { text: "confidently" },
    { text: "stand" },
    { text: "out" },
    { text: "and" },
    { text: "land" },
    { text: "roles" },
    { text: "that" },
    { text: "truly" },
    { text: "match" },
    { text: "their" },
    { text: "skills" },
    { text: "and" },
    { text: "potential." },
  ];
  return (
    <section
      id="personas"
      className="py-24 px-6 bg-slate-50 border-t border-slate-100"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-sm font-medium tracking-widest text-slate-600 uppercase mb-4">
            Resume Mastery
          </div>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-slate-900">
            Craft Winning Resumes with Expert Strategy
          </h2>
        </motion.div>

        <motion.div
          className="mt-10 flex justify-center"
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
                <div className="text-right flex flex-col items-end">
                  <div className="text-xs font-medium text-slate-500 bg-slate-100 inline-block px-3 py-1 rounded-full">
                    COACH
                  </div>
                  <div className="font-bold text-lg mt-3">Nicole Lau</div>
                  <div className="text-slate-600 whitespace-nowrap pb-4">
                    Executive Coach
                  </div>
                  <Image
                    src="https://static.wixstatic.com/media/41ecaa_b58e267d5c894607b3235816f7171d92~mv2.jpeg/v1/fill/w_360,h_360,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-02-24%20at%206_03_02%20PM.jpeg"
                    alt="Nicole Lau"
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
                className="bg-gradient-to-tr from-indigo-50/60 to-white rounded-2xl p-6 shadow-lg border border-slate-100 flex items-start min-h-[18rem] md:min-h-[16rem] w-full md:w-2/3"
              >
                <div className="w-full relative overflow-hidden">
                  <div className="absolute -left-4 top-2 pointer-events-none">
                    <span className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-slate-100 opacity-60 tracking-tight">
                      REMEMBER
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
      </div>
    </section>
  );
}
