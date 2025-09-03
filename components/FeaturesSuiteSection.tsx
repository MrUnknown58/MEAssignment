"use client";
import { useState, useCallback, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface FeatureTab {
  id: string;
  label: string;
  heading: string;
  description: string;
  img: { src: string; alt: string } | null;
}

const tabs: FeatureTab[] = [
  {
    id: "job-intake",
    label: "Job Intake Mastery",
    heading: "Strategic Job Intake & Planning",
    description:
      "Kickstart your search with personalized intake forms that map your skills, goals, and market fit for targeted opportunities.",
    img: {
      src: "https://images.unsplash.com/photo-1617294864705-eaf3c911259f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxhcHRvcCUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D",
      alt: "Strategic planning for job search intake",
    },
  },
  {
    id: "resume-optimization",
    label: "Resume Revolution",
    heading: "AI-Powered Resume Optimization",
    description:
      "Transform your resume into an ATS-friendly powerhouse with expert coaching, keyword alignment, and narrative refinement.",
    img: {
      src: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFwdG9wJTIwYWVzdGhldGljfGVufDB8fDB8fHww",
      alt: "Resume building and optimization tools",
    },
  },
  {
    id: "application-automation",
    label: "Application Automation",
    heading: "Seamless Application Management",
    description:
      "Automate job applications across platforms, track submissions, and manage responses with AI-driven efficiency.",
    img: {
      src: "https://images.unsplash.com/photo-1641275714358-b202ae1a2c78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGxhcHRvcCUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D",
      alt: "Application automation tools",
    },
  },
  {
    id: "analyst-support",
    label: "Analyst Insights",
    heading: "Dedicated Analyst Support",
    description:
      "Get real-time guidance from human analysts who monitor your pipeline, provide feedback, and accelerate your progress.",
    img: {
      src: "https://images.unsplash.com/photo-1587119582191-818eab81ce6c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGxhcHRvcCUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D",
      alt: "Analyst support for job seekers",
    },
  },
  {
    id: "coaching-feedback",
    label: "Coaching Excellence",
    heading: "Executive Coaching & Feedback Loops",
    description:
      "Refine your interview skills and career narrative with personalized coaching sessions and continuous improvement cycles.",
    img: {
      src: "https://images.unsplash.com/photo-1622127922034-dfad729edb08?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGxhcHRvcCUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D",
      alt: "Coaching and feedback for career growth",
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
          Mobius Job Search Suite: Accelerate Your Career Journey
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12">
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
                    className={`w-full text-left px-5 py-4 rounded-lg border transition-colors text-sm font-medium tracking-wide flex items-center gap-3 cursor-pointer ${
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
                      <div className="relative rounded-xl overflow-hidden bg-white flex justify-center items-center w-full">
                        <Image
                          src={t.img.src}
                          alt={t.img.alt}
                          width={600}
                          height={200}
                          className="rounded-2xl"
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
