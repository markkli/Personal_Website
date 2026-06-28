"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

/* ── Edit these to taste ── */
const funFacts = [
  { emoji: "🌎", text: "Lived & worked across Brazil, China & the US" },
  { emoji: "🐻", text: "Berkeley MEng → catastrophe modeling at Aon" },
  { emoji: "🛰️", text: "Taught a model to spot wildfires from space" },
  { emoji: "☕", text: "Runs on espresso and curiosity" },
  { emoji: "🏔️", text: "Sucker for a good aurora (hence this site)" },
];

// Tech logos via simple-icons CDN. `color` overrides logos that are too dark on a dark bg.
const tech: { slug: string; name: string; color?: string }[] = [
  { slug: "python", name: "Python" },
  { slug: "pytorch", name: "PyTorch" },
  { slug: "scikitlearn", name: "scikit-learn" },
  { slug: "pandas", name: "Pandas", color: "e2e8f0" },
  { slug: "numpy", name: "NumPy", color: "e2e8f0" },
  { slug: "react", name: "React" },
  { slug: "nextdotjs", name: "Next.js", color: "e2e8f0" },
  { slug: "typescript", name: "TypeScript" },
  { slug: "javascript", name: "JavaScript" },
  { slug: "tailwindcss", name: "Tailwind" },
  { slug: "fastapi", name: "FastAPI" },
  { slug: "docker", name: "Docker" },
  { slug: "git", name: "Git" },
  { slug: "snowflake", name: "Snowflake" },
  { slug: "databricks", name: "Databricks" },
  { slug: "openai", name: "OpenAI", color: "e2e8f0" },
];

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

const card =
  "rounded-2xl border border-white/[0.08] bg-night-card/70 backdrop-blur-sm transition-colors";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-widest text-aurora-green mb-3">
            About
          </p>
          <h2 className="text-3xl font-bold text-white mb-10">A bit about me</h2>
        </FadeIn>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(0,auto)]">
          {/* Photo tile (2x2) */}
          <FadeIn className="sm:col-span-1 lg:col-span-2 lg:row-span-2">
            <div className={`${card} relative overflow-hidden h-64 lg:h-full min-h-[16rem] group`}>
              {/* Swap /public/profile.jpg (or add /public/about.jpg) for a different shot */}
              <Image
                src="/profile.jpg"
                alt="Mark Li"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night via-night/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <p className="text-white font-bold text-lg">Mark Li</p>
                <p className="text-aurora-green text-sm font-medium">📍 Minneapolis, MN</p>
              </div>
            </div>
          </FadeIn>

          {/* Bio tile (wide) */}
          <FadeIn delay={0.05} className="sm:col-span-1 lg:col-span-2">
            <div className={`${card} p-6 h-full`}>
              <h3 className="text-white font-semibold mb-2">Hey, I&apos;m Mark 👋</h3>
              <p className="text-slate-400 leading-relaxed text-[15px]">
                I&apos;m a data scientist and AI engineer working across insurance
                risk modeling, financial analysis, and AI-driven products.
                These days I&apos;m at Aon as a Catastrophe Modeling Analyst —
                modeling risk at scale with Databricks, Snowflake, and ML. Off
                the clock I build AI side-projects I actually want to exist.
              </p>
            </div>
          </FadeIn>

          {/* Fun facts tile (wide) */}
          <FadeIn delay={0.1} className="sm:col-span-1 lg:col-span-2">
            <div className={`${card} p-6 h-full`}>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
                A few fun facts
              </p>
              <ul className="flex flex-col gap-2.5">
                {funFacts.map((f) => (
                  <li key={f.text} className="flex items-start gap-3 text-slate-300 text-[15px]">
                    <span className="text-lg leading-none mt-0.5">{f.emoji}</span>
                    <span>{f.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Tech stack marquee (full width) */}
          <FadeIn delay={0.05} className="sm:col-span-2 lg:col-span-4">
            <div className={`${card} py-6 overflow-hidden`}>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4 px-6">
                My toolkit
              </p>
              <div className="marquee overflow-hidden">
                <div className="marquee-track flex gap-10 w-max items-center pr-10">
                  {[...tech, ...tech].map((t, i) => (
                    <div
                      key={`${t.slug}-${i}`}
                      className="flex items-center gap-2.5 shrink-0 opacity-70 hover:opacity-100 transition-opacity"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`https://cdn.simpleicons.org/${t.slug}${t.color ? `/${t.color}` : ""}`}
                        alt={t.name}
                        width={28}
                        height={28}
                        className="w-7 h-7"
                        loading="lazy"
                      />
                      <span className="text-slate-300 text-sm font-medium whitespace-nowrap">
                        {t.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Socials tile */}
          <FadeIn delay={0.05} className="sm:col-span-1 lg:col-span-2">
            <div className={`${card} p-6 h-full flex flex-col justify-center gap-3`}>
              <a
                href="https://github.com/markkli"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-aurora-green transition-colors cursor-pointer"
              >
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span className="text-sm font-medium">github.com/markkli</span>
              </a>
              <a
                href="https://www.linkedin.com/in/markkli/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-aurora-teal transition-colors cursor-pointer"
              >
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="text-sm font-medium">linkedin.com/in/markkli</span>
              </a>
            </div>
          </FadeIn>

          {/* Travel teaser tile → links to the globe */}
          <FadeIn delay={0.1} className="sm:col-span-1 lg:col-span-2">
            <Link
              href="/travel"
              className={`${card} p-6 h-full flex flex-col justify-center group hover:border-aurora-green/30 cursor-pointer`}
            >
              <p className="text-3xl mb-2">🌍</p>
              <p className="text-white font-semibold">
                Places I&apos;ve been
              </p>
              <p className="text-slate-400 text-sm mt-1">
                Spin the globe — see where I&apos;ve lived &amp; worked{" "}
                <span className="text-aurora-green group-hover:translate-x-0.5 inline-block transition-transform">
                  →
                </span>
              </p>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
