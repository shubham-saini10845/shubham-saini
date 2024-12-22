"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { BriefcaseIcon, CheckCircle2 } from "lucide-react";

const skills = {
  clientSide: ["HTML", "CSS", "JS", "React", "Redux", "NextJs", "TypeScript", "Bootstrap", "Material UI", "Ant Design", "ES-Lint", "JQuery","Chrome Extension",],
  serverSide: ["Express", "Postgres", "AWS EC2", "MySQL", "NodeJS", "HTTP/2","Supabase",'Hono'],
  devOps: ["Scrum", "Agile", "GIT"]
};

export default function Experience() {
  return (
    <section className="py-16 sm:py-24 bg-muted/50">
      <div className="px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter">Experience</h2>
            <p className="text-muted-foreground">My professional journey</p>
          </div>

          <div className="relative">
            <div className="absolute left-[3%] md:left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 rounded-full" />
            
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-12 md:items-center mb-12"
            >
              <div className="md:text-right space-y-2">
                <div className="flex items-center md:justify-end gap-2">
                  <BriefcaseIcon className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-xl">Full Stack Developer</h3>
                </div>
                <p className="text-muted-foreground">Cloud Analogy, Kurukshetra, HR</p>
                <p className="text-sm text-primary font-medium">2020 - Present</p>
              </div>
              
              <Card className="relative mt-4 md:mt-0">
                <div className="absolute -left-[44px] top-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Started career as a fresher and successfully transitioned into a versatile full-stack developer role within the first year.</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Contributed to the development and deployment of 3+ web applications and 3+ Chrome extensions.</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Streamlined workflows and optimized codebases, resulting in a 20% improvement in application performance.</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Continuously upskilled in modern frameworks and tools, earning recognition for adaptability.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

           
          </div>
          <div className="relative">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-4">Technical Skills</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">Client-Side Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.clientSide.map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-primary/10 hover:bg-primary/20">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">Server-Side Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.serverSide.map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-primary/10 hover:bg-primary/20">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">Development & Operations</h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.devOps.map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-primary/10 hover:bg-primary/20">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}