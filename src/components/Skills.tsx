
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
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Bootstrap", level: 85 },
        { name: "Responsive Design", level: 90 }
      ],
      icon: "🎨"
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "Python", level: 75 },
        { name: "Java", level: 70 },
        { name: "C++", level: 65 }
      ],
      icon: "💻"
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "Figma", level: 80 },
        { name: "Chrome DevTools", level: 85 },
        { name: "npm/yarn", level: 80 }
      ],
      icon: "🛠️"
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Problem Solving", level: 88 },
        { name: "Quick Learning", level: 92 },
        { name: "Team Collaboration", level: 85 },
        { name: "Communication", level: 80 },
        { name: "Time Management", level: 85 }
      ],
      icon: "🤝"
    }
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-gray-900/50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 animate-fade-in">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="section-divider mx-auto mb-8 w-32"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-in-left">
            Technologies and skills I've learned and practiced as a passionate fresher
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`hover-lift glass-effect border-yellow-400/30 bg-black/40 backdrop-blur-lg transition-all duration-700 ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{category.icon}</div>
                <CardTitle className="text-xl gradient-text">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Badge 
                          variant="secondary"
                          className="bg-yellow-400/20 text-yellow-400 border-yellow-400/50 hover:bg-yellow-400/30 transition-colors cursor-pointer"
                        >
                          {skill.name}
                        </Badge>
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className={`skill-bar h-2 rounded-full transition-all duration-1000 ${
                            isVisible ? '' : 'w-0'
                          }`}
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(index * 0.2) + (skillIndex * 0.1)}s`
                          }}
                        />
                      </div>
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
