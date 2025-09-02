"use client";
import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeInUp } from "../lib/animationVariants";

interface RevealProps {
  className?: string;
  children: React.ReactNode;
  delay?: number; // ms
  /** Optional element type string; limited set to reduce union complexity */
  element?: "div" | "section" | "article" | "span";
}

export default function Reveal({
  className = "",
  children,
  delay = 0,
  element = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.animationDelay = delay
              ? `${delay}ms`
              : "0ms";
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const Component: any = motion[element];
  return (
    <Component
      ref={ref}
      className={`reveal ${className}`.trim()}
      variants={prefersReduced ? undefined : fadeInUp}
      initial={prefersReduced ? undefined : "hidden"}
      whileInView={prefersReduced ? undefined : "visible"}
      viewport={{ once: true, amount: 0.2 }}
      custom={delay / 1000 / 0.08 /* map ms to index heuristic */}
      style={prefersReduced ? { opacity: 1, transform: "none" } : undefined}
    >
      {children}
    </Component>
  );
}
