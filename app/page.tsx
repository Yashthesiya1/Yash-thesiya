import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10 sm:px-8">
      <div className="space-y-20">
        <section id="home">
          <Hero />
        </section>

        <section id="skills" className="scroll-mt-24">
          <Skills />
        </section>

        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>

        <section id="education" className="scroll-mt-24">
          <Education />
        </section>

        <footer className="border-t border-gray-200 py-8 text-center text-sm text-gray-500 dark:border-neutral-800 dark:text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Yash Thesiya. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
