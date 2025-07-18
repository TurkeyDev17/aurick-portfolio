import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Aurick Chatterjee | Full-Stack Developer & Consultant",
  description:
    "Personal portfolio showcasing Aurick Chatterjee's full-stack development projects, technical skills, and freelance consulting work. Built with Next.js, Tailwind CSS, and TypeScript.",
  keywords: [
    "Aurick Chatterjee",
    "Aurick",
    "Portfolio",
    "Web Developer",
    "Freelance Software Developer",
    "Full Stack Developer",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "Consulting",
  ],
  openGraph: {
    title: "Aurick Chatterjee | Full-Stack Developer & Consultant",
    description:
      "Explore Aurick's technical projects, startup work, and consulting experience — all built with modern tech like Next.js and Tailwind.",
    url: "https://aurickchatterjee.com", // replace later with your real domain
    siteName: "Aurick Chatterjee Portfolio",
    images: [
      {
        url: "/preview.png", // optional social image
        width: 1200,
        height: 630,
        alt: "Aurick Portfolio Preview",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  authors: [{ name: "Aurick Chatterjee", url: "https://aurickchatterjee.com" }],
  creator: "Aurick Chatterjee",
};
