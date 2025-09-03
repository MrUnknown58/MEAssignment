<div align="center">
	<h1>Mobius Engine – AI Advisory & Enablement Landing (Assignment Submission)</h1>
	<p>A rebranded, accessibility‑minded Next.js 15 + React 19 + Tailwind CSS v4 marketing experience demonstrating hybrid human + AI value delivery.</p>
</div>

---

## ✅ Overview

This project is a polished marketing/landing implementation showcasing:

- Hybrid advisory pods (human analysts + executive coaching + AI tooling)
- Animated storytelling via accessible typewriter sequences (ARIA live, reduced‑motion compliance)
- Infinite testimonial & logo marquees with seamless looping
- Animated KPI counters (rAF + IntersectionObserver)
- Modular section architecture for rapid content substitution
- Mobile‑first responsive refactor (no horizontal scroll; adaptive grids & stacked panels)
- Fixed translucent header with smooth in‑page navigation
- Visual theming: subtle gradients, large typographic background watermark words (HYBRID / MEMORY / REMEMBER)

All dynamic effects gracefully degrade for users preferring reduced motion.

## 🧪 Tech Stack

| Layer         | Choice                        | Notes                                                      |
| ------------- | ----------------------------- | ---------------------------------------------------------- |
| Framework     | Next.js 15 (pages router)     | Static export friendly landing use‑case                    |
| Runtime       | React 19                      | Modern concurrent-ready primitives (not heavily used here) |
| Styling       | Tailwind CSS v4               | Utility‑first, responsive tokens                           |
| Animation     | Framer Motion + rAF utilities | Section reveal + counters + marquees                       |
| Images        | next/image + external domains | Mixed local & remote (hot‑linked) assets                   |
| Accessibility | ARIA + prefers-reduced-motion | Typewriter + motion gating                                 |

## 🧩 Key Components

- `Hero`, `Features`, `FeaturesSuiteSection`, `MetricsSection`
- `CollaborationSection`, `MemorySection`, `PrivacySection` (coach/advisor narrative panels)
- `PersonasSection` (large background typographic layer + contextual narrative)
- `TestimonialsSection` (infinite marquee)
- `ClientLogosSection` (logo marquee)
- `CTASection`, `SiteFooter`, `Header`
- `Typewriter` (reusable, configurable, accessible)
- `animationVariants.ts` (central framer variants)

## ♿ Accessibility Considerations

- Typewriter uses `aria-live="polite"` with reduced‑motion fallback to static text
- Large decorative background words are low‑contrast & non-interactive (purely visual)
- Semantic headings flow (single `<h1>` at page entry; sections start with `<h2>`)
- Focus order preserved (no keyboard traps); header navigation uses in‑page anchors with smooth scroll (CSS based)

## 📱 Responsiveness Highlights

- Grid compression: metrics collapse 3 → 2 → 1 columns
- Advisor / coach panels stack vertically below `md`
- Marquee cards shrink width & gap on small screens
- Global `overflow-x: hidden` to prevent accidental horizontal scroll

## 🚀 Getting Started (Windows PowerShell)

```powershell
cd K:\clients\Assignments\mobiusEng2\dashboard-clone
npm install
npm run dev   # start dev server (default http://localhost:3000)
```

## 🏗 Production Build

```powershell
npm run build
npm start     # serve production build
```

If you encounter a Windows EPERM on `.next/trace`, remove the `.next` folder then rebuild:

```powershell
Remove-Item -Recurse -Force .next
npm run build
```

## 🧮 Feature Implementation Notes

| Feature             | Approach                                                         |
| ------------------- | ---------------------------------------------------------------- |
| Counters            | IntersectionObserver + rAF incremental easing                    |
| Infinite marquees   | Duplicated arrays + translateX loop reset                        |
| Typewriter          | Per‑word schedule + cancellable timers; reduced-motion detection |
| Section reveal      | Framer Motion variants with viewport threshold                   |
| Header translucency | Backdrop blur + border + entry animation                         |

## 🔐 Image & Asset Policy

External images are hot‑linked for assignment efficiency. Replace with local, optimized (`next/image` static imports) variants for production to improve Lighthouse performance.

## 📦 Project Structure (excerpt)

```
components/      # All section + UI primitives
lib/             # Animation variants
pages/           # _app + index landing
public/          # Local static images
styles/          # Tailwind/global CSS
```

## 🧭 Possible Enhancements (Deferred)

- Mobile navigation drawer (button placeholder exists)
- Pause-on-hover / focus accessibility for marquees
- Lighthouse performance tuning (image preloading / compression)
- Dark mode token layer
- Structured metadata / Open Graph images

## ✅ Assignment Submission Checklist

| Criterion                  | Status                                            |
| -------------------------- | ------------------------------------------------- |
| Rebrand & thematic rewrite | Complete                                          |
| Responsive layout          | Implemented (multi-breakpoint)                    |
| Interactive animations     | Counters, marquees, reveals, typewriter           |
| Accessibility basics       | Implemented (headings, ARIA live, reduced motion) |
| Code organization          | Modular, sectioned, reusable utilities            |
| Build passes               | Yes (tested after cleanup)                        |

## 🔄 Reduced Motion Behavior

Users with `prefers-reduced-motion: reduce` receive immediate static text (no per-word typing or cursor blink) and minimal section reveal transitions.

## 🧪 Quick Verification Script (Optional)

```powershell
npm run build
Start-Process http://localhost:3000; npm start
```

## ⚖️ License / Usage

Educational / assignment use. All referenced brand/persona names are illustrative. Replace or obtain permissions before commercial deployment.

---

Maintained as part of the Mobius Engine assignment delivery. For clarifications or extension work, adjust components under `components/`—each section is self-contained.
