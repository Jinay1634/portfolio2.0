"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Software Development Intern",
    organization: "SIB Developers · Co-op",
    period: "May 2025 - Aug 2025",
    achievements: [
      "Improved API response time by 40% through optimization techniques",
      "Enhanced UI performance, reducing page load time by 35%",
      "Implemented features that increased user engagement by 25%",
      "Reduced bug count by 50% through comprehensive testing"
    ],
    icon: Briefcase
  },
  {
    type: "work",
    title: "Software Development Intern",
    organization: "SIB Developers · Co-op",
    period: "Sep 2024 - Dec 2024",
    achievements: [
      "Optimized database queries, improving data retrieval speed by 45%",
      "Redesigned user interface, increasing user satisfaction by 30%",
      "Automated testing processes, reducing manual testing time by 60%",
      "Contributed to 15+ feature releases during the internship"
    ],
    icon: Briefcase
  },
  {
    type: "work",
    title: "Junior Software Engineer",
    organization: "Skill Squirrel · Co-op",
    period: "Co-op Position",
    achievements: [
      "Developed features that improved application performance by 30%",
      "Reduced code complexity, decreasing maintenance time by 40%",
      "Collaborated on projects serving 100+ active users"
    ],
    icon: Briefcase
  },
  {
    type: "education",
    title: "Computer System Technology",
    organization: "Sheridan College",
    period: "Current Student",
    description: "Specializing in Software Development and Network Engineering. Building expertise in full-stack development, AI/ML integration, and cloud technologies.",
    icon: GraduationCap
  }
];

export default function Experience() {
  return (
    <section id="experience" className="pt-6 pb-12 bg-zinc-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-xl text-zinc-400">
            My journey in software development
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-5">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-900 rounded-lg p-5 border border-zinc-800"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-zinc-800 rounded-lg">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                    <div className="text-zinc-400 mb-2">
                      {exp.organization} • {exp.period}
                    </div>
                    <p className="text-zinc-500 mb-3">{exp.description}</p>
                    {exp.achievements && (
                      <ul className="space-y-2 mt-3">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-zinc-400 flex items-start gap-2">
                            <span className="text-blue-400 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
