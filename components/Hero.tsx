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
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
      <motion.p
        {...fadeUp(0)}
        className="text-accent font-semibold text-sm tracking-widest uppercase mb-4"
      >
        Portfolio
      </motion.p>

      <motion.h1
        {...fadeUp(0.1)}
        className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 leading-tight tracking-tight"
      >
        Xiaohang Li
      </motion.h1>

      <motion.p
        {...fadeUp(0.2)}
        className="mt-4 text-xl sm:text-2xl font-semibold text-accent"
      >
        Data Scientist &amp; Software Engineer
      </motion.p>

      <motion.p
        {...fadeUp(0.3)}
        className="mt-4 text-base sm:text-lg text-slate-500 max-w-xl"
      >
        Building at the intersection of AI, data, and software.
      </motion.p>

      <motion.div
        {...fadeUp(0.45)}
        className="mt-10 flex flex-wrap gap-4 justify-center"
      >
        <a
          href="#projects"
          className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3 rounded-lg text-sm hover:bg-accent-hover transition-colors shadow-md shadow-blue-200"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 border-2 border-accent text-accent font-semibold px-7 py-3 rounded-lg text-sm hover:bg-accent hover:text-white transition-colors"
        >
          Contact
        </a>
      </motion.div>

      <motion.div
        {...fadeUp(0.6)}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 border-2 border-slate-300 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-slate-400 rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
