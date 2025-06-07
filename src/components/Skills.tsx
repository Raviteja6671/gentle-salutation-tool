
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect, useRef } from "react";

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "HTML5", level: 98 },
        { name: "CSS3", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Bootstrap", level: 85 },
        { name: "Vue.js", level: 75 }
      ],
      icon: "🎨"
    },
    {
      title: "Backend Technologies",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 82 },
        { name: "Java", level: 78 },
        { name: "Express.js", level: 90 },
        { name: "Django", level: 75 },
        { name: "Spring Boot", level: 70 },
        { name: "REST APIs", level: 92 },
        { name: "GraphQL", level: 80 }
      ],
      icon: "⚙️"
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 82 },
        { name: "MongoDB", level: 88 },
        { name: "Redis", level: 75 },
        { name: "Firebase", level: 80 },
        { name: "Supabase", level: 78 }
      ],
      icon: "🗄️"
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 95 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Linux", level: 85 },
        { name: "Postman", level: 90 },
        { name: "Jenkins", level: 70 },
        { name: "Webpack", level: 78 },
        { name: "Vite", level: 88 }
      ],
      icon: "🛠️"
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "Python", level: 82 },
        { name: "Java", level: 78 },
        { name: "C++", level: 75 },
        { name: "SQL", level: 88 }
      ],
      icon: "💻"
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Problem Solving", level: 92 },
        { name: "Team Leadership", level: 85 },
        { name: "Project Management", level: 80 },
        { name: "Communication", level: 88 },
        { name: "Agile Methodology", level: 85 }
      ],
      icon: "🤝"
    }
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 animate-fade-in">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="section-divider mx-auto mb-6 w-24"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-in-left">
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`hover-lift glass-effect border-border/50 transition-all duration-700 ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="text-3xl mb-2">{category.icon}</div>
                <CardTitle className="text-lg gradient-text">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Badge 
                          variant="secondary"
                          className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                        >
                          {skill.name}
                        </Badge>
                        {typeof skill === 'object' && skill.level && (
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        )}
                      </div>
                      {typeof skill === 'object' && skill.level && (
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div 
                            className={`skill-bar h-2 rounded-full transition-all duration-1000 ${
                              isVisible ? '' : 'w-0'
                            }`}
                            style={{ 
                              width: isVisible ? `${skill.level}%` : '0%',
                              transitionDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`
                            }}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
