"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Section, SectionHeading } from "@/components/layout/Section";
import { education } from "@/lib/site";

export default function Education() {
  return (
    <Section id="education">
      <SectionHeading
        index="05"
        eyebrow="Education"
        title="Computer applications, start to finish."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {education.map((item, index) => (
          <motion.article
            key={item.degree}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="rounded-3xl border border-border bg-card p-6 sm:p-8"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <GraduationCap className="h-5 w-5" />
            </div>
            <h3 className="font-display text-xl font-semibold">{item.degree}</h3>
            <p className="mt-2 text-foreground">{item.school}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {item.period} · {item.location}
            </p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
