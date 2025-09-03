"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp } from "../lib/animationVariants";

const phrases = [
  "Submit Intake Form",
  "We search & curate jobs",
  "You approve jobs",
  "We apply — you interview",
];

const phraseGradients = [
  "from-blue-600 to-indigo-600",
  "from-emerald-500 to-teal-500",
  "from-fuchsia-600 to-pink-500",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % phrases.length);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white pt-28 pb-24 px-6"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-slate-50" />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* Left side content */}
        <div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-gray-700"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            Land job interviews 10x faster
          </motion.h1>

          <div className="h-14 md:h-16 flex items-center mt-6">
            <AnimatePresence mode="wait">
              <motion.h2
                key={index}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="text-2xl md:text-4xl font-bold tracking-tight"
              >
                <span
                  className={`bg-gradient-to-r ${phraseGradients[index]} bg-clip-text text-transparent`}
                >
                  {phrases[index]}
                </span>
              </motion.h2>
            </AnimatePresence>
          </div>

          <motion.p
            className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
          >
            We customize resumes, submit applications for approved roles, and
            help you land interviews faster.
          </motion.p>

          <motion.div
            className="mt-10"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
          >
            <a
              href="https://www.mobiusengine.ai/plans"
              className="inline-flex px-10 py-4 rounded-xl text-gray-400 border-2 hover:bg-black hover:text-white font-semibold text-lg shadow-md transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Plans
            </a>
          </motion.div>
        </div>

        {/* Right side hero image */}
        <motion.div
          className="relative mt-4 lg:mt-0"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
        >
          <div className="relative mx-auto w-full max-w-xl rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
            <Image
              src="/hero-personas.png"
              alt="AI personas dashboard preview"
              width={1200}
              height={900}
              priority
              className="w-full h-auto object-cover"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
          </div>
          <div className="absolute -inset-4 -z-10 bg-gradient-to-tr from-blue-200/40 via-indigo-200/30 to-purple-200/30 blur-2xl rounded-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
