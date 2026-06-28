"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  };
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  // Track scroll progress through the hero (0 at top → 1 when it leaves the viewport)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // As you scroll, the background scene blurs, dims and gently scales up —
  // so the moving aurora recedes and never competes with the content below.
  const blurPx = useTransform(scrollYProgress, [0, 1], [0, 12]);
  const bgFilter = useMotionTemplate`blur(${blurPx}px)`;
  const bgOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.25]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  // The foreground copy drifts up and fades as the hero exits (parallax depth).
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* ─── Background scene (blurs/dims on scroll) ─── */}
      <motion.div
        aria-hidden
        style={{ filter: bgFilter, opacity: bgOpacity, scale: bgScale }}
        className="absolute inset-0 origin-center"
      >
        <div className="aurora-scene">
          <div className="aurora-sky" />
          <div className="stars" />

          {/* Aurora curtains */}
          <div className="aurora-haze" />
          <div className="ribbon ribbon-1" />
          <div className="ribbon ribbon-2" />
          <div className="ribbon ribbon-3" />
          <div className="ribbon ribbon-4" />
          <div className="ribbon ribbon-5" />

          {/* Green rim-light hugging the ridgeline */}
          <div className="ridge-glow" />

          {/*
            ── Want a real Alaska photo instead of the CSS scene? ──
            Drop /public/hero.jpg, then add this as the FIRST child of
            .aurora-scene (above .aurora-sky). The scroll-blur applies to it too:
              <img src="/hero.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-60" />
          */}

          {/* Layered mountain silhouettes — aurora glows up from behind the peaks */}
          <svg
            className="absolute bottom-0 left-0 w-full h-[48%]"
            viewBox="0 0 1440 500"
            preserveAspectRatio="xMidYMax slice"
            fill="none"
          >
            {/* Far ridge — faint, bluish (atmospheric haze) */}
            <path
              d="M0,300 L160,210 L300,262 L460,168 L620,250 L780,188 L940,256 L1120,178 L1280,242 L1440,200 L1440,500 L0,500 Z"
              fill="#0c1c34"
              opacity="0.7"
            />
            {/* Mid ridge */}
            <path
              d="M0,360 L120,292 L280,342 L420,250 L580,332 L720,268 L880,346 L1040,258 L1220,330 L1380,280 L1440,312 L1440,500 L0,500 Z"
              fill="#071425"
            />
            {/* Near ridge — sharp, near-black silhouette */}
            <path
              d="M0,442 L180,330 L340,412 L500,322 L680,422 L820,350 L1000,430 L1180,340 L1340,416 L1440,360 L1440,500 L0,500 Z"
              fill="#02040a"
            />
          </svg>
        </div>
      </motion.div>

      {/* ─── Foreground content ─── */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Contrast scrim — guarantees the copy stays readable over the aurora */}
        <div className="absolute inset-0 -z-10 scale-150 bg-[radial-gradient(ellipse_at_center,rgba(4,6,14,0.7)_0%,transparent_70%)]" />

        {/* Profile picture — swap /public/profile.jpg to change it */}
        <motion.div {...fadeUp(0)} className="mb-8">
          <div className="relative">
            {/* soft aurora halo behind the photo */}
            <div className="absolute -inset-3 rounded-full bg-aurora-green/20 blur-xl" />
            <Image
              src="/profile.jpg"
              alt="Mark Li"
              width={176}
              height={176}
              priority
              className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover ring-2 ring-aurora-green/40 shadow-xl shadow-aurora-green/20"
            />
          </div>
        </motion.div>

        <motion.p
          {...fadeUp(0.08)}
          className="text-slate-300 text-sm font-medium tracking-widest uppercase mb-4"
        >
          hey, I&apos;m
        </motion.p>

        <motion.h1
          {...fadeUp(0.16)}
          className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-white leading-none tracking-tight aurora-glow"
        >
          Mark Li
        </motion.h1>

        <motion.p
          {...fadeUp(0.26)}
          className="mt-5 text-lg sm:text-xl font-semibold text-aurora-green"
        >
          Data Scientist &amp; AI Engineer
        </motion.p>

        <motion.p
          {...fadeUp(0.36)}
          className="mt-3 text-slate-300 text-base max-w-md leading-relaxed"
        >
          Building at the intersection of AI, data, and software.
        </motion.p>

        <motion.div
          {...fadeUp(0.46)}
          className="mt-10 flex flex-wrap gap-3 justify-center"
        >
          <a
            href="#projects"
            className="bg-aurora-green text-night font-semibold px-7 py-3 rounded-lg text-sm hover:bg-accent-hover transition-colors cursor-pointer shadow-lg shadow-aurora-green/30"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-white/20 text-slate-200 font-semibold px-7 py-3 rounded-lg text-sm hover:border-aurora-green/50 hover:text-white transition-colors cursor-pointer backdrop-blur-sm"
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-slate-500">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5">
          <motion.div
            className="w-1 h-1.5 rounded-full bg-aurora-green"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* Fade the scene into the first section below */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-night to-transparent pointer-events-none z-[5]" />
    </section>
  );
}
