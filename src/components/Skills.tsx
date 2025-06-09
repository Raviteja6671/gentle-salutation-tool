
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["HTML", "CSS", "JavaScript", "Python", "Bootstrap"],
      icon: "P",
      bgColor: "bg-primary"
    },
    {
      title: "Database",
      skills: ["MySQL", "SQL"],
      icon: "D",
      bgColor: "bg-primary"
    },
    {
      title: "Version Control",
      skills: ["GitHub", "Git"],
      icon: "V",
      bgColor: "bg-primary"
    },
    {
      title: "Others",
      skills: ["Communication", "Problem-Solving", "Time Management", "Active Listening", "Punctuality", "Patience"],
      icon: "O",
      bgColor: "bg-primary"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Technical Skills
          </h2>
          <div className="w-32 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card border-border">
              <CardHeader className="text-center pb-4">
                <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-primary-foreground text-xl font-bold">{category.icon}</span>
                </div>
                <CardTitle className="text-lg text-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-secondary text-secondary-foreground border-border"
                    >
                      {skill}
                    </Badge>
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
