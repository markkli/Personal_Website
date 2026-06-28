"use client";

import { motion } from "framer-motion";

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  };
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center aurora-bg px-6 text-center overflow-hidden">
      {/* Decorative aurora blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-violet-400/10 blur-3xl pointer-events-none" />

      {/* Profile picture */}
      <motion.div {...fadeUp(0)} className="mb-6">
        {/* Replace with: <Image src="/profile.jpg" alt="Mark Li" width={96} height={96} className="rounded-full object-cover ring-4 ring-white shadow-lg" /> */}
        {/* Profile image placeholder — drop /public/profile.jpg to replace */}
        <div className="w-24 h-24 rounded-full gradient-aurora flex items-center justify-center text-white text-3xl font-bold shadow-lg ring-4 ring-white select-none">
          M
        </div>
      </motion.div>

      <motion.p
        {...fadeUp(0.05)}
        className="text-slate-500 font-medium text-base mb-2"
      >
        hey, I&apos;m
      </motion.p>

      <motion.h1
        {...fadeUp(0.12)}
        className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight aurora-text"
      >
        Mark Li
      </motion.h1>

      <motion.p
        {...fadeUp(0.22)}
        className="mt-3 text-lg sm:text-xl font-semibold text-slate-700"
      >
        Data Scientist &amp; AI Engineer
      </motion.p>

      <motion.p
        {...fadeUp(0.32)}
        className="mt-3 text-base sm:text-lg text-slate-500 max-w-lg"
      >
        Building at the intersection of AI, data, and software.
      </motion.p>

      <motion.div
        {...fadeUp(0.45)}
        className="mt-8 flex flex-wrap gap-4 justify-center"
      >
        <a
          href="#projects"
          className="inline-flex items-center gap-2 gradient-aurora text-white font-semibold px-7 py-3 rounded-full text-sm hover:opacity-90 transition-opacity shadow-lg shadow-cyan-200/50 cursor-pointer"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 border-2 border-slate-200 text-slate-700 font-semibold px-7 py-3 rounded-full text-sm hover:border-accent hover:text-accent transition-colors cursor-pointer"
        >
          Get in touch
        </a>
      </motion.div>

      <motion.div
        {...fadeUp(0.6)}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 border-2 border-slate-300 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-slate-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
