"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "../lib/animationVariants";
import Image from "next/image";

export default function WhyPersonalAI() {
  return (
    <section id="why-personal-ai" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto gap-12 items-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-4xl font-bold text-center tracking-wide mb-4">
            Why Personal AI
          </div>
          <p className="text-slate-400 max-w-2xl text-center pt-6 pb-10 mx-auto text-md leading-relaxed">
            Personal AI delivers unparalleled accuracy, transparency, and
            privacy, giving you complete data ownership and confidence in your
            network of AI personas.
          </p>
        </motion.div>

        <motion.div
          className="relative overflow-hidden flex justify-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative max-w-3xl py-10 h-auto">
            <Image
              src="/persona-dashboard.png"
              alt="Why Personal AI illustration"
              width={700}
              height={900}
              style={{ background: "linear-gradient(#c5baca,#9a8aa3)" }}
              className=" object-cover p-10 rounded-3xl"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
