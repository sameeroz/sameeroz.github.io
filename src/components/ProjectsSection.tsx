import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  Brain,
  MessageSquare,
  ShoppingCart,
  Car,
  Boxes,
  Mic,
  Languages,
  Server,
  Smartphone,
  GraduationCap,
  Star,
} from "lucide-react";

interface Project {
  title: string;
  description: string;
  icon: React.ElementType;
  tech: string[];
  category: string;
  accent: string;
  link?: string;
  github?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "University Internal Knowledge Base",
    description:
      "RAG pipeline with hybrid retrieval supporting local LLMs and AWS Bedrock cloud models for institutional document Q&A with high accuracy.",
    icon: Brain,
    tech: ["RAG", "AWS Bedrock", "LangChain", "Vector DB", "Python"],
    category: "AI Systems",
    accent: "from-violet-500 to-purple-600",
    featured: true,
  },
  {
    title: "Rakhys AI Shopping Assistant",
    description:
      "Conversational shopping agent with intent recognition and product recommendation, integrated with Langfuse for real-time tracing and evaluation.",
    icon: ShoppingCart,
    tech: ["LangChain", "OpenAI", "Langfuse", "FastAPI", "RAG"],
    category: "E-Commerce AI",
    accent: "from-cyan-500 to-blue-600",
    featured: true,
  },
  {
    title: "Odoo ERP AI Agent",
    description:
      "Agentic system interfacing with Odoo ERP to autonomously create sales orders, generate invoices, and manage multi-customer records via natural language.",
    icon: Boxes,
    tech: ["AI Agents", "Odoo", "Python", "MCP", "FastMCP"],
    category: "Enterprise AI",
    accent: "from-violet-600 to-indigo-600",
    featured: true,
  },
  {
    title: "Dual-Mode Voice Agent",
    description:
      "Voice agent with two deployment strategies: fully on-premises stack (STT + LLM + TTS) and cloud-native variant — balancing privacy, cost, and latency.",
    icon: Mic,
    tech: ["Voice AI", "STT", "TTS", "LLM", "LiveKit", "Python"],
    category: "Voice AI",
    accent: "from-pink-500 to-violet-600",
    featured: true,
  },
  {
    title: "Customer Service AI Agent",
    description:
      "Text-based autonomous support agent with RAG integration deployed inside an existing customer service platform to reduce human escalation rates.",
    icon: MessageSquare,
    tech: ["RAG", "LangChain", "FastAPI", "Python"],
    category: "AI Systems",
    accent: "from-blue-500 to-cyan-600",
  },
  {
    title: "Automotive Lead Qualification Agent",
    description:
      "AI agent that qualifies and engages inbound sales leads for an automobile dealership, automating early-stage CRM pipeline tasks.",
    icon: Car,
    tech: ["AI Agents", "LLM", "Python", "Automation"],
    category: "Sales AI",
    accent: "from-amber-500 to-orange-600",
  },
  {
    title: "Arabic TTS Fine-Tuning",
    description:
      "Fine-tuned leading TTS models on specific Arabic dialects, producing high-fidelity, low-latency speech synthesis for production voice pipelines.",
    icon: Languages,
    tech: ["TTS", "Hugging Face", "PyTorch", "Arabic NLP"],
    category: "Voice AI",
    accent: "from-emerald-500 to-teal-600",
  },
  {
    title: "Customer Service Platform — AWS",
    description:
      "End-to-end deployment of an AI-powered customer service platform and admin dashboard on AWS ECS using Docker containers and CI/CD pipelines.",
    icon: Server,
    tech: ["AWS ECS", "Docker", "CI/CD", "GitHub Actions", "Next.js"],
    category: "DevOps",
    accent: "from-orange-500 to-red-600",
  },
  {
    title: "Flutter Smart Home IoT App",
    description:
      "Mobile application integrating real-time IoT device control and monitoring via Flutter with responsive UI.",
    icon: Smartphone,
    tech: ["Flutter", "Dart", "IoT", "Firebase"],
    category: "Mobile",
    accent: "from-sky-500 to-blue-600",
  },
  {
    title: "Ministry Exam Simulator",
    description:
      "Flutter mobile app simulating official ministry examinations with an embedded AI assistant for guided learning.",
    icon: GraduationCap,
    tech: ["Flutter", "AI", "Dart", "Firebase"],
    category: "Mobile",
    accent: "from-teal-500 to-emerald-600",
  },
];

const categories = ["All", "AI Systems", "Voice AI", "Enterprise AI", "E-Commerce AI", "Sales AI", "DevOps", "Mobile"];

const ProjectsSection = () => {
  const [ref, isVisible] = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">Featured Projects</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
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
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-violet-500/20 text-violet-300 border border-violet-500/30"
                  : "text-white/50 hover:text-white/80 hover:bg-white/5 border border-transparent"
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
          <div className="relative glass-card rounded-2xl p-8 overflow-hidden group hover:bg-white/[0.04] transition-all duration-500">
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500/20 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                <Star size={28} className="text-violet-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-white">
                    Odoo MCP Server
                  </h3>
                  <Badge className="bg-violet-500/10 text-violet-300 border-violet-500/20 text-xs">
                    Open Source
                  </Badge>
                  <Badge className="bg-emerald-500/10 text-emerald-300 border-emerald-500/20 text-xs">
                    MIT License
                  </Badge>
                </div>
                <p className="text-white/60 text-sm mb-3 max-w-3xl">
                  A production-ready Model Context Protocol (MCP) server
                  bridging AI agents with Odoo ERP — supporting Claude Desktop,
                  Cursor, VS Code Copilot, and Zed. Features product catalog
                  retrieval with multi-language support, sales order creation,
                  automated invoice generation, and payment processing.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python 3.12+",
                    "FastMCP",
                    "XML-RPC",
                    "MCP Protocol",
                    "Odoo ERP",
                  ].map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="bg-white/5 text-white/50 border border-white/8 text-xs"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
              <a
                href="https://github.com/sameeroz/odoo-mcp-server"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-violet-500/30 transition-all duration-300 text-sm font-medium flex-shrink-0"
              >
                <Github size={16} />
                View on GitHub
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((project, index) => (
            <div
              key={project.title}
              className={`transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="glass-card glass-card-hover glow-border rounded-2xl p-7 h-full group transition-all duration-500">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.accent} bg-opacity-20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    style={{
                      background: `linear-gradient(135deg, var(--tw-gradient-from) / 0.15, var(--tw-gradient-to) / 0.15)`,
                    }}
                  >
                    <project.icon
                      size={22}
                      className="text-white/80"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-gradient-primary transition-all truncate">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <Star
                          size={14}
                          className="text-amber-400 flex-shrink-0"
                          fill="currentColor"
                        />
                      )}
                    </div>
                    <span className="text-xs text-violet-400/70 font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                <p className="text-white/55 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tech.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="bg-white/5 text-white/50 border border-white/8 text-xs hover:bg-violet-500/10 hover:text-violet-300 transition-all duration-300"
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
    </section>
  );
};

export default ProjectsSection;
