
import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
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

  const testimonials = [
    {
      quote: "Sameer's expertise in AI engineering is exceptional. His RAG implementation increased our search accuracy by 90% and completely transformed how our users interact with our knowledge base.",
      author: "Sarah Chen",
      role: "Product Manager",
      company: "TechFlow Inc.",
      avatar: "SC"
    },
    {
      quote: "Working with Sameer on our LLM integration project was a game-changer. His deep understanding of vector databases and prompt engineering delivered results beyond our expectations.",
      author: "Michael Rodriguez",
      role: "CTO",
      company: "DataMind Solutions",
      avatar: "MR"
    },
    {
      quote: "Sameer doesn't just build AI systems, he crafts intelligent solutions. His work on our AI agents platform reduced processing time by 60% while improving accuracy significantly.",
      author: "Dr. Emily Watson",
      role: "Research Director",
      company: "AI Innovations Lab",
      avatar: "EW"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
              What People Say
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Feedback from colleagues and clients I've had the pleasure to work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 delay-${(index + 1) * 200} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <Card className="backdrop-blur-md bg-white/5 border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl group h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <Quote className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors duration-300" size={32} />
                    <p className="text-white/80 leading-relaxed group-hover:text-white transition-colors duration-300">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  
                  <div className="mt-auto flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.author}</h4>
                      <p className="text-white/60 text-sm">{testimonial.role}</p>
                      <p className="text-blue-300 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
