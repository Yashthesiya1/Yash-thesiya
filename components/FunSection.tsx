"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const funFacts = [
  "I once debugged a bug for 3 hours only to find it was a typo. 🐛",
  "My code has more comments explaining 'why' than 'what'. 📝",
  "I can recite the entire React documentation... in my dreams. 😴",
  "Tea is my primary programming language. ☕",
  "I've never met a console.log I didn't like. 🪵",
  "My git commits are more creative than my commit messages. 🎨",
  "I speak fluent TypeScript, JavaScript, and Stack Overflow. 💬",
  "My rubber duck has heard more problems than a therapist. 🦆",
];

const jokes = [
  {
    setup: "Why do programmers prefer dark mode?",
    punchline: "Because light attracts bugs! 🐛",
  },
  {
    setup: "How many programmers does it take to change a light bulb?",
    punchline: "None. That's a hardware problem! 💡",
  },
  {
    setup: "Why did the programmer quit his job?",
    punchline: "He didn't get arrays! 😂",
  },
  {
    setup: "What's a programmer's favorite hangout place?",
    punchline: "Foo Bar! 🍻",
  },
];

export default function FunSection() {
  const [clickCount, setClickCount] = useState(0);
  const [showJoke, setShowJoke] = useState(false);
  const [currentJoke, setCurrentJoke] = useState(0);
  const [easterEgg, setEasterEgg] = useState(false);

  const handleClick = () => {
    setClickCount((prev) => prev + 1);
    if (clickCount >= 4 && !easterEgg) {
      setEasterEgg(true);
    }
  };

  const showRandomJoke = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    setCurrentJoke(randomIndex);
    setShowJoke(true);
    setTimeout(() => setShowJoke(false), 5000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2 }}
      className="space-y-8"
    >
      <div className="text-center space-y-3">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-white sm:text-6xl"
        >
          FUN ZONE
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-zinc-400 text-lg"
        >
          Because portfolios don&apos;t have to be boring! 🎉
        </motion.p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-zinc-700/60 bg-zinc-900/40 p-6 backdrop-blur hover:border-purple-500/60 transition-all"
        >
          <h3 className="text-xl font-semibold text-purple-300 mb-4">
            Fun Facts About Me
          </h3>
          <div className="space-y-3">
            {funFacts.map((fact, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-start gap-3 text-zinc-300 text-sm"
              >
                <span className="text-purple-400 mt-1">✦</span>
                <span>{fact}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interactive Joke Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-zinc-700/60 bg-zinc-900/40 p-6 backdrop-blur hover:border-amber-500/60 transition-all"
        >
          <h3 className="text-xl font-semibold text-amber-300 mb-4">
            Developer Jokes
          </h3>
          <div className="space-y-4">
            <AnimatePresence mode="wait">
              {showJoke && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/30"
                >
                  <p className="text-white font-medium mb-2">
                    {jokes[currentJoke].setup}
                  </p>
                  <p className="text-amber-300 text-sm">
                    {jokes[currentJoke].punchline}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
            <button
              onClick={showRandomJoke}
              className="w-full px-4 py-3 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 font-medium transition-all hover:scale-105"
            >
              Tell Me a Joke! 😂
            </button>
          </div>
        </motion.div>
      </div>

      {/* Easter Egg Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center"
      >
        <motion.button
          onClick={handleClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/40 text-purple-300 font-medium transition-all hover:from-purple-500/30 hover:to-pink-500/30"
        >
          {clickCount === 0
            ? "Click me if you're bored 🎯"
            : clickCount < 5
            ? `Clicked ${clickCount} times... keep going! 🔥`
            : "🎉 You found the easter egg! 🎉"}
        </motion.button>

        <AnimatePresence>
          {easterEgg && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-amber-500/20 border border-purple-500/40"
            >
              <p className="text-white font-semibold text-lg mb-2">
                🎊 Congratulations! 🎊
              </p>
              <p className="text-zinc-300 text-sm">
                You&apos;re clearly someone who clicks buttons for fun. I like that! 
                Want to work together? Let&apos;s build something amazing! 🚀
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

