"use client";

import { motion } from "framer-motion";

const education = [
  {
    degree: "Bachelor's Degree",
    field: "Computer Science / Software Engineering",
    institution: "University",
    period: "2018 - 2022",
    description: "Focused on software development, algorithms, data structures, and web technologies.",
  },
];

export default function Education() {
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

      <div className="space-y-6">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative rounded-2xl border border-zinc-700/60 bg-zinc-900/40 p-6 backdrop-blur hover:border-emerald-500/60 hover:bg-zinc-800/60 transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="space-y-2 flex-1">
                <h3 className="text-2xl font-semibold text-white">
                  {edu.degree}
                </h3>
                <p className="text-lg text-emerald-300 font-medium">
                  {edu.field}
                </p>
                <p className="text-zinc-300 font-medium">
                  {edu.institution}
                </p>
                <p className="text-zinc-400 text-sm">
                  {edu.description}
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  {edu.period}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

