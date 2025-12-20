"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function NavigationProgress() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const previousPathname = useRef(pathname);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const checkIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clean up any existing intervals/timeouts
    const cleanup = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (checkIntervalRef.current) clearInterval(checkIntervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      intervalRef.current = null;
      checkIntervalRef.current = null;
      timeoutRef.current = null;
    };

    // Start loading animation
    const startLoading = () => {
      cleanup();
      setLoading(true);
      setProgress(0);

      // Simulate smooth progress
      let currentProgress = 0;
      intervalRef.current = setInterval(() => {
        currentProgress += Math.random() * 25;
        if (currentProgress > 90) {
          currentProgress = 90;
        }
        setProgress(currentProgress);
      }, 50);

      // Complete loading when pathname changes
      checkIntervalRef.current = setInterval(() => {
        if (window.location.pathname !== previousPathname.current) {
          cleanup();
          setProgress(100);
          setTimeout(() => {
            setLoading(false);
            setProgress(0);
            previousPathname.current = window.location.pathname;
          }, 200);
        }
      }, 50);

      // Fallback: complete after max 2 seconds
      timeoutRef.current = setTimeout(() => {
        cleanup();
        setProgress(100);
        setTimeout(() => {
          setLoading(false);
          setProgress(0);
        }, 200);
      }, 2000);
    };

    // Detect navigation start by intercepting link clicks
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a[href]");
      
      if (link) {
        const href = link.getAttribute("href");
        // Only intercept internal navigation links
        if (href && href.startsWith("/") && href !== pathname) {
          startLoading();
        }
      }
    };

    // Detect browser back/forward navigation
    const handlePopState = () => {
      startLoading();
    };

    document.addEventListener("click", handleLinkClick, true);
    window.addEventListener("popstate", handlePopState);

    return () => {
      cleanup();
      document.removeEventListener("click", handleLinkClick, true);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [pathname]);

  // Complete loading when pathname actually changes
  useEffect(() => {
    if (pathname !== previousPathname.current && loading) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (checkIntervalRef.current) clearInterval(checkIntervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      
      setProgress(100);
      setTimeout(() => {
        setLoading(false);
        setProgress(0);
      }, 200);
      previousPathname.current = pathname;
    }
  }, [pathname, loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 right-0 z-[100] h-1 bg-transparent pointer-events-none"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500 shadow-lg shadow-sky-500/50"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          />
          <motion.div
            className="absolute top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            animate={{
              x: ["-100%", "400%"],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
