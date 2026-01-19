"use client";

import { motion } from "framer-motion";
import { skillIconMap, skillCategories } from "./skills/skillIconMap";

const categoryColors: Record<string, { text: string; glow: string }> = {
  Frontend: {
    text: "text-sky-300",
    glow: "hover:shadow-sky-500/35",
  },
  Backend: {
    text: "text-emerald-300",
    glow: "hover:shadow-emerald-500/35",
  },
  Database: {
    text: "text-indigo-300",
    glow: "hover:shadow-indigo-500/35",
  },
  "Other Tools": {
    text: "text-amber-300",
    glow: "hover:shadow-amber-500/35",
  },
};

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2 }}
      className="px-2 py-4 sm:px-4 sm:py-6 lg:px-6 lg:py-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Skills</h2>
        <p className="mt-3 text-sm text-zinc-300 sm:text-base">
          Here are some of my skills in modern web development.
        </p>
      </motion.div>

      <div className="mt-10 space-y-10 sm:space-y-12">
        {Object.entries(skillCategories).map(([category, skills], categoryIdx) => {
          const colors = categoryColors[category] || categoryColors.Frontend;
          return (
            <motion.section
              key={category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: categoryIdx * 0.06 }}
              className="space-y-5"
            >
              <h3
                className={`text-center text-xl font-semibold tracking-tight sm:text-2xl ${colors.text}`}
              >
                {category}
              </h3>

              <div className="mx-auto grid max-w-3xl grid-cols-3 gap-4 sm:grid-cols-4 sm:gap-5 md:grid-cols-6">
                {skills.map((skill, idx) => {
                  const IconComponent = skillIconMap[skill]?.icon;
                  const iconColor = skillIconMap[skill]?.color || "text-zinc-300";
                  return (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9, y: 8 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: idx * 0.05 }}
                      whileHover={{ scale: 1.05, y: -3 }}
                      className={`group relative flex h-20 w-20 flex-col items-center justify-center gap-2 rounded-2xl border border-slate-700/70 bg-[#050b15]/90 text-center text-[0.7rem] font-medium text-zinc-200 shadow-[0_14px_30px_rgba(15,23,42,0.9)] backdrop-blur ${colors.glow}`}
                    >
                      {IconComponent && (
                        <IconComponent
                          className={`h-8 w-8 ${iconColor} transition-transform group-hover:scale-110`}
                        />
                      )}
                      <span className="px-2 text-[0.7rem] leading-snug">{skill}</span>
                      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_0_0,rgba(56,189,248,0.12),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(129,140,248,0.16),transparent_55%)] opacity-0 transition-opacity group-hover:opacity-100" />
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>
          );
        })}
      </div>
    </motion.div>
  );
}

