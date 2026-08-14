"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/layout/Section";
import { experience } from "@/lib/site";

export default function Experience() {
  return (
    <Section id="experience" className="bg-muted/40">
      <SectionHeading
        index="02"
        eyebrow="Experience"
        title="Fresher to Lead."
        description="Cloud Analogy, 2020 to now — promoted from Assistant to Lead Full Stack in January 2026."
      />

      <motion.article
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="overflow-hidden rounded-3xl border border-border bg-card"
      >
        <ol className="grid grid-cols-2 border-b border-border sm:grid-cols-4">
          {experience.journey.map((step, index) => (
            <li
              key={step.title}
              className="relative border-border px-4 py-4 sm:px-6 sm:py-5 sm:border-r sm:last:border-r-0 [&:nth-child(odd)]:border-r max-sm:[&:nth-child(-n+2)]:border-b"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
                {step.period ? ` · ${step.period}` : ""}
              </p>
              <p className="mt-1 font-display text-sm font-semibold sm:text-base">
                {step.title}
              </p>
            </li>
          ))}
        </ol>

        <div className="grid gap-0 lg:grid-cols-[minmax(0,280px)_1fr]">
          <div className="border-b border-border p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              {experience.period}
            </p>
            <h3 className="mt-4 font-display text-2xl font-semibold">
              {experience.role}
            </h3>
            <p className="mt-2 text-foreground">{experience.company}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {experience.location} · {experience.tenure}
            </p>

            <ul className="mt-6 space-y-3">
              {experience.roles.map((role) => (
                <li key={role.title}>
                  <p className="text-sm font-medium">
                    {role.title}
                    {role.current ? (
                      <span className="ml-2 rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-primary">
                        Now
                      </span>
                    ) : null}
                  </p>
                  <p className="text-xs text-muted-foreground">{role.period}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 sm:p-8">
            <p className="text-muted-foreground leading-relaxed">
              {experience.summary}
            </p>
            <ul className="mt-6 space-y-4">
              {experience.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex gap-3 text-sm sm:text-[15px] leading-relaxed"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.article>
    </Section>
  );
}
