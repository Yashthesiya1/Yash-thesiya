"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <main className="page-gradient relative flex min-h-screen w-full justify-center px-4 py-10 text-zinc-100 sm:px-6 lg:px-10">
      <div className="noise-overlay" />
      <div className="glass relative w-full max-w-5xl overflow-hidden px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
        {/* Orbital accent */}
        <div className="pointer-events-none absolute right-[-18%] top-[-20%] h-72 w-72 sm:h-80 sm:w-80">
          <motion.div
            className="orbit"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <motion.div
              className="orbit-dot absolute -left-2 top-1/2 -translate-y-1/2"
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>
        {children}
      </div>
    </main>
  );
}

