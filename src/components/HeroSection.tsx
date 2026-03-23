import { useState, useEffect } from "react";
import { ArrowDown, Sparkles, Cloud, Bot, Mic } from "lucide-react";

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
        timeout = setTimeout(() => {
          setDisplayText(role.slice(0, displayText.length + 1));
        }, 60);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 30);
      } else {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-600/20 rounded-full blur-[128px] animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/15 rounded-full blur-[128px] animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[200px]" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Status badge */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 text-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            <span className="text-white/70">Available for new opportunities</span>
          </div>
        </div>

        {/* Main heading */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1] tracking-tight">
            <span className="text-white">Hi, I'm </span>
            <span className="text-gradient-hero">Sameer</span>
          </h1>
        </div>

        {/* Typing role */}
        <div
          className={`transition-all duration-1000 delay-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="h-12 md:h-14 flex items-center justify-center mb-8">
            <span className="text-2xl md:text-3xl font-semibold text-white/90 font-mono">
              {displayText}
            </span>
            <span className="inline-block w-[3px] h-8 md:h-9 bg-violet-500 ml-1 animate-pulse" />
          </div>
        </div>

        {/* Description */}
        <div
          className={`transition-all duration-1000 delay-900 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-lg md:text-xl text-white/55 mb-12 max-w-2xl mx-auto leading-relaxed">
            I architect production-grade AI systems — from{" "}
            <span className="text-violet-400">RAG pipelines</span> and{" "}
            <span className="text-cyan-400">autonomous agents</span> to{" "}
            <span className="text-violet-300">Voice AI</span> — turning complex
            problems into intelligent, scalable solutions.
          </p>
        </div>

        {/* CTA buttons */}
        <div
          className={`transition-all duration-1000 delay-[1100ms] ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold text-lg shadow-xl shadow-violet-500/20 hover:shadow-violet-500/40 transition-all duration-300 hover:scale-[1.03] flex items-center gap-2"
            >
              <Sparkles size={18} className="group-hover:rotate-12 transition-transform" />
              View My Work
            </a>
            <a
              href="mailto:gdrboy11@gmail.com"
              className="px-8 py-4 rounded-xl border border-white/10 text-white/80 font-semibold text-lg hover:bg-white/5 hover:border-white/20 hover:text-white transition-all duration-300 hover:scale-[1.03]"
            >
              Let's Talk
            </a>
          </div>
        </div>

        {/* Floating tech icons */}
        <div
          className={`transition-all duration-1000 delay-[1300ms] ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex justify-center gap-8 md:gap-12 mb-12">
            {[
              { icon: Bot, label: "AI Agents", color: "text-violet-400" },
              { icon: Sparkles, label: "RAG", color: "text-cyan-400" },
              { icon: Mic, label: "Voice AI", color: "text-violet-300" },
              { icon: Cloud, label: "Cloud", color: "text-cyan-300" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-2 group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center group-hover:bg-white/10 transition-all duration-300 group-hover:scale-110">
                  <item.icon size={22} className={item.color} />
                </div>
                <span className="text-xs text-white/40 group-hover:text-white/70 transition-colors">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`transition-all duration-1000 delay-[1500ms] ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <button
            onClick={scrollToAbout}
            className="animate-bounce text-white/30 hover:text-white/60 transition-colors"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
