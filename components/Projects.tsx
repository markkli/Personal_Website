"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
  image: string | null;
}

const projects: Project[] = [
  {
    title: "AI Travel Copilot",
    subtitle: "Python · TypeScript",
    description:
      "AI travel planning app with a FastAPI backend, RAG retrieval using ChromaDB, Pydantic itinerary schemas, and OpenAI generation. React + Vite frontend with itinerary generation and refinement controls.",
    tags: ["FastAPI", "RAG", "ChromaDB", "React", "OpenAI"],
    links: [{ label: "GitHub", href: "https://github.com/markkli/AI_Travel_Copilot" }],
    image: null, // → /public/projects/ai-travel-copilot.jpg
  },
  {
    title: "Donna",
    subtitle: "Python · TypeScript",
    description:
      "AI assistant app built as a collaborative project with a Python backend and TypeScript frontend.",
    tags: ["Python", "TypeScript", "AI"],
    links: [
      { label: "Backend", href: "https://github.com/VM-Donna/Donna_Backend" },
      { label: "Frontend", href: "https://github.com/VM-Donna/Donna_Frontend" },
    ],
    image: null, // → /public/projects/donna.jpg
  },
  {
    title: "Wildfire Risk Assessment",
    subtitle: "Python",
    description:
      "Hybrid ML system predicting wildfire risk from satellite imagery. XGBoost tabular model (F2: 56%) + ResNet-18 classifier for 4-class risk prediction. Production REST API + Docker.",
    tags: ["PyTorch", "XGBoost", "ResNet", "Computer Vision", "Docker"],
    links: [{ label: "GitHub", href: "https://github.com/markkli/Wildfire-Risk-Risk-Assessment-Based-on-Satellite-Imagery" }],
    image: null, // → /public/projects/wildfire.jpg
  },
  {
    title: "Flowlist",
    subtitle: "TypeScript",
    description:
      "Local-first productivity app that turns a goal into an AI-generated nested task roadmap with focus session tracking. OpenAI API for roadmap and subtask generation.",
    tags: ["React", "OpenAI", "Vite", "TypeScript"],
    links: [{ label: "GitHub", href: "https://github.com/markkli/Flowlist" }],
    image: null, // → /public/projects/flowlist.jpg
  },
  {
    title: "CNN-LSTM Chart Summary",
    subtitle: "Python",
    description:
      "End-to-end PyTorch framework generating natural-language summaries from chart images. CNN encoder + LSTM decoder with visual attention. +25% BLEU improvement over baseline.",
    tags: ["PyTorch", "CNN", "LSTM", "NLP", "Computer Vision"],
    links: [{ label: "GitHub", href: "https://github.com/markkli/CNN-LSTM-Chart-Summary-Generator" }],
    image: null, // → /public/projects/cnn-lstm.jpg
  },
];

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="group border border-slate-200 rounded-xl bg-white flex flex-col hover:border-slate-400 hover:shadow-md transition-all duration-200 overflow-hidden"
    >
      {/* Image area */}
      <div className="relative h-40 bg-slate-900 flex items-center justify-center overflow-hidden">
        {project.image ? (
          // Uncomment when you add an image:
          // <Image src={project.image} alt={project.title} fill className="object-cover opacity-80" />
          <span />
        ) : (
          <span className="text-slate-600 text-5xl font-black tracking-tighter select-none opacity-20">
            {project.title.split(" ").map(w => w[0]).join("").slice(0, 3)}
          </span>
        )}
        {/* Drop image files into /public/projects/ to replace placeholders */}
      </div>

      <div className="p-5 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="font-bold text-slate-900 text-base">{project.title}</h3>
          <p className="text-xs text-slate-400 mt-0.5">{project.subtitle}</p>
        </div>

        <p className="text-slate-500 text-sm leading-relaxed flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-1">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-accent hover:text-accent-hover transition-colors cursor-pointer"
            >
              {link.label} →
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Projects</p>
          <h2 className="text-3xl font-bold text-slate-900 mb-10">Things I&apos;ve built</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
