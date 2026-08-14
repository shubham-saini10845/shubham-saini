"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Section";
import { hero, site, stats } from "@/lib/site";

const fade = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 grid-fade" />
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <motion.div
              custom={0}
              variants={fade}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              {hero.eyebrow}
            </motion.div>

            <motion.h1
              custom={1}
              variants={fade}
              initial="hidden"
              animate="visible"
              className="mt-6 font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
            >
              {site.name}
            </motion.h1>

            <motion.p
              custom={2}
              variants={fade}
              initial="hidden"
              animate="visible"
              className="mt-3 font-display text-xl text-primary sm:text-2xl"
            >
              {site.role}
            </motion.p>

            <motion.p
              custom={3}
              variants={fade}
              initial="hidden"
              animate="visible"
              className="mt-5 max-w-xl font-display text-2xl font-semibold leading-snug tracking-tight text-foreground/90 sm:text-[1.7rem] text-balance"
            >
              {hero.headline}
            </motion.p>

            <motion.p
              custom={4}
              variants={fade}
              initial="hidden"
              animate="visible"
              className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {hero.summary}
            </motion.p>

            <motion.div
              custom={5}
              variants={fade}
              initial="hidden"
              animate="visible"
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button asChild className="rounded-full px-5">
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact me
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-5">
                <a href="#work">View work</a>
              </Button>
              <Button asChild variant="ghost" className="rounded-full px-3">
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="ghost" className="rounded-full px-3">
                <a href={site.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </motion.div>

            <motion.div
              custom={6}
              variants={fade}
              initial="hidden"
              animate="visible"
              className="mt-8 flex flex-wrap gap-2"
            >
              {hero.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            custom={3}
            variants={fade}
            initial="hidden"
            animate="visible"
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-border/80 bg-card surface-glow">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/profile.png"
                  alt={`${site.name}, ${site.role}`}
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent p-5">
                <p className="font-display text-lg font-semibold">{site.name}</p>
                <p className="text-sm text-muted-foreground">
                  {site.location}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card px-4 py-5 sm:px-6 sm:py-6"
            >
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </dt>
              <dd className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </motion.dl>

        <a
          href="#about"
          className="mt-10 mb-4 hidden items-center justify-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground md:flex"
        >
          <ArrowDown className="h-4 w-4" />
          Scroll
        </a>
      </Container>
    </section>
  );
}
