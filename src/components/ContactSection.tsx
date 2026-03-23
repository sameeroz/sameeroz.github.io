import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Linkedin, Github, MapPin, Phone, Send, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "gdrboy11@gmail.com",
    link: "mailto:gdrboy11@gmail.com",
    accent: "from-violet-500 to-purple-600",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+967 775 657 990",
    link: "tel:+967775657990",
    accent: "from-cyan-500 to-blue-600",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Sana'a, Yemen",
    link: null,
    accent: "from-emerald-500 to-teal-600",
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sameer-anwar-a8b1b5225/",
    color: "hover:bg-blue-600/20 hover:text-blue-400 hover:border-blue-500/30",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/sameeroz",
    color: "hover:bg-white/10 hover:text-white hover:border-white/20",
  },
];

const ContactSection = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="contact" ref={ref} className="section-padding relative">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient-primary">Let's Build Together</span>
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            Ready to bring AI into your business? I'm always excited to
            collaborate on innovative projects that push boundaries.
          </p>
        </div>

        {/* Main CTA */}
        <div
          className={`text-center mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <a
            href="mailto:gdrboy11@gmail.com"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white text-xl font-bold shadow-2xl shadow-violet-500/20 hover:shadow-violet-500/40 transition-all duration-300 hover:scale-[1.03] group"
          >
            <Send
              size={22}
              className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
            />
            Start a Conversation
            <ArrowUpRight
              size={18}
              className="opacity-50 group-hover:opacity-100 transition-opacity"
            />
          </a>
        </div>

        {/* Contact info grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {contactLinks.map((info, index) => (
            <div
              key={info.label}
              className={`transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              {info.link ? (
                <a
                  href={info.link}
                  className="glass-card glass-card-hover glow-border rounded-2xl p-6 flex flex-col items-center text-center group transition-all duration-500 block"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.accent} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                    style={{
                      background: `linear-gradient(135deg, var(--tw-gradient-from) / 0.2, var(--tw-gradient-to) / 0.2)`,
                    }}
                  >
                    <info.icon size={20} className="text-white/80" />
                  </div>
                  <p className="text-xs text-white/40 mb-1">{info.label}</p>
                  <p className="text-white/80 font-medium text-sm group-hover:text-white transition-colors">
                    {info.value}
                  </p>
                </a>
              ) : (
                <div className="glass-card rounded-2xl p-6 flex flex-col items-center text-center">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.accent} flex items-center justify-center mb-3`}
                    style={{
                      background: `linear-gradient(135deg, var(--tw-gradient-from) / 0.2, var(--tw-gradient-to) / 0.2)`,
                    }}
                  >
                    <info.icon size={20} className="text-white/80" />
                  </div>
                  <p className="text-xs text-white/40 mb-1">{info.label}</p>
                  <p className="text-white/80 font-medium text-sm">
                    {info.value}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Social links */}
        <div
          className={`flex justify-center gap-4 transition-all duration-1000 delay-900 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-14 h-14 rounded-2xl glass-card border border-white/8 flex items-center justify-center text-white/50 transition-all duration-300 hover:scale-110 ${social.color}`}
            >
              <social.icon size={22} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
