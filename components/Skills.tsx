"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    category: "Languages",
    color: "cyan",
    items: ["Python", "R", "SQL", "TypeScript", "JavaScript", "HTML/CSS"],
  },
  {
    category: "ML & AI",
    color: "violet",
    items: [
      "PyTorch",
      "scikit-learn",
      "XGBoost",
      "LightGBM",
      "RAG",
      "ChromaDB",
      "A/B Testing",
      "NLP",
      "Computer Vision",
    ],
  },
  {
    category: "Data & Cloud",
    color: "teal",
    items: [
      "Pandas",
      "PySpark",
      "Azure Databricks",
      "Snowflake",
      "Power BI",
      "Tableau",
    ],
  },
  {
    category: "Frameworks & Web",
    color: "cyan",
    items: ["React", "Next.js", "FastAPI", "Vite", "Tailwind CSS"],
  },
  {
    category: "Tools & DevOps",
    color: "violet",
    items: ["Docker", "Git", "OpenAI API", "Vercel"],
  },
];

const tagStyles: Record<string, string> = {
  cyan: "bg-cyan-50 text-cyan-700 border-cyan-100",
  violet: "bg-violet-50 text-violet-700 border-violet-100",
  teal: "bg-teal-50 text-teal-700 border-teal-100",
};

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
          <div className="w-12 h-1 rounded gradient-aurora mb-10" />
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-8">
          {skillGroups.map((group, i) => (
            <FadeIn key={group.category} delay={i * 0.08}>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 text-sm font-medium rounded-full border ${tagStyles[group.color]}`}
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
