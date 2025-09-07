import { useEffect, useState } from "react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center particle-field overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-background/40 backdrop-blur-sm" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-primary/20 h-full animate-pulse" 
                 style={{ animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
        }`}>
          {/* Glitch Name Animation */}
          <h1 className="glitch font-orbitron font-black text-6xl md:text-8xl lg:text-9xl mb-6"
              data-text="YATNESH AGARWAL">
            <span className="neon-text animate-cyber-pulse">YATNESH</span>
            <br />
            <span className="text-secondary animate-hologram">AGARWAL</span>
          </h1>
          
          {/* Animated Subtitle */}
          <div className="space-y-4 mb-12">
            <p className="font-inter text-xl md:text-2xl text-muted-foreground animate-float-up"
               style={{ animationDelay: '0.5s' }}>
              B.Tech CS & AI Student
            </p>
            <p className="font-inter text-lg md:text-xl text-accent animate-float-up"
               style={{ animationDelay: '0.7s' }}>
              Newton School of Technology × Ajeenkya D Y Patil University
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg animate-float-up"
                 style={{ animationDelay: '0.9s' }}>
              <span className="px-4 py-2 glass-morphism rounded-full">Graphic Designer</span>
              <span className="px-4 py-2 glass-morphism rounded-full">Video Editor</span>
              <span className="px-4 py-2 glass-morphism rounded-full">Developer</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-float-up"
               style={{ animationDelay: '1.1s' }}>
            <button className="btn-holographic ripple">
              EXPLORE MY WORK
            </button>
            <button className="glass-morphism px-8 py-4 rounded-xl font-semibold hover:shadow-glow-primary transition-all duration-300">
              GET IN TOUCH
            </button>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-cyber-pulse"></div>
          </div>
        </div>
      </div>

      {/* Floating 3D Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-accent/30 rounded-lg rotate-45 animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-16 h-16 border border-secondary/30 rounded-full animate-hologram"></div>
      <div className="absolute top-1/2 right-10 w-12 h-12 bg-gradient-neon rounded-full animate-cyber-pulse"></div>
    </section>
  );
};

export default HeroSection;