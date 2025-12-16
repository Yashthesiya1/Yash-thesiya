"use client";

import { motion } from "framer-motion";
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

  useEffect(() => {
    // Generate colorful particles
    const colors = [
      "rgba(56, 189, 248, 0.6)", // sky
      "rgba(52, 211, 153, 0.6)", // emerald
      "rgba(129, 140, 248, 0.6)", // indigo
      "rgba(168, 85, 247, 0.6)", // purple
      "rgba(236, 72, 153, 0.6)", // pink
    ];
    
    const newParticles: Particle[] = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 3,
      duration: Math.random() * 25 + 20,
      delay: Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-sky-500/30 via-transparent to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 200, -100, 0],
            y: [0, 150, -50, 0],
            scale: [1, 1.3, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/4 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-emerald-500/30 via-transparent to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -150, 100, 0],
            y: [0, 200, -100, 0],
            scale: [1, 1.4, 0.8, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 w-[900px] h-[900px] bg-gradient-to-tr from-indigo-500/30 via-transparent to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 180, -120, 0],
            y: [0, -200, 80, 0],
            scale: [1, 1.2, 1.1, 1],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-purple-500/25 via-transparent to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -200, 150, 0],
            y: [0, -150, 100, 0],
            scale: [1, 1.5, 0.9, 1],
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gradient-radial from-pink-500/20 via-transparent to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
          animate={{
            x: [0, mousePosition.x * 0.3 - 50, 0],
            y: [0, mousePosition.y * 0.3 - 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
        />
      </div>

      {/* Floating particles with trails */}
      {particles.map((particle) => (
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
        animate={{
          backgroundPosition: ["0% 0%", "50px 50px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 right-20 w-40 h-40 border-2 border-sky-500/20 rounded-lg"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 0.9, 1.1, 1],
          opacity: [0.1, 0.3, 0.15, 0.25, 0.1],
          x: [0, 30, -20, 10, 0],
          y: [0, -20, 30, -10, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-32 left-16 w-32 h-32 border-2 border-emerald-500/20 rounded-full"
        animate={{
          rotate: [360, 0],
          scale: [1, 1.3, 0.8, 1.2, 1],
          opacity: [0.1, 0.3, 0.12, 0.28, 0.1],
          x: [0, -25, 20, -15, 0],
          y: [0, 25, -20, 15, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-24 h-24 border-2 border-indigo-500/20 rotate-45"
        animate={{
          rotate: [45, 405, 45],
          scale: [1, 1.4, 0.9, 1.3, 1],
          opacity: [0.1, 0.35, 0.1, 0.3, 0.1],
          x: [0, 40, -30, 20, 0],
          y: [0, -30, 40, -25, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Sweeping light rays */}
      <motion.div
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent"
        style={{
          boxShadow: "0 0 20px rgba(56, 189, 248, 0.8)",
        }}
        animate={{
          x: ["-100%", "200%"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent"
        style={{
          boxShadow: "0 0 20px rgba(52, 211, 153, 0.8)",
        }}
        animate={{
          x: ["200%", "-100%"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-indigo-400/60 to-transparent"
        style={{
          boxShadow: "0 0 20px rgba(129, 140, 248, 0.8)",
        }}
        animate={{
          y: ["-100%", "200%"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Dark overlay for content readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/70" />
      <div className="absolute inset-0 bg-slate-950/40" />
    </div>
  );
}

