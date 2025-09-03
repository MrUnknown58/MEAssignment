"use client";

import { cn } from "../lib/utils";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

/**
 * Shared prop contract for both typewriter variants.
 */
interface TypewriterWord {
  text: string;
  className?: string;
}

interface BaseTypewriterProps {
  words: TypewriterWord[];
  className?: string;
  cursorClassName?: string;
  /** Characters per 1000ms timeline (used in smooth variant). */
  charsPerSecond?: number;
  /** Optional delay before animation (ms). */
  delay?: number;
  /** Disable the cursor blink (e.g. when embedding in headings). */
  showCursor?: boolean;
  /** Respect reduced motion preference (defaults true). */
  respectReducedMotion?: boolean;
}

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
  charsPerSecond = 40,
  delay = 0,
  showCursor = true,
  respectReducedMotion = true,
}: BaseTypewriterProps) => {
  const reduced = usePrefersReducedMotion(respectReducedMotion);
  const processed = useMemo(
    () =>
      words.map((w) => ({
        ...w,
        chars: w.text.split(""),
      })),
    [words]
  );

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (!isInView) return;
    if (reduced) {
      animate("span", { opacity: 1, display: "inline-block" }, { duration: 0 });
      return;
    }
    const perChar = 1 / charsPerSecond; // approximate timing mapping
    animate(
      "span",
      {
        display: "inline-block",
        opacity: 1,
      },
      {
        duration: 0.35,
        delay: stagger(perChar, { startDelay: delay / 1000 }),
        ease: "easeInOut",
      }
    );
  }, [isInView, animate, charsPerSecond, delay, reduced]);

  return (
    <div className={cn(className)} aria-live="polite">
      <motion.div ref={scope} className="inline">
        {processed.map((word, idx) => (
          <span key={`word-${idx}`} className="inline-block">
            {word.chars.map((char, i) => (
              <motion.span
                key={`char-${idx}-${i}`}
                className={cn("opacity-0", word.className)}
                style={{ display: "inline-block" }}
              >
                {char}
              </motion.span>
            ))}
            &nbsp;
          </span>
        ))}
      </motion.div>
      {/* {showCursor && (
        <BlinkingCursor className={cursorClassName} reduced={reduced} large />
      )} */}
      <ScreenReaderFullText words={words} />
    </div>
  );
};

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
  charsPerSecond = 60,
  delay = 250,
  showCursor = true,
  respectReducedMotion = true,
}: BaseTypewriterProps) => {
  const reduced = usePrefersReducedMotion(respectReducedMotion);
  const fullText = useMemo(() => words.map((w) => w.text).join(" "), [words]);
  const [visibleChars, setVisibleChars] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const totalChars = fullText.length;

  const animateChars = useCallback(
    (ts: number) => {
      if (startRef.current === null) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const target = Math.min(
        totalChars,
        Math.floor((elapsed / 1000) * charsPerSecond)
      );
      if (target !== visibleChars) setVisibleChars(target);
      if (target < totalChars) {
        rafRef.current = requestAnimationFrame(animateChars);
      }
    },
    [charsPerSecond, totalChars, visibleChars]
  );

  useEffect(() => {
    if (reduced) {
      setVisibleChars(totalChars);
      return;
    }
    const timer = setTimeout(() => {
      rafRef.current = requestAnimationFrame(animateChars);
    }, delay);
    return () => {
      clearTimeout(timer);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [animateChars, delay, reduced, totalChars]);

  let progressive = fullText.slice(0, visibleChars);
  progressive = progressive.replace(/\n/g, " ");

  return (
    <div className={cn(className)} aria-label={fullText} aria-live="polite">
      <span className="whitespace-nowrap tabular-nums">{progressive}</span>
      {showCursor && (
        <BlinkingCursor className={cursorClassName} reduced={reduced} />
      )}
      <ScreenReaderFullText words={words} />
    </div>
  );
};

/* ---------------------------- Helper Components --------------------------- */

const BlinkingCursor = ({
  className,
  reduced,
  large = false,
}: {
  className?: string;
  reduced?: boolean;
  large?: boolean;
}) => {
  if (reduced) return null;
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      className={cn(
        "inline-block rounded-sm bg-blue-500 align-middle",
        large ? "w-[4px] h-5 md:h-8 lg:h-10" : "w-[3px] h-5 md:h-8",
        className
      )}
    />
  );
};

const ScreenReaderFullText = ({ words }: { words: TypewriterWord[] }) => (
  <span className="sr-only">{words.map((w) => w.text).join(" ")}</span>
);

/** Hook to respect reduced motion preference (default enabled). */
function usePrefersReducedMotion(enabled: boolean) {
  const [prefers, setPrefers] = useState(false);
  useEffect(() => {
    if (!enabled) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handle = () => setPrefers(mq.matches);
    handle();
    mq.addEventListener("change", handle);
    return () => mq.removeEventListener("change", handle);
  }, [enabled]);
  return enabled && prefers;
}
