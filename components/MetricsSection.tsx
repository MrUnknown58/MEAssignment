"use client";
import { motion } from "framer-motion";

const metrics = [
  { value: "50", suffix: "%", label: "Efficiency Increase" },
  { value: "13", suffix: "+", label: "Hours Saved Weekly" },
  { value: "$20", suffix: "k", label: "Monthly Cost Reduction" },
];

export default function MetricsSection() {
  return (
    <section id="metrics" className="py-44 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold leading-tight mb-5 text-slate-900 text-center"
          style={{ lineHeight: "48px", fontWeight: 700 }}
        >
          Our customers have experienced significant <br />
          boosts in efficiency and ROI.
        </motion.h2>

        <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center bg-clip-text text-transparent"
              style={{
                background: "linear-gradient(83deg,#63f,#6abac6)",
                WebkitBackgroundClip: "text",
              }}
            >
              <div className="flex items-baseline justify-center mb-2">
                <span
                  className="font-semibold"
                  style={{
                    fontSize: "80px",
                    fontWeight: 600,
                  }}
                >
                  {m.value}
                </span>
                <span
                  className="font-semibold"
                  style={{
                    fontSize: "91px",
                    fontWeight: 400,
                  }}
                >
                  {m.suffix}
                </span>
              </div>
              <p className="text-sm text-slate-600 font-normal">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
