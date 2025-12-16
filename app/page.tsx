import PageWrapper from "@/components/PageWrapper";
import Hero from "@/components/Hero";
import CodeBlock from "@/components/CodeBlock";
import BackgroundAnimation from "@/components/BackgroundAnimation";

export default function Home() {
  return (
    <>
      <BackgroundAnimation />
      <PageWrapper>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_minmax(0,1fr)] lg:items-center lg:gap-12 relative z-10">
          <Hero />
          <CodeBlock />
        </div>
      </PageWrapper>
    </>
  );
}
