"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", path: "#home" },
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#projects" },
  { name: "Education", path: "#education" },
  { name: "Fun", path: "#fun" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        const sections = navItems.map((item) => item.path.substring(1));

        if (window.scrollY < 100) {
          setActiveSection("#home");
          rafId = null;
          return;
        }

        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top >= -200 && rect.top <= 400) {
              setActiveSection(`#${sectionId}`);
              break;
            }
          }
        }

        rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    const element = document.getElementById(path.substring(1));
    if (element) {
      const targetPosition = element.offsetTop - 80;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
      setActiveSection(path);
    }
  };

  return (
    <nav className="glass fixed top-4 left-1/2 z-50 -translate-x-1/2 rounded-full border border-zinc-700/60 bg-zinc-950/60 px-2 py-2 backdrop-blur-md sm:px-4">
      <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide sm:gap-2">
        {navItems.map((item) => {
          const isActive = activeSection === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              onClick={(e) => handleScrollTo(e, item.path)}
              className="relative rounded-full px-3 py-2 text-xs sm:text-sm font-medium text-zinc-300 transition-colors hover:text-zinc-100 whitespace-nowrap sm:px-4"
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-full bg-zinc-800/80 border border-zinc-600/50"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className={`relative z-10 ${isActive ? "text-zinc-100" : ""}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}




