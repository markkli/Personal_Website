"use client";

import { motion } from "framer-motion";

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  };
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-night">
      {/* Star field */}
      <div className="stars" />

      {/* Aurora curtain — the actual northern lights */}
      <div className="aurora-curtain" />

      {/* Content sits above the aurora */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Profile picture */}
        <motion.div {...fadeUp(0)} className="mb-8">
          {/*
            To add your photo:
            Drop /public/profile.jpg and replace the div below with:
            <img src="/profile.jpg" alt="Mark Li"
              className="w-24 h-24 rounded-full object-cover ring-2 ring-aurora-green/30 shadow-lg shadow-aurora-green/10" />
          */}
          <div className="w-24 h-24 rounded-full bg-night-card border border-white/10 flex items-center justify-center text-aurora-green text-3xl font-bold shadow-lg shadow-aurora-green/10 select-none ring-2 ring-aurora-green/20">
            M
          </div>
        </motion.div>

        <motion.p {...fadeUp(0.08)} className="text-slate-400 text-sm font-medium tracking-widest uppercase mb-4">
          hey, I&apos;m
        </motion.p>

        <motion.h1
          {...fadeUp(0.16)}
          className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-white leading-none tracking-tight aurora-glow"
        >
          Mark Li
        </motion.h1>

        <motion.p {...fadeUp(0.26)} className="mt-5 text-lg sm:text-xl font-semibold text-aurora-green">
          Data Scientist &amp; AI Engineer
        </motion.p>

        <motion.p {...fadeUp(0.36)} className="mt-3 text-slate-400 text-base max-w-md leading-relaxed">
          Building at the intersection of AI, data, and software.
        </motion.p>

        <motion.div {...fadeUp(0.46)} className="mt-10 flex flex-wrap gap-3 justify-center">
          <a
            href="#projects"
            className="bg-aurora-green text-night font-semibold px-7 py-3 rounded-lg text-sm hover:bg-accent-hover transition-colors cursor-pointer shadow-lg shadow-aurora-green/20"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-white/15 text-slate-300 font-semibold px-7 py-3 rounded-lg text-sm hover:border-aurora-green/50 hover:text-white transition-colors cursor-pointer"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      {/* Fade to dark at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-night to-transparent pointer-events-none" />
    </section>
  );
}
