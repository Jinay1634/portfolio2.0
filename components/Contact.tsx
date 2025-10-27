"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-12 bg-zinc-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-zinc-400">
            Open to Full Stack Developer and Software Engineer opportunities
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <motion.a
              href="https://www.linkedin.com/in/jinaypatel1634/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-zinc-800 rounded-lg p-6 border border-zinc-700 hover:border-zinc-600 transition-colors group"
            >
              <Linkedin className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-1">LinkedIn</h3>
              <p className="text-zinc-400 group-hover:text-zinc-300">jinaypatel1634</p>
            </motion.a>

            <motion.a
              href="https://github.com/Jinay1634"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-zinc-800 rounded-lg p-6 border border-zinc-700 hover:border-zinc-600 transition-colors group"
            >
              <Github className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-1">GitHub</h3>
              <p className="text-zinc-400 group-hover:text-zinc-300">Jinay1634</p>
            </motion.a>
          </div>

          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-zinc-800 rounded-lg p-6 border border-zinc-700 w-full md:w-1/2"
            >
              <MapPin className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
              <p className="text-zinc-400">Canada</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
