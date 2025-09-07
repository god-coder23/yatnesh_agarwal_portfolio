import { Heart, Youtube, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 border-t border-primary/10 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-secondary/30 rounded-lg rotate-45 animate-hologram"></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="font-orbitron font-bold text-2xl neon-text mb-4">
              YATNESH.DEV
            </div>
            <p className="text-muted-foreground">
              Crafting the future through design, technology, and creative vision.
            </p>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
            <div className="flex justify-center space-x-6">
              <button className="w-12 h-12 glass-morphism rounded-full flex items-center justify-center
                               hover:shadow-glow-primary transition-all duration-300 ripple group">
                <Youtube className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </button>
              <button className="w-12 h-12 glass-morphism rounded-full flex items-center justify-center
                               hover:shadow-glow-secondary transition-all duration-300 ripple group">
                <Linkedin className="w-6 h-6 text-secondary group-hover:text-white transition-colors" />
              </button>
              <button className="w-12 h-12 glass-morphism rounded-full flex items-center justify-center
                               hover:shadow-glow-accent transition-all duration-300 ripple group">
                <Mail className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
              </button>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-end">
              © {currentYear} Made with <Heart className="w-4 h-4 mx-1 text-primary animate-pulse" /> by Yatnesh Agarwal
            </p>
            <div className="mt-2 text-xs text-muted-foreground/60">
              Powered by the future of web design
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-12 pt-8 border-t border-primary/10 text-center">
          <div className="w-32 h-0.5 bg-gradient-neon mx-auto animate-hologram"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;