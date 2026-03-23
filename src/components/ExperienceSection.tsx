import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, ChevronRight } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  tech: string[];
  accent: string;
}

const experiences: Experience[] = [
  {
    title: "AI Engineer",
    company: "NexuMind",
    period: "May 2024 – Present",
    description:
      "Building production-grade AI systems spanning RAG, autonomous agents, Voice AI, and cloud deployments.",
    highlights: [
      "Architected a university-grade internal Knowledge Base using RAG pipelines with support for local LLMs and AWS Bedrock cloud models",
      "Engineered an AI Shopping Assistant for the Rakhys e-commerce platform with conversational AI and real-time Langfuse observability",
      "Built a text-based Customer Service AI Agent with RAG integration, reducing human escalation rates within an existing support platform",
      "Developed an AI Lead Qualification Agent for an automobile dealership, automating prospect engagement and sales funnel optimization",
      "Designed an Agentic AI system integrated with Odoo ERP for autonomous sales orders, invoices, and multi-customer management via natural language",
      "Delivered dual-mode Voice Agent — fully local (on-prem STT + LLM + TTS) and cloud-native — for privacy-constrained environments",
      "Fine-tuned TTS models on Arabic dialects, producing high-fidelity, low-latency speech synthesis for production voice pipelines",
      "Deployed a full-stack Customer Service Platform on AWS ECS with Docker containerization and CI/CD automation",
    ],
    tech: [
      "Python",
      "LangChain",
      "LlamaIndex",
      "OpenAI",
      "AWS Bedrock",
      "RAG",
      "Voice AI",
      "Docker",
      "AWS ECS",
      "Langfuse",
      "FastAPI",
    ],
    accent: "from-violet-500 to-cyan-500",
  },
  {
    title: "Software Engineer",
    company: "Innova-Tech",
    period: "Dec 2023 – May 2024",
    description:
      "Mobile and web application development across client projects.",
    highlights: [
      "Developed and delivered cross-platform mobile and web applications using Flutter, Laravel, and modern JavaScript frameworks",
      "Adhered to agile delivery timelines across multiple concurrent client projects",
    ],
    tech: ["Flutter", "Laravel", "JavaScript", "Dart", "Firebase"],
    accent: "from-blue-500 to-violet-500",
  },
  {
    title: "Software Engineer",
    company: "Yemen Cloud",
    period: "Jul 2023 – Nov 2023",
    description: "Government-sector web application development.",
    highlights: [
      "Engineered a comprehensive web application for the Yemen Medical Council",
      "Managed physician registration, licensing workflows, and official documentation processes",
    ],
    tech: ["Laravel", "PHP", "MySQL", "Web Development"],
    accent: "from-cyan-500 to-blue-500",
  },
];

const ExperienceSection = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="experience" ref={ref} className="section-padding">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Career Path
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">
              Professional Experience
            </span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Building intelligent systems across diverse industries and platforms
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/40 via-cyan-500/20 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative pl-8 md:pl-20 transition-all duration-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: `${300 + index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 -translate-x-1/2 top-2">
                  <div
                    className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.accent} shadow-lg`}
                  />
                  <div
                    className={`absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-r ${exp.accent} animate-ping opacity-20`}
                  />
                </div>

                {/* Card */}
                <div className="glass-card glass-card-hover glow-border rounded-2xl p-8 group transition-all duration-500 hover:translate-x-1">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-gradient-primary transition-all">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-3 mt-1 text-white/50 text-sm">
                        <span className="flex items-center gap-1.5">
                          <Building2 size={14} className="text-violet-400" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} className="text-cyan-400" />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    {index === 0 && (
                      <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 self-start text-xs">
                        Current
                      </Badge>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-white/60 mb-5 text-sm">{exp.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-2.5 mb-6">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-white/70 text-sm leading-relaxed"
                      >
                        <ChevronRight
                          size={14}
                          className="text-violet-400 mt-1 flex-shrink-0"
                        />
                        <span className="group-hover:text-white/80 transition-colors">
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <Badge
                        key={t}
                        variant="secondary"
                        className="bg-white/5 text-white/60 border border-white/8 text-xs hover:bg-violet-500/10 hover:text-violet-300 hover:border-violet-500/20 transition-all duration-300"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
