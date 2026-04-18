import { useState, useEffect, useRef } from "react";
import { ArrowDown, Sparkles, GithubIcon, LinkedinIcon } from "lucide-react";
import AIBrainCanvas from "./AIBrainCanvas";

const roles = [
  "AI Engineer",
  "LLM Systems Architect",
  "Voice AI Builder",
  "RAG Pipeline Expert",
  "Agentic Workflow Designer",
];

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const ctaRef2 = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Typing effect
  useEffect(() => {
    const role = roles[currentRole];
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting) {
      if (displayText.length < role.length) {
        timeout = setTimeout(() => setDisplayText(role.slice(0, displayText.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2200);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 28);
      } else {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  // Magnetic button effect
  const handleMagnet = (e: React.MouseEvent<HTMLAnchorElement>, ref: React.RefObject<HTMLAnchorElement | null>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * 0.3;
    const dy = (e.clientY - cy) * 0.3;
    el.style.transform = `translate(${dx}px, ${dy}px) scale(1.04)`;
  };
  const handleMagnetLeave = (ref: React.RefObject<HTMLAnchorElement | null>) => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0,0) scale(1)";
  };

  return (
    <section className="relative min-h-screen flex items-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Radial gradient backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-violet-700/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* ── Left column ───────────────────────────────────────────────── */}
        <div className="flex flex-col justify-center order-2 lg:order-1">
          {/* Status badge */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card mb-8 text-sm w-fit">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span className="text-white/70">Available for new opportunities</span>
            </div>
          </div>

          {/* Name */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <p className="text-violet-400/80 text-sm font-semibold tracking-[0.3em] uppercase mb-3">
              Hi, I'm
            </p>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-4 leading-[0.95] tracking-tight">
              <span className="text-gradient-hero block">Sameer</span>
              <span className="text-white/90 block text-5xl sm:text-6xl lg:text-7xl font-bold mt-1">
                Anwar
              </span>
            </h1>
          </div>

          {/* Typing role */}
          <div
            className={`transition-all duration-1000 delay-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="h-10 flex items-center mb-8">
              <span className="text-xl md:text-2xl font-semibold text-white/80 font-mono tracking-wide">
                {displayText}
              </span>
              <span className="inline-block w-[2px] h-6 bg-violet-400 ml-1 animate-pulse" />
            </div>
          </div>

          {/* Description */}
          <div
            className={`transition-all duration-1000 delay-[900ms] ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <p className="text-base md:text-lg text-white/50 mb-10 max-w-xl leading-relaxed">
              I architect production-grade AI systems — from{" "}
              <span className="text-violet-400 font-medium">RAG pipelines</span> and{" "}
              <span className="text-cyan-400 font-medium">autonomous agents</span> to{" "}
              <span className="text-violet-300 font-medium">Voice AI</span> — turning complex
              problems into intelligent, scalable solutions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`transition-all duration-1000 delay-[1100ms] ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex flex-wrap gap-4 items-center mb-10">
              <a
                ref={ctaRef}
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                onMouseMove={(e) => handleMagnet(e, ctaRef)}
                onMouseLeave={() => handleMagnetLeave(ctaRef)}
                className="magnetic-btn group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-bold text-base shadow-xl shadow-violet-500/25 hover:shadow-violet-500/50 transition-all duration-300 flex items-center gap-2 overflow-hidden"
                style={{ transition: "transform 0.15s ease, box-shadow 0.3s ease" }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Sparkles size={16} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10">View My Work</span>
              </a>

              <a
                ref={ctaRef2}
                href="mailto:gdrboy11@gmail.com"
                onMouseMove={(e) => handleMagnet(e, ctaRef2)}
                onMouseLeave={() => handleMagnetLeave(ctaRef2)}
                className="magnetic-btn px-8 py-4 rounded-2xl border border-white/10 text-white/75 font-semibold text-base hover:bg-white/5 hover:border-violet-500/30 hover:text-white transition-all duration-300"
                style={{ transition: "transform 0.15s ease, border-color 0.3s ease, color 0.3s ease" }}
              >
                Let's Talk
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/sameeroz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-violet-500/30 transition-all duration-300 hover:scale-110"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/sameer-anwar-a8b1b5225/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-110"
              >
                <LinkedinIcon size={16} />
              </a>
              <div className="w-px h-5 bg-white/10 mx-1" />
              <span className="text-white/25 text-xs font-mono tracking-widest">
                @sameeroz
              </span>
            </div>
          </div>
        </div>

        {/* ── Right column — 3D Brain ────────────────────────────────────── */}
        <div
          className={`flex justify-center items-center order-1 lg:order-2 transition-all duration-1500 delay-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="relative w-full max-w-[420px] aspect-square">
            {/* Outer glow rings */}
            <div className="absolute inset-0 rounded-full bg-violet-600/10 blur-[60px] animate-pulse-glow" />
            <div className="absolute inset-[10%] rounded-full bg-cyan-500/8 blur-[40px] animate-float-slow" />

            {/* 3D canvas */}
            <div className="relative w-full h-full rounded-full overflow-visible">
              <AIBrainCanvas/>
            </div>

            {/* Floating stat chips */}
            <div className="absolute -top-3 -right-4 glass-card rounded-2xl px-4 py-3 border border-violet-500/20 shadow-lg shadow-violet-500/10 animate-float">
              <p className="text-white font-bold text-lg leading-none">10+</p>
              <p className="text-white/50 text-xs mt-0.5">AI Projects</p>
            </div>
            <div className="absolute -bottom-4 -left-4 glass-card rounded-2xl px-4 py-3 border border-cyan-500/20 shadow-lg shadow-cyan-500/10 animate-float-delayed">
              <p className="text-white font-bold text-lg leading-none">8+</p>
              <p className="text-white/50 text-xs mt-0.5">Production Deploys</p>
            </div>
            <div className="absolute top-1/2 -right-8 -translate-y-1/2 glass-card rounded-2xl px-4 py-3 border border-white/8 animate-float-slow">
              <p className="text-white font-bold text-lg leading-none">2+</p>
              <p className="text-white/50 text-xs mt-0.5">Years in AI</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-[1500ms] ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <button
          onClick={() =>
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
          }
          className="flex flex-col items-center gap-2 text-white/25 hover:text-white/60 transition-colors group"
        >
          <span className="text-xs tracking-widest uppercase font-mono">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
