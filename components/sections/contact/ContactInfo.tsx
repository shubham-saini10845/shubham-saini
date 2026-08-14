"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { site } from "@/lib/site";

const details = [
  {
    icon: Phone,
    label: "Phone",
    value: site.phoneDisplay,
    copyValue: site.phone,
    copyable: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    copyValue: site.email,
    copyable: true,
    href: `mailto:${site.email}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: site.location,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "shubhamsainideveloper",
    href: site.linkedin,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "shubham-saini10845",
    href: site.github,
  },
] as const;

export default function ContactInfo() {
  const { toast } = useToast();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = async (text: string, label: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedField(label);
    toast({
      title: "Copied",
      description: `${label} is on your clipboard.`,
    });
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
      <h3 className="font-display text-xl font-semibold">Direct contact</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Fastest path for a recruiter screen: email or LinkedIn.
      </p>

      <div className="mt-6 space-y-1">
        {details.map((detail) => {
          const Icon = detail.icon;
          return (
            <div
              key={detail.label}
              className="group flex items-center gap-3 rounded-2xl p-3 transition-colors hover:bg-muted/60"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-muted-foreground">{detail.label}</p>
                {"href" in detail && detail.href ? (
                  <a
                    href={detail.href}
                    target={detail.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      detail.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="block truncate font-medium hover:text-primary"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className="truncate font-medium">{detail.value}</p>
                )}
              </div>
              {"copyable" in detail && detail.copyable ? (
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 rounded-full opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
                  onClick={() =>
                    handleCopy(detail.copyValue, detail.label)
                  }
                  aria-label={`Copy ${detail.label}`}
                >
                  {copiedField === detail.label ? (
                    <Check className="h-4 w-4 text-primary" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
