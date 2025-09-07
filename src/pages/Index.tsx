import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Parallax scroll effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-element');
      
      parallaxElements.forEach((element) => {
        const speed = element.getAttribute('data-speed') || 0.5;
        const yPos = -(scrolled * Number(speed));
        (element as HTMLElement).style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
    };

    // Add scroll event listener for parallax
    window.addEventListener('scroll', handleScroll);
    
    // Enhanced scroll reveal observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-float-up');
        }
      });
    }, observerOptions);

    // Observe all elements with scroll-reveal class
    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach((el) => observer.observe(el));

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* SEO Meta Tags */}
      <div style={{ display: 'none' }}>
        <h1>Yatnesh Agarwal - Portfolio</h1>
        <meta name="keywords" content="Yatnesh Agarwal, Portfolio, Graphic Designer, Video Editor, CS AI Student, Newton School Technology, Creative Designer, Developer" />
      </div>

      {/* Fixed Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        {/* Hero Section with Particle Effects */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Skills Section with 3D Interactive Elements */}
        <SkillsSection />

        {/* Projects Showcase */}
        <ProjectsSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button for Quick Contact */}
      <div className="fixed bottom-8 right-8 z-40">
        <button className="w-14 h-14 bg-gradient-neon rounded-full flex items-center justify-center
                         shadow-cyber hover:shadow-glow-primary transition-all duration-300
                         animate-cyber-pulse group">
          <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" 
               fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      </div>

      {/* Custom Cursor Effect (Desktop) */}
      <div className="hidden lg:block fixed top-0 left-0 w-6 h-6 bg-primary/30 rounded-full 
                     pointer-events-none z-50 mix-blend-difference transition-transform duration-100
                     animate-pulse" 
           id="custom-cursor"></div>

      {/* Background Ambient Animation */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping opacity-20"
             style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-secondary rounded-full animate-ping opacity-20"
             style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-accent rounded-full animate-ping opacity-20"
             style={{ animationDelay: '4s' }}></div>
      </div>
    </div>
  );
};

export default Index;
