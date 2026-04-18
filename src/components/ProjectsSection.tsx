import { useState, useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  ExternalLink, Github, Brain, MessageSquare, ShoppingCart,
  Car, Boxes, Mic, Languages, Server, Smartphone, GraduationCap, Star,
} from "lucide-react";

interface Project {
  title: string;
  description: string;
  icon: React.ElementType;
  tech: string[];
  category: string;
  accent: string;
  glowColor: string;
  link?: string;
  github?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "University Knowledge Base",
    description: "RAG pipeline with hybrid retrieval supporting local LLMs and AWS Bedrock cloud models for institutional document Q&A with high accuracy.",
    icon: Brain,
    tech: ["RAG", "AWS Bedrock", "LangChain", "Vector DB", "Python"],
    category: "AI Systems",
    accent: "from-violet-500 to-purple-600",
    glowColor: "rgba(139,92,246,0.2)",
    featured: true,
  },
  {
    title: "Rakhys AI Shopping Assistant",
    description: "Conversational shopping agent with intent recognition and product recommendation, integrated with Langfuse for real-time tracing and evaluation.",
    icon: ShoppingCart,
    tech: ["LangChain", "OpenAI", "Langfuse", "FastAPI", "RAG"],
    category: "E-Commerce AI",
    accent: "from-cyan-500 to-blue-600",
    glowColor: "rgba(6,182,212,0.2)",
    featured: true,
  },
  {
    title: "Odoo ERP AI Agent",
    description: "Agentic system interfacing with Odoo ERP to autonomously create sales orders, generate invoices, and manage multi-customer records via natural language.",
    icon: Boxes,
    tech: ["AI Agents", "Odoo", "Python", "MCP", "FastMCP"],
    category: "Enterprise AI",
    accent: "from-violet-600 to-indigo-600",
    glowColor: "rgba(99,102,241,0.2)",
    featured: true,
  },
  {
    title: "Dual-Mode Voice Agent",
    description: "Voice agent with two deployment strategies: fully on-premises stack (STT + LLM + TTS) and cloud-native — balancing privacy, cost, and latency.",
    icon: Mic,
    tech: ["Voice AI", "STT", "TTS", "LLM", "LiveKit", "Python"],
    category: "Voice AI",
    accent: "from-pink-500 to-violet-600",
    glowColor: "rgba(236,72,153,0.15)",
    featured: true,
  },
  {
    title: "Customer Service AI Agent",
    description: "Text-based autonomous support agent with RAG integration deployed inside an existing platform to reduce human escalation rates.",
    icon: MessageSquare,
    tech: ["RAG", "LangChain", "FastAPI", "Python"],
    category: "AI Systems",
    accent: "from-blue-500 to-cyan-600",
    glowColor: "rgba(59,130,246,0.15)",
  },
  {
    title: "Automotive Lead Qualification",
    description: "AI agent that qualifies and engages inbound sales leads for an automobile dealership, automating early-stage CRM pipeline tasks.",
    icon: Car,
    tech: ["AI Agents", "LLM", "Python", "Automation"],
    category: "Sales AI",
    accent: "from-amber-500 to-orange-600",
    glowColor: "rgba(245,158,11,0.15)",
  },
  {
    title: "Arabic TTS Fine-Tuning",
    description: "Fine-tuned leading TTS models on specific Arabic dialects, producing high-fidelity, low-latency speech synthesis for production voice pipelines.",
    icon: Languages,
    tech: ["TTS", "Hugging Face", "PyTorch", "Arabic NLP"],
    category: "Voice AI",
    accent: "from-emerald-500 to-teal-600",
    glowColor: "rgba(16,185,129,0.15)",
  },
  {
    title: "Customer Service Platform — AWS",
    description: "End-to-end deployment of an AI-powered customer service platform and admin dashboard on AWS ECS using Docker and CI/CD pipelines.",
    icon: Server,
    tech: ["AWS ECS", "Docker", "CI/CD", "GitHub Actions", "Next.js"],
    category: "DevOps",
    accent: "from-orange-500 to-red-600",
    glowColor: "rgba(249,115,22,0.15)",
  },
  {
    title: "Flutter Smart Home IoT App",
    description: "Mobile application integrating real-time IoT device control and monitoring via Flutter with responsive UI.",
    icon: Smartphone,
    tech: ["Flutter", "Dart", "IoT", "Firebase"],
    category: "Mobile",
    accent: "from-sky-500 to-blue-600",
    glowColor: "rgba(14,165,233,0.15)",
  },
  {
    title: "Ministry Exam Simulator",
    description: "Flutter mobile app simulating official ministry examinations with an embedded AI assistant for guided learning.",
    icon: GraduationCap,
    tech: ["Flutter", "AI", "Dart", "Firebase"],
    category: "Mobile",
    accent: "from-teal-500 to-emerald-600",
    glowColor: "rgba(20,184,166,0.15)",
  },
];

