"use client";
import Reveal from "./Reveal";
import Image from "next/image";
import { motion } from "framer-motion";

// Extracted content from live site evaluation
const features = [
  {
    title: "AI Personas",
    description: "Role-specific AI Personas trained on your proprietary data.",
    icon: {
      src: "https://cdn.prod.website-files.com/5ff65c460ce39f5ec5681c6a/66dc8d697fb17781865ac5b1_personas.svg",
      alt: "target icon",
    },
  },
  {
    title: "Deployment Options",
    description:
      "Company-wide AI deployment with individual user data control.",
    icon: {
      src: "https://cdn.prod.website-files.com/5ff65c460ce39f5ec5681c6a/66dc8d6aa60b3c794bb05154_deployment.svg",
      alt: "Organization icon",
    },
  },
  {
    title: "AI Native Messaging",
    description:
      "Effortless communication through private DMs and group channels.",
    icon: {
      src: "https://cdn.prod.website-files.com/5ff65c460ce39f5ec5681c6a/66dc8d688058bad06f3aa63d_messages.svg",
      alt: "Chat bubbles icon",
    },
  },
  {
    title: "Agents & APIs",
    description:
      "Easy-to-use workflows and integrations facilitate ongoing training.",
    icon: {
      src: "https://cdn.prod.website-files.com/5ff65c460ce39f5ec5681c6a/66dc8d69a0bd34b54189d17e_agents.svg",
      alt: "Sync arrows icon",
    },
  },
];

export default function CTASection() {
  return (
    <section id="cta" className="py-40 px-6 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <Reveal className="">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold leading-tight text-center mb-14 text-slate-900"
            style={{ lineHeight: "48px", fontWeight: 700 }}
          >
            Become AI-Native, Build on Personal AI
          </motion.h2>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 mb-20">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative flex flex-col gap-3 border border-[#dcddeb] p-4 rounded-xl hover:shadow-lg hover:border-slate-200 transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center ring-1 ring-inset ring-indigo-100/60">
                <Image
                  src={f.icon.src}
                  alt={f.icon.alt}
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h3
                className="text-xl font-semibold text-slate-900"
                style={{
                  fontSize: "18px",
                  lineHeight: "35px",
                  fontWeight: 600,
                }}
              >
                {f.title}
              </h3>
              <p
                className="text-sm leading-relaxed text-slate-500"
                style={{ fontSize: "12px", lineHeight: "28px" }}
              >
                {f.description}
              </p>
              <div className="absolute inset-0 -z-10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-indigo-50 via-transparent to-cyan-50" />
            </motion.div>
          ))}
        </div>

        {/* <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#"
            className="inline-flex justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-base font-semibold shadow-sm hover:from-indigo-500 hover:to-cyan-400 transition-colors"
          >
            Get Started
          </a>
          <a
            href="#"
            className="inline-flex justify-center px-8 py-4 rounded-lg border border-slate-300 text-slate-700 text-base font-medium hover:bg-slate-50 transition-colors"
          >
            Talk to Sales
          </a>
        </div> */}
      </div>
    </section>
  );
}
