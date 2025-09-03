"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../lib/animationVariants";
import Image from "next/image";

const coaches = [
  {
    name: "Nicole Lau",
    role: "Executive Coach & Resume Strategist",
    img: "https://static.wixstatic.com/media/41ecaa_b58e267d5c894607b3235816f7171d92~mv2.jpeg/v1/fill/w_360,h_360,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-02-24%20at%206_03_02%20PM.jpeg",
    blurb:
      "Turns complex achievements into crisp accomplishment stories and ATS-friendly positioning across tech & product roles.",
    link: "https://www.linkedin.com/in/nicole-lau-01414517/",
  },
  {
    name: "Rob Rosen",
    role: "Leadership & Interview Coach",
    img: "https://static.wixstatic.com/media/5bc310_4e0b1ef9b859423da8016acc403cb337~mv2.png/v1/fill/w_360,h_630,al_c,lg_1,q_85,enc_avif,quality_auto/pro%203.png",
    blurb:
      "Veteran of Amazon & Google— guides candidates on narrative clarity, promotion readiness & high‑stakes interview execution.",
    link: "http://www.linkedin.com/in/robrosen",
  },
];

const advisors = [
  {
    name: "Vimi Rao",
    role: "Advisor",
    img: "https://static.wixstatic.com/media/41ecaa_4c465177708449ac9fbcf63ac9f56586~mv2.jpeg/v1/fill/w_360,h_360,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Vimi_Rao.jpeg",
    blurb:
      "Entrepreneur & program leader driving operational scale across enterprise transformation initiatives.",
    link: "https://www.linkedin.com/in/vimirao/",
  },
  {
    name: "Amit Shanker",
    role: "Advisor",
    img: "https://static.wixstatic.com/media/41ecaa_f85dc7ffa6624294b70ed08613225d29~mv2.png/v1/fill/w_338,h_322,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/amit.png",
    blurb:
      "AI & analytics product founder shaping data platform strategy and insight automation.",
    link: "https://www.linkedin.com/in/amitshanker81/",
  },
  {
    name: "Alex Langowski",
    role: "Advisor",
    img: "https://static.wixstatic.com/media/41ecaa_7713ca9839394c54a8ceaad11b7edf40~mv2.jpeg/v1/fill/w_338,h_322,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202024-01-28%20at%202_19_46%20PM.jpeg",
    blurb:
      "Data & AI executive optimizing analytics platforms and operational intelligence for growth teams.",
    link: "https://www.linkedin.com/in/langowski/",
  },
];

export default function CoachesAdvisorsSection() {
  return (
    <section
      id="team"
      className="py-28 px-6 bg-slate-50 border-t border-slate-100"
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
            Coaches & Advisors
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Human Expertise + AI Scale
          </h2>
        </motion.div>

        <h3 className="text-lg font-semibold text-slate-800 mb-6">
          Executive Coaches
        </h3>
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {coaches.map((c, i) => (
            <motion.div
              key={c.name}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
              className="relative p-6 rounded-2xl border border-slate-100 bg-white shadow-sm flex flex-col md:flex-row gap-6"
            >
              <div className="w-32 h-32 rounded-xl overflow-hidden border border-slate-200 shadow-sm flex-shrink-0">
                <Image
                  src={c.img}
                  alt={c.name}
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-slate-900">{c.name}</h4>
                <div className="text-xs font-medium text-indigo-600 tracking-wide uppercase mt-1 mb-3">
                  {c.role}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">
                  {c.blurb}
                </p>
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  LinkedIn →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <h3 className="text-lg font-semibold text-slate-800 mb-6">Advisors</h3>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {advisors.map((a, i) => (
            <motion.div
              key={a.name}
              variants={fadeInUp}
              custom={i}
              className="p-6 rounded-2xl border border-slate-100 bg-white shadow-sm flex flex-col items-center text-center"
            >
              <div className="w-28 h-28 rounded-xl overflow-hidden border border-slate-200 shadow-sm mb-4">
                <Image
                  src={a.img}
                  alt={a.name}
                  width={140}
                  height={140}
                  className="object-cover w-full h-full"
                />
              </div>
              <h4 className="font-semibold text-slate-900">{a.name}</h4>
              <div className="text-[11px] font-medium text-indigo-600 tracking-wide uppercase mt-1 mb-2">
                {a.role}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                {a.blurb}
              </p>
              <a
                href={a.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-indigo-600 hover:text-indigo-500"
              >
                LinkedIn →
              </a>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-4 text-center text-[11px] tracking-wide text-slate-400 uppercase">
          Coach & advisor summaries paraphrased for brevity.
        </p>
      </div>
    </section>
  );
}
