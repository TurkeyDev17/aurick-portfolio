import type { Metadata } from "next";


export const metadata: Metadata = {
  metadataBase: new URL("https://aurickchatterjee.com"),

  title: "Aurick Chatterjee | Full-Stack Developer & Consultant",
  description:
    "Personal portfolio showcasing Aurick Chatterjee's full-stack development projects, technical skills, and provided services.",
    icons: {
        icon: [
            {
            url: "/favicon.ico",
            },
        ],
        },
  keywords: [
    "Aurick Chatterjee",
    "Aurick Chatterjee website",
    "Aurick Chatterjee services",
    "Aurick Chatterjee unimelb",
    "Aurick Chatterjee university of melbourne",
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
      "Explore Aurick's technical projects, startup work, and provided services.",
    url: "https://aurickchatterjee.com", 
    siteName: "Aurick Chatterjee",
    images: [
      {
        url: "/metadata_banner.png",
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
