import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'glass-morphism' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-orbitron font-bold text-xl neon-text">
            YATNESH.DEV
          </div>
          
          <div className="hidden md:flex space-x-8">
            {[
              { label: "HOME", id: "hero" },
              { label: "ABOUT", id: "about" },
              { label: "SKILLS", id: "skills" },
              { label: "PROJECTS", id: "projects" },
              { label: "CONTACT", id: "contact" }
            ].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="font-inter font-medium text-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-neon transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button className="btn-holographic text-sm px-6 py-2">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;