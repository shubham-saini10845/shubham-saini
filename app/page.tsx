"use client";

import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ThemeToggle />
      <Hero />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}