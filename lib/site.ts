export const site = {
  name: "Shubham Saini",
  role: "Lead Full Stack Developer",
  location: "Shamli, Uttar Pradesh, India",
  availability: "Open to full-time roles · Remote or hybrid",
  email: "shub10845@gmail.com",
  phone: "+918650539007",
  phoneDisplay: "+91 86505 39007",
  github: "https://github.com/shubham-saini10845",
  linkedin: "https://www.linkedin.com/in/shubhamsainideveloper",
  yearsExperience: "6+",
} as const;

export const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

export const hero = {
  eyebrow: "Available for full-time roles",
  headline: "I ship production software end to end.",
  summary:
    "Lead Full Stack Developer with 6 years at Cloud Analogy — from fresher hire to Assistant to Lead in January 2026. I build, maintain, and deploy scalable web applications, Chrome extensions, and AI-powered platforms. TypeScript across the stack — React and Next.js on the front, Node.js and AWS on the back.",
  stack: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "AWS",
    "PostgreSQL",
  ],
};

export const stats = [
  { value: "6+", label: "Years shipping products" },
  { value: "7+", label: "Production apps & platforms" },
  { value: "3+", label: "Chrome extensions shipped" },
  { value: "~20%", label: "Performance improvement" },
] as const;

export const about = {
  intro:
    "I joined Cloud Analogy as a fresher in 2020, became a full-stack developer within the first year, grew into an Assistant role, and was promoted to Lead Full Stack in January 2026.",
  body: "Along the way I shipped 4+ web applications and 3+ Chrome extensions used in real customer workflows: an AI proposal platform, enterprise BPM tooling, HR automation, marketplaces, and family-finance products. I care about clean TypeScript, measurable performance, and taking features all the way to production on AWS.",
  lookingFor:
    "Lead or senior full-stack roles on product teams where TypeScript, React/Next.js, and Node.js are first-class. I want to own features end to end — including cloud deployment — and keep raising the quality of what ships.",
  highlights: [
    {
      title: "Fresher → Lead",
      detail:
        "2020 hire to Assistant to Lead Full Stack in January 2026 — same company, growing scope.",
    },
    {
      title: "End-to-end ownership",
      detail:
        "UI, APIs, data, and AWS deploy — not just tickets in one layer.",
    },
    {
      title: "AI in production",
      detail:
        "LLM-backed proposal workflows: generation, document analysis, smart suggestions.",
    },
    {
      title: "Browser products",
      detail:
        "Chrome extensions including a Manifest V2 → V3 migration for current Chrome standards.",
    },
  ],
};

export const experience = {
  role: "Lead Full Stack Developer",
  company: "Cloud Analogy",
  location: "Noida, Uttar Pradesh",
  period: "2020 — Present",
  tenure: "6 years",
  summary:
    "Same company, rising scope: fresher in 2020, full-stack within the first year, then Assistant, then Lead Full Stack in January 2026. I still ship frontend and backend on production products — React/Angular, Node.js, and AWS.",
  journey: [
    { title: "Fresher", period: "2020" },
    { title: "Full Stack", period: "Year 1" },
    { title: "Assistant", period: "" },
    { title: "Lead Full Stack", period: "Jan 2026" },
  ],
  roles: [
    {
      title: "Lead Full Stack Developer",
      period: "Jan 2026 — Present",
      current: true,
    },
    {
      title: "Assistant Full Stack Developer",
      period: "Promoted to Lead in Jan 2026",
      current: false,
    },
    {
      title: "Full Stack Developer",
      period: "From year one · joined as a fresher in 2020",
      current: false,
    },
  ],
  bullets: [
    "Promoted from Assistant to Lead Full Stack in January 2026, after growing from a 2020 fresher hire into someone who owns UI, APIs, and deploy.",
    "Joined as a fresher and took on both frontend and backend work in year one — shipping features from interface to database to production.",
    "Contributed to the development and deployment of 4+ web applications and 3+ Chrome extensions spanning AI, HR, BPM, marketplace, and consumer products.",
    "Streamlined workflows and optimized codebases, resulting in a ~20% improvement in application performance.",
    "Adopted modern frameworks as products required them (Next.js, Angular 17, LLM integrations, AWS) and earned recognition for adaptability and delivery quality.",
  ],
};

