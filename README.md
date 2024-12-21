# Shubham Saini - Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🌓 Dark/Light mode
- 📱 Fully responsive design
- ✨ Modern UI with Tailwind CSS
- 🎯 SEO optimized
- 📧 Contact form with EmailJS integration
- 🔄 Smooth animations with Framer Motion
- 🎨 Custom UI components with shadcn/ui

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Email Service:** EmailJS
- **Icons:** Lucide React

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your EmailJS credentials:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                  # Next.js app directory
├── components/          # React components
│   ├── sections/       # Page sections
│   ├── ui/            # UI components
│   └── ...
├── lib/                # Utility functions
├── public/             # Static assets
└── styles/            # Global styles
```

## Components

- **Hero:** Landing section with introduction
- **Experience:** Work history and skills
- **Projects:** Featured projects showcase
- **Education:** Academic background
- **Contact:** Contact form and information

## Customization

1. Update personal information in respective components
2. Modify theme colors in `globals.css`
3. Add/remove sections in `app/page.tsx`
4. Customize UI components in `components/ui`

## Deployment

The site is configured for static exports and can be deployed to any static hosting platform:

```bash
npm run build
```

## License

MIT License - feel free to use this project as a template for your own portfolio!