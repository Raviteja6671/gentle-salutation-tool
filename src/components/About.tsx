
import { Card, CardContent } from "@/components/ui/card";
import { Code, Lightbulb, Users, Target } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export const About = () => {
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

  const highlights = [
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Proficient in modern programming languages and frameworks with 3+ years of experience",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Creative approach to complex challenges and innovative solutions that drive business growth",
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Strong communication skills and team-oriented mindset with leadership experience",
      color: "from-green-400 to-blue-500"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering high-quality results on time with attention to detail",
      color: "from-pink-400 to-red-500"
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "3+", label: "Years Experience" },
    { number: "15+", label: "Technologies Mastered" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 animate-fade-in">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="section-divider mx-auto mb-6 w-24"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-in-left">
            I'm a dedicated software developer with a passion for creating efficient, 
            scalable, and user-friendly applications.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center transition-all duration-700 ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                As a <span className="text-primary font-semibold">Full Stack Developer</span>, I bring a comprehensive understanding of both 
                front-end and back-end technologies. My journey in software development 
                has equipped me with the skills to build complete web applications from 
                conception to deployment.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm passionate about writing <span className="text-primary font-semibold">clean, maintainable code</span> and staying up-to-date 
                with the latest industry trends and best practices. My goal is to create 
                solutions that not only meet technical requirements but also provide 
                exceptional user experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, I enjoy contributing to open-source projects, 
                learning new technologies, and sharing knowledge with the developer community.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-in-right">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className={`hover-lift glass-effect border-border/50 group transition-all duration-700 ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
