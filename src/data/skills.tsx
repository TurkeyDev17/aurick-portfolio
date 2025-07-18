import { ReactElement } from "react";
import {
  FileCode,
  Code2,
  BadgeCheck,
  Atom,
  Server,
  PackagePlus,
  GitBranch,
  Cloud,
  Brackets,
} from "lucide-react";

export interface Skill {
  name: string;
  description: string;
  icon?: ReactElement;
  image?: string; 
  category: string;
  index?: number;
}


export const skills: Skill[] = [
  {
    name: "HTML & CSS",
    description: "Web Markup and Styling",
    icon: <FileCode className="w-8 h-8 text-red-500" />,
    category: "Frontend",
  },
  {
    name: "JavaScript",
    description: "Scripting Language",
    image: "/icons/javascript.svg",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    description: "Type-safe JavaScript",
    image: "/icons/typescript.svg",
    category: "Frontend",
  },
  {
    name: "React",
    description: "Frontend Framework",
    icon: <Atom className="w-8 h-8 text-red-500" />,
    category: "Frontend",
  },
  {
    name: "Python",
    description: "Backend Language",
    image: "/icons/python.svg",
    category: "Backend",
  },
  {
    name: "PHP",
    description: "Backend Language",
    image: "/icons/php.svg",
    category: "Backend",
  },
  {
    name: "Node.js",
    description: "Backend Runtime",
    icon: <Server className="w-8 h-8 text-red-500" />,
    category: "Backend",
  },
  {
    name: "MySQL",
    description: "Relational Database",
    image: "/icons/mysql.svg",
    category: "Databases",
  },
  {
    name: "PostgreSQL",
    description: "Relational Database",
    image: "/icons/postgresql.svg",
    category: "Databases",
  },
  {
    name: "Docker",
    description: "Containerization",
    icon: <PackagePlus className="w-8 h-8 text-red-500" />,
    category: "Other Tools/Practices",
  },
  {
    name: "GitHub Actions",
    description: "CI/CD",
    icon: <GitBranch className="w-8 h-8 text-red-500" />,
    category: "Other Tools/Practices",
  },
  {
    name: "GCP",
    description: "Google Cloud Platform",
    icon: <Cloud className="w-8 h-8 text-red-500" />,
    category: "Other Tools/Practices",
  },
];
