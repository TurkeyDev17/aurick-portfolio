"use client";

import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 sm:px-10 md:px-16 lg:px-24 bg-black">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-red-500 text-center">
        Projects
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-auto-fit">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
