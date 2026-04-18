import Navbar from "@/components/Navbar";
import ThreeBackground from "@/components/ThreeBackground";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground noise-overlay grid-pattern">
      {/* Three.js 3D neural network background */}
      <ThreeBackground />

      <Navbar />

      <main className="relative z-10">
        <HeroSection />

        {/* Section dividers */}
        <div className="section-divider mx-auto" />
        <AboutSection />

        <div className="section-divider mx-auto" />
        <ExperienceSection />

        <div className="section-divider mx-auto" />
        <ProjectsSection />

        <div className="section-divider mx-auto" />
        <SkillsSection />

        <div className="section-divider mx-auto" />
        <EducationSection />

        <div className="section-divider mx-auto" />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-gradient-primary font-bold text-lg">SA</span>
              <span className="text-white/20 text-sm">·</span>
              <p className="text-white/30 text-sm">
                © {new Date().getFullYear()} Sameer Saeed Anwar
              </p>
            </div>
            <p className="text-white/15 text-xs font-mono tracking-wide">
              Built with React · TypeScript · Three.js · Tailwind
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-8 z-50 w-11 h-11 rounded-xl bg-violet-600/80 backdrop-blur-sm text-white flex items-center justify-center shadow-xl shadow-violet-500/25 hover:bg-violet-500 transition-all duration-300 hover:scale-110 ${
          showScrollTop
            ? "translate-y-0 opacity-100"
            : "translate-y-16 opacity-0 pointer-events-none"
        }`}
      >
        <ArrowUp size={18} />
      </button>
    </div>
  );
};

export default Index;
