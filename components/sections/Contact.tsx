"use client";

import { motion } from "framer-motion";
import ContactForm from "./contact/ContactForm";
import ContactInfo from "./contact/ContactInfo";
import { Toaster } from "../ui/toaster";

export default function Contact() {
  return (
    <section className="py-16 sm:py-24" id="contact-me-section">
      <div className=" px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">
              Get In Touch
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <ContactForm />
            <ContactInfo />
          </div>
        </motion.div>
      </div>
      <Toaster />
    </section>
  );
}
