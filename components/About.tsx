export default function About() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight text-black sm:text-3xl dark:text-white">
        About Me
      </h2>

      <div className="space-y-4 text-sm leading-relaxed text-gray-600 dark:text-neutral-400">
        <p>
          I&apos;m a Software Engineer at{" "}
          <span className="font-semibold text-black dark:text-white">Openmalo Technologies</span>{" "}
          with 1.5+ years of experience building production-grade web applications. I specialize in
          the React/Next.js ecosystem on the frontend and Node.js/Nest.js on the backend.
        </p>
        <p>
          I&apos;ve worked on SaaS products involving{" "}
          <span className="font-semibold text-black dark:text-white">Generative AI</span>{" "}
          integrations (GPT-4, Claude, Vertex AI, LangChain), real-time collaboration tools,
          payment systems with Stripe, and enterprise compliance platforms for regulated industries
          like MedTech.
        </p>
        <p>
          I enjoy turning complex product requirements into clean, maintainable code. Whether
          it&apos;s designing database schemas, building REST APIs, crafting responsive UIs, or
          setting up CI/CD pipelines &mdash; I care about getting the details right.
        </p>
        <p>
          Currently pursuing my{" "}
          <span className="font-semibold text-black dark:text-white">
            Master of Computer Applications (MCA)
          </span>{" "}
          at LDRP Institute of Technology and Research, while working full-time.
        </p>
      </div>

      {/* Quick facts */}
      <div className="grid grid-cols-2 gap-4 pt-2 sm:grid-cols-4">
        {[
          { label: "Experience", value: "1.5+ yrs" },
          { label: "Projects", value: "4+" },
          { label: "Stack", value: "Full-stack" },
          { label: "Focus", value: "AI + SaaS" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-900"
          >
            <p className="text-lg font-bold text-black dark:text-white">{item.value}</p>
            <p className="text-xs text-gray-500 dark:text-neutral-500">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
