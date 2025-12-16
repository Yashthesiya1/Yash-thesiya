"use client";

import { motion } from "framer-motion";
import { SiGithub, SiVercel } from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.",
    role: "Full-stack Developer",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
    role: "Frontend Engineer",
    tech: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description: "Data visualization dashboard with interactive charts, real-time metrics, and customizable reports for business insights.",
    role: "Full-stack Developer",
    tech: ["Next.js", "Node.js", "MongoDB", "Chart.js"],
    github: "#",
    live: "#",
  },
  {
    id: 4,
    title: "Social Media Platform",
    description: "Social networking platform with user profiles, posts, comments, and real-time notifications using modern web technologies.",
    role: "Full-stack Developer",
    tech: ["React", "Express.js", "MySQL", "Socket.io"],
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="space-y-12"
    >
      <div className="text-center space-y-3">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-white sm:text-6xl"
        >
          PROJECTS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-zinc-400 text-lg"
        >
          Here are some projects I&apos;ve worked on. More details coming soon!
        </motion.p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative rounded-2xl border border-zinc-700/60 bg-zinc-900/40 p-6 backdrop-blur transition-all hover:border-sky-500/60 hover:bg-zinc-800/60 hover:shadow-lg hover:shadow-sky-500/20"
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-sky-300 transition-colors">
                  {project.title}
                </h3>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-sky-500/20 text-sky-300 border border-sky-500/40">
                  {project.role}
                </span>
              </div>
              
              <p className="text-zinc-400 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-800/60 text-zinc-300 border border-zinc-700/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm"
                >
                  <SiGithub className="h-5 w-5" />
                  <span>Code</span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-zinc-400 hover:text-sky-300 transition-colors text-sm"
                >
                  <SiVercel className="h-5 w-5" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/0 via-emerald-500/0 to-indigo-500/0 opacity-0 transition-opacity group-hover:opacity-10 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

