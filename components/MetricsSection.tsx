"use client";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const metrics = [
  { value: 100, suffix: "x", label: "More Interviews" },
  { value: 150, suffix: "+", label: "Approved apps (Promo)" },
  { value: 500, suffix: "+", label: "Customized apps (Advanced)" },
];

function Count({ end, suffix }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    let raf = 0;
    let started = false;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            const duration = 1200;
            const start = performance.now();
            const step = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const value = Math.floor(t * end);
              setDisplay(value);
              if (t < 1) raf = requestAnimationFrame(step);
            };
            raf = requestAnimationFrame(step);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [end]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function MetricsSection() {
  return (
    <section id="metrics" className="py-44 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold leading-tight mb-8 text-slate-900 text-center"
          style={{ lineHeight: "48px", fontWeight: 700 }}
        >
          Results candidates see with Mobius
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto justify-items-center">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group text-center bg-clip-text text-transparent px-6 relative"
              style={{
                background: "linear-gradient(83deg,#63f,#6abac6)",
                WebkitBackgroundClip: "text",
              }}
            >
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-indigo-50 via-transparent to-cyan-50 -z-10" />
              <div className="flex items-baseline justify-center mb-2">
                <span
                  className="font-semibold"
                  style={{
                    fontSize: "80px",
                    fontWeight: 600,
                    lineHeight: 1,
                  }}
                >
                  <Count end={m.value} suffix={m.suffix} />
                </span>
              </div>
              <p className="text-sm text-slate-600 font-normal group-hover:text-slate-800 transition-colors">
                {m.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
