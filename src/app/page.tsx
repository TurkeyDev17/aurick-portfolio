import Hero from "@/sections/Hero";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { metadata } from "./metadata";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      <ContactSection />
      <Footer />
    </main>
  );
}
