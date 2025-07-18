import { StaticImageData } from "next/image";

export interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
}


export const projects = [
  {
    title: "Stairlift Calculator",
    description: "Built a custom pricing and product configuration tool for a large stairlift company generating $10M+ in annual revenue. The tool automated manual workflows that previously took 3+ hours, reducing them to just seconds. Designed for use by field sales teams on both iPads and Android tablets, the solution featured a Python/Flask backend with PostgreSQL for persistent storage and a fully responsive frontend.",
    image: "/project_showcase/stairlift_showcase.png",
    techStack: ["Python", "Flask", "PostgreSQL" ,"HTML5", "CSS3"],
  },
  {
    title: "LofiHaven",
    description: "Co-designed and engineered a feature-rich productivity platform that blends lofi music, ambient sound mixing, Pomodoro timers, and digital focus tools into a cohesive web experience. Focused on intuitive UX and high responsiveness across devices, the platform empowers users to create customized focus environments for work and study. Built with a modern React and Next.js stack, with strong emphasis on performance and scalability.",
    image: "/project_showcase/lofihaven_showcase.png",
    techStack: ["ReactJS", "Nextjs", "TypeScript"],
  },
  {
    title: "Spot The Ball (POC)",
    description: "Developed a full-featured frontend for a gamified 'Spot the Ball' proof of concept inspired by BOTB. Users place pixel-based guesses on curated images, with leaderboards, Stripe payments and prize logic designed for high user engagement. Built using React, Next.js, and TypeScript, with AWS used for scalable deployment. This project served as the MVP for an original startup concept.",
    image: "/project_showcase/spottheball_showcase.png",
    techStack: ["ReactJS", "Nextjs", "TypeScript", "AWS"],
  },
  {
    title: "Autofarmer",
    description: "Developed a custom automation system that simulates in-game actions to farm resources efficiently in mobile strategy games. The tool interfaces with Android emulators using ADB and Python to automate complex sequences that would typically require hours of manual play. Designed to be extensible, reliable, and fast — enabling users to gain a competitive edge with minimal effort.",
    image: "/project_showcase/autofarmer_showcase.png",
    techStack: ["Python", "Firebase"],
  },
];
