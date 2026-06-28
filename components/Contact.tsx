"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const contactLinks = [
  {
    label: "Email",
    value: "xiaohang.mark.li@gmail.com",
    href: "mailto:xiaohang.mark.li@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/markkli",
    href: "https://github.com/markkli",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/markkli",
    href: "https://www.linkedin.com/in/markkli/",
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

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-night-card/55 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-widest text-aurora-green mb-3">Contact</p>
          <h2 className="text-3xl font-bold text-white mb-2">Say hi</h2>
          <p className="text-slate-400 mb-10">Open to interesting opportunities and conversations.</p>
        </FadeIn>

        <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
          {contactLinks.map((link, i) => (
            <FadeIn key={link.label} delay={i * 0.08}>
              <a
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex flex-col gap-0.5 border border-white/[0.07] rounded-xl px-5 py-4 bg-night hover:border-aurora-green/30 transition-colors cursor-pointer group"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 group-hover:text-aurora-green/70 transition-colors">
                  {link.label}
                </span>
                <span className="text-sm font-medium text-slate-300 group-hover:text-aurora-green transition-colors">
                  {link.value}
                </span>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
