
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
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

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gdrboy11@gmail.com",
      link: "mailto:gdrboy11@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+967 775657990",
      link: "tel:+967775657990"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "16 Street, Bait Miyad",
      link: null
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/sameer-anwar-a8b1b5225/"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
            Ready to build something extraordinary? I'm always excited to collaborate on innovative AI projects that push boundaries and solve real problems.
          </p>
        </div>

        {/* Main CTA */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-600 hover:to-blue-500 text-white border-0 px-12 py-8 text-2xl font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 transform"
          >
            <a href="mailto:gdrboy11@gmail.com" className="flex items-center space-x-3">
              <Mail size={28} />
              <span>Start a Conversation</span>
            </a>
          </Button>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 delay-${(index + 1) * 200} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <Card className="backdrop-blur-md bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
                {info.link ? (
                  <a href={info.link} className="flex items-center space-x-4 text-white/80 hover:text-white transition-colors duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">{info.label}</p>
                      <p className="font-semibold">{info.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center space-x-4 text-white/80">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl flex items-center justify-center">
                      <info.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">{info.label}</p>
                      <p className="font-semibold">{info.value}</p>
                    </div>
                  </div>
                )}
              </Card>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className={`text-center transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className="text-white/60 mb-6">Or find me on</p>
          <div className="flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/sameer-anwar-a8b1b5225/" className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 group">
              <Linkedin size={24} className="text-white group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="https://github.com/sameeroz" className="w-14 h-14 bg-gradient-to-r from-slate-700 to-slate-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 group">
              <Github size={24} className="text-white group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
