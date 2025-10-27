"use client";

import { motion } from "framer-motion";
import { Heart, Github, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-3 text-white font-mono">
              JP
            </h3>
            <p className="text-zinc-400 text-sm">
              Full Stack Developer & AI Engineer building intelligent, scalable applications.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-white">Quick Links</h4>
            <div className="space-y-2">
              <a href="#experience" className="block text-zinc-400 hover:text-white transition-colors text-sm">
                Experience
              </a>
              <a href="#projects" className="block text-zinc-400 hover:text-white transition-colors text-sm">
                Projects
              </a>
              <a href="#skills" className="block text-zinc-400 hover:text-white transition-colors text-sm">
                Skills
              </a>
              <a href="#contact" className="block text-zinc-400 hover:text-white transition-colors text-sm">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-white">Connect</h4>
            <div className="flex gap-3">
              <motion.a
                href="https://github.com/Jinay1634"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors text-white"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/jinaypatel1634/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors text-white"
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
          <p>
            © {currentYear} Jinay Patel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
