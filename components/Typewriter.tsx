"use client";
import { useEffect, useState } from "react";

interface WordSpec {
  text: string;
  className?: string;
}
interface TypewriterProps {
  text?: string; // simple mode
  words?: WordSpec[]; // structured mode
  speed?: number; // ms per character (per char in current word)
  startDelay?: number; // initial delay
  loop?: boolean;
  className?: string;
  cursorClassName?: string;
  cursor?: boolean;
  wordGap?: string; // gap inserted after each completed word
  wordDelay?: number; // delay between words
}

export default function Typewriter({
  text,
  words,
  speed = 28,
  startDelay = 300,
  loop = false,
  className = "",
  cursorClassName = "animate-pulse",
  cursor = true,
  wordGap = " ",
  wordDelay = 140,
}: TypewriterProps) {
  const structured = !!words && words.length > 0;
  // plain mode state
  const [plainDisplayed, setPlainDisplayed] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  // structured mode indices
  const [wordIndex, setWordIndex] = useState(0);
  const [iteration, setIteration] = useState(0);

  useEffect(() => {
    let mounted = true;
    let timeout: any;

    const activeText = text || "";

    const runPlain = () => {
      if (!mounted) return;
      if (charIndex === 0) {
        timeout = setTimeout(stepPlain, startDelay);
      } else {
        stepPlain();
      }
    };

    const stepPlain = () => {
      if (!mounted) return;
      if (charIndex < activeText.length) {
        setPlainDisplayed((d) => d + activeText[charIndex]);
        setCharIndex((i) => i + 1);
        timeout = setTimeout(stepPlain, speed + Math.random() * speed * 0.4);
      } else if (loop) {
        timeout = setTimeout(() => {
          setPlainDisplayed("");
          setCharIndex(0);
          setIteration((it) => it + 1);
        }, 1800);
      }
    };

    const runStructured = () => {
      if (!mounted) return;
      if (wordIndex === 0 && charIndex === 0) {
        timeout = setTimeout(stepStructured, startDelay);
      } else {
        stepStructured();
      }
    };

    const stepStructured = () => {
      if (!mounted || !words) return;
      const currentWord = words[wordIndex]?.text || "";
      if (charIndex < currentWord.length) {
        setCharIndex((i) => i + 1);
        timeout = setTimeout(
          stepStructured,
          speed + Math.random() * speed * 0.4
        );
      } else if (wordIndex < words.length - 1) {
        timeout = setTimeout(() => {
          setWordIndex((w) => w + 1);
          setCharIndex(0);
        }, wordDelay);
      } else if (loop) {
        timeout = setTimeout(() => {
          setWordIndex(0);
          setCharIndex(0);
          setIteration((it) => it + 1);
        }, 1800);
      }
    };

    if (structured) {
      runStructured();
    } else if (text) {
      runPlain();
    }

    return () => {
      mounted = false;
      clearTimeout(timeout);
    };
  }, [
    structured,
    words,
    wordIndex,
    charIndex,
    text,
    speed,
    startDelay,
    loop,
    iteration,
    wordDelay,
  ]);

  if (structured && words) {
    return (
      <span className={className} aria-live="polite">
        {words.map((w, i) => {
          const isPast = i < wordIndex;
          const isActive = i === wordIndex;
          const visible = isPast
            ? w.text
            : isActive
            ? w.text.slice(0, charIndex)
            : "";
          return (
            <span key={i} className={w.className || undefined}>
              {visible}
              {isPast || (isActive && charIndex === w.text.length)
                ? wordGap
                : ""}
            </span>
          );
        })}
        {cursor && (
          <span
            className={
              "inline-block w-px -ml-px bg-slate-400 align-middle " +
              (!loop &&
              wordIndex === words.length - 1 &&
              charIndex === words[words.length - 1].text.length
                ? "opacity-0"
                : cursorClassName)
            }
          />
        )}
      </span>
    );
  }

  return (
    <span className={className} aria-live="polite">
      {plainDisplayed}
      {cursor && (
        <span
          className={
            "inline-block w-px ml-0.5 bg-slate-400 align-middle " +
            (plainDisplayed.length === (text?.length || 0) && !loop
              ? "opacity-0"
              : cursorClassName)
          }
        />
      )}
    </span>
  );
}
