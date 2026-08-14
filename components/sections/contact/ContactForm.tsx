"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { emailjsConfig } from "@/lib/emailjs";
import { site } from "@/lib/site";
import { TOAST_STYLE_CONFIG_INFO } from "@/lib/utils";

export default function ContactForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: site.name,
        },
        emailjsConfig.publicKey
      );

      toast({
        title: "Message sent.",
        description: "Thanks for reaching out — I’ll reply shortly.",
        style: TOAST_STYLE_CONFIG_INFO,
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Couldn’t send the message",
        description: `Try again, or email me directly at ${site.email}.`,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
      <h3 className="font-display text-xl font-semibold">Send a message</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Recruiters: include the role, location, and a link to the JD if you have
        one.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <label className="block space-y-1.5">
          <span className="text-sm font-medium">Name</span>
          <Input
            placeholder="Your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="h-11 rounded-xl bg-background"
          />
        </label>
        <label className="block space-y-1.5">
          <span className="text-sm font-medium">Email</span>
          <Input
            type="email"
            placeholder="you@company.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="h-11 rounded-xl bg-background"
          />
        </label>
        <label className="block space-y-1.5">
          <span className="text-sm font-medium">Message</span>
          <Textarea
            placeholder="Role, team, and anything I should know."
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="min-h-[150px] rounded-xl bg-background"
            required
          />
        </label>
        <Button
          className="w-full rounded-full"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Send message
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
