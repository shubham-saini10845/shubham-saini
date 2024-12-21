"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Phone, Copy, Check } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

interface ContactDetail {
  icon: React.ReactNode;
  label: string;
  value: string;
  link?: string;
  copyable?: boolean;
}

export default function ContactInfo() {
  const { toast } = useToast();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const contactDetails: ContactDetail[] = [
    {
      icon: <Phone className="h-4 w-4" />,
      label: "Phone",
      value: "+918650539007",
      copyable: true
    },
    {
      icon: <Mail className="h-4 w-4" />,
      label: "Email",
      value: "shubham.saini10845@gmail.com",
      copyable: true
    },
    {
      icon: <MapPin className="h-4 w-4" />,
      label: "Location",
      value: "Shamli, UP India"
    },
    {
      icon: <Linkedin className="h-4 w-4" />,
      label: "LinkedIn",
      value: "LinkedIn Profile",
      link: "https://www.linkedin.com/in/shubhamsainideveloper"
    },
    {
      icon: <Github className="h-4 w-4" />,
      label: "GitHub",
      value: "GitHub Profile",
      link: "https://github.com/shub86"
    }
  ];

  const handleCopy = async (text: string, label: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedField(label);
    toast({
      title: "Copied!",
      description: `${label} has been copied to clipboard`,
    });
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mail className="h-5 w-5 text-primary" />
          Contact Information
        </CardTitle>
      </CardHeader>
      <CardContent >
        {contactDetails.map((detail, index) => (
          <motion.div
            key={detail.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
          >
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
              {detail.icon}
            </div>
            <div className="flex-grow">
              <p className="text-sm text-muted-foreground">{detail.label}</p>
              {detail.link ? (
                <a
                  href={detail.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:text-primary transition-colors"
                >
                  {detail.value}
                </a>
              ) : (
                <p className="font-medium">{detail.value}</p>
              )}
            </div>
            {detail.copyable && (
              <Button
                variant="ghost"
                size="icon"
                className="opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => handleCopy(detail.value, detail.label)}
              >
                {copiedField === detail.label ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            )}
          </motion.div>
        ))}
      </CardContent>
    </Card>
  );
}