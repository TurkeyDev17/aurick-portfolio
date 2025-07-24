import Hero from "@/sections/Hero";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import ContactSection from "@/components/ContactSection";
import Services from "@/sections/Services";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      <Services />
      <ContactSection />
      <Footer />
    </main>
  );
}