const categories = ["All", "AI Systems", "Voice AI", "Enterprise AI", "E-Commerce AI", "Sales AI", "DevOps", "Mobile"];

// 3D tilt card hook
function useTilt(ref: React.RefObject<HTMLDivElement | null>) {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateZ(4px)`;
  };
  const handleMouseLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)";
  };
  return { handleMouseMove, handleMouseLeave };
}

function ProjectCard({ project, index, isVisible }: { project: Project; index: number; isVisible: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { handleMouseMove, handleMouseLeave } = useTilt(cardRef);

  return (
    <div
      className={`transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{ transitionDelay: `${400 + index * 80}ms` }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="glass-card glass-card-hover glow-border holo-shimmer rounded-2xl p-7 h-full group cursor-default"
        style={{
          transition: "transform 0.25s cubic-bezier(0.23,1,0.32,1), background 0.35s, border-color 0.35s, box-shadow 0.35s",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Top glow line */}
        <div className={`absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r ${project.accent} opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />

        <div className="flex items-start gap-4 mb-4">
          <div
            className={`w-11 h-11 rounded-xl bg-gradient-to-br ${project.accent} flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}
            style={{ boxShadow: `0 0 0 0 ${project.glowColor}`, transition: "transform 0.3s, box-shadow 0.3s" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 20px 4px ${project.glowColor}`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 0 0 ${project.glowColor}`;
            }}
          >
            <project.icon size={20} className="text-white/90" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <h3 className="text-base font-bold text-white group-hover:text-gradient-primary transition-all truncate">
                {project.title}
              </h3>
              {project.featured && (
                <Star size={12} className="text-amber-400 flex-shrink-0" fill="currentColor" />
              )}
            </div>
            <span className="text-xs text-violet-400/60 font-medium">{project.category}</span>
          </div>
        </div>

        <p className="text-white/50 text-sm leading-relaxed mb-5 group-hover:text-white/65 transition-colors duration-300">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tech.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

const ProjectsSection = () => {
  const [ref, isVisible] = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div
          className={`text-center mb-14 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-violet-400 text-xs font-bold tracking-[0.35em] uppercase mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            <span className="text-gradient-primary">Featured Projects</span>
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            Production-grade AI systems delivering real business value
          </p>
        </div>

        {/* Category filters */}
        <div
          className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-violet-500/15 text-violet-300 border border-violet-500/35 shadow-sm shadow-violet-500/10"
                  : "text-white/40 hover:text-white/70 hover:bg-white/4 border border-transparent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Open Source Highlight */}
        <div
          className={`mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="relative glass-deep rounded-2xl p-8 overflow-hidden group hover:border-violet-500/25 transition-all duration-500">
            {/* Scan line effect */}
            <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-violet-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ animation: "scan-line 2s linear infinite", top: 0 }} />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/25 to-cyan-500/25 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Star size={28} className="text-violet-300" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h3 className="text-xl font-bold text-white">Odoo MCP Server</h3>
                  <span className="tech-tag" style={{ background: "rgba(139,92,246,0.12)", borderColor: "rgba(139,92,246,0.25)", color: "#c4b5fd" }}>
                    Open Source
                  </span>
                  <span className="tech-tag" style={{ background: "rgba(16,185,129,0.1)", borderColor: "rgba(16,185,129,0.2)", color: "#6ee7b7" }}>
                    MIT License
                  </span>
                </div>
                <p className="text-white/55 text-sm mb-4 max-w-3xl leading-relaxed">
                  A production-ready Model Context Protocol (MCP) server bridging AI agents with
                  Odoo ERP — supporting Claude Desktop, Cursor, VS Code Copilot, and Zed.
                  Features product catalog retrieval with multi-language support, sales order
                  creation, automated invoice generation, and payment processing.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Python 3.12+", "FastMCP", "XML-RPC", "MCP Protocol", "Odoo ERP"].map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
              <a
                href="https://github.com/sameeroz/odoo-mcp-server"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass-card border border-white/10 text-white/60 hover:text-white hover:border-violet-500/30 hover:bg-violet-500/10 transition-all duration-300 text-sm font-semibold flex-shrink-0 group/btn"
              >
                <Github size={15} />
                View on GitHub
                <ExternalLink size={11} className="opacity-50 group-hover/btn:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
