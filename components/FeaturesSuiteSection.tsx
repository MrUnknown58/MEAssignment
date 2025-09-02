"use client";
import { useState, useCallback, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface FeatureTab {
  id: string; // stable id for aria controls
  label: string;
  heading: string;
  description: string;
  img: { src: string; alt: string } | null;
}

const tabs: FeatureTab[] = [
  {
    id: "direct-messages",
    label: "Direct Messages",
    heading: "Direct Messages",
    description:
      "Secure one-on-one conversations with your AI, ensuring confidentiality and personal interactions.",
    img: {
      src: "https://cdn.prod.website-files.com/5ff65c460ce39f5ec5681c6a/66dc7c578b7957d3935b890a_DMs-min.png",
      alt: "Personal AI App showing Direct Messaging with a persona",
    },
  },
  {
    id: "channels",
    label: "Channels",
    heading: "Channels",
    description:
      "Collaborate seamlessly with teams or groups by leveraging collective AI insights in dedicated spaces.",
    img: {
      src: "https://cdn.prod.website-files.com/5ff65c460ce39f5ec5681c6a/66dc7cf3079776ced5fa48e8_channels-min.png",
      alt: "Personal AI app showing channels with multiple personas collaborating with team members.",
    },
  },
  {
    id: "apis",
    label: "APIs",
    heading: "API",
    description:
      "Integrate Personal AI's powerful capabilities into your existing tools and workflows for enhanced productivity.",
    img: {
      src: "https://cdn.prod.website-files.com/5ff65c460ce39f5ec5681c6a/66dc7e3723132c83a8aa0d7a_api-min%20(1).png",
      alt: "Personal AI API integrating with a chrome extension.",
    },
  },
  {
    id: "workflows",
    label: "Workflows",
    heading: "Workflows",
    description:
      "Automate complex tasks and processes with customizable AI-driven sequences tailored to your needs.",
    img: {
      src: "https://cdn.prod.website-files.com/5ff65c460ce39f5ec5681c6a/66dc7bc6930b82790d58e045_workflows3.png",
      alt: "The Personal AI App showing many AIs responding to different queries in the same channel.",
    },
  },
  {
    id: "agents",
    label: "Agents",
    heading: "Agents",
    description:
      "Deploy specialized AI models to handle specific roles or tasks, streamlining operations across your organization.",
    img: {
      src: "https://cdn.prod.website-files.com/5ff65c460ce39f5ec5681c6a/66e9cc149cc5e47b326e733e_sms-web-min.png",
      alt: "Personal AI app showing SMS channel from incoming text messages to an AI persona's phone number.",
    },
  },
];

export default function FeaturesSuiteSection() {
  const [active, setActive] = useState(0);
  const panelBaseId = useId();

  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      setActive((p) => (p + 1) % tabs.length);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      setActive((p) => (p - 1 + tabs.length) % tabs.length);
    } else if (e.key === "Home") {
      e.preventDefault();
      setActive(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setActive(tabs.length - 1);
    }
  }, []);

  return (
    <section
      id="feature-suite"
      className="py-40 px-6 border-t border-slate-100 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl text-center font-bold leading-tight mb-12 text-slate-900 pb-10"
          style={{ lineHeight: "48px", fontWeight: 700 }}
        >
          Robust Suite of Features for a Truly Personal Experience
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Tabs */}
          <div className="lg:w-1/3">
            <div
              role="tablist"
              aria-label="Feature suite tabs"
              className="space-y-2"
              onKeyDown={onKeyDown}
            >
              {tabs.map((t, i) => {
                const selected = i === active;
                return (
                  <button
                    key={t.id}
                    role="tab"
                    aria-selected={selected}
                    aria-controls={`${panelBaseId}-${t.id}`}
                    id={`${panelBaseId}-tab-${t.id}`}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActive(i)}
                    className={`w-full text-left px-5 py-4 rounded-lg border transition-colors text-sm font-medium tracking-wide flex items-center gap-3 ${
                      selected
                        ? "border-indigo-500/60 bg-indigo-50 text-indigo-700"
                        : "border-slate-200 hover:border-slate-300 bg-white text-slate-600"
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400" />
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Panel */}
          <div className="lg:flex-1 min-h-[420px] p-10 rounded-3xl shadow-xl border border-[#dcddeb]">
            <AnimatePresence mode="wait">
              {tabs.map((t, i) => {
                if (i !== active) return null;
                return (
                  <motion.div
                    key={t.id}
                    role="tabpanel"
                    id={`${panelBaseId}-${t.id}`}
                    aria-labelledby={`${panelBaseId}-tab-${t.id}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35 }}
                    className="flex flex-col gap-10 items-start"
                  >
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-4">
                        {t.heading}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-sm md:text-base max-w-prose">
                        {t.description}
                      </p>
                    </div>
                    {t.img && (
                      <div className="relative rounded-xl border border-slate-200 shadow-sm overflow-hidden bg-white">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        {/* <img
                          src={t.img.src}
                          alt={t.img.alt}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        /> */}
                        <Image
                          src={t.img.src}
                          alt={t.img.alt}
                          width={600}
                          height={700}
                          className="object-cover"
                        />
                        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
