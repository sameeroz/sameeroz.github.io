import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: number }[];
  accent: string;
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
      { name: "TensorFlow", level: 75 },
      { name: "PyTorch", level: 75 },
    ],
    accent: "from-violet-500 to-purple-600",
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
    accent: "from-cyan-500 to-blue-600",
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
    accent: "from-pink-500 to-violet-600",
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
    accent: "from-amber-500 to-orange-600",
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
    accent: "from-emerald-500 to-teal-600",
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
    accent: "from-blue-500 to-cyan-600",
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
    accent: "from-orange-500 to-red-600",
  },
];

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
          <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">Technical Skills</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            The tools and technologies I use to build intelligent solutions
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${200 + catIndex * 100}ms` }}
            >
              <div className="glass-card glass-card-hover glow-border rounded-2xl p-6 h-full group transition-all duration-500">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.accent} flex items-center justify-center text-lg group-hover:scale-110 transition-transform duration-300`}
                    style={{
                      background: `linear-gradient(135deg, var(--tw-gradient-from) / 0.2, var(--tw-gradient-to) / 0.2)`,
                    }}
                  >
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-white text-sm uppercase tracking-wider">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm text-white/70 group-hover:text-white/90 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-xs text-white/30 font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${category.accent} transition-all duration-1000 ease-out`}
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            transitionDelay: `${800 + catIndex * 100}ms`,
                          }}
                        />
                      </div>
                    </div>
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

export default SkillsSection;
