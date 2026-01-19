"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiExternalLink,
  FiGithub,
  FiLayers,
  FiZap,
  FiShield,
  FiCpu,
  FiGlobe,
  FiCheckCircle,
} from "react-icons/fi";

// Project Data
const projects = [
  {
    id: 1,
    title: "Creativeshizzle",
    subtitle: "AI-Powered Content & Brand Suite",
    description:
      "A comprehensive platform empowering businesses to automate content creation. Leveraging advanced LLMs, it generates on-brand articles, schedules posts, and provides a real-time collaborative workspace.",
    role: "Full-stack Developer",
    tech: [
      "Next.js",
      "Nest.js",
      "Supabase",
      "LangChain",
      "Stripe",
      "Docker",
    ],
    features: [
      "AI Brand Voice Analysis (GPT-4 / Claude)",
      "Long-form Article Generation (2000+ words)",
      "Real-time Canvas Chat with Markdown",
      "Automated Social Media Scheduling",
    ],
    links: {
      github: "#",
      live: "#",
    },
    color: "from-sky-400 to-blue-600",
    glow: "rgba(14, 165, 233, 0.4)",
    icon: <FiCpu className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "XyReg",
    subtitle: "MedTech Regulatory Compliance Platform",
    description:
      "An enterprise-grade solution for medical device companies to manage global regulatory submissions and compliance. Streamlines the entire product lifecycle from concept to post-market surveillance.",
    role: "Technical Lead",
    tech: [
      "React",
      "Radix UI",
      "Express.js",
      "Supabase",
      "Vertex AI",
      "Stripe",
    ],
    features: [
      "Global Market Submission Management",
      "ISO 13485 QMS Compliance Tracking",
      "ISO 14971 Risk Management Integration",
      "AI-Driven Lifecycle Analytics",
    ],
    links: {
      github: "#",
      live: "#",
    },
    color: "from-emerald-400 to-teal-600",
    glow: "rgba(16, 185, 129, 0.4)",
    icon: <FiShield className="w-6 h-6" />,
  },
];

export default function ProjectsGrid() {
  return (
    <section className="py-24 px-4 w-full relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto space-y-24">
        {/* Section Header */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-400 text-sm font-medium backdrop-blur-md"
          >
            <FiLayers className="w-4 h-4" />
            <span>SELECTED WORKS</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tight"
          >
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">Digital Scale</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-400 leading-relaxed"
          >
            Crafting robust, scalable, and user-centric applications. Here are some of the flagship projects I've engineered.
          </motion.p>
        </div>

        {/* Projects Showcase */}
        <div className="space-y-32">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className={`flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-12 lg:gap-20 items-center`}
    >
      {/* Visual / Preview Area */}
      <div className="w-full lg:w-1/2 relative group perspective-1000">
        <div
          className="absolute inset-0 bg-gradient-to-r blur-2xl opacity-20 -z-10 transition-opacity duration-500 group-hover:opacity-40"
          style={{ backgroundImage: `linear-gradient(to right, ${project.color.split(' ')[1]}, ${project.color.split(' ')[3]})` }} // Approximate gradient extraction or just use a fixed one if complex
        />
        
        {/* Abstract Interface Mockup */}
        <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm aspect-[4/3] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02] group-hover:rotate-1">
            {/* Mock Header */}
            <div className="h-8 bg-zinc-900 border-b border-zinc-800 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
            </div>
            
            {/* Mock Content Body */}
            <div className="p-6 h-full relative overflow-hidden">
                {/* Decorative Gradients within the card */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${project.color} opacity-10 blur-3xl rounded-full`} />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 opacity-10 blur-3xl rounded-full" />
                
                {/* Abstract UI Elements */}
                <div className="space-y-4 relative z-10">
                    <div className="h-8 w-1/3 bg-zinc-800/50 rounded animate-pulse" />
                    <div className="flex gap-4">
                        <div className="h-32 w-2/3 bg-zinc-800/30 rounded-lg border border-zinc-700/30" />
                        <div className="h-32 w-1/3 bg-zinc-800/30 rounded-lg border border-zinc-700/30" />
                    </div>
                    <div className="h-4 w-full bg-zinc-800/30 rounded" />
                    <div className="h-4 w-5/6 bg-zinc-800/30 rounded" />
                    <div className="h-4 w-4/6 bg-zinc-800/30 rounded" />
                </div>
            </div>

             {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <a href={project.links.live} className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-zinc-200 transition-colors">
                        View Live Project <FiExternalLink />
                    </a>
                </div>
            </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="w-full lg:w-1/2 space-y-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-sm font-medium">
             <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${project.color} bg-opacity-10 text-white border border-white/10`}>
                {project.role}
             </span>
             <span className="text-zinc-500">•</span>
             <span className="text-zinc-400">2023 - Present</span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all">
            {project.title}
          </h3>
          <p className="text-xl text-zinc-400 font-light">
             {project.subtitle}
          </p>
          <p className="text-zinc-400 leading-relaxed text-base md:text-lg">
            {project.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.features.map((feature: string, i: number) => (
                <div key={i} className="flex items-start gap-2 text-zinc-300 text-sm">
                    <FiCheckCircle className="w-4 h-4 mt-1 text-emerald-500 shrink-0" />
                    <span>{feature}</span>
                </div>
            ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/50">
          {project.tech.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-xs font-medium text-zinc-400 bg-zinc-900/50 border border-zinc-800 rounded hover:border-zinc-700 hover:text-zinc-200 transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-4">
            <a 
                href={project.links.github}
                className="p-3 rounded-full border border-zinc-800 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-all hover:scale-105 active:scale-95"
                title="View Source Code"
            >
                <FiGithub className="w-5 h-5" />
            </a>
            <a 
                href={project.links.live}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-100 text-zinc-900 font-bold hover:bg-white transition-all hover:scale-105 active:scale-95"
            >
                <FiGlobe className="w-4 h-4" />
                <span>Visit Site</span>
            </a>
        </div>
      </div>
    </motion.div>
  );
}

