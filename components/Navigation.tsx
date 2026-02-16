"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", path: "#home" },
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#projects" },
  { name: "Education", path: "#education" },
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
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4 sm:px-8">
        <Link href="/" className="text-lg font-bold tracking-tight text-black">
          YT
        </Link>
        <div className="flex items-center gap-1 sm:gap-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={(e) => handleScrollTo(e, item.path)}
                className={`px-2 py-1 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
