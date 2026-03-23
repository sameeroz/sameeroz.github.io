import { useState, useEffect } from "react";
import { Mail, Linkedin, Github, Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-nav shadow-lg shadow-black/20" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="relative group"
            >
              <span className="text-xl font-bold text-gradient-primary">
                SA
              </span>
              <span className="text-xl font-light text-white/80 ml-1">
                Sameer Anwar
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-violet-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === link.href.replace("#", "")
                      ? "text-white bg-white/10"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="w-px h-6 bg-white/10 mx-3" />
              <div className="flex items-center gap-1">
                <a
                  href="https://www.linkedin.com/in/sameer-anwar-a8b1b5225/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-all duration-300"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="https://github.com/sameeroz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-all duration-300"
                >
                  <Github size={16} />
                </a>
                <a
                  href="mailto:gdrboy11@gmail.com"
                  className="ml-2 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-violet-600 to-cyan-600 text-white hover:from-violet-500 hover:to-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/20"
                >
                  <span className="flex items-center gap-2">
                    <Mail size={14} />
                    Hire Me
                  </span>
                </a>
              </div>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-all"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          mobileOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-[72px] left-4 right-4 glass-card rounded-2xl p-4 transition-all duration-500 ${
            mobileOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-4 py-3 rounded-xl text-left text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-white bg-white/10"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="h-px bg-white/10 my-2" />
            <div className="flex items-center gap-2 px-4 py-2">
              <a
                href="https://www.linkedin.com/in/sameer-anwar-a8b1b5225/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/sameeroz"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-all"
              >
                <Github size={18} />
              </a>
              <a
                href="mailto:gdrboy11@gmail.com"
                className="ml-auto px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-violet-600 to-cyan-600 text-white"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
