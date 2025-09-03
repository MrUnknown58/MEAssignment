"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../lib/animationVariants";

export default function WhyMobius() {
  const steps = [
    {
      n: 1,
      title: "Application Strategy",
      body: "Clarify target roles & markets, map strengths, filter noisy opportunities and focus on high probability fits.",
    },
    {
      n: 2,
      title: "Positioning Strategy",
      body: "Refine resume, LinkedIn & narrative; translate achievements into concise, outcome‑centric statements.",
    },
    {
      n: 3,
      title: "Execution Strategy",
      body: "Scaled, approved applications, customized assets, proactive networking & interview readiness support.",
    },
  ];

  return (
    <section
      id="why-mobius"
      className="relative py-32 px-6 bg-white border-t border-slate-100 overflow-hidden"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-gradient-to-br from-indigo-50 via-white to-cyan-50 rounded-full blur-3xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-600/10 to-cyan-500/10 border border-indigo-200/40 text-[11px] font-semibold tracking-wider uppercase text-indigo-700">
            About Mobius
          </div>
          <h2 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight text-slate-900 leading-tight whitespace-nowrap">
            Human-Led, AI-Enabled Job Search Acceleration
          </h2>
          <p className="mt-6 text-slate-600 text-base md:text-md leading-relaxed">
            We remove friction & anxiety so you can focus on relationships and
            interview performance— while our blended analyst + AI platform
            executes the operational grind with precision.
          </p>
        </motion.div>
        {/* Mission / Vision Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-8 mt-20"
        >
          {[
            {
              title: "Mission",
              body: "Remove friction and anxiety from the job search so candidates can focus on networking, interviewing & upskilling while we handle execution.",
              accent: "from-indigo-500/10 to-purple-500/10",
            },
            {
              title: "Vision",
              body: "Make a managed, one‑click job search reality— pairing rigorous human recruiting discipline with AI scale to unlock full market value for every professional.",
              accent: "from-cyan-500/10 to-emerald-500/10",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              variants={fadeInUp}
              custom={i}
              className={`relative p-8 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm shadow-sm overflow-hidden`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.accent} opacity-70`}
              />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-inner border border-slate-200 text-indigo-600 font-semibold mb-5">
                  {card.title.charAt(0)}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-slate-600">
                  {card.body}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* Divider */}
        {/* <div className="my-24 flex items-center gap-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          <span className="text-[11px] tracking-wider font-semibold text-slate-500 uppercase">
            Candidate Approach
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </div> */}

        {/* Three Step Timeline
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                variants={fadeInUp}
                custom={i}
                className="relative p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="absolute -top-4 left-4 w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold shadow-md">
                  {s.n}
                </div>
                <h4 className="mt-4 font-semibold text-slate-900 mb-2">
                  {s.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {s.body}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
