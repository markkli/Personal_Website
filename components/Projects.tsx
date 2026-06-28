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
      "Hybrid ML system predicting wildfire risk from satellite imagery. XGBoost (F2: 56%) + ResNet-18 for 4-class risk prediction. Production REST API + Docker.",
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
  const initials = project.title.split(" ").map(w => w[0]).join("").slice(0, 3);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="group border border-white/[0.07] rounded-xl bg-night-card flex flex-col hover:border-aurora-green/25 transition-all duration-250 overflow-hidden"
    >
      {/* Card header — placeholder until image is added */}
      <div className="relative h-40 bg-night border-b border-white/[0.06] flex items-center justify-center overflow-hidden">
        {project.image ? (
          // When you add an image, replace with:
          // <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-60" />
          null
        ) : (
          <>
            {/* Subtle aurora glow behind initials */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-aurora-green/10 blur-2xl" />
            </div>
            <span className="text-5xl font-black tracking-tighter text-white/10 group-hover:text-white/20 transition-colors duration-300 select-none">
              {initials}
            </span>
            <p className="absolute bottom-3 left-0 right-0 text-center text-xs text-slate-600">
              add image → /public/projects/
            </p>
          </>
        )}
      </div>

      <div className="p-5 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="font-bold text-white text-base">{project.title}</h3>
          <p className="text-xs text-slate-500 mt-0.5">{project.subtitle}</p>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 bg-night border border-white/[0.06] text-slate-400 text-xs font-medium rounded">
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
              className="text-sm font-semibold text-aurora-green hover:text-accent-hover transition-colors cursor-pointer"
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
    <section id="projects" className="py-24 bg-night px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-aurora-green mb-3">Projects</p>
          <h2 className="text-3xl font-bold text-white mb-10">Things I&apos;ve built</h2>
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
