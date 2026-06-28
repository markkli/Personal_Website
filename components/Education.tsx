"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const education = [
  {
    school: "University of California, Berkeley",
    degree: "Master of Analytics",
    period: "2024 – Aug 2025",
  },
  {
    school: "Boston University",
    degree: "BA, Economics & Mathematics",
    period: "2020 – 2024",
  },
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function Education() {
  return (
    <section id="education" className="py-24 bg-night px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-widest text-aurora-green mb-3">Education</p>
          <h2 className="text-3xl font-bold text-white mb-10">Where I studied</h2>
        </FadeIn>

        <div className="flex flex-col gap-4">
          {education.map((edu, i) => (
            <FadeIn key={edu.school} delay={i * 0.08}>
              <div className="border border-white/[0.07] rounded-xl p-6 bg-night-card flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 hover:border-aurora-green/25 transition-colors">
                <div>
                  <h3 className="font-bold text-white">{edu.school}</h3>
                  <p className="text-aurora-green font-medium text-sm mt-0.5">{edu.degree}</p>
                </div>
                <span className="text-slate-500 text-sm whitespace-nowrap">{edu.period}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
