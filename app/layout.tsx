import "./globals.css";
import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { site } from "@/lib/site";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const description =
  "Lead Full Stack Developer with 6 years at Cloud Analogy — promoted from Assistant to Lead in January 2026. Shipping production web apps, Chrome extensions, and AI-powered platforms with TypeScript, React, Next.js, Node.js, and AWS.";

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description,
  keywords: [
    "Shubham Saini",
    "Lead Full Stack Developer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "AWS",
    "Chrome Extension",
    "Portfolio",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${syne.variable} font-sans min-h-screen`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: site.name,
              jobTitle: site.role,
              email: site.email,
              telephone: site.phone,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Shamli",
                addressRegion: "Uttar Pradesh",
                addressCountry: "IN",
              },
              sameAs: [site.github, site.linkedin],
              knowsAbout: [
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "AWS",
                "Full Stack Development",
              ],
            }),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
