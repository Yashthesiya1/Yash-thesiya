"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

interface PageWrapperProps {
  children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
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
    <main className="page-gradient relative flex min-h-screen w-full justify-center px-4 py-10 text-zinc-100 sm:px-6 lg:px-10">
      <div className="noise-overlay" />
      <div className="glass relative w-full max-w-5xl overflow-hidden px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
        {/* Orbital accent */}
        <div className="pointer-events-none absolute right-[-18%] top-[-20%] h-72 w-72 sm:h-80 sm:w-80">
          <motion.div
            className="orbit"
            animate={enableMotion ? { rotate: 360 } : undefined}
            transition={
              enableMotion
                ? { duration: 20, repeat: Infinity, ease: "linear" }
                : undefined
            }
          >
            <motion.div
              className="orbit-dot absolute -left-2 top-1/2 -translate-y-1/2"
              animate={enableMotion ? { rotate: -360 } : undefined}
              transition={
                enableMotion
                  ? { duration: 20, repeat: Infinity, ease: "linear" }
                  : undefined
              }
            />
          </motion.div>
        </div>
        {children}
      </div>
    </main>
  );
}

