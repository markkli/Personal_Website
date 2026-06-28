"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const jobs = [
  {
    title: "Catastrophe Modeling Analyst — Data Science & Automation",
    company: "Aon",
    type: "Full-time",
    period: "Oct 2025 – Present",
    location: "Bloomington, MN",
    description: "Working at the intersection of insurance risk, data science, and AI. Building automation and modeling pipelines using Azure Databricks, Snowflake, and ML tools.",
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

function TimelineItem({ job, delay, isLast }: { job: typeof jobs[0]; delay: number; isLast: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="relative pl-7"
    >
      <div className="absolute left-0 top-[7px] w-2.5 h-2.5 rounded-full bg-accent ring-2 ring-white ring-offset-1 ring-offset-white" />
      {!isLast && <div className="absolute left-[4px] top-5 bottom-0 w-px bg-slate-200" />}

      <div className="pb-9">
        <h3 className="font-semibold text-slate-900 text-sm leading-snug">{job.title}</h3>
        <div className="flex flex-wrap items-center gap-x-2 mt-1">
          <span className="text-accent text-sm font-semibold">{job.company}</span>
          <span className="text-slate-400 text-xs">{job.type}</span>
          <span className="text-slate-400 text-xs">{job.period}</span>
          {job.location && <span className="text-slate-400 text-xs">{job.location}</span>}
        </div>
        {job.description && (
          <p className="text-slate-500 text-sm mt-1.5 leading-relaxed">{job.description}</p>
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Experience</p>
          <h2 className="text-3xl font-bold text-slate-900 mb-10">Where I&apos;ve worked</h2>
        </motion.div>

        {jobs.map((job, i) => (
          <TimelineItem
            key={`${job.title}-${job.company}`}
            job={job}
            delay={i * 0.06}
            isLast={i === jobs.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
