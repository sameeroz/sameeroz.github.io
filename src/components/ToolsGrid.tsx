
import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";

const ToolsGrid = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const tools = [
    {
      name: "LangChain",
      description: "Building complex AI workflows",
      icon: "🔗",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "OpenAI GPT",
      description: "Large Language Models",
      icon: "🤖",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "RAG Systems",
      description: "Retrieval-Augmented Generation",
      icon: "🔍",
      color: "from-purple-500 to-violet-500"
    },
    {
      name: "Vector DBs",
      description: "Semantic search & embeddings",
      icon: "🗄️",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "AI Agents",
      description: "Autonomous intelligent systems",
      icon: "🧠",
      color: "from-pink-500 to-rose-500"
    },
    {
      name: "Python",
      description: "Core development language",
      icon: "🐍",
      color: "from-yellow-500 to-amber-500"
    },
    {
      name: "Hugging Face",
      description: "Model deployment & fine-tuning",
      icon: "🤗",
      color: "from-indigo-500 to-purple-500"
    },
    {
      name: "TensorFlow",
      description: "Machine learning framework",
      icon: "🔥",
      color: "from-orange-500 to-amber-500"
    },
    {
      name: "Flutter",
      description: "Cross-platform mobile development",
      icon: "📱",
      color: "from-blue-500 to-sky-500"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              My Tech Stack
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Cutting-edge tools and technologies I use to build intelligent solutions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 delay-${index * 100} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <Card className="backdrop-blur-md bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl group cursor-pointer">
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${tool.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {tool.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    {tool.name}
                  </h3>
                  <p className="text-white/70 text-sm group-hover:text-white/90 transition-colors duration-300">
                    {tool.description}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsGrid;
