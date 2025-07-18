// src/components/ContactSection.tsx
import Image from "next/image";
import { Mail, Linkedin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 bg-black text-white">
      <div className="max-w-5xl mx-auto bg-zinc-900 rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center">
        {/* Left: Profile Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <Image
            src="/media/profile.jpeg" // place your image in /public
            alt="Your Name"
            width={200}
            height={200}
            className="rounded-full border-4 border-red-600 object-cover"
          />
        </div>

        {/* Right: Info */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl font-bold text-red-600 mb-2">Let's Connect</h2>
          <p className="text-zinc-300 mb-6">
            I'm always up for a chat, a coffee, or a new collaboration. Whether you're curious about my work or just want to say hi, feel free to reach out!
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="mailto:aurickchat@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/aurick-chatterjee/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
