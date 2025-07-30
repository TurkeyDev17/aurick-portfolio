"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const getTechIcon = (tech: string) => {
    const lower = tech.toLowerCase();
    const iconPath = `/icons/${lower}.svg`;

    const techsWithIcons = [
      "html5", "css3", "javascript", "reactjs", "nextjs",
      "postgresql", "mysql", "ruby on rails", "django",
      "aws", "vercel", "tailwind", "firebase", "typescript", "python", "flask"
    ];

    if (techsWithIcons.includes(lower)) {
      return (
      <Image
        src={iconPath}
        alt={tech}
        width={16}
        height={16}
        className="inline-block mr-1 transition group-hover:brightness-0 group-hover:invert"
      />
      );
    }

    return null;
  };

  return (
    <motion.div
      className="rounded-xl bg-zinc-900 p-4 shadow-md transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_16px_4px_rgba(255,0,0,0.6)]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Image and Button */}
      <div className="relative overflow-hidden rounded-md mb-4">
      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 z-10 flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-red-600 text-white border-2 border-black rounded-md shadow-lg hover:bg-red-700 transition-all duration-300 group"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          View Live
        </a>
      ) : (
        <span
          className="absolute top-3 right-3 z-10 px-4 py-2 text-sm font-semibold bg-neutral-700 text-neutral-400 border-2 border-black rounded-md cursor-not-allowed select-none"
          title="This project is only accessible on mobile"
        >
          Available on mobile
        </span>
      )}
        <Image
          src={project.image}
          alt={project.title}
          width={500}
          height={300}
          className="w-full h-48 object-cover rounded-t-xl"
        />
      </div>

      {/* Title + Description */}
      <h3 className="text-xl font-semibold text-red-500 mb-2">
        {project.title}
      </h3>
      <p className="text-gray-300 text-sm mb-4">{project.description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tag: string, index: number) => (
          <span
            key={index}
            className="group flex items-center px-2 py-1 text-sm text-white bg-zinc-800 rounded-md border border-zinc-700 hover:bg-red-500 hover:text-white transition"
          >
            {getTechIcon(tag)}
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
