// import { useEffect, useRef, useState } from "react";
// import { ExternalLink, Play, Github } from "lucide-react";

// const ProjectsSection = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const [hoveredProject, setHoveredProject] = useState<string | null>(null);

//   const projects = [
//     {
//       id: "youtube-channel",
//       title: "Creative YouTube Content",
//       category: "Video Production",
//       description: "Engaging video content creation with professional editing, storytelling, and visual effects.",
//       tags: ["Final Cut Pro", "Motion Graphics", "Storytelling"],
//       image: "/placeholder.svg",
//       links: {
//         youtube: "#",
//         external: "#"
//       }
//     },
//     {
//       id: "brand-design",
//       title: "Brand Identity Design",
//       category: "Graphic Design",
//       description: "Complete brand identity packages including logos, color schemes, and visual guidelines.",
//       tags: ["Adobe Photoshop", "Brand Strategy", "Visual Identity"],
//       image: "/placeholder.svg",
//       links: {
//         behance: "#",
//         external: "#"
//       }
//     },
//     {
//       id: "ai-project",
//       title: "AI-Powered Application",
//       category: "Development",
//       description: "Cutting-edge AI application leveraging machine learning for innovative solutions.",
//       tags: ["Python", "Machine Learning", "AI/ML"],
//       image: "/placeholder.svg",
//       links: {
//         github: "#",
//         external: "#"
//       }
//     },
//     {
//       id: "motion-graphics",
//       title: "Motion Graphics Portfolio",
//       category: "Animation",
//       description: "Dynamic motion graphics and animations for various digital platforms and campaigns.",
//       tags: ["After Effects", "Motion Design", "Animation"],
//       image: "/placeholder.svg",
//       links: {
//         youtube: "#",
//         external: "#"
//       }
//     },
//     {
//       id: "web-app",
//       title: "Modern Web Application",
//       category: "Full Stack",
//       description: "Responsive web application with modern UI/UX and robust backend architecture.",
//       tags: ["React", "TypeScript", "Node.js"],
//       image: "/placeholder.svg",
//       links: {
//         github: "#",
//         external: "#"
//       }
//     },
//     {
//       id: "video-series",
//       title: "Educational Video Series",
//       category: "Content Creation",
//       description: "Comprehensive educational content with high production value and engaging presentation.",
//       tags: ["Education", "Video Editing", "Content Strategy"],
//       image: "/placeholder.svg",
//       links: {
//         youtube: "#",
//         external: "#"
//       }
//     }
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const elements = entry.target.querySelectorAll('.scroll-reveal');
//             elements.forEach((el, index) => {
//               setTimeout(() => {
//                 el.classList.add('revealed');
//               }, index * 100);
//             });
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section id="projects" ref={sectionRef} className="py-32 relative overflow-hidden">
//       {/* Floating Background Elements */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-1/4 left-10 w-64 h-64 border-2 border-primary rounded-full animate-pulse"></div>
//         <div className="absolute bottom-1/4 right-10 w-48 h-48 border-2 border-secondary rounded-lg rotate-45 animate-hologram"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-neon rounded-full opacity-20 animate-cyber-pulse"></div>
//       </div>

//       <div className="container mx-auto px-6">
//         {/* Section Header */}
//         <div className="text-center mb-20 scroll-reveal">
//           <h2 className="font-orbitron font-bold text-5xl md:text-6xl mb-6">
//             <span className="neon-text">MY</span> <span className="text-secondary">PROJECTS</span>
//           </h2>
//           <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
//             A showcase of creative works spanning design, development, and multimedia production
//           </p>
//           <div className="w-32 h-1 bg-gradient-neon mx-auto rounded-full mt-6"></div>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {projects.map((project, index) => (
//             <div
//               key={project.id}
//               className="scroll-reveal group"
//               style={{ animationDelay: `${index * 0.1}s` }}
//               onMouseEnter={() => setHoveredProject(project.id)}
//               onMouseLeave={() => setHoveredProject(null)}
//             >
//               <div className="glass-morphism rounded-2xl overflow-hidden card-3d h-full
//                              hover:shadow-cyber transition-all duration-500 group relative">
                
//                 {/* Project Image */}
//                 <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary/20 to-secondary/20">
//                   <img 
//                     src={project.image} 
//                     alt={project.title}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
                  
//                   {/* Hover Overlay */}
//                   {hoveredProject === project.id && (
//                     <div className="absolute inset-0 bg-gradient-neon/20 flex items-center justify-center
//                                    animate-pulse">
//                       <Play className="w-12 h-12 text-white animate-bounce" />
//                     </div>
//                   )}

//                   {/* Category Badge */}
//                   <div className="absolute top-4 left-4 px-3 py-1 glass-morphism rounded-full text-xs 
//                                  font-semibold text-primary">
//                     {project.category}
//                   </div>
//                 </div>

//                 {/* Project Content */}
//                 <div className="p-6">
//                   <h3 className="font-orbitron font-bold text-xl mb-3 text-foreground 
//                                group-hover:text-primary transition-colors duration-300">
//                     {project.title}
//                   </h3>
                  
//                   <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
//                     {project.description}
//                   </p>

//                   {/* Tags */}
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {project.tags.map((tag) => (
//                       <span key={tag} className="px-2 py-1 text-xs glass-morphism rounded-md
//                                                hover:shadow-glow-accent transition-all duration-300">
//                         {tag}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Action Buttons */}
//                   <div className="flex items-center justify-between">
//                     <div className="flex space-x-3">
//                       {project.links.youtube && (
//                         <button className="w-10 h-10 glass-morphism rounded-full flex items-center justify-center
//                                          hover:shadow-glow-primary transition-all duration-300 ripple">
//                           <Play className="w-4 h-4" />
//                         </button>
//                       )}
//                       {project.links.github && (
//                         <button className="w-10 h-10 glass-morphism rounded-full flex items-center justify-center
//                                          hover:shadow-glow-secondary transition-all duration-300 ripple">
//                           <Github className="w-4 h-4" />
//                         </button>
//                       )}
//                       <button className="w-10 h-10 glass-morphism rounded-full flex items-center justify-center
//                                        hover:shadow-glow-accent transition-all duration-300 ripple">
//                         <ExternalLink className="w-4 h-4" />
//                       </button>
//                     </div>

//                     <button className="px-4 py-2 text-sm font-semibold text-primary 
//                                      hover:text-foreground transition-colors duration-300">
//                       View Details
//                     </button>
//                   </div>
//                 </div>

//                 {/* Glowing Border Effect */}
//                 {hoveredProject === project.id && (
//                   <div className="absolute inset-0 border-2 border-primary/50 rounded-2xl animate-pulse pointer-events-none"></div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom Section */}
//         <div className="text-center mt-20 scroll-reveal">
//           <div className="glass-morphism p-8 rounded-2xl max-w-2xl mx-auto">
//             <h3 className="font-orbitron font-bold text-2xl mb-4 text-primary">
//               Want to see more?
//             </h3>
//             <p className="text-muted-foreground mb-6">
//               Check out my complete portfolio on YouTube and other platforms for the full experience.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="btn-holographic ripple">
//                 VISIT YOUTUBE CHANNEL
//               </button>
//               <button className="glass-morphism px-6 py-3 rounded-xl font-semibold 
//                                hover:shadow-glow-secondary transition-all duration-300">
//                 View All Projects
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;
