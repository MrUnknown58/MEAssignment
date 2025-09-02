"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "../lib/animationVariants";
import Image from "next/image";
import Typewriter from "./Typewriter";

export default function MemorySection() {
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
            INFINITE LONG-TERM MEMORY
          </div>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-slate-900">
            Lasting Knowledge for Future Employees
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
                <div className="text-right">
                  <div className="text-xs font-medium text-slate-500 bg-slate-100 inline-block px-3 py-1 rounded-full">
                    PERSONA
                  </div>
                  <div className="font-bold text-lg mt-3">Darren</div>
                  <div className="text-slate-600 whitespace-nowrap">
                    HR Ops Manager
                  </div>
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
                      MEMORY
                    </span>
                  </div>

                  <div className="relative z-10">
                    <div className="text-slate-600 text-left leading-relaxed">
                      <Typewriter
                        words={[
                          { text: "Maintain" },
                          { text: "continuity" },
                          { text: "by" },
                          { text: "capturing" },
                          { text: "vital" },
                          { text: "institutional" },
                          { text: "knowledge" },
                          { text: "in" },
                          { text: "an" },
                          { text: "AI" },
                          { text: "Persona," },
                          { text: "allowing" },
                          { text: "your" },
                          { text: "organization" },
                          { text: "to" },
                          { text: "retain," },
                          { text: "utilize," },
                          { text: "and" },
                          { text: "transfer" },
                          { text: "essential" },
                          { text: "expertise" },
                          { text: "for" },
                          { text: "future" },
                          { text: "employees." },
                        ]}
                        speed={30}
                        startDelay={220}
                        wordDelay={110}
                        loop
                        cursor
                      />
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
            src="/maci-profile.png"
            alt="AI response showing key events for Alpine Tech Solutions"
            width={600}
            height={400}
            className="object-cover"
          />
          <Image
            src="/liam-persona.png"
            alt="AI response showing key events for Alpine Tech Solutions"
            width={600}
            height={400}
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