export const skillGroups = [
  {
    title: "Frontend",
    blurb: "Interfaces recruiters actually search for.",
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "Angular 17",
      "Redux",
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Material UI",
      "Ant Design",
      "PrimeNG",
      "Bootstrap",
      "BPMN.js",
    ],
  },
  {
    title: "Backend & data",
    blurb: "APIs, persistence, and payments.",
    items: [
      "Node.js",
      "Express",
      "Hono",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Sequelize",
      "HTTP/2",
      "Stripe",
    ],
  },
  {
    title: "Cloud, quality & delivery",
    blurb: "How work actually reaches users.",
    items: [
      "AWS EC2",
      "AWS S3",
      "Docker",
      "Git",
      "ESLint",
      "Chrome Extensions",
      "Agile",
      "Scrum",
    ],
  },
] as const;

export const alsoUsed = ["jQuery"] as const;

export const projects = [
  {
    featured: true,
    title: "CRUX",
    subtitle: "AI-powered proposal management",
    description:
      "Built an AI-powered platform to draft, review, and manage business proposals. Integrated LLMs for content generation, document analysis, and smart suggestions, plus a dynamic form builder and automated document generation to cut turnaround time.",
    tags: ["React", "Next.js", "TypeScript", "shadcn/ui", "MongoDB", "LLMs"],
  },
  {
    featured: true,
    title: "Prime BPM",
    subtitle: "Enterprise process management",
    description:
      "Developed and maintained a scalable BPM platform so enterprise teams can design, analyze, and run complex workflows. Integrated BPMN.js for process modeling, built responsive UI with Angular 17, Tailwind CSS, and PrimeNG, and implemented role-based access with step-wise process mapping.",
    tags: ["Angular 17", "TypeScript", "PrimeNG", "BPMN.js", "Tailwind CSS"],
  },
  {
    featured: false,
    title: "SupportPay",
    subtitle: "Child support & expense management",
    description:
      "User-friendly Next.js platform for managing child support, alimony, and children's expenses — with clear navigation so families can track payments and shared costs without friction.",
    tags: ["Next.js", "TypeScript", "Ant Design", "PostgreSQL"],
  },
  {
    featured: false,
    title: "ChatGPT Reader & Transcriber",
    subtitle: "Chrome extension",
    description:
      "Chrome extension that reads aloud text from the web, Google Docs, PDFs, and EPUBs. Added downloadable AI-generated audio for offline listening, multi-format file support, and playback controls for speed, pause, rewind, and play.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chrome Extension"],
  },
  {
    featured: false,
    title: "CA-Portal",
    subtitle: "Employee management & HR automation",
    description:
      "Internal HR and employee-management platform built to improve operational efficiency. Full-stack on React, Node.js, Express, and MongoDB, containerized with Docker and deployed on AWS EC2.",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "TypeScript",
      "Docker",
      "AWS EC2",
    ],
  },
  {
    featured: false,
    title: "Artwork Sales Platform",
    subtitle: "Marketplace for artists & collectors",
    description:
      "Online marketplace connecting artists and collectors, with AWS S3 for artwork assets and Stripe for payments — so listings, storage, and checkout stay in one product flow.",
    tags: ["Next.js", "TypeScript", "AWS S3", "Stripe", "MySQL"],
  },
  {
    featured: false,
    title: "Findem",
    subtitle: "Talent acquisition Chrome extension",
    description:
      "Contributed to a talent-acquisition Chrome extension by improving the existing UI and migrating the project from Manifest V2 to Manifest V3 so it stays compliant with current Chrome standards.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chrome Extension"],
  },
  {
    featured: false,
    title: "Readeon",
    subtitle: "Patreon reading experience",
    description:
      "Chrome extension plus companion web app that improves the Patreon reading experience, with subscription flows and Patreon OAuth authentication.",
    tags: ["Chrome Extension", "React", "Node.js", "OAuth", "TypeScript"],
  },
] as const;

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Dr. A.P.J. Abdul Kalam Technical University",
    period: "2020 — 2022",
    location: "Meerut, India",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Panipat Institute of Engineering and Technology",
    period: "2017 — 2020",
    location: "Panipat, India",
  },
] as const;

export const contactCopy = {
  heading: "Let’s talk about the role you’re hiring for.",
  body: "If you need a lead full-stack developer who can own UI, APIs, and deployment — not just one slice of the ticket — send a note. I typically reply within a day.",
};
