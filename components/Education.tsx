"use client";

import { motion } from "framer-motion";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    field: "Advanced Software Engineering & Application Development",
    institution: "LDRP Institute of Technology and Research",
    period: "2025 - Present",
    description:
      "Currently in Semester 2. Specializing in advanced web technologies, cloud computing, and enterprise application architecture.",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    field: "Computer Science Fundamentals",
    institution: "Saurashtra University",
    period: "2023 - 2025",
    description:
      "Built a strong foundation in programming, database management, and software development lifecycles. Graduated with honors.",
  },
];

export default function Education() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2 }}
      className="space-y-12 max-w-4xl mx-auto px-4"
    >
      {/* Header */}
      <div className="text-center space-y-3 mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-white sm:text-6xl"
        >
          EDUCATION
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-zinc-400 text-lg"
        >
          My educational background and continuous learning journey.
        </motion.p>
      </div>

      {/* Timeline Container */}
      <div className="relative border-l border-zinc-800 ml-3 md:ml-6 space-y-12 pb-12">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <span
              className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20"
              aria-hidden="true"
            />

            {/* Content Card */}
            <div className="flex flex-col gap-4 rounded-2xl border border-zinc-700/60 bg-zinc-900/40 p-6 backdrop-blur hover:border-emerald-500/60 hover:bg-zinc-800/60 transition-all group">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <h3 className="text-2xl font-semibold text-white group-hover:text-emerald-300 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-emerald-400 font-medium mt-1">
                    {edu.field}
                  </p>
                  <p className="text-zinc-400 font-medium mt-1">
                    {edu.institution}
                  </p>
                </div>
                <div className="flex-shrink-0 mt-2 sm:mt-0">
                  <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    {edu.period}
                  </span>
                </div>
              </div>
              <p className="text-zinc-300 leading-relaxed text-sm md:text-base">
                {edu.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}


