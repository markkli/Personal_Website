"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Next.js", "FastAPI", "Vite", "PyTorch", "Tailwind CSS"],
  },
  {
    category: "ML & Data",
    items: [
      "XGBoost",
      "LightGBM",
      "ResNet",
      "LSTM",
      "Azure Databricks",
      "Snowflake",
      "ChromaDB",
      "Pandas",
    ],
  },
  {
    category: "Tools",
    items: ["Docker", "Git", "OpenAI API", "Vercel"],
  },
];

function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
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

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Skills</h2>
          <div className="w-12 h-1 bg-accent rounded mb-10" />
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-8">
          {skills.map((group, i) => (
            <FadeIn key={group.category} delay={i * 0.08}>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-blue-50 text-accent text-sm font-medium rounded-md border border-blue-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
