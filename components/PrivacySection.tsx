"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "../lib/animationVariants";
import Typewriter from "./Typewriter";
import Image from "next/image";

const privacyPoints = [
  "Zero-train outside tenant boundary",
  "Scoped memory segmentation",
  "Automated PII minimization",
  "Encryption in transit & at rest",
  "Audit & export trails",
  "Granular role-based policies",
];

export default function PrivacySection() {
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
            Privacy and Security
          </div>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-slate-900">
            AI Privacy You Can Trust
          </h2>
        </motion.div>

        <motion.div
          className="pb-24 flex justify-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="w-full max-w-3xl">
            <div className="flex gap-6">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className=" p-10 flex items-center gap-4"
              >
                {/* <Image
                          src="/liam-persona.png"
                          alt="James"
                          width={64}
                          height={64}
                          className="rounded-full object-cover"
                        /> */}
                <div className="text-right">
                  <div className="text-xs font-medium text-slate-500 bg-slate-100 inline-block px-3 py-1 rounded-full">
                    PERSONA
                  </div>
                  <div className="font-bold text-lg mt-3">Reece</div>
                  <div className="text-slate-600 whitespace-nowrap">CISO</div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="rounded-2xl p-6 shadow-xl border border-slate-100 flex items-start h-72 w-full"
              >
                <div className="w-full relative overflow-hidden">
                  {/* large faded background word */}
                  <div className="absolute -left-4 top-2 pointer-events-none">
                    <span className="text-6xl md:text-7xl font-extrabold text-slate-100 opacity-60 tracking-tight">
                      REMEMBER
                    </span>
                  </div>

                  <div className="relative z-10">
                    <div className="text-slate-600 text-left leading-relaxed">
                      <Typewriter
                        words={[
                          { text: "Your" },
                          { text: "data" },
                          { text: "is" },
                          { text: "only" },
                          { text: "used" },
                          { text: "to" },
                          { text: "train" },
                          { text: "your" },
                          { text: "models." },
                          { text: "Our" },
                          { text: "privacy-first" },
                          { text: "architecture" },
                          { text: "ensures" },
                          { text: "your" },
                          { text: "sensitive" },
                          { text: "data" },
                          { text: "stays" },
                          { text: "protected" },
                          { text: "and" },
                          { text: "fully" },
                          { text: "compliant" },
                          { text: "with" },
                          { text: "industry" },
                          { text: "regulations." },
                        ]}
                        speed={24}
                        startDelay={280}
                        wordDelay={110}
                        loop
                        cursor
                      />
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
