"use client";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "../lib/animationVariants";

interface FeatureItem {
  title: string;
  description: string;
}

const primaryFeatures: FeatureItem[] = [
  {
    title: "Multi-AI",
    description:
      "Collaborate with multiple AI personas in a single conversation and create your agentic workflow.",
  },
  {
    title: "Multi-Modal",
    description:
      "Seamlessly work with and retrieve text, images, and other media in one intuitive interface.",
  },
  {
    title: "Multi-Memory",
    description:
      "Effortlessly utilize and recall from multiple specialized memory banks that work together.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 px-6 bg-white border-t border-slate-100"
      style={{
        backgroundImage:
          "url('https://cdn.prod.website-files.com/5ff65c460ce39f5ec5681c6a/6781a3eddbe04f983742a87c_model-3-backgrounod.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 50%",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl text-white  md:text-5xl font-bold leading-tight text-center">
            <span className="text-6xl font-black">MODEL-3 Is Here</span>
            <br />
            The Next Evolution of AI Teams
          </h2>
          {/* <p className="mt-4 text-white text-lg">
            Collaborate with multiple AI personas in a single conversation and
            create your agentic workflow.
          </p> */}
          {/* add hover animation to this button */}
          <a
            href="/model-3"
            className="inline-block mt-6 px-6 py-3 border-2 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
          >
            Learn More
          </a>
        </div>
        <motion.div
          className="mt-12 grid gap-8 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {primaryFeatures.map((f, i) => (
            <motion.div
              key={f.title}
              variants={fadeInUp}
              custom={i}
              className="group relative p-6 rounded-xl transition-colors shadow-sm border border-slate-100 hover:shadow-md"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-xl bg-gradient-to-br from-indigo-50 via-transparent to-pink-50" />
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-md bg-white border border-slate-200 shadow-inner">
                <img
                  src="/icon-placeholder.svg"
                  alt="Feature icon"
                  className="w-6 h-6"
                />
              </div>
              <h3 className="text-lg font-semibold relative z-10 text-white">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-white leading-relaxed relative z-10">
                {f.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
