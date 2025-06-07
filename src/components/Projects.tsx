
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Built with modern technologies for optimal performance.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      githubUrl: "#",
      liveUrl: "#",
      features: ["User Authentication", "Payment Gateway", "Admin Panel", "Responsive Design"]
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.",
      technologies: ["Vue.js", "Express.js", "PostgreSQL", "Socket.io", "Docker"],
      githubUrl: "#",
      liveUrl: "#",
      features: ["Real-time Updates", "Team Collaboration", "File Uploads", "Progress Tracking"]
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that provides detailed weather information, forecasts, and location-based weather alerts.",
      technologies: ["React", "TypeScript", "Weather API", "Chart.js", "Tailwind CSS"],
      githubUrl: "#",
      liveUrl: "#",
      features: ["Location Detection", "Weather Forecasts", "Interactive Charts", "Weather Alerts"]
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and optimal performance.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
      githubUrl: "#",
      liveUrl: "#",
      features: ["Responsive Design", "Smooth Animations", "SEO Optimized", "Fast Loading"]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow group">
              <CardHeader>
                <CardTitle className="text-xl text-primary group-hover:text-primary/80 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button size="sm" variant="outline" className="flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
