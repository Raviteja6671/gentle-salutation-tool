
import { Card, CardContent } from "@/components/ui/card";
import { Code, Lightbulb, Users, Target } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Proficient in modern programming languages and frameworks"
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Creative approach to complex challenges and innovative solutions"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Strong communication skills and team-oriented mindset"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering high-quality results on time"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a dedicated software developer with a passion for creating efficient, 
            scalable, and user-friendly applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              As a Full Stack Developer, I bring a comprehensive understanding of both 
              front-end and back-end technologies. My journey in software development 
              has equipped me with the skills to build complete web applications from 
              conception to deployment.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about writing clean, maintainable code and staying up-to-date 
              with the latest industry trends and best practices. My goal is to create 
              solutions that not only meet technical requirements but also provide 
              exceptional user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center space-y-3">
                  <item.icon className="h-8 w-8 text-primary mx-auto" />
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
