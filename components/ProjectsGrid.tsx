import Image from "next/image";
import { skillIconMap } from "./skills/skillIconMap";

const projects = [
  {
    id: 1,
    title: "Creativeshizzle",
    subtitle: "AI-Powered Content & Brand Suite",
    image: "/assest/creativeshizzle.png",
    description:
      "A comprehensive platform empowering businesses to automate content creation. Leveraging advanced LLMs, it generates on-brand articles, schedules posts, and provides a real-time collaborative workspace.",
    role: "Full-stack Developer",
    year: "2025",
    tech: ["Next.js", "Nest.js", "Supabase", "LangChain", "Stripe", "Docker"],
    features: [
      "AI Brand Voice Analysis (GPT-4 / Claude)",
      "Long-form Article Generation (2000+ words)",
      "Real-time Canvas Chat with Markdown",
      "Automated Social Media Scheduling",
    ],
    links: { github: "#", live: "#" },
  },
  {
    id: 2,
    title: "XyReg",
    subtitle: "MedTech Regulatory Compliance Platform",
    image: "/assest/xyreg.png",
    description:
      "An enterprise-grade solution for medical device companies to manage global regulatory submissions and compliance. Streamlines the entire product lifecycle from concept to post-market surveillance.",
    role: "Full-stack Developer",
    year: "2025",
    tech: ["React", "Radix UI", "Express.js", "Supabase", "Vertex AI", "Stripe"],
    features: [
      "Global Market Submission Management",
      "ISO 13485 QMS Compliance Tracking",
      "ISO 14971 Risk Management Integration",
      "AI-Driven Lifecycle Analytics",
    ],
    links: { github: "#", live: "#" },
  },
  {
    id: 3,
    title: "Omnivia SaaS",
    subtitle: "AI-Powered Business Platform",
    image: "/assest/omnivia.png",
    description:
      "A comprehensive AI-powered business intelligence platform that transforms how organizations process and analyze data. Features ChatGPT integration for automated insights and bulk data processing.",
    role: "Full-stack Developer",
    year: "2024",
    tech: ["Next.js", "Node.js", "Express", "PostgreSQL", "MUI", "ChatGPT API"],
    features: [
      "ChatGPT Integration for AI-Driven Insights",
      "Excel Sheet Reader for Bulk Data Processing",
      "Dynamic Data Visualization with Interactive Charts",
      "AI-Powered Summaries from Large Datasets",
    ],
    links: { github: "#", live: "#" },
  },
  {
    id: 4,
    title: "Doctor Management System",
    subtitle: "Healthcare Platform",
    image: null,
    description:
      "A secure healthcare management platform for modern medical practices. Streamlines patient care with electronic medical records, appointment scheduling, and role-based access control.",
    role: "Full-stack Developer",
    year: "2024",
    tech: ["Next.js", "Node.js", "Express", "PostgreSQL", "Supabase Auth", "MUI"],
    features: [
      "Secure Authentication with Supabase Auth",
      "Appointment Scheduling with Notifications",
      "Electronic Medical Records (EMR) Management",
      "Role-Based Access Control (RBAC)",
    ],
    links: { github: "#", live: "#" },
  },
];

export default function ProjectsGrid() {
  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-black sm:text-3xl dark:text-white">
          Projects
        </h2>
        <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
          Selected works I&apos;ve built and contributed to.
        </p>
      </div>

      <div className="space-y-8">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group rounded-xl border border-gray-200 bg-white p-6 transition-colors hover:border-gray-300 dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:border-neutral-700"
          >
            {/* Image */}
            {project.image && (
              <div className="relative mb-5 aspect-[16/9] w-full overflow-hidden rounded-lg border border-gray-100 bg-gray-50 dark:border-neutral-800 dark:bg-neutral-900">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes="(min-width: 768px) 672px, 100vw"
                  className="object-contain object-center"
                />
              </div>
            )}

            {/* Meta */}
            <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-neutral-500">
              <span className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-0.5 font-medium dark:border-neutral-700 dark:bg-neutral-800">
                {project.role}
              </span>
              <span>&middot;</span>
              <span>{project.year}</span>
            </div>

            {/* Title & Description */}
            <h3 className="text-xl font-bold text-black dark:text-white">{project.title}</h3>
            <p className="mt-0.5 text-sm font-medium text-gray-500 dark:text-neutral-500">
              {project.subtitle}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-neutral-400">
              {project.description}
            </p>

            {/* Features */}
            <ul className="mt-4 space-y-1.5">
              {project.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-gray-600 dark:text-neutral-400"
                >
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-gray-400 dark:text-neutral-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-gray-100 pt-4 dark:border-neutral-800">
              {project.tech.map((tech) => {
                const entry = skillIconMap[tech];
                const IconComponent = entry?.icon;
                const iconColor = entry?.color || "text-gray-500";
                return IconComponent ? (
                  <span key={tech} title={tech}>
                    <IconComponent className={`h-5 w-5 ${iconColor}`} />
                  </span>
                ) : (
                  <span
                    key={tech}
                    className="text-xs font-medium text-gray-500 dark:text-neutral-400"
                  >
                    {tech}
                  </span>
                );
              })}
            </div>

            {/* Actions */}
            <div className="mt-4 flex items-center gap-3">
              <a
                href={project.links.github}
                className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 px-4 py-2 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800"
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5a12 12 0 00-3.79 23.4c.6.12.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.25 1.84 1.25 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.46 11.46 0 016.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.93.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12 12 0 0012 .5z" />
                </svg>
                Source
              </a>
              <a
                href={project.links.live}
                className="inline-flex items-center gap-1.5 rounded-full bg-black px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
              >
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Visit Site
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
