import { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: number }[];
  gradientFrom: string;
  gradientTo: string;
  glowColor: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "AI / ML",
    icon: "🧠",
    skills: [
      { name: "LangChain", level: 95 },
      { name: "LlamaIndex", level: 90 },
      { name: "OpenAI API", level: 95 },
      { name: "Hugging Face", level: 85 },
      { name: "AWS Bedrock", level: 85 },
      { name: "vLLM", level: 80 },
    ],
    gradientFrom: "#8b5cf6",
    gradientTo: "#7c3aed",
    glowColor: "rgba(139,92,246,0.25)",
  },
  {
    title: "RAG & Agents",
    icon: "🔗",
    skills: [
      { name: "RAG Pipelines", level: 95 },
      { name: "Agentic Workflows", level: 95 },
      { name: "Langfuse", level: 90 },
      { name: "MCP Protocol", level: 90 },
      { name: "Vector Databases", level: 90 },
      { name: "Prompt Engineering", level: 95 },
    ],
    gradientFrom: "#06b6d4",
    gradientTo: "#0284c7",
    glowColor: "rgba(6,182,212,0.25)",
  },
  {
    title: "Voice AI",
    icon: "🎙️",
    skills: [
      { name: "TTS Fine-tuning", level: 90 },
      { name: "Speech-to-Text", level: 85 },
      { name: "LiveKit", level: 85 },
      { name: "Voice Pipelines", level: 90 },
    ],
    gradientFrom: "#ec4899",
    gradientTo: "#8b5cf6",
    glowColor: "rgba(236,72,153,0.2)",
  },
  {
    title: "Languages",
    icon: "💻",
    skills: [
      { name: "Python", level: 95 },
      { name: "JavaScript", level: 85 },
      { name: "Dart", level: 80 },
      { name: "PHP", level: 75 },
    ],
    gradientFrom: "#f59e0b",
    gradientTo: "#ea580c",
    glowColor: "rgba(245,158,11,0.2)",
  },
  {
    title: "Frameworks",
    icon: "⚡",
    skills: [
      { name: "FastAPI", level: 95 },
      { name: "Flask", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Flutter", level: 85 },
      { name: "Laravel", level: 80 },
    ],
    gradientFrom: "#10b981",
    gradientTo: "#0d9488",
    glowColor: "rgba(16,185,129,0.2)",
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    skills: [
      { name: "AWS (ECS, Bedrock)", level: 90 },
      { name: "Docker", level: 90 },
      { name: "GitHub Actions", level: 85 },
      { name: "CI/CD Pipelines", level: 85 },
    ],
    gradientFrom: "#3b82f6",
    gradientTo: "#06b6d4",
    glowColor: "rgba(59,130,246,0.2)",
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 85 },
      { name: "Firebase", level: 80 },
    ],
    gradientFrom: "#f97316",
    gradientTo: "#ef4444",
    glowColor: "rgba(249,115,22,0.2)",
  },
];

// SVG radial progress ring
function RadialProgress({ level, from, to, size = 52 }: { level: number; from: string; to: string; size?: number }) {
  const r = (size - 6) / 2;
  const circumference = 2 * Math.PI * r;
  const dash = (level / 100) * circumference;
  const id = `grad-${from.replace("#", "")}`;

  return (
    <svg width={size} height={size} className="flex-shrink-0">
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      {/* Track */}
      <circle
        cx={size / 2} cy={size / 2} r={r}
        fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={3}
      />
      {/* Fill */}
      <circle
        cx={size / 2} cy={size / 2} r={r}
        fill="none"
        stroke={`url(#${id})`}
        strokeWidth={3}
        strokeLinecap="round"
        strokeDasharray={`${dash} ${circumference}`}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{ filter: `drop-shadow(0 0 3px ${from}88)` }}
      />
    </svg>
  );
}

function SkillCard({
  category,
  catIndex,
  isVisible,
}: {
  category: SkillCategory;
  catIndex: number;
  isVisible: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(700px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) translateZ(4px)`;
  };
  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = "perspective(700px) rotateX(0) rotateY(0) translateZ(0)";
  };

  return (
    <div
      className={`transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{ transitionDelay: `${200 + catIndex * 90}ms` }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="glass-card glass-card-hover glow-border rounded-2xl p-6 h-full group"
        style={{
          transition: "transform 0.25s cubic-bezier(0.23,1,0.32,1), background 0.35s, border-color 0.35s, box-shadow 0.35s",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Card header */}
        <div className="flex items-center gap-3 mb-5">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg group-hover:scale-110 transition-transform duration-300"
            style={{
              background: `linear-gradient(135deg, ${category.gradientFrom}22, ${category.gradientTo}22)`,
              boxShadow: `0 0 0 1px ${category.gradientFrom}25`,
            }}
          >
            {category.icon}
          </div>
          <h3
            className="font-bold text-sm uppercase tracking-wider"
            style={{ color: category.gradientFrom }}
          >
            {category.title}
          </h3>
        </div>

        {/* Skills list */}
        <div className="space-y-3">
          {category.skills.map((skill) => (
            <div key={skill.name} className="flex items-center gap-3">
              <RadialProgress
                level={isVisible ? skill.level : 0}
                from={category.gradientFrom}
                to={category.gradientTo}
                size={44}
              />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <span className="text-sm text-white/70 group-hover:text-white/90 transition-colors truncate">
                    {skill.name}
                  </span>
                  <span className="text-xs font-mono ml-2 flex-shrink-0" style={{ color: category.gradientFrom + "bb" }}>
                    {skill.level}%
                  </span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="skill-bar-fill"
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      background: `linear-gradient(90deg, ${category.gradientFrom}, ${category.gradientTo})`,
                      transition: `width 1.2s cubic-bezier(0.34,1.56,0.64,1) ${800 + catIndex * 80}ms`,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const SkillsSection = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="skills" ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-violet-400 text-xs font-bold tracking-[0.35em] uppercase mb-4">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            <span className="text-gradient-primary">Technical Skills</span>
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            The tools and technologies I use to build intelligent solutions
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {skillCategories.map((category, catIndex) => (
            <SkillCard
              key={category.title}
              category={category}
              catIndex={catIndex}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
