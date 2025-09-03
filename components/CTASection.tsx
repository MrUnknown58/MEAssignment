"use client";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

const features = [
  {
    title: "September Promo",
    price: "$35/wk",
    bullets: [
      "Search & Curation across 1m+ jobs, every 48 hours",
      "Up to 15 approved job apps/week — human based, company websites only",
      "Job scan across unlimited job titles",
    ],
    cta: "https://www.mobiusengine.ai/plans",
  },
  {
    title: "Starter",
    price: "$50/wk",
    bullets: [
      "Everything in Promo plan",
      "Up to 30 job applications/week",
      "Analyst support with 6 hour SLA",
      "$10/week credits to Mobius resume platform",
    ],
    cta: "https://www.mobiusengine.ai/plans",
  },
  {
    title: "Advanced - Custom Resumes",
    price: "$100/wk",
    bullets: [
      "Customized resumes & cover letters for every application",
      "Resume review audit report",
      "LinkedIn profile review & ATS reformatting",
      "HR analyst on PST hours",
    ],
    cta: "https://www.mobiusengine.ai/plans",
  },
  {
    title: "Resume Rebuild",
    price: "$1000 one-time",
    bullets: [
      "Rebuild resume for senior/VP positioning",
      "3x 30-minute coaching sessions",
      "Work directly with co-founder and executive coach",
    ],
    cta: "https://www.mobiusengine.ai/plans",
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
            Become AI-Native, Build on Mobius
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
              className="group relative flex flex-col gap-3 border border-[#dcddeb] p-5 rounded-xl hover:shadow-lg hover:border-slate-200 transition-shadow justify-between hover:bg-white/60"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {f.title}
              </h3>
              <div className="text-sm text-slate-700 font-medium">
                {f.price}
              </div>
              <ul className="text-sm leading-relaxed text-slate-500 mt-3 space-y-2">
                {f.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
              <div className="mt-4">
                <a
                  href={f.cta}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex px-4 py-2 rounded-lg border text-sm font-semibold hover:bg-slate-50 transition-colors"
                >
                  Sign up now
                </a>
              </div>
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
