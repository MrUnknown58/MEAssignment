"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "../lib/animationVariants";
import Typewriter from "./Typewriter";
import Image from "next/image";

export default function PersonasSection() {
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
            Personal Intelligence
          </div>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-slate-900">
            Grow Your Workforce with AI Personas
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
                  <div className="font-bold text-lg mt-3">James</div>
                  <div className="text-slate-600 whitespace-nowrap">
                    AI Operations Lead
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="bg-gradient-to-tr from-indigo-50/60 to-white rounded-2xl p-6 shadow-lg border border-slate-100 flex items-start h-72 w-full"
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
                      {/** Structured typewriter words */}
                      <Typewriter
                        words={[
                          { text: "AI" },
                          { text: "Personas" },
                          { text: "are" },
                          { text: "digital" },
                          { text: "representations" },
                          { text: "of" },
                          { text: "job" },
                          { text: "functions," },
                          { text: "people," },
                          { text: "and" },
                          { text: "organizations," },
                          { text: "performing" },
                          { text: "the" },
                          { text: "role" },
                          { text: "of" },
                          { text: "real-world" },
                          { text: "counterparts" },
                          { text: "without" },
                          { text: "real-world" },
                          { text: "costs." },
                        ]}
                        // speed={34}
                        startDelay={250}
                        // wordDelay={110}
                        loop
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
      </div>
    </section>
  );
}
