"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    category: "Languages",
    items: ["Python", "R", "SQL", "TypeScript", "JavaScript", "HTML/CSS"],
  },
  {
    category: "ML & AI",
    items: ["PyTorch", "scikit-learn", "XGBoost", "LightGBM", "RAG", "ChromaDB", "A/B Testing", "NLP", "Computer Vision"],
  },
  {
    category: "Data & Cloud",
    items: ["Pandas", "PySpark", "Azure Databricks", "Snowflake", "Power BI", "Tableau"],
  },
  {
    category: "Frameworks & Web",
    items: ["React", "Next.js", "FastAPI", "Vite", "Tailwind CSS"],
  },
  {
    category: "Tools & DevOps",
    items: ["Docker", "Git", "OpenAI API", "Vercel"],
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

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-night-card/55 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-widest text-aurora-green mb-3">Skills</p>
          <h2 className="text-3xl font-bold text-white mb-10">What I work with</h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-10">
          {skillGroups.map((group, i) => (
            <FadeIn key={group.category} delay={i * 0.07}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-night border border-white/[0.07] text-slate-300 text-sm font-medium rounded-md hover:border-aurora-green/30 hover:text-aurora-green transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
