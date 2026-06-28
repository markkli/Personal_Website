"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-bold text-lg text-slate-900 tracking-tight hover:text-accent transition-colors"
        >
          Xiaohang Li
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-slate-600 hover:text-accent transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-slate-700 transition-transform duration-200 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-slate-700 transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-slate-700 transition-transform duration-200 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-6 pb-4 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-slate-700 hover:text-accent transition-colors py-1"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
