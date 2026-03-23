import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GraduationCap, Award, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const EducationSection = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Background
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">
              Education & Certifications
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Education */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="glass-card glass-card-hover glow-border rounded-2xl p-8 h-full group transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center">
                  <GraduationCap size={24} className="text-violet-400" />
                </div>
                <h3 className="font-bold text-white text-lg">Education</h3>
              </div>

              <div className="space-y-6">
                <div className="border-l-2 border-violet-500/30 pl-5">
                  <h4 className="text-white font-semibold">
                    B.Sc. in Computer Science
                  </h4>
                  <p className="text-white/50 text-sm mt-1">
                    International University of TwinTech
                  </p>
                  <p className="text-white/40 text-xs mt-1">
                    Oct 2020 – May 2024
                  </p>
                  <Badge className="mt-2 bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-xs">
                    GPA: 3.95 / 4.0
                  </Badge>
                </div>
                <div className="border-l-2 border-cyan-500/30 pl-5">
                  <h4 className="text-white font-semibold">
                    High School — GCSE
                  </h4>
                  <p className="text-white/50 text-sm mt-1">
                    Euro School · Scientific Stream, English Section
                  </p>
                  <p className="text-white/40 text-xs mt-1">
                    Graduated 2018
                  </p>
                  <Badge className="mt-2 bg-cyan-500/10 text-cyan-400 border-cyan-500/20 text-xs">
                    GPA: 88.03%
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications & Activities */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="space-y-6">
              {/* Certifications */}
              <div className="glass-card glass-card-hover glow-border rounded-2xl p-8 group transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center">
                    <Award size={24} className="text-amber-400" />
                  </div>
                  <h3 className="font-bold text-white text-lg">
                    Certifications
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.02] hover:bg-white/5 transition-colors">
                    <span className="text-2xl">☁️</span>
                    <div>
                      <p className="text-white font-medium text-sm">
                        AWS Certified Cloud Practitioner
                      </p>
                      <p className="text-white/40 text-xs">June 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.02] hover:bg-white/5 transition-colors">
                    <span className="text-2xl">🎓</span>
                    <div>
                      <p className="text-white font-medium text-sm">
                        INJAZ Yemen Trainee
                      </p>
                      <p className="text-white/40 text-xs">
                        Jul 2022 – Oct 2022
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Leadership */}
              <div className="glass-card glass-card-hover glow-border rounded-2xl p-8 group transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <Users size={24} className="text-cyan-400" />
                  </div>
                  <h3 className="font-bold text-white text-lg">Leadership</h3>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.02] hover:bg-white/5 transition-colors">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <p className="text-white font-medium text-sm">
                      AWS Cloud Club Captain
                    </p>
                    <p className="text-white/40 text-xs">
                      Aug 2023 – Aug 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
