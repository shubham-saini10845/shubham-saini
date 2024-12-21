"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="py-16 sm:py-24 bg-muted/50">
      <div className="px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Education</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Master of Computer Applications (MCA)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Dr. A.P.J. Abdul Kalam Technical University</p>
                <p className="text-sm text-muted-foreground">2020 - 2022 | Meerut, India</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Bachelor of Computer Applications (BCA)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Panipat Institute of Engineering and Technology</p>
                <p className="text-sm text-muted-foreground">2017 - 2020 | Panipat, India</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}