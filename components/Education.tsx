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
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function Education() {
  return (
    <section id="education" className="py-24 bg-surface-2 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Education</h2>
          <div className="w-12 h-1 rounded gradient-aurora mb-10" />
        </FadeIn>

        <div className="flex flex-col gap-5">
          {education.map((edu, i) => (
            <FadeIn key={edu.school} delay={i * 0.1}>
              <div className="border border-slate-200 rounded-2xl p-6 bg-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 hover:border-slate-300 hover:shadow-md transition-all">
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">{edu.school}</h3>
                  <p className="aurora-text font-semibold text-sm mt-0.5">{edu.degree}</p>
                </div>
                <span className="text-slate-500 text-sm font-medium whitespace-nowrap">{edu.period}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
