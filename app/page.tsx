import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <footer className="py-8 text-center text-sm text-slate-400 bg-slate-50 border-t border-slate-100">
        © {new Date().getFullYear()} Xiaohang Li. Built with Next.js &amp; Tailwind CSS.
      </footer>
    </main>
  );
}
