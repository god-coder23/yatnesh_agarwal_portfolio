import { useEffect, useRef, useState } from "react";
import { Monitor, Film, Palette, Code, Camera, Zap } from "lucide-react";

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = [
    {
      id: "graphic-design",
      name: "Graphic Design",
      icon: Palette,
      level: 95,
      description: "Creating stunning visual identities and brand experiences",
      color: "from-pink-500 to-purple-600"
    },
    {
      id: "video-editing",
      name: "Video Editing",
      icon: Film,
      level: 90,
      description: "Crafting cinematic stories with professional video editing",
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: "final-cut-pro",
      name: "Final Cut Pro",
      icon: Monitor,
      level: 88,
      description: "Advanced video production and post-processing workflows",
      color: "from-green-500 to-emerald-600"
    },
    {
      id: "photoshop",
      name: "Adobe Photoshop",
      icon: Camera,
      level: 92,
      description: "Digital art creation and photo manipulation mastery",
      color: "from-orange-500 to-red-600"
    },
    {
      id: "coding",
      name: "Programming",
      icon: Code,
      level: 85,
      description: "Full-stack development with modern technologies",
      color: "from-indigo-500 to-blue-600"
    },
    {
      id: "ai-ml",
      name: "AI & Machine Learning",
      icon: Zap,
      level: 80,
      description: "Building intelligent systems and neural networks",
      color: "from-yellow-500 to-orange-600"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.scroll-reveal');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('revealed');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-32 relative overflow-hidden bg-gradient-to-b from-background to-background/80">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 grid-rows-8 h-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="border border-primary animate-pulse" 
                 style={{ animationDelay: `${(i * 0.1) % 3}s` }} />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 scroll-reveal">
          <h2 className="font-orbitron font-bold text-5xl md:text-6xl mb-6">
            <span className="neon-text">MY</span> <span className="text-secondary">SKILLS</span>
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
            Mastery across multiple disciplines - from creative design to cutting-edge technology
          </p>
          <div className="w-32 h-1 bg-gradient-neon mx-auto rounded-full mt-6"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.id}
                className="scroll-reveal group"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredSkill(skill.id)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="glass-morphism p-8 rounded-2xl card-3d relative overflow-hidden
                               hover:shadow-cyber transition-all duration-500 h-full">
                  
                  {/* Hover Glow Effect */}
                  {hoveredSkill === skill.id && (
                    <div className="absolute inset-0 bg-gradient-neon opacity-5 animate-pulse"></div>
                  )}

                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${skill.color} 
                                   flex items-center justify-center mb-4 mx-auto
                                   transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12
                                   ${hoveredSkill === skill.id ? 'animate-cyber-pulse shadow-glow-primary' : ''}`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    
                    {/* Floating Particles */}
                    {hoveredSkill === skill.id && (
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                        <div className="w-1 h-1 bg-secondary rounded-full animate-bounce ml-6 -mt-1"
                             style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce -ml-4 -mt-1"
                             style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    )}
                  </div>

                  {/* Skill Info */}
                  <div className="text-center">
                    <h3 className="font-orbitron font-bold text-xl mb-3 text-foreground
                                   group-hover:text-primary transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                      {skill.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-muted-foreground">Proficiency</span>
                        <span className="text-sm font-bold text-primary">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted/20 rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-neon rounded-full transition-all duration-1000 ease-out
                                     animate-hologram"
                          style={{ 
                            width: hoveredSkill === skill.id || sectionRef.current ? `${skill.level}%` : '0%',
                            transitionDelay: `${index * 0.2}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Corner Decorations */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/30 
                                  group-hover:border-primary transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-secondary/30 
                                  group-hover:border-secondary transition-colors duration-300"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 scroll-reveal">
          <p className="font-inter text-lg text-muted-foreground mb-8">
            Ready to bring your ideas to life with these skills?
          </p>
          <button className="btn-holographic ripple">
            LET'S COLLABORATE
          </button>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;