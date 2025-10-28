"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const projects = [
  {
    title: "CRUX — AI-Powered Proposal Management Platform",
    description:`Built an AI-powered proposal creation and management platform to streamline
business proposal workflows.
Integrated Large Language Models (LLMs) for intelligent content generation,
document analysis, and smart suggestions.
Implemented a dynamic form builder and automated document generation
system to enhance customization and reduce turnaround time.`,
    tags: ["React", "Next.js", "Shadcn/UI", "TypeScript", "MongoDB"],
    link: "#",
    github: "#",
  },
  {
    title: "SupportPay — Child Support & Expense Management System",
    description:
      "User-friendly platform for managing child support, alimony, and children's expenses with seamless navigation and enhanced user experience.",
    tags: ["Next.js", "TypeScript", "Ant Design", "PostgreSQL"],
    link: "#",
    github: "#",
  },
  {
    title: "ChatGPT Reader & Transcriber – Chrome Extension",
    description: `Engineered a web platform to manage child support, alimony, and shared family expenses with automated financial tracking. Enabled users to read aloud any text, including Google Docs, PDFs, and EPUB files, with seamless web and file upload support. Added downloadable AI-generated audio for offline listening and multi-format
compatibility.
Integrated customizable playback controls (speed, pause, rewind, play) for a
smooth, personalized listening experience.
features.`,
    tags: ["React", "TypeScript", "Tailwind CSS", "Chrome Extension"],
    link: "#",
    github: "#",
  },
  {
    title: "CA-Portal — Employee Management & HR Automation Platform",
    description:
      "Robust web application for insurance administration with comprehensive features to improve operational efficiency and customer experience.",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "TypeScript",
      "Docker",
      "AWS EC2",
    ],
    link: "#",
    github: "#",
  },
  {
    title: "Artwork Sales Platform",
    description:
      "Innovative online marketplace connecting artists and collectors worldwide, featuring S3 storage integration for artwork management.",
    tags: ["Next.js", "AWS S3", "Stripe", "MYSQL", "TypeScript"],
    link: "#",
    github: "#",
  },
  {
    title: "Prime BPM (Business Process Management (BPM) tool)",
    description: `Developed and maintained a scalable Business Process Management (BPM) platform enabling enterprise users to design, analyze, and manage complex workflows. Integrated dynamic process modeling using BPMN.js, built responsive UI components with Angular 17 and Tailwind CSS, and enhanced user experience with NGPrime. Implemented rolebased access control and step-wise process mapping, improving operational visibility and
workflow automation`,
    tags: ["Angular 17", "TypeScript", "NGPrime", "BPMN.js", "Tailwind CSS"],
    link: "#",
    github: "#",
  },
  {
    title: "Findem Chrome extension",
    description: `Contributed to a Chrome extension focused on Talent Acquisition by improving the
existing UI design for a better user experience. Additionally, migrated the project from
Manifest V2 to Manifest V3, ensuring compliance with the latest Chrome standards and
features.`,
    tags: ["React", "TypeScript", "Tailwind CSS", "Chrome Extension"],
    link: "#",
    github: "#",
  },
  {
    title: "Readeon Chrome Extension",
    description: "Enhanced Patreon reading experience through a Chrome extension with complementary web application featuring subscription functionality and Patreon authentication.",
    tags: ["Chrome Extension", "React", "Node.js", "OAuth", "TypeScript"],
    link: "#",
    github: "#"
  },
 
];

export default function Projects() {
  return (
    <section className="py-16 sm:py-24">
      <div className="px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center space-y-2 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">
              Featured Projects
            </h2>
            <p className="text-muted-foreground">
              Showcase of my technical expertise
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{project.title}</span>
                      {/* <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div> */}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-primary/10"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
