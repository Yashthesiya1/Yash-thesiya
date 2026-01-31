"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CodeBlock() {
  const [isMobile, setIsMobile] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const enableMotion = !shouldReduceMotion && !isMobile;

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth < 768);
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile, { passive: true });
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  return (
    <motion.section
      initial={enableMotion ? { opacity: 0, y: 40, scale: 0.97 } : false}
      animate={enableMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, y: 0, scale: 1 }}
      transition={
        enableMotion
          ? { duration: 0.7, delay: 0.2, ease: [0.22, 0.9, 0.26, 1] as const }
          : { duration: 0 }
      }
      className="relative"
    >
      <div className="relative overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-950/80 shadow-[0_18px_40px_rgba(15,23,42,0.95)]">
        {/* top bar */}
        <div className="flex items-center justify-between border-b border-zinc-800/80 bg-zinc-900/70 px-4 py-2.5 text-[0.7rem]">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="truncate text-xs text-zinc-400">yashThesiya.ts</span>
          <span className="rounded-full bg-zinc-900/90 px-2 py-0.5 text-[0.6rem] text-zinc-400">
            TypeScript · Next.js
          </span>
        </div>
        <div className="relative bg-gradient-to-b from-[#020617] via-[#020617] to-[#020617] px-4 py-4 text-[0.7rem] leading-relaxed text-zinc-200 sm:px-5 sm:py-5 sm:text-[0.75rem]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0_0,rgba(56,189,248,0.25),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(129,140,248,0.22),transparent_55%)] opacity-50" />

          <pre className="relative font-mono text-[0.7rem] sm:text-[0.75rem]">
            <code>
              <span className="text-zinc-500">// fun fact: this file is still compiling me</span>
              {"\n"}
              <span className="text-sky-400">type</span> <span className="text-emerald-300">Stack</span>{" "}
              ={" "}
              <span className="text-amber-300">
                &quot;frontend&quot; | &quot;backend&quot; | &quot;fullstack&quot;
              </span>
              ;
              {"\n"}
              {"\n"}
              <span className="text-sky-400">interface</span>{" "}
              <span className="text-emerald-300">SoftwareEngineer</span> {"{"}
              {"\n"}{"  "}
              <span className="text-sky-400">name</span>: <span className="text-amber-300">string</span>;
              {"\n"}{"  "}
              <span className="text-sky-400">company</span>: <span className="text-amber-300">string</span>;
              {"\n"}{"  "}
              <span className="text-sky-400">experienceInYears</span>:{" "}
              <span className="text-amber-300">number</span>;
              {"\n"}{"  "}
              <span className="text-sky-400">stack</span>: <span className="text-emerald-300">Stack</span>[];
              {"\n"}
              {"}"}{"\n"}
              {"\n"}
              <span className="text-sky-400">const</span>{" "}
              <span className="text-emerald-300">yashThesiya</span>:{" "}
              <span className="text-emerald-300">SoftwareEngineer</span> {"="} {"{"}
              {"\n"}{"  "}
              <span className="text-sky-400">name</span>: <span className="text-lime-300">&quot;Yash Thesiya&quot;</span>,
              {"\n"}{"  "}
              <span className="text-sky-400">company</span>: <span className="text-lime-300">&quot;Openmalo&quot;</span>,
              {"\n"}{"  "}
              <span className="text-sky-400">experienceInYears</span>:{" "}
              <span className="text-lime-300">1.42</span>,{" "}
              <span className="text-zinc-500">// 1 year &amp; 5 months-ish ⏱️</span>
              {"\n"}{"  "}
              <span className="text-sky-400">stack</span>: [<span className="text-lime-300">&quot;frontend&quot;</span>,{" "}
              <span className="text-lime-300">&quot;backend&quot;</span>,{" "}
              <span className="text-lime-300">&quot;fullstack&quot;</span>],
              {"\n"}
              {"}"};{"\n"}
              {"\n"}
              <span className="text-sky-400">function</span>{" "}
              <span className="text-emerald-300">hire</span>(
              <span className="text-sky-400">engineer</span>:{" "}
              <span className="text-emerald-300">SoftwareEngineer</span>) {"{"}
              {"\n"}{"  "}
              <span className="text-sky-400">return</span>{" "}
              <span className="text-lime-300">
                engineer.company === &quot;Openmalo&quot;
              </span>{" "}
              ?{"\n"}{"    "}
              <span className="text-lime-300">&quot;already doing cool things 👨‍💻&quot;</span>{" "}
              :{"\n"}{"    "}
              <span className="text-lime-300">
                &quot;this is your sign to send a message ✉️&quot;
              </span>
              ;
              {"\n"}
              {"}"}{"\n"}
              {"\n"}
              {/* <span className="text-zinc-500">// TODO: add your company here ↓</span> */}
              {"\n"}
              <span className="text-sky-400">console</span>.
              <span className="text-emerald-300">log</span>(
              <span className="text-amber-300">hire</span>(
              <span className="text-lime-300">Openmalo</span>));
            </code>
          </pre>
        </div>
      </div>
    </motion.section>
  );
}

