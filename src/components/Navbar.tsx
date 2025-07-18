"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Optional: add scroll effect (shadow or background change)
  if (typeof window !== "undefined") {
    window.onscroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        isScrolled ? "bg-black/90 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo or Name */}
        <Link href="/" className="text-2xl font-bold text-red-600">
          Aurick
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6 hidden sm:block">
          <Link href="#home" className="text-white hover:text-red-500 transition">
            Home
          </Link>
          <Link href="#skills" className="text-white hover:text-red-500 transition">
            Skills
          </Link>
          <Link href="#projects" className="text-white hover:text-red-500 transition">
            Projects
          </Link>
          <Link href="#contact" className="text-white hover:text-red-500 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
