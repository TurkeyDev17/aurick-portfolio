"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "@/data/projects";
import {
  Globe,
  Database,
  FileCode,
  Cloud,
  Layers3,
} from "lucide-react";

export default function ProjectCard({ project }: { project: Project }) {
  const getTechIcon = (tech: string) => {
    switch (tech.toLowerCase()) {
      case "html5":
      case "css3":
      case "javascript":
        return <Globe className="w-4 h-4 mr-1" />;
      case "reactjs":
      case "next.js":
        return <Globe className="w-4 h-4 mr-1" />;
      case "postgresql":
      case "mysql":
        return <Database className="w-4 h-4 mr-1" />;
      case "ruby on rails":
      case "django":
        return <FileCode className="w-4 h-4 mr-1" />;
      case "aws":
      case "vercel":
        return <Cloud className="w-4 h-4 mr-1" />;
      case "tailwind":
        return <Layers3 className="w-4 h-4 mr-1" />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      className="rounded-xl bg-zinc-900 p-4 shadow-md transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_12px_2px_rgba(255,0,0,0.4)]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="overflow-hidden rounded-md mb-4">
        <Image
          src={project.image}
          alt={project.title}
          width={500}
          height={300}
          className="w-full h-48 object-cover rounded-t-xl"
        />
      </div>

      <h3 className="text-xl font-semibold text-red-500 mb-2">
        {project.title}
      </h3>
      <p className="text-gray-300 text-sm mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tag: string, index: number) => (
          <span
            key={index}
            className="flex items-center px-2 py-1 text-sm text-white bg-zinc-800 rounded-md border border-zinc-700 hover:bg-red-500 hover:text-white transition"
          >
            {getTechIcon(tag)}
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
