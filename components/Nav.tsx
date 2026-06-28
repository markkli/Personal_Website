"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sectionLinks = [
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
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-night/90 backdrop-blur-md border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-white hover:text-aurora-green transition-colors cursor-pointer">
          Mark Li
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {isHome && sectionLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              {label}
            </a>
          ))}
          <Link
            href="/travel"
            className={`text-sm transition-colors cursor-pointer ${
              pathname === "/travel"
                ? "text-aurora-green font-medium"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Travel
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-5 h-0.5 bg-current transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-current transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-current transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-night/95 backdrop-blur-md border-b border-white/[0.06] px-6 pb-5 flex flex-col gap-4">
          {isHome && sectionLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer py-0.5"
            >
              {label}
            </a>
          ))}
          <Link
            href="/travel"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer py-0.5"
          >
            Travel
          </Link>
        </div>
      )}
    </nav>
  );
}
