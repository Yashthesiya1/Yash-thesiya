"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

export default function BackgroundAnimation() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isMobile, setIsMobile] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const enableMotion = !shouldReduceMotion && !isMobile;

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth < 768);
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile, { passive: true });
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  useEffect(() => {
    if (shouldReduceMotion) {
      setParticles([]);
      return;
    }

    const colors = [
      "rgba(56, 189, 248, 0.6)",
      "rgba(52, 211, 153, 0.6)",
      "rgba(129, 140, 248, 0.6)",
      "rgba(168, 85, 247, 0.6)",
      "rgba(236, 72, 153, 0.6)",
    ];

    const particleCount = isMobile ? 24 : 80;
    const newParticles: Particle[] = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + (isMobile ? 2 : 3),
      duration: Math.random() * (isMobile ? 18 : 25) + (isMobile ? 16 : 20),
      delay: Math.random() * 4,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setParticles(newParticles);
  }, [isMobile, shouldReduceMotion]);

  useEffect(() => {
    if (!enableMotion || isMobile) return;

    let rafId: number | null = null;
    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100,
        });
        rafId = null;
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [enableMotion, isMobile]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 h-[420px] w-[420px] sm:h-[800px] sm:w-[800px] bg-gradient-to-br from-sky-500/30 via-transparent to-transparent rounded-full blur-3xl"
          animate={
            enableMotion
              ? {
                  x: [0, 200, -100, 0],
                  y: [0, 150, -50, 0],
                  scale: [1, 1.3, 0.9, 1],
                }
              : undefined
          }
          transition={
            enableMotion
              ? {
                  duration: 25,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              : undefined
          }
        />
        <motion.div
          className="absolute top-1/4 right-0 h-[380px] w-[380px] sm:h-[700px] sm:w-[700px] bg-gradient-to-bl from-emerald-500/30 via-transparent to-transparent rounded-full blur-3xl"
          animate={
            enableMotion
              ? {
                  x: [0, -150, 100, 0],
                  y: [0, 200, -100, 0],
                  scale: [1, 1.4, 0.8, 1],
                }
              : undefined
          }
          transition={
            enableMotion
              ? {
                  duration: 30,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              : undefined
          }
        />
        <motion.div
          className="absolute bottom-0 left-1/3 h-[460px] w-[460px] sm:h-[900px] sm:w-[900px] bg-gradient-to-tr from-indigo-500/30 via-transparent to-transparent rounded-full blur-3xl"
          animate={
            enableMotion
              ? {
                  x: [0, 180, -120, 0],
                  y: [0, -200, 80, 0],
                  scale: [1, 1.2, 1.1, 1],
                }
              : undefined
          }
          transition={
            enableMotion
              ? {
                  duration: 28,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              : undefined
          }
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 h-[320px] w-[320px] sm:h-[600px] sm:w-[600px] bg-gradient-to-tl from-purple-500/25 via-transparent to-transparent rounded-full blur-3xl"
          animate={
            enableMotion
              ? {
                  x: [0, -200, 150, 0],
                  y: [0, -150, 100, 0],
                  scale: [1, 1.5, 0.9, 1],
                }
              : undefined
          }
          transition={
            enableMotion
              ? {
                  duration: 32,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              : undefined
          }
        />
        <motion.div
          className="absolute top-1/2 left-1/2 h-[280px] w-[280px] sm:h-[500px] sm:w-[500px] bg-gradient-radial from-pink-500/20 via-transparent to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
          animate={
            enableMotion
              ? {
                  x: [0, mousePosition.x * 0.3 - 50, 0],
                  y: [0, mousePosition.y * 0.3 - 50, 0],
                  scale: [1, 1.3, 1],
                }
              : undefined
          }
          transition={
            enableMotion
              ? {
                  duration: 2,
                  ease: "easeOut",
                }
              : undefined
          }
        />
      </div>

      {/* Floating particles with trails */}
      {enableMotion &&
        particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: `radial-gradient(circle, ${particle.color}, transparent)`,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            }}
            animate={{
              y: [0, -60, 20, -40, 0],
              x: [0, Math.random() * 40 - 20, Math.random() * 30 - 15, 0],
              opacity: [0.2, 0.8, 0.4, 0.9, 0.2],
              scale: [1, 1.5, 0.8, 1.3, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}

      {/* Animated grid with perspective */}
      <motion.div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
        animate={
          enableMotion
            ? {
                backgroundPosition: ["0% 0%", "50px 50px"],
              }
            : undefined
        }
        transition={
          enableMotion
            ? {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }
            : undefined
        }
      />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 sm:w-40 sm:h-40 border-2 border-sky-500/20 rounded-lg"
        animate={
          enableMotion
            ? {
                rotate: [0, 360],
                scale: [1, 1.2, 0.9, 1.1, 1],
                opacity: [0.1, 0.3, 0.15, 0.25, 0.1],
                x: [0, 30, -20, 10, 0],
                y: [0, -20, 30, -10, 0],
              }
            : undefined
        }
        transition={
          enableMotion
            ? {
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : undefined
        }
      />
      <motion.div
        className="absolute bottom-32 left-16 w-24 h-24 sm:w-32 sm:h-32 border-2 border-emerald-500/20 rounded-full"
        animate={
          enableMotion
            ? {
                rotate: [360, 0],
                scale: [1, 1.3, 0.8, 1.2, 1],
                opacity: [0.1, 0.3, 0.12, 0.28, 0.1],
                x: [0, -25, 20, -15, 0],
                y: [0, 25, -20, 15, 0],
              }
            : undefined
        }
        transition={
          enableMotion
            ? {
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : undefined
        }
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-20 h-20 sm:w-24 sm:h-24 border-2 border-indigo-500/20 rotate-45"
        animate={
          enableMotion
            ? {
                rotate: [45, 405, 45],
                scale: [1, 1.4, 0.9, 1.3, 1],
                opacity: [0.1, 0.35, 0.1, 0.3, 0.1],
                x: [0, 40, -30, 20, 0],
                y: [0, -30, 40, -25, 0],
              }
            : undefined
        }
        transition={
          enableMotion
            ? {
                duration: 22,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : undefined
        }
      />

      {/* Sweeping light rays */}
      <motion.div
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent"
        style={{
          boxShadow: "0 0 20px rgba(56, 189, 248, 0.8)",
        }}
        animate={
          enableMotion
            ? {
                x: ["-100%", "200%"],
                opacity: [0, 1, 0],
              }
            : undefined
        }
        transition={
          enableMotion
            ? {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : undefined
        }
      />
      <motion.div
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent"
        style={{
          boxShadow: "0 0 20px rgba(52, 211, 153, 0.8)",
        }}
        animate={
          enableMotion
            ? {
                x: ["200%", "-100%"],
                opacity: [0, 1, 0],
              }
            : undefined
        }
        transition={
          enableMotion
            ? {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }
            : undefined
        }
      />
      <motion.div
        className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-indigo-400/60 to-transparent"
        style={{
          boxShadow: "0 0 20px rgba(129, 140, 248, 0.8)",
        }}
        animate={
          enableMotion
            ? {
                y: ["-100%", "200%"],
                opacity: [0, 1, 0],
              }
            : undefined
        }
        transition={
          enableMotion
            ? {
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }
            : undefined
        }
      />

      {/* Dark overlay for content readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/70" />
      <div className="absolute inset-0 bg-slate-950/40" />
    </div>
  );
}

