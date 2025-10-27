"use client";

import { motion } from "framer-motion";
import { Code2, Database, Cloud, Brain, Server, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: [
      "React.js", "React 19", "Next.js", "React Native", "TypeScript", "JavaScript",
      "Vite", "TailwindCSS", "Chakra UI", "Material-UI",
      "Framer Motion", "React Router", "React Hook Form", "Axios"
    ]
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      "Node.js", "Express.js", "Spring Boot", "Flask", "FastAPI",
      "Java", "Python", "Go Lang",
      "RESTful APIs", "WebSocket", "Socket.IO", "Spring Security",
      "JWT", "bcrypt", "WebFlux"
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: [
      "Machine Learning Models", "Generative AI", "Google Gemini AI",
      "OpenAI GPT-4o", "LangChain", "LangGraph", "Vercel AI SDK",
      "Natural Language Processing", "Python for ML", "AI Integration"
    ]
  },
  {
    title: "Database & Storage",
    icon: Database,
    skills: [
      "MySQL", "MongoDB", "PostgreSQL", "Firebase",
      "Prisma ORM", "Drizzle ORM", "Spring Data JPA",
      "AWS S3", "Cloud Storage", "Database Design"
    ]
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: [
      "AWS", "Docker", "Docker Compose", "CI/CD",
      "GitHub", "Git", "Vercel", "Nginx",
      "Microservices Architecture", "Agile", "Jira"
    ]
  },
  {
    title: "Tools & Testing",
    icon: Wrench,
    skills: [
      "Playwright", "Chrome Extension API", "iText PDF",
      "Maven", "Lombok", "Jackson", "Lucide React",
      "Socket.IO", "Real-Time Systems", "REST APIs"
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-12 bg-zinc-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-zinc-400">
            Technologies I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-800 rounded-lg p-6 border border-zinc-700 hover:border-zinc-600 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-zinc-900 text-zinc-300 rounded text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
