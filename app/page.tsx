import PageWrapper from "@/components/PageWrapper";
import Hero from "@/components/Hero";
import CodeBlock from "@/components/CodeBlock";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import FunSection from "@/components/FunSection";

export default function Home() {
  return (
    <>
      <BackgroundAnimation />
      <PageWrapper>
        <div className="space-y-24 sm:space-y-32">
          {/* Home Section */}
          <section id="home" className="grid gap-10 lg:grid-cols-[1.1fr_minmax(0,1fr)] lg:items-center lg:gap-12 relative z-10 min-h-[calc(100vh-6rem)] content-center">
            <Hero />
            <CodeBlock />
          </section>

          {/* Skills Section */}
          <section id="skills" className="scroll-mt-24">
            <Skills />
          </section>

          {/* Projects Section */}
          <section id="projects" className="scroll-mt-24">
            <Projects />
          </section>

          {/* Education Section */}
          <section id="education" className="scroll-mt-24">
            <Education />
          </section>

          {/* Fun Section */}
          <section id="fun" className="scroll-mt-24">
            <FunSection />
          </section>
        </div>
      </PageWrapper>
    </>
  );
}

