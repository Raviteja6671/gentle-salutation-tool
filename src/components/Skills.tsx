
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Vue.js"]
    },
    {
      title: "Backend Technologies",
      skills: ["Node.js", "Python", "Java", "Express.js", "Django", "Spring Boot", "REST APIs", "GraphQL"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase", "Supabase"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "Linux", "Postman", "Jenkins", "Webpack", "Vite"]
    },
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"]
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Team Leadership", "Project Management", "Communication", "Agile Methodology"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-center">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
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
