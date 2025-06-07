
import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
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

  const experiences = [
    {
      title: "AI Engineer",
      company: "NeuroMind",
      period: "May 2024 - Present",
      location: "Remote",
      highlights: [
        "Designing and deploying scalable RAG pipelines for real-world problem-solving",
        "Integrated LLMs with retrieval systems using vector databases and prompt engineering",
        "Optimized AI workflows and reduced model inference time"
      ],
      tech: ["Python", "LangChain", "OpenAI", "Vector DBs"]
    },
    {
      title: "Mobile Developer",
      company: "InnovasTech",
      period: "Dec 2021 - Jun 2024",
      location: "Remote",
      highlights: [
        "Developed mobile apps using Flutter and Firebase",
        "Led UX/UI design for responsive and user-friendly interfaces"
      ],
      tech: ["Flutter", "Firebase", "Dart", "UI/UX"]
    },
    {
      title: "Software Engineer",
      company: "Yemen Cloud",
      period: "Jul 2023 - Nov 2023",
      location: "Yemen",
      highlights: [
        "Developed a web application for Yemen Medical Council",
        "Implemented relational databases and custom authentication modules"
      ],
      tech: ["Web Development", "Database Design", "Authentication"]
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              Professional Journey
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Building intelligent systems across diverse industries and platforms
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 delay-${(index + 1) * 200} ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}
            >
              <Card className="backdrop-blur-md bg-white/5 border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <div className="flex items-center space-x-4 text-white/70">
                      <div className="flex items-center space-x-2">
                        <Building size={16} />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-white/80 flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary" 
                      className="bg-white/10 text-white/90 border-white/20 hover:bg-white/20 transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
