import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import ScrollToTopButton from "./ScrollToTopButton";

<ScrollToTopButton />
export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-gray-300 px-6 py-10 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 border-b border-zinc-800 pb-8">
        {/* Left: Copyright + ABN */}
        <div className="space-y-2">
          <p className="text-sm">© 2025 Aurick Chatterjee. All rights reserved.</p>
          <p className="text-sm">ABN: 38 390 708 723</p>
          <p className="text-sm">Based in Melbourne, Australia</p>
        </div>

        {/* Middle: Navigation Links */}
        <div className="space-y-2">
          <h4 className="text-red-500 font-semibold text-lg">Links</h4>
          <ul className="space-y-1">
            <li><a href="#home" className="hover:text-red-500 transition">Home</a></li>
            <li><a href="#skills" className="hover:text-red-500 transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-red-500 transition">Projects</a></li>
            <li><a href="#services" className="hover:text-red-500 transition">Services</a></li>
            <li><a href="#contact" className="hover:text-red-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Right: Contact Links */}
        <div className="space-y-2">
          <h4 className="text-red-500 font-semibold text-lg">Contact</h4>
          <ul className="space-y-1">
            <li>
              <a
                href="https://linkedin.com/in/aurickchatterjee"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-red-500 transition"
              >
                <Linkedin className="w-4 h-4 text-red-500" />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/notapplicableyet"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-red-500 transition"
              >
                <Github className="w-4 h-4 text-red-500" />
                GitHub
              </a>
            </li>
            <li>
              <a
                href="mailto:aurickchat@gmail.com"
                className="inline-flex items-center gap-2 hover:text-red-500 transition"
              >
                <Mail className="w-4 h-4 text-red-500" />
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-6 text-center text-sm text-gray-400">
        Built with ❤️ using Next.js, Tailwind CSS, and TypeScript
      </div>
    <ScrollToTopButton />
    </footer>
  );
}
