"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/layout/Section";
import { about, site } from "@/lib/site";

export default function About() {
  return (
    <Section id="about">
      <SectionHeading index="01" eyebrow="About" title="How I got here." />

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-[17px]"
        >
          <p>{about.intro}</p>
          <p>{about.body}</p>
          <p className="rounded-2xl border border-border bg-card p-5 text-foreground">
            <span className="mb-2 block text-xs font-medium uppercase tracking-[0.18em] text-primary">
              What I’m looking for
            </span>
            {about.lookingFor}
          </p>
          <p className="text-sm">
            Based in {site.location}. {site.availability}.
          </p>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {about.highlights.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <h3 className="font-display text-base font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.detail}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}
