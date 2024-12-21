"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const gradientTextStyle = "bg-gradient-to-r from-primary to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text";
export const  GIT_HUB='https://github.com/shub86'
export default function Hero() {

  const scrollToView=(type:'scroll'|'Git')=>{
    switch (type) {
      case 'scroll':
        const element=document.getElementById('contact-me-section');
        element?.scrollIntoView({behavior:'smooth'})
        break;
      case 'Git':
        window.open(GIT_HUB,'_blank')
      default:
        break;
    }

  }
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
      <div className="container px-4 md:px-6 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12"
        >
          {/* Text Content */}
          <motion.div 
            variants={itemVariants}
            className="flex-1 text-center md:text-left space-y-6"
          >
            <motion.div
              variants={itemVariants}
              className="inline-block rounded-full bg-muted/50 px-6 py-2 text-sm text-muted-foreground backdrop-blur-sm"
            >
              Welcome to my portfolio
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className={`text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl ${gradientTextStyle}`}
            >
              SHUBHAM SAINI
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="relative inline-block"
            >
              <span className="text-2xl md:text-3xl font-semibold">
                FULL STACK DEVELOPER
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 to-purple-600/50 rounded-full" />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="max-w-[700px] text-muted-foreground md:text-lg dark:text-gray-400 leading-relaxed"
            >
              Full Stack Developer with 4 years of experience in front-end and back-end development.
              Proficient in building, maintaining, and deploying scalable web applications.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center md:justify-start gap-4 mt-8"
            >
              <Button variant="default" className="gap-2 group" onClick={()=>scrollToView('scroll')}>
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>Contact Me</span>
              </Button>
              <Button variant="outline" className="gap-2 group" asChild>
                <a href="https://www.linkedin.com/in/shubhamsainideveloper" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  <span>LinkedIn</span>
                </a>
              </Button>
              <Button variant="outline" className="gap-2 group" onClick={()=>scrollToView('scroll')}>
                <Github className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
              </Button>
              <Button variant="outline" className="gap-2 group">
                <MapPin className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>Shamli, UP India</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative w-64 h-64 md:w-96 md:h-96"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-full blur-3xl" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <Image
                src="/images/profile.jpg"
                alt="Shubham Saini"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-muted-foreground"
          >
            ↓ Scroll to explore
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}