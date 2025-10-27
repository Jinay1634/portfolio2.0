"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Terminal } from "lucide-react";

export default function Hero() {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "jp@portfolio:~$ whoami";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, []);

  return (
    <section className="min-h-[85vh] flex items-center justify-center relative overflow-hidden bg-zinc-950 py-12 pb-6">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-900 rounded-lg shadow-2xl border border-zinc-800 overflow-hidden max-w-3xl mx-auto"
          >
            <div className="bg-zinc-800 px-4 py-2 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 text-center text-zinc-400 text-sm font-mono">
                <Terminal className="w-4 h-4 inline mr-2" />
                jinay@portfolio: ~
              </div>
            </div>

            <div className="p-8 font-mono text-sm">
              <div className="text-green-400 mb-4">
                {text}
                {showCursor && <span className="inline-block w-2 h-4 bg-green-400 ml-1" />}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
                className="space-y-2 text-zinc-300"
              >
                <div className="text-2xl font-bold text-white mb-4">Jinay Patel</div>
                <div className="space-y-1.5">
                  <div><span className="text-blue-400">const</span> <span className="text-purple-400">role</span> = <span className="text-green-300">"Full-Stack Developer & AI/ML Enthusiast"</span>;</div>
                  <div><span className="text-blue-400">const</span> <span className="text-purple-400">education</span> = <span className="text-green-300">"Sheridan College"</span>;</div>
                  <div><span className="text-blue-400">const</span> <span className="text-purple-400">location</span> = <span className="text-green-300">"Canada"</span>;</div>
                  
                  <div className="pt-3">
                    <span className="text-blue-400">const</span> <span className="text-purple-400">skills</span> = [<span className="text-green-300">"React", "Node.js", "Spring Boot", "AI/ML", "Cloud"</span>];
                  </div>

                  <div className="pt-3">
                    <span className="text-purple-400">console</span>.<span className="text-yellow-400">log</span>(<span className="text-green-300">"Building intelligent applications 🚀"</span>);
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 0.5 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <a
                  href="https://github.com/Jinay1634"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded border border-zinc-700 transition-colors flex items-center gap-2 text-sm"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/jinaypatel1634/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded border border-zinc-700 transition-colors flex items-center gap-2 text-sm"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="#projects"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded border border-blue-500 transition-colors text-sm"
                >
                  <span>View Projects</span>
                </a>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 0.5 }}
            className="flex justify-center mt-12"
          >
            <div className="flex flex-col items-center gap-2 text-zinc-500 text-sm">
              <span>Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
