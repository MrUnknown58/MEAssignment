"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "../lib/animationVariants";
import { useReducedMotion } from "framer-motion";

type VideoTestimonial = {
  id: string;
  name: string;
  role: string;
  summary: string;
  videoSrc?: string; // mp4 placed in /public or remote URL
  poster?: string; // poster image path
  transcript?: string;
  youtubeUrl?: string; // YouTube embed URL (e.g., https://www.youtube.com/embed/VIDEO_ID)
};

// Placeholder data – replace videoSrc with actual MP4 files you add under /public later.
const videoTestimonials: VideoTestimonial[] = [
  {
    id: "holly",
    name: "Holly",
    role: "Senior Executive Candidate",
    summary:
      "Holly secured 10+ interviews rapidly and converted one into the offer she accepted.",
    videoSrc: undefined, // e.g. "/videos/holly.mp4"
    poster: undefined, // e.g. "/videos/holly-poster.jpg"
    transcript:
      "Mobius removed the noise, prioritized roles that matched my trajectory and let me focus entirely on executive level prep. The velocity of interviews was unlike prior searches.",
    youtubeUrl: "https://www.youtube.com/embed/2q30UklnQl0?si=f-kV714lRymE7Xy2", // Example YouTube embed URL
  },
  {
    id: "joshua",
    name: "Joshua",
    role: "Senior Software Engineer",
    summary:
      "Joshua streamlined targeting and landed an offer after focused interview prep.",
    videoSrc: undefined, // e.g. "/videos/joshua.mp4"
    poster: undefined,
    transcript:
      "Within weeks I had a calibrated pipeline. Removing the admin work meant deeper technical prep and ultimately an accepted offer.",
    youtubeUrl: "https://www.youtube.com/embed/e3Vyi-wnorM?si=tzA8yxjyriyGTb5u",
  },
];

export default function VideoTestimonialsSection() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section
      id="client-videos"
      className="py-28 px-6 bg-white border-t border-slate-100"
      aria-labelledby="video-testimonials-heading"
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
            What Our Clients Say
          </div>
          <h2
            id="video-testimonials-heading"
            className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight"
          >
            Real Outcomes, Real Voices
          </h2>
          <p className="mt-5 max-w-3xl mx-auto text-slate-600 text-sm md:text-base leading-relaxed">
            Short-form testimonial videos (or narrated summaries) highlighting
            velocity, conversion, and clarity gains achieved through the Mobius
            analyst + platform model.
          </p>
        </motion.div>

        <div className="grid gap-8 md:gap-10 md:grid-cols-2">
          {videoTestimonials.map((t) => (
            <motion.article
              key={t.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="p-6 flex flex-col h-full">
                <header className="mb-4">
                  <h3 className="text-lg font-semibold text-slate-900 leading-snug">
                    {t.name}
                  </h3>
                  <p className="text-xs uppercase tracking-wide font-medium text-indigo-600 mt-1">
                    {t.role}
                  </p>
                </header>
                <div className="relative mb-5 rounded-lg overflow-hidden bg-slate-200 aspect-video flex items-center justify-center">
                  {t.youtubeUrl ? (
                    <iframe
                      className="w-full h-full"
                      src={t.youtubeUrl}
                      title={`YouTube video testimonial from ${t.name}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      aria-label={`Video testimonial from ${t.name}`}
                    ></iframe>
                  ) : t.videoSrc ? (
                    <video
                      className="w-full h-full object-cover"
                      controls
                      playsInline
                      preload="metadata"
                      poster={t.poster}
                      aria-label={`Video testimonial from ${t.name}`}
                    >
                      <source src={t.videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                      <span className="text-sm font-medium text-slate-600">
                        Video coming soon
                      </span>
                      <span className="mt-2 text-[11px] text-slate-500">
                        <span className="mt-2 text-[11px] text-slate-500">
                          (Provide /public/videos/{t.id}.mp4 or YouTube URL to
                          enable playback)
                        </span>
                      </span>
                    </div>
                  )}
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-slate-900/5" />
                </div>
                <p className="text-slate-700 text-sm leading-relaxed mb-4">
                  {t.summary}
                </p>
                {t.transcript && (
                  <details className="group mt-auto">
                    <summary className="cursor-pointer select-none text-xs font-medium text-indigo-600 hover:text-indigo-700 focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded">
                      Transcript
                    </summary>
                    <div className="mt-2 text-[13px] leading-relaxed text-slate-600 bg-white/70 rounded p-3 border border-slate-100">
                      {t.transcript}
                    </div>
                  </details>
                )}
              </div>
            </motion.article>
          ))}
        </div>
        {/* <p className="mt-10 text-center text-xs text-slate-500">
          * More testimonial media available upon request. Replace placeholders
          by adding mp4 files & poster images under <code>/public/videos</code>{" "}
          and updating <code>videoSrc</code>, or provide YouTube embed URLs in <code>youtubeUrl</code>.
        </p> */}
      </div>
    </section>
  );
}
