import { useEffect, useRef, useState } from "react";
import { Mail, MessageCircle, Youtube, Linkedin, Send, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 border border-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 border border-secondary/20 rounded-lg rotate-12 animate-hologram"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-64 h-64 bg-gradient-neon rounded-full opacity-10 animate-cyber-pulse blur-xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 scroll-reveal">
          <h2 className="font-orbitron font-bold text-5xl md:text-6xl mb-6">
            <span className="neon-text">GET IN</span> <span className="text-secondary">TOUCH</span>
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on something extraordinary? Let's create the future together.
          </p>
          <div className="w-32 h-1 bg-gradient-neon mx-auto rounded-full mt-6"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              {/* Quick Contact */}
              <div className="scroll-reveal">
                <div className="glass-morphism p-8 rounded-2xl card-3d">
                  <h3 className="font-orbitron font-bold text-2xl mb-6 text-primary">
                    Let's Connect
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full 
                                     flex items-center justify-center group-hover:shadow-glow-primary 
                                     transition-all duration-300">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Email</p>
                        <p className="text-muted-foreground text-sm">yatnesh@example.com</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full 
                                     flex items-center justify-center group-hover:shadow-glow-secondary 
                                     transition-all duration-300">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Location</p>
                        <p className="text-muted-foreground text-sm">India</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-full 
                                     flex items-center justify-center group-hover:shadow-glow-accent 
                                     transition-all duration-300">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Response Time</p>
                        <p className="text-muted-foreground text-sm">Within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="scroll-reveal">
                <div className="glass-morphism p-8 rounded-2xl card-3d">
                  <h3 className="font-orbitron font-bold text-xl mb-6 text-secondary">
                    Follow My Journey
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <button className="flex items-center justify-center space-x-3 p-4 glass-morphism 
                                     rounded-xl hover:shadow-glow-primary transition-all duration-300 ripple group">
                      <Youtube className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                      <span className="font-semibold text-sm">YouTube</span>
                    </button>
                    
                    <button className="flex items-center justify-center space-x-3 p-4 glass-morphism 
                                     rounded-xl hover:shadow-glow-secondary transition-all duration-300 ripple group">
                      <Linkedin className="w-6 h-6 text-secondary group-hover:text-white transition-colors" />
                      <span className="font-semibold text-sm">LinkedIn</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 scroll-reveal">
              <div className="glass-morphism p-8 rounded-2xl card-3d">
                <h3 className="font-orbitron font-bold text-2xl mb-8 text-center">
                  <span className="text-accent">Start a</span> <span className="text-primary">Conversation</span>
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-foreground">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 glass-morphism rounded-xl bg-transparent 
                                 border border-primary/20 focus:border-primary focus:outline-none 
                                 focus:shadow-glow-primary transition-all duration-300 text-foreground"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-foreground">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 glass-morphism rounded-xl bg-transparent 
                                 border border-primary/20 focus:border-primary focus:outline-none 
                                 focus:shadow-glow-primary transition-all duration-300 text-foreground"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-foreground">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 glass-morphism rounded-xl bg-transparent 
                               border border-primary/20 focus:border-primary focus:outline-none 
                               focus:shadow-glow-primary transition-all duration-300 text-foreground"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-foreground">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 glass-morphism rounded-xl bg-transparent 
                               border border-primary/20 focus:border-primary focus:outline-none 
                               focus:shadow-glow-primary transition-all duration-300 resize-none text-foreground"
                      placeholder="Tell me about your project or idea..."
                    ></textarea>
                  </div>

                  <div className="flex items-center justify-center pt-4">
                    <button
                      type="submit"
                      className="btn-holographic ripple flex items-center space-x-3 px-8 py-4"
                    >
                      <Send className="w-5 h-5" />
                      <span>SEND MESSAGE</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20 scroll-reveal">
            <div className="glass-morphism p-8 rounded-2xl max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="font-orbitron font-bold text-2xl mb-4">
                    <span className="neon-text">Ready to create</span> <span className="text-secondary">something amazing?</span>
                  </h3>
                  <p className="text-muted-foreground">
                    Whether it's a design project, video production, or innovative development, 
                    let's bring your vision to life with cutting-edge creativity and technology.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn-holographic ripple w-full sm:w-auto">
                    START PROJECT
                  </button>
                  <button className="glass-morphism px-6 py-3 rounded-xl font-semibold 
                                   hover:shadow-glow-accent transition-all duration-300 w-full sm:w-auto">
                    <MessageCircle className="w-5 h-5 inline mr-2" />
                    Quick Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;