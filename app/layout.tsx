import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shubham Saini - Full Stack Developer",
  description: `Welcome to Shubham Saini's portfolio website. Explore my projects, skills, and achievements in web development, design, and technology!`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          property="og:title"
          content="Shubham Saini - Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Explore Shubham's work in web development, design, and technology. Discover projects, skills, and achievements."
        />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:url" content="https://www.yourportfolio.com" />
        <meta property="og:type" content="website" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        <link rel="icon" href="/favicon.ico" sizes="96x96" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          type="image/png"
          sizes="48x48"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
