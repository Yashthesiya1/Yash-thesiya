import React from "react";
import { 
  SiReact, 
  SiNextdotjs, 
  SiMui, 
  SiTailwindcss, 
  SiTypescript, 
  SiJquery,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiSupabase,
  SiMongodb,
  SiGit,
  SiGithub,
  SiGitlab,
  SiAmazonwebservices,
  SiVercel,
  SiDocker,
  SiGithubactions
} from "react-icons/si";

export const skillIconMap: Record<string, { icon: React.ComponentType<{ className?: string }>, color: string }> = {
  React: { icon: SiReact, color: "text-cyan-400" },
  "Next.js": { icon: SiNextdotjs, color: "text-white" },
  MUI: { icon: SiMui, color: "text-blue-500" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "text-sky-400" },
  TypeScript: { icon: SiTypescript, color: "text-blue-500" },
  jQuery: { icon: SiJquery, color: "text-blue-600" },
  "Node.js": { icon: SiNodedotjs, color: "text-green-500" },
  "Express.js": { icon: SiExpress, color: "text-gray-300" },
  NestJS: { icon: SiNestjs, color: "text-red-500" },
  MySQL: { icon: SiMysql, color: "text-blue-600" },
  PostgreSQL: { icon: SiPostgresql, color: "text-blue-700" },
  Firebase: { icon: SiFirebase, color: "text-orange-400" },
  Supabase: { icon: SiSupabase, color: "text-emerald-400" },
  MongoDB: { icon: SiMongodb, color: "text-green-500" },
  Git: { icon: SiGit, color: "text-orange-500" },
  GitHub: { icon: SiGithub, color: "text-white" },
  GitLab: { icon: SiGitlab, color: "text-orange-400" },
  AWS: { icon: SiAmazonwebservices, color: "text-orange-400" },
  Vercel: { icon: SiVercel, color: "text-white" },
  Docker: { icon: SiDocker, color: "text-blue-500" },
  "GitHub Actions": { icon: SiGithubactions, color: "text-gray-300" },
};

export const skillCategories = {
  Frontend: ["React", "Next.js", "MUI", "Tailwind CSS", "TypeScript", "jQuery"],
  Backend: ["Node.js", "Express.js", "NestJS"],
  Database: ["MySQL", "PostgreSQL", "Firebase", "Supabase", "MongoDB"],
  "Other Tools": ["Git", "GitHub", "GitLab", "AWS", "Vercel", "Docker", "GitHub Actions"],
};

