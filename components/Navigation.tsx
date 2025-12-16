"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Education", path: "/education" },
  { name: "Fun", path: "/fun" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="glass fixed top-4 left-1/2 z-50 -translate-x-1/2 rounded-full border border-zinc-700/60 bg-zinc-950/60 px-2 py-2 backdrop-blur-md sm:px-4">
      <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide sm:gap-2">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className="relative rounded-full px-3 py-2 text-xs sm:text-sm font-medium text-zinc-300 transition-colors hover:text-zinc-100 whitespace-nowrap sm:px-4"
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-full bg-sky-500/20 border border-sky-500/40"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className={`relative z-10 ${isActive ? "text-sky-300" : ""}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

