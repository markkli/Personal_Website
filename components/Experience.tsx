"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Job {
  title: string;
  company: string;
  type: string;
  period: string;
  location: string;
  description: string;
}

const jobs: Job[] = [
  {
    title: "Catastrophe Modeling Analyst — Data Science & Automation",
    company: "Aon",
    type: "Full-time",
    period: "Oct 2025 – Present",
    location: "Bloomington, MN",
    description:
      "Working at the intersection of insurance risk, data science, and AI. Building automation and modeling pipelines using Azure Databricks, Snowflake, and ML tools.",
  },
  {
    title: "Catastrophe Modeling Intern",
    company: "Aon",
    type: "Internship",
    period: "Jun 2025 – Aug 2025",
    location: "Bloomington, MN",
    description: "Supported catastrophe risk modeling and data workflows.",
  },
  {
    title: "SaT Data Analyst",
    company: "EY",
    type: "Internship",
    period: "Oct 2024 – Nov 2024",
    location: "",
    description: "Strategy and Transaction data analysis.",
  },
  {
    title: "Business Analyst",
    company: "CITIC Securities",
    type: "Internship",
    period: "Jun 2024 – Aug 2024",
    location: "Beijing, China",
    description: "Financial analysis and business intelligence.",
  },
  {
    title: "Data Scientist",
    company: "Tsinghua University",
    type: "Internship",
    period: "Jun 2023 – Jan 2024",
    location: "Beijing, China",
    description: "Research-oriented data science work.",
  },
  {
    title: "Business Analyst",
    company: "Banco Santander",
    type: "Internship",
    period: "Jun 2022 – Aug 2022",
    location: "Beijing, China",
    description: "",
  },
  {
    title: "M&A Research Analyst",
    company: "Santander Brasil",
    type: "Internship",
    period: "Jul 2018 – Aug 2018",
    location: "São Paulo, Brazil",
    description: "",
  },
];

function TimelineItem({ job, delay, isLast }: { job: Job; delay: number; isLast: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className="relative pl-8"
    >
      {/* Aurora gradient dot */}
      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full gradient-aurora ring-2 ring-white shadow-sm" />
      {!isLast && (
        <div className="absolute left-[5px] top-4 bottom-0 w-[2px] bg-gradient-to-b from-cyan-200 to-violet-200" />
      )}

      <div className="pb-10">
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 mb-1">
          <h3 className="font-bold text-slate-900 text-base">{job.title}</h3>
          <span className="text-xs text-slate-400 font-medium">{job.type}</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 mb-2">
          <span className="font-semibold text-accent text-sm">{job.company}</span>
          <span className="text-slate-400 text-sm">{job.period}</span>
          {job.location && (
            <span className="text-slate-400 text-sm">{job.location}</span>
          )}
        </div>
        {job.description && (
          <p className="text-slate-600 text-sm leading-relaxed">{job.description}</p>
        )}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Experience</h2>
          <div className="w-12 h-1 rounded gradient-aurora mb-10" />
        </motion.div>

        <div>
          {jobs.map((job, i) => (
            <TimelineItem
              key={`${job.title}-${job.company}`}
              job={job}
              delay={i * 0.07}
              isLast={i === jobs.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
