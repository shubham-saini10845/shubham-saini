"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/layout/Section";
import { alsoUsed, skillGroups } from "@/lib/site";

export default function Skills() {
  return (
    <Section id="skills" className="bg-muted/40">
      <SectionHeading
        index="04"
        eyebrow="Skills"
        title="The stack I actually use."
        description="Grouped the way a job description is written — so a 10-second scan matches React, Next.js, Node.js, TypeScript, and AWS."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="rounded-3xl border border-border bg-card p-6"
          >
            <h3 className="font-display text-xl font-semibold">{group.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{group.blurb}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-background px-2.5 py-1 text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        Also used in older codebases: {alsoUsed.join(", ")}.
      </p>
    </Section>
  );
}
