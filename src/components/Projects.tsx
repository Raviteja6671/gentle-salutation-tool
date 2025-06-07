
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Built with modern technologies for optimal performance and scalability.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT", "Docker"],
      githubUrl: "#",
      liveUrl: "#",
      features: ["User Authentication", "Payment Gateway", "Admin Panel", "Responsive Design", "Real-time Inventory"],
      image: "🛒",
      category: "Full Stack"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.",
      technologies: ["Vue.js", "Express.js", "PostgreSQL", "Socket.io", "Docker", "Redis"],
      githubUrl: "#",
      liveUrl: "#",
      features: ["Real-time Updates", "Team Collaboration", "File Uploads", "Progress Tracking", "Notifications"],
      image: "📋",
      category: "Web App"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that provides detailed weather information, forecasts, and location-based weather alerts with beautiful visualizations.",
      technologies: ["React", "TypeScript", "Weather API", "Chart.js", "Tailwind CSS", "PWA"],
      githubUrl: "#",
      liveUrl: "#",
      features: ["Location Detection", "Weather Forecasts", "Interactive Charts", "Weather Alerts", "Offline Support"],
      image: "🌤️",
      category: "Frontend"
    },
    {
      title: "AI Chat Application",
      description: "An intelligent chat application powered by AI with natural language processing, context awareness, and multi-language support.",
      technologies: ["React", "Python", "OpenAI API", "WebSocket", "FastAPI", "MongoDB"],
      githubUrl: "#",
      liveUrl: "#",
      features: ["AI-Powered Responses", "Real-time Chat", "Multi-language", "Context Awareness", "Voice Support"],
      image: "🤖",
      category: "AI/ML"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations, optimal performance, and SEO optimization.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite", "Vercel"],
      githubUrl: "#",
      liveUrl: "#",
      features: ["Responsive Design", "Smooth Animations", "SEO Optimized", "Fast Loading", "Contact Form"],
      image: "💼",
      category: "Portfolio"
    },
    {
      title: "Blockchain Voting System",
      description: "A secure and transparent voting system built on blockchain technology ensuring immutable records and voter privacy.",
      technologies: ["React", "Solidity", "Web3.js", "Ethereum", "MetaMask", "IPFS"],
      githubUrl: "#",
      liveUrl: "#",
      features: ["Blockchain Security", "Transparent Voting", "Smart Contracts", "Voter Privacy", "Immutable Records"],
      image: "🗳️",
      category: "Blockchain"
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-accent rounded-full filter blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 animate-fade-in">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-divider mx-auto mb-6 w-24"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-in-left">
            A showcase of my recent work and personal projects demonstrating various skills and technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`hover-lift glass-effect border-border/50 group overflow-hidden transition-all duration-700 ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <CardHeader className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{project.image}</div>
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl gradient-text group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {project.features.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.features.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>

                <div className={`flex gap-3 pt-4 transition-all duration-300 ${
                  hoveredProject === index ? 'opacity-100 transform translate-y-0' : 'opacity-70 transform translate-y-2'
                }`}>
                  <Button size="sm" variant="outline" className="flex items-center gap-2 hover-lift">
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="flex items-center gap-2 hover-lift">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="ghost" className="flex items-center gap-2 hover-lift">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="hover-lift">
            <Github className="mr-2 h-4 w-4" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};
