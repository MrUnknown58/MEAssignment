"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "../lib/animationVariants";
import Image from "next/image";
import { TypewriterEffect } from "./Typewriter";

const privacyPoints = [
  "Zero-train outside tenant boundary",
  "Scoped memory segmentation",
  "Automated PII minimization",
  "Encryption in transit & at rest",
  "Audit & export trails",
  "Granular role-based policies",
];

export default function PrivacySection() {
  const words = [
    { text: "Rob" },
    { text: "Rosen" },
    { text: "has" },
    { text: "led" },
    { text: "customer-facing" },
    { text: "teams" },
    { text: "at" },
    { text: "technology" },
    { text: "leaders" },
    { text: "including" },
    { text: "Amazon," },
    { text: "Google," },
    { text: "NetApp," },
    { text: "Check" },
    { text: "Point" },
    { text: "Software," },
    { text: "and" },
    { text: "Sun" },
    { text: "Microsystems." },
    { text: "He’s" },
    { text: "interviewed" },
    { text: "thousands" },
    { text: "of" },
    { text: "candidates" },
    { text: "across" },
    { text: "multiple" },
    { text: "disciplines" },
    { text: "(CxO" },
    { text: "staff," },
    { text: "engineering," },
    { text: "product" },
    { text: "management," },
    { text: "product" },
    { text: "marketing," },
    { text: "support," },
    { text: "business" },
    { text: "development)," },
    { text: "directly" },
    { text: "hired" },
    { text: "several" },
    { text: "hundred" },
    { text: "employees," },
    { text: "and" },
    { text: "promoted" },
    { text: "more" },
    { text: "than" },
    { text: "fifty" },
    { text: "people" },
    { text: "just" },
    { text: "during" },
    { text: "his" },
    { text: "time" },
    { text: "at" },
    { text: "Google" },
    { text: "and" },
    { text: "Amazon." },
  ];
  return (
    <section
      id="privacy"
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
            Interview Excellence
          </div>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-slate-900">
            Master Leadership & Interview Skills
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
                    COACH
                  </div>
                  <div className="font-bold text-lg mt-3">Rob Rosen</div>
                  <div className="text-slate-600 whitespace-nowrap pb-4">
                    Leadership & Coach
                  </div>
                  <Image
                    src="https://static.wixstatic.com/media/41ecaa_34d2c0b6399646d386e0a3e853eac397~mv2.png/v1/fill/w_344,h_314,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/41ecaa_34d2c0b6399646d386e0a3e853eac397~mv2.png"
                    alt="Rob Rosen"
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
                      REMEMBER
                    </span>
                  </div>

                  <div className="relative z-10">
                    <div className="text-slate-600 text-left leading-relaxed text-sm md:text-base pr-2 md:pr-4">
                      <TypewriterEffect words={words} />
                    </div>
                    {/* 
                            <motion.p
                              initial={{ y: 18, opacity: 0 }}
                              whileInView={{ y: 0, opacity: 1 }}
                              transition={{ duration: 0.45, delay: 0.24 }}
                              className="mt-4 text-sm text-slate-500"
                            >
                              “Always available, always up to date.”
                            </motion.p> */}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="p-4 flex justify-center"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/privacy-flowchart.png"
            alt="Privacy flowchart showing AI models and private data flow"
            width={700}
            height={400}
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
