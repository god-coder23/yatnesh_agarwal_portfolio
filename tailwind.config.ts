import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'monospace'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        glass: "hsl(var(--glass))",
      },
      backgroundImage: {
        'gradient-neon': 'var(--gradient-neon)',
        'gradient-cyber': 'var(--gradient-cyber)',
        'gradient-glass': 'var(--gradient-glass)',
      },
      boxShadow: {
        'cyber': 'var(--shadow-cyber)',
        'glass': 'var(--shadow-glass)',
        'glow-primary': 'var(--glow-primary)',
        'glow-secondary': 'var(--glow-secondary)',
        'glow-accent': 'var(--glow-accent)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float-up": "float-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "cyber-pulse": "cyber-pulse 2s ease-in-out infinite",
        "hologram": "hologram 3s ease-in-out infinite",
        "particle-float": "particle-float 20s linear infinite",
        "glitch-1": "glitch-1 0.5s infinite",
        "glitch-2": "glitch-2 0.5s infinite",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "cyber-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(195 100% 50% / 0.5)" },
          "50%": { boxShadow: "0 0 40px hsl(195 100% 50% / 0.8), 0 0 60px hsl(270 100% 50% / 0.3)" },
        },
        "hologram": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        "particle-float": {
          "0%": { transform: "translateY(0px) translateX(0px)" },
          "33%": { transform: "translateY(-10px) translateX(10px)" },
          "66%": { transform: "translateY(5px) translateX(-5px)" },
          "100%": { transform: "translateY(0px) translateX(0px)" },
        },
        "glitch-1": {
          "0%, 14%, 15%, 49%, 50%, 99%, 100%": { transform: "translate(0)" },
          "15%, 49%": { transform: "translate(-2px, -1px)" },
        },
        "glitch-2": {
          "0%, 20%, 21%, 62%, 63%, 99%, 100%": { transform: "translate(0)" },
          "21%, 62%": { transform: "translate(2px, 1px)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
