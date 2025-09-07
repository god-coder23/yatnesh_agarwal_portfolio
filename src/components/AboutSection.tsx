import { useEffect, useRef } from "react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.scroll-reveal');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('revealed');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 border border-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-secondary/20 rounded-lg rotate-12 animate-hologram"></div>
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 scroll-reveal">
          <h2 className="font-orbitron font-bold text-5xl md:text-6xl mb-6">
            <span className="neon-text">ABOUT</span> <span className="text-secondary">ME</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-neon mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Profile */}
            <div className="scroll-reveal">
              <div className="glass-morphism p-8 rounded-2xl card-3d">
                <h3 className="font-orbitron font-bold text-2xl mb-6 text-primary">
                  Digital Creator & Innovator
                </h3>
                <p className="font-inter text-lg leading-relaxed mb-6 text-muted-foreground">
                  I'm a passionate B.Tech Computer Science & Artificial Intelligence student at 
                  Newton School of Technology in collaboration with Ajeenkya D Y Patil University. 
                  My journey combines technical excellence with creative vision.
                </p>
                <p className="font-inter text-lg leading-relaxed mb-8 text-muted-foreground">
                  As a multi-disciplinary creator, I specialize in graphic design, video editing, 
                  and cutting-edge development. I believe in pushing the boundaries of what's 
                  possible in digital experiences.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 glass-morphism rounded-xl">
                    <div className="font-orbitron font-bold text-3xl neon-text animate-cyber-pulse">50+</div>
                    <div className="font-inter text-sm text-muted-foreground">Projects Done</div>
                  </div>
                  <div className="text-center p-4 glass-morphism rounded-xl">
                    <div className="font-orbitron font-bold text-3xl text-secondary animate-hologram">3+</div>
                    <div className="font-inter text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Education Timeline */}
            <div className="scroll-reveal">
              <h3 className="font-orbitron font-bold text-2xl mb-8 text-center">
                <span className="text-accent">EDUCATION</span> TIMELINE
              </h3>
              
              <div className="space-y-8">
                {/* Current Education */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-neon rounded-full animate-cyber-pulse"></div>
                  <div className="absolute left-2 top-6 w-0.5 h-16 bg-primary/30"></div>
                  <div className="glass-morphism p-6 rounded-xl card-3d">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-orbitron font-bold text-xl text-primary">
                        B.Tech CS & AI
                      </h4>
                      <span className="text-sm text-accent">2022 - Present</span>
                    </div>
                    <p className="text-muted-foreground mb-2">
                      Newton School of Technology × Ajeenkya D Y Patil University
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Specialized in Computer Science and Artificial Intelligence with focus on 
                      modern development practices and machine learning.
                    </p>
                  </div>
                </div>

                {/* Skills Highlight */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-secondary to-accent rounded-full animate-hologram"></div>
                  <div className="glass-morphism p-6 rounded-xl card-3d">
                    <h4 className="font-orbitron font-bold text-xl text-secondary mb-4">
                      Creative Expertise
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "Graphic Design", "Video Editing", "Final Cut Pro", 
                        "Adobe Photoshop", "UI/UX Design", "Motion Graphics"
                      ].map((skill) => (
                        <span key={skill} className="px-3 py-1 text-sm glass-morphism rounded-full 
                               hover:shadow-glow-accent transition-all duration-300 cursor-default">
                          {skill}
                        </span>
                      ))}
                    </div>
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

export default AboutSection;