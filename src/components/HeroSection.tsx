
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Play } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Video placeholder */}
        <div className={`mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
          <div className="relative w-32 h-32 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse"></div>
            <div className="absolute inset-1 rounded-full bg-slate-800 flex items-center justify-center group cursor-pointer hover:scale-105 transition-transform duration-300">
              <Play className="text-white/80 group-hover:text-white transition-colors" size={24} />
            </div>
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-lg"></div>
          </div>
          <p className="text-sm text-white/60">👋 Click to watch my intro</p>
        </div>

        {/* Main heading */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              AI Engineer
            </span>
            <br />
            <span className="text-white/90">
              Building Intelligence
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">
            Specializing in <span className="text-purple-300 font-semibold">RAG systems</span>, 
            <span className="text-blue-300 font-semibold"> LLM integration</span>, and 
            <span className="text-indigo-300 font-semibold"> AI agents</span> that solve real-world problems
          </p>
        </div>

        {/* CTA Buttons */}
        <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white border-0 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Let's Work Together
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-8 py-6 text-lg rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              View My Work
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="animate-bounce">
            <ArrowDown className="text-white/40" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
