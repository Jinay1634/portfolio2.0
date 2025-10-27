import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JP - Full-Stack Developer & AI/ML Enthusiast",
  description: "Full-Stack Developer and AI/ML enthusiast specializing in building intelligent, scalable applications. Expertise in React, Next.js, Node.js, Python, and Machine Learning.",
  keywords: ["Full-Stack Developer", "AI/ML", "React", "Next.js", "Node.js", "Python", "Machine Learning", "Software Engineer"],
  authors: [{ name: "JP" }],
  openGraph: {
    title: "JP - Full-Stack Developer & AI/ML Enthusiast",
    description: "Building intelligent, scalable applications from frontend to backend",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
