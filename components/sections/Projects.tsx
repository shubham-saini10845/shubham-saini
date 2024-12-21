"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Readeon Chrome Extension",
    description: "Enhanced Patreon reading experience through a Chrome extension with complementary web application featuring subscription functionality and Patreon authentication.",
    tags: ["Chrome Extension", "React", "Node.js", "OAuth"],
    link: "#",
    github: "#"
  },
  {
    title: "Support-pay",
    description: "User-friendly platform for managing child support, alimony, and children's expenses with seamless navigation and enhanced user experience.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    link: "#",
    github: "#"
  },
  {
    title: "Insurance Policy Management",
    description: "Robust web application for insurance administration with comprehensive features to improve operational efficiency and customer experience.",
    tags: ["React", "Node.js", "Express", "MySQL"],
    link: "#",
    github: "#"
  },
  {
    title: "Artwork Sales Platform",
    description: "Innovative online marketplace connecting artists and collectors worldwide, featuring S3 storage integration for artwork management.",
    tags: ["Next.js", "AWS S3", "Stripe", "MongoDB"],
    link: "#",
    github: "#"
  }
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
            <h2 className="text-3xl font-bold tracking-tighter">Featured Projects</h2>
            <p className="text-muted-foreground">Showcase of my technical expertise</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{project.title}</span>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-primary/10">
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