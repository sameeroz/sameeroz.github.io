import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Award, Briefcase, Code2, Cpu } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "2+", label: "Years in AI" },
  { icon: Code2, value: "10+", label: "AI Projects" },
  { icon: Cpu, value: "8+", label: "Production Deployments" },
  { icon: Award, value: "AWS", label: "Certified" },
];

const highlights = [
  "Retrieval-Augmented Generation (RAG)",
  "Autonomous Agentic Workflows",
  "Multilingual NLP (Arabic Focus)",
  "Voice AI Pipelines",
  "LLM Integration & Fine-tuning",
  "Cloud Deployment (AWS)",
];

const AboutSection = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="about" ref={ref} className="section-padding">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-4">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">
              Turning Ideas into Intelligent Systems
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left text column */}
          <div
            className={`lg:col-span-3 transition-all duration-1000 delay-200 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-8 opacity-0"
            }`}
          >
            <div className="space-y-5 text-white/70 text-lg leading-relaxed">
              <p>
                I'm a <span className="text-white font-medium">results-driven AI Engineer</span> with
                hands-on experience architecting and deploying production-grade
                AI systems across diverse verticals — including{" "}
                <span className="text-violet-300">e-commerce</span>,{" "}
                <span className="text-cyan-300">customer service</span>,{" "}
                <span className="text-violet-300">automotive</span>, and{" "}
                <span className="text-cyan-300">enterprise ERP</span>.
              </p>
              <p>
                My work spans the full AI lifecycle — from proof-of-concept
                through scalable cloud deployment. I specialize in building
                systems that don't just demo well, but{" "}
                <span className="text-white font-medium">
                  perform reliably in production
                </span>
                .
              </p>
              <p>
                Proficient in both open-source and cloud-hosted LLM ecosystems,
                I bring deep expertise in RAG architectures, autonomous agent
                design, multilingual NLP with a strong Arabic-language focus,
                and end-to-end Voice AI pipelines.
              </p>
            </div>

            {/* Skill badges */}
            <div className="flex flex-wrap gap-2 mt-8">
              {highlights.map((h) => (
                <Badge
                  key={h}
                  variant="secondary"
                  className="bg-white/5 text-white/80 border border-white/10 hover:bg-violet-500/10 hover:border-violet-500/30 transition-all duration-300 px-3 py-1.5 text-sm"
                >
                  {h}
                </Badge>
              ))}
            </div>
          </div>

          {/* Right stats column */}
          <div
            className={`lg:col-span-2 transition-all duration-1000 delay-400 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-8 opacity-0"
            }`}
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`glass-card glass-card-hover glow-border rounded-2xl p-6 text-center transition-all duration-500 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${600 + i * 150}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-3">
                    <stat.icon size={22} className="text-violet-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* AWS badge */}
            <div className="mt-4 glass-card glow-border rounded-2xl p-5 flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">☁️</span>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">
                  AWS Certified Cloud Practitioner
                </p>
                <p className="text-white/40 text-xs mt-0.5">
                  Issued June 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
