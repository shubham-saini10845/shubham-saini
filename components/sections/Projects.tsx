"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/layout/Section";
import { projects } from "@/lib/site";

export default function Projects() {
  const featured = projects.filter((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <Section id="work">
      <SectionHeading
        index="03"
        eyebrow="Selected work"
        title="Products I helped take to production."
        description="AI platforms, enterprise BPM, Chrome extensions, HR systems, and marketplaces — the same stack a hiring manager will screen for."
      />

      <div className="grid gap-4 lg:grid-cols-2">
        {featured.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="group flex flex-col rounded-3xl border border-border bg-card p-6 sm:p-8"
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Featured
            </p>
            <h3 className="mt-3 font-display text-2xl font-semibold">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {project.subtitle}
            </p>
            <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-muted px-2.5 py-1 text-xs text-foreground/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-4 divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card">
        {rest.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.2) }}
            className="grid gap-4 p-6 transition-colors hover:bg-muted/40 sm:grid-cols-[minmax(0,220px)_1fr] sm:p-7"
          >
            <div>
              <h3 className="font-display text-lg font-semibold">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {project.subtitle}
              </p>
            </div>
            <div>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-muted px-2.5 py-1 text-xs text-foreground/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
