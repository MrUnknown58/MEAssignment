"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "../lib/animationVariants";
import Image from "next/image";
import { TypewriterEffect } from "./Typewriter";

export default function MemorySection() {
  const words = [
    { text: "Amit" },
    { text: "Shanker" },
    { text: "is" },
    { text: "the" },
    { text: "Founder" },
    { text: "and" },
    { text: "CEO" },
    { text: "of" },
    { text: "Bloom" },
    { text: "AI," },
    { text: "Inc.," },
    { text: "a" },
    { text: "company" },
    { text: "dedicated" },
    { text: "to" },
    { text: "transforming" },
    { text: "data" },
    { text: "into" },
    { text: "actionable" },
    { text: "business" },
    { text: "insights" },
    { text: "through" },
    { text: "innovative" },
    { text: "platforms" },
    { text: "like" },
    { text: "#SynthBI" },
    { text: "and" },
    { text: "#DYSTL." },
    { text: "His" },
    { text: "career" },
    { text: "includes" },
    { text: "a" },
    { text: "role" },
    { text: "as" },
    { text: "an" },
    { text: "Advisory" },
    { text: "Board" },
    { text: "Member" },
    { text: "at" },
    { text: "SG" },
    { text: "Analytics." },
    { text: "Amit's" },
    { text: "extensive" },
    { text: "experience" },
    { text: "at" },
    { text: "Evalueserve," },
    { text: "where" },
    { text: "he" },
    { text: "served" },
    { text: "as" },
    { text: "Global" },
    { text: "Head" },
    { text: "of" },
    { text: "Data" },
    { text: "Analytics" },
    { text: "and" },
    { text: "Products" },
    { text: "for" },
    { text: "Financial" },
    { text: "Services," },
    { text: "highlights" },
    { text: "his" },
    { text: "ability" },
    { text: "to" },
    { text: "lead" },
    { text: "high-growth" },
    { text: "global" },
    { text: "initiatives." },
  ];
  return (
    <section
      id="memory"
      className="relative py-12 px-6 bg-slate-50 border-t border-slate-100"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-sm font-medium tracking-widest text-slate-600 uppercase mb-4">
            AI Innovation
          </div>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-slate-900">
            Drive AI & Analytics Excellence
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
                  <div className="font-bold text-lg mt-3">Amit Shanker</div>
                  <div className="text-slate-600 whitespace-nowrap pb-4">
                    Product Founder
                  </div>
                  <Image
                    src="https://static.wixstatic.com/media/41ecaa_f85dc7ffa6624294b70ed08613225d29~mv2.png/v1/fill/w_338,h_322,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/amit.png"
                    alt="Amit Shanker"
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
                      MEMORY
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
            src="https://imgs.search.brave.com/jAMIcArNhb0vwqV0XNz2G0Nxu-2X5YjpK4R2_jgoTUQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9jb21t/dW5pY2F0aW9uLXdl/YnNpdGVzLWUtbWFp/bC10ZWxlcGhvbmUt/Y2hhbm5lbHMtdG8t/Y29udGFjdC1idXNp/bmVzcy1jaGF0LWN1/c3RvbWVycy1ob3Rs/aW5lLXdvb2Rlbi1k/aWNlLTIxNDM5MTYy/OS5qcGc"
            alt="AI response showing key events for Alpine Tech Solutions"
            width={600}
            height={400}
            className="object-cover rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
