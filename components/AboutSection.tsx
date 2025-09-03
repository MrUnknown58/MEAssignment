"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../lib/animationVariants";

const mission = `Remove friction and anxiety from the job search so candidates can focus on high‑leverage activities like networking, interviewing and upskilling while we handle the operational grind.`;
const vision = `Make a managed, one‑click job search reality— pairing human recruiting discipline with AI enabled scale to help every professional surface their full market value.`;

const values = [
  {
    title: "Innovation",
    body: "Continuously refine process, data and tooling to raise placement velocity & quality.",
  },
  {
    title: "Efficiency",
    body: "Respect time through tight feedback loops, meaningful automation and clear reporting.",
  },
  {
    title: "Shared Success",
    body: "Your outcomes define ours— alignment on goals and transparency in progress.",
  },
];

const approachSteps = [
  {
    step: "1",
    title: "Application Strategy",
    body: "Clarify target roles & markets, map strengths, filter noisy opportunities, focus on high probability fits.",
  },
  {
    step: "2",
    title: "Positioning Strategy",
    body: "Refine resume, LinkedIn & narrative; translate achievements into concise, outcome‑centric statements.",
  },
  {
    step: "3",
    title: "Execution Strategy",
    body: "Scaled, approved applications, customized assets, proactive networking & interview readiness support.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-28 px-6 bg-white border-t border-slate-100"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <div className="text-sm font-medium tracking-widest text-slate-600 uppercase mb-4">
            About Mobius
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Mission, Vision & Approach
          </h2>
        </motion.div>
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="p-8 rounded-2xl border border-slate-100 shadow-sm bg-gradient-to-br from-indigo-50/40 to-white"
          >
            <h3 className="text-xl font-semibold mb-3 text-slate-900">
              Mission
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              {mission}
            </p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="p-8 rounded-2xl border border-slate-100 shadow-sm bg-gradient-to-br from-cyan-50/40 to-white"
          >
            <h3 className="text-xl font-semibold mb-3 text-slate-900">
              Vision
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              {vision}
            </p>
          </motion.div>
        </div>
        {/* Values
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-24"
        >
          <h3 className="text-center text-2xl font-semibold mb-10 text-slate-900">
            Core Values
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                variants={fadeInUp}
                custom={i}
                className="p-6 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white transition-colors shadow-sm"
              >
                <div className="text-sm font-semibold tracking-wide text-indigo-600 mb-2 uppercase">
                  {v.title}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {v.body}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
        {/* 3-step approach */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-4"
        >
          <h3 className="text-center text-2xl font-semibold mb-12 text-slate-900">
            Three-Step Candidate Approach
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {approachSteps.map((s, i) => (
              <motion.div
                key={s.title}
                variants={fadeInUp}
                custom={i}
                className="relative p-6 rounded-2xl border border-slate-100 shadow-sm bg-white"
              >
                <div className="absolute -top-4 -left-4 bg-indigo-600 text-white w-10 h-10 flex items-center justify-center rounded-xl font-bold shadow-md">
                  {s.step}
                </div>
                <h4 className="font-semibold text-slate-900 mb-2 mt-2">
                  {s.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {s.body}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
