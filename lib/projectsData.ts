export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  features: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "IndieBill - AI-Powered Freelance Contract Generator",
    description: "A comprehensive full-stack application that helps freelancers generate, customize, and manage professional contracts using AI technology. Built with Spring Boot, React, and FastAPI.",
    tech: ["React 19", "Spring Boot 3.5.5", "FastAPI", "Google Gemini AI", "PostgreSQL", "AWS S3", "Docker"],
    github: "https://github.com/yourusername/IndieBill",
    features: [
      "AI-Powered Contract Generation using Google Gemini",
      "Secure JWT-based Authentication System",
      "Automatic PDF Generation with iText 7",
      "Cloud Storage with AWS S3",
      "Microservices Architecture with Docker"
    ]
  },
  {
    id: 2,
    title: "AI Email Writer - Smart Email Reply Generator",
    description: "An AI-powered email reply generator with Chrome extension and web app that integrates directly into Gmail using Google Gemini.",
    tech: ["React 18", "Spring Boot 3", "Google Gemini API", "Chrome Extension API", "Material-UI"],
    github: "https://github.com/yourusername/AI-Email-Writer",
    features: [
      "Seamless Gmail Integration via Chrome Extension",
      "AI-Powered Reply Generation with tone selection",
      "Dual Interface (Extension + Web App)",
      "Real-time Feedback with Visual Indicators"
    ]
  },
  {
    id: 3,
    title: "JobPrep AI - Interview Preparation Platform",
    description: "An intelligent mock interview system using Google Gemini AI with real-time WebSocket communication for technical interview practice.",
    tech: ["React 19", "Node.js", "Express.js", "Google Gemini 2.0", "LangChain", "Socket.IO", "PostgreSQL", "Docker"],
    github: "https://github.com/Jinay1634/JobPrep_AI",
    features: [
      "AI-Powered Interviews with contextual memory",
      "Real-Time Bidirectional Communication via WebSocket",
      "Automated Performance Evaluation",
      "Stateful Conversation Management with LangGraph"
    ]
  },
  {
    id: 4,
    title: "SQL AI Agent - Natural Language Database Assistant",
    description: "An AI-powered database assistant that converts natural language into safe SQL queries and streams results using OpenAI GPT-4o.",
    tech: ["Next.js 16", "OpenAI GPT-4o", "Vercel AI SDK", "Turso (libSQL)", "Drizzle ORM", "TailwindCSS 4"],
    github: "https://github.com/yourusername/SQL-AI-Agent",
    features: [
      "Natural Language to SQL Conversion",
      "Safety Guardrails (SELECT-only queries)",
      "Streaming AI Responses to Chat UI",
      "Schema-Aware Tool Calling"
    ]
  }
];
