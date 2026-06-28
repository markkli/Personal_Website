"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
  image: string | null; // path relative to /public, e.g. "/projects/ai-travel.jpg"
  gradient: string;     // fallback gradient when no image is set
}

const projects: Project[] = [
  {
    title: "AI Travel Copilot",
    subtitle: "Python + TypeScript",
    description:
      "AI travel planning app with a FastAPI backend, RAG retrieval using ChromaDB, Pydantic itinerary schemas, and OpenAI generation. React + Vite frontend with itinerary generation and refinement controls.",
    tags: ["Python", "FastAPI", "RAG", "ChromaDB", "React", "OpenAI"],
    links: [{ label: "GitHub", href: "https://github.com/markkli/AI_Travel_Copilot" }],
    image: null, // → add /public/projects/ai-travel-copilot.jpg
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    title: "Donna",
    subtitle: "Python + TypeScript",
    description:
      "AI assistant app built as a collaborative project with a Python backend and TypeScript frontend.",
    tags: ["Python", "TypeScript", "AI"],
    links: [
      { label: "Backend", href: "https://github.com/VM-Donna/Donna_Backend" },
      { label: "Frontend", href: "https://github.com/VM-Donna/Donna_Frontend" },
    ],
    image: null, // → add /public/projects/donna.jpg
    gradient: "from-violet-400 to-purple-600",
  },
  {
    title: "Wildfire Risk Assessment",
    subtitle: "Python",
    description:
      "Hybrid ML system predicting wildfire risk from satellite imagery and environmental data. Combines XGBoost (F2: 56%) with ResNet-18 image classifier for 4-class risk prediction. Production REST API + Docker deployment.",
    tags: ["Python", "PyTorch", "XGBoost", "ResNet", "Computer Vision", "Docker"],
    links: [{ label: "GitHub", href: "https://github.com/markkli/Wildfire-Risk-Risk-Assessment-Based-on-Satellite-Imagery" }],
    image: null, // → add /public/projects/wildfire.jpg
    gradient: "from-orange-400 to-red-500",
  },
  {
    title: "Flowlist",
    subtitle: "TypeScript",
    description:
      "Local-first productivity app that turns a goal into an AI-generated nested task roadmap with focus session tracking. Built with Vite + React + TypeScript, OpenAI API for roadmap and subtask generation.",
    tags: ["TypeScript", "React", "OpenAI", "Vite"],
    links: [{ label: "GitHub", href: "https://github.com/markkli/Flowlist" }],
    image: null, // → add /public/projects/flowlist.jpg
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    title: "CNN-LSTM Chart Summary",
    subtitle: "Python",
    description:
      "End-to-end PyTorch framework generating natural-language summaries from chart images. CNN encoder (ResNet-18/EfficientNet-B0) + LSTM decoder with visual attention. +25% BLEU improvement over baseline.",
    tags: ["Python", "PyTorch", "CNN", "LSTM", "NLP", "Computer Vision"],
    links: [{ label: "GitHub", href: "https://github.com/markkli/CNN-LSTM-Chart-Summary-Generator" }],
    image: null, // → add /public/projects/cnn-lstm.jpg
    gradient: "from-pink-400 to-rose-500",
  },
];

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className="group border border-slate-200 rounded-2xl bg-white flex flex-col hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60 hover:border-slate-300 transition-all duration-300 overflow-hidden"
    >
      {/* Image / placeholder */}
      <div className={`relative h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
        {project.image ? (
          // When you add an image, replace this div with:
          // <Image src={project.image} alt={project.title} fill className="object-cover" />
          <div />
        ) : (
          <div className="text-white/90 text-center px-4">
            <div className="text-4xl font-black tracking-tight opacity-30 select-none">
              {project.title.split(" ").map(w => w[0]).join("").slice(0, 3)}
            </div>
            <p className="text-xs mt-1 opacity-50 font-medium">add image → /public/projects/</p>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 p-5 flex-1">
        <div>
          <h3 className="font-bold text-slate-900 text-base leading-tight">{project.title}</h3>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-0.5">{project.subtitle}</p>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-full border border-slate-200">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-1">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-surface px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Projects</h2>
          <div className="w-12 h-1 rounded gradient-aurora mb-10" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </section>
  );
}
