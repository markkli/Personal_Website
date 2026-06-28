"use client";

import { motion } from "framer-motion";

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay, ease: "easeOut" as const },
  };
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
      {/* Profile picture */}
      <motion.div {...fadeUp(0)} className="mb-8">
        {/*
          To add your photo:
          1. Drop profile.jpg into /public/
          2. Replace the div below with:
             <img src="/profile.jpg" alt="Mark Li" className="w-24 h-24 rounded-full object-cover ring-4 ring-slate-100 shadow-md" />
        */}
        <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 text-3xl font-bold shadow-sm ring-4 ring-white select-none">
          M
        </div>
      </motion.div>

      <motion.p {...fadeUp(0.08)} className="text-slate-400 text-base font-medium mb-3 tracking-wide">
        hey, I&apos;m
      </motion.p>

      <motion.h1
        {...fadeUp(0.15)}
        className="text-6xl sm:text-7xl md:text-8xl font-extrabold leading-none tracking-tight aurora-text"
      >
        Mark Li
      </motion.h1>

      <motion.p {...fadeUp(0.25)} className="mt-5 text-xl sm:text-2xl font-semibold text-slate-800">
        Data Scientist &amp; AI Engineer
      </motion.p>

      <motion.p {...fadeUp(0.35)} className="mt-3 text-base text-slate-400 max-w-md leading-relaxed">
        Building at the intersection of AI, data, and software.
      </motion.p>

      <motion.div {...fadeUp(0.45)} className="mt-10 flex flex-wrap gap-3 justify-center">
        <a
          href="#projects"
          className="bg-accent text-white font-semibold px-7 py-3 rounded-lg text-sm hover:bg-accent-hover transition-colors cursor-pointer shadow-sm"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="border border-slate-200 text-slate-700 font-semibold px-7 py-3 rounded-lg text-sm hover:border-slate-400 hover:text-slate-900 transition-colors cursor-pointer"
        >
          Get in touch
        </a>
      </motion.div>
    </section>
  );
}
