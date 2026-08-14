"use client";

import { motion } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { Section, SectionHeading } from "@/components/layout/Section";
import { contactCopy } from "@/lib/site";
import ContactForm from "./contact/ContactForm";
import ContactInfo from "./contact/ContactInfo";

export default function Contact() {
  return (
    <Section id="contact" className="bg-muted/40">
      <SectionHeading
        index="06"
        eyebrow="Contact"
        title={contactCopy.heading}
        description={contactCopy.body}
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <ContactInfo />
        <ContactForm />
      </motion.div>
      <Toaster />
    </Section>
  );
}
