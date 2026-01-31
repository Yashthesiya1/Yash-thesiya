"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { heroText, fadeUp } from "./animations";

export default function Hero() {
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
    <section className="space-y-6 lg:space-y-7">
      <motion.div
        variants={heroText}
        initial={enableMotion ? "hidden" : false}
        animate={enableMotion ? "visible" : undefined}
        className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/5 px-3 py-1 text-xs font-medium text-sky-200 shadow-sm shadow-sky-500/40 backdrop-blur"
      >
        <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
        Software Engineer at Openmalo
        <span className="text-zinc-400">· 1 yr 5 mos experience</span>
      </motion.div>

      <motion.div
        initial={enableMotion ? "hidden" : false}
        animate={enableMotion ? "visible" : undefined}
        variants={heroText}
        className="space-y-4 sm:space-y-5"
      >
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-sky-400 via-emerald-300 to-indigo-400 bg-clip-text text-transparent">
            Yash Thesiya
          </span>
          .
        </h1>
        <p className="max-w-xl text-sm text-zinc-300/90 sm:text-base">
          I build modern, animated, and performant web applications with React, Next.js and
          Node.js, Nest.js– from smooth frontends to reliable backends. I have worked on SaaS projects where I implemented Gen AI and other cutting-edge technologies to create intelligent, scalable solutions.
        </p>
        <p className="max-w-xl text-sm text-zinc-400 sm:text-[0.95rem]">
          Right now I&apos;m working at{" "}
          <span className="font-semibold text-zinc-100">Openmalo</span>, shipping production
          features, collaborating with teams, and turning real product problems into clean,
          maintainable code.
        </p>
      </motion.div>

      <motion.div
        initial={enableMotion ? "hidden" : false}
        animate={enableMotion ? "visible" : undefined}
        variants={fadeUp}
        custom={1}
        className="flex flex-wrap gap-3"
      >
        {/* <a
          href="#contact"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-sky-500 px-5 py-2.5 text-sm font-medium text-sky-950 shadow-lg shadow-sky-500/40 transition hover:bg-sky-400"
        >
          <span>Let&apos;s work together</span>
          <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ✦
          </span>
          <span className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-sky-300/40 via-emerald-200/40 to-indigo-300/40 opacity-0 blur-2xl transition group-hover:opacity-100" />
        </a> */}
        <a
          href="/resume.pdf"
          download
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-emerald-500/40 bg-emerald-500/10 px-5 py-2.5 text-sm font-medium text-emerald-300 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-500/20 hover:border-emerald-500/60"
        >
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <span>Download Resume</span>
          <span className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-emerald-300/20 via-sky-200/20 to-indigo-300/20 opacity-0 blur-2xl transition group-hover:opacity-100" />
        </a>
        <a
          href="https://www.linkedin.com/in/yash-thesiya/"
          target="_blank"
          rel="noreferrer"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-sky-500/40 bg-sky-500/10 px-5 py-2.5 text-sm font-medium text-sky-200 shadow-lg shadow-sky-500/20 transition hover:bg-sky-500/20 hover:border-sky-500/60"
        >
          <svg
            className="h-4 w-4 transition-transform group-hover:-translate-y-0.5"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.67H9.33V9h3.42v1.56h.05c.48-.9 1.66-1.86 3.41-1.86 3.65 0 4.33 2.4 4.33 5.52v6.23zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
          </svg>
          <span>LinkedIn</span>
          <span className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-sky-300/20 via-emerald-200/20 to-indigo-300/20 opacity-0 blur-2xl transition group-hover:opacity-100" />
        </a>
        <a
          href="https://github.com/yashthesiya1"
          target="_blank"
          rel="noreferrer"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-zinc-500/40 bg-zinc-500/10 px-5 py-2.5 text-sm font-medium text-zinc-200 shadow-lg shadow-zinc-500/20 transition hover:bg-zinc-500/20 hover:border-zinc-500/60"
        >
          <svg
            className="h-4 w-4 transition-transform group-hover:-translate-y-0.5"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 .5a12 12 0 00-3.79 23.4c.6.12.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.25 1.84 1.25 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.46 11.46 0 016.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.93.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12 12 0 0012 .5z" />
          </svg>
          <span>GitHub</span>
          <span className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-zinc-300/20 via-slate-200/20 to-indigo-300/20 opacity-0 blur-2xl transition group-hover:opacity-100" />
        </a>
      </motion.div>
    </section>
  );
}

