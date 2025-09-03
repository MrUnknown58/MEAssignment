"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "../lib/animationVariants";
import Image from "next/image";
import { TypewriterEffect, TypewriterEffectSmooth } from "./Typewriter";

export default function Founder1() {
  //     Ashwin is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder from Yale University.

  // Ashwin's vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.
  const words = [
    { text: "Ashwin" },
    { text: "is" },
    { text: "the" },
    { text: "founder" },
    { text: "of" },
    { text: "mobiusengine.ai." },
    { text: "He" },
    { text: "is" },
    { text: "an" },
    { text: "accomplished" },
    { text: "senior" },
    { text: "executive" },
    { text: "with" },
    { text: "over" },
    { text: "20" },
    { text: "years" },
    { text: "of" },
    { text: "experience" },
    { text: "in" },
    { text: "cloud" },
    { text: "infrastructure" },
    { text: "and" },
    { text: "financial" },
    { text: "services." },
    { text: "With" },
    { text: "over" },
    { text: "2" },
    { text: "decades" },
    { text: "of" },
    { text: "experience" },
    { text: "at" },
    { text: "Google" },
    { text: "and" },
    { text: "JP" },
    { text: "Morgan," },
    { text: "Ashwin" },
    { text: "held" },
    { text: "various" },
    { text: "product" },
    { text: "and" },
    { text: "GTM" },
    { text: "roles." },
    { text: "Ashwin" },
    { text: "is" },
    { text: "an" },
    { text: "MBA" },
    { text: "holder" },
    { text: "from" },
    { text: "Yale" },
    { text: "University." },
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
            Founder Spotlight
          </div>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-slate-900">
            From Cloud Scale to Candidate Impact — Ashwin’s Playbook
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
                    FOUNDER
                  </div>
                  <div className="font-bold text-lg mt-3">Ashwin</div>
                  <div className="text-slate-600 whitespace-nowrap pb-4">
                    Founder
                  </div>
                  <Image
                    src="https://imgs.search.brave.com/SKfcYm8hZiNKgDwg7CF8C9Q-NzP60xA67IEm_lxnfXs/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjAz/NzAwNjM4OC9waG90/by90ZWNobm9sb2d5/LWFuZC1maW5hbmNp/YWwtYWR2aXNvcnkt/c2VydmljZXMtY29u/Y2VwdC1idXNpbmVz/cy10ZWFtd29yay1h/bmQtd29ya2luZy1v/bi1kaWdpdGFsLndl/YnA_YT0xJmI9MSZz/PTYxMng2MTImdz0w/Jms9MjAmYz1aWnJn/aXFVRTJSMjdpWlQ1/dVJmYkpsOHZIMTZS/RDVZQXFMcHc1d1oz/OGc4PQ"
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
