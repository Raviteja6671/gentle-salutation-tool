
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      duration: "2023 - Present",
      description: [
        "Developed and maintained full-stack web applications using React, Node.js, and PostgreSQL",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Implemented responsive UI designs and optimized application performance",
        "Participated in code reviews and mentored junior developers"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "TypeScript", "AWS"]
    },
    {
      title: "Software Developer",
      company: "Digital Innovations Ltd.",
      location: "Hyderabad, India",
      duration: "2022 - 2023",
      description: [
        "Built scalable web applications using modern JavaScript frameworks",
        "Designed and implemented RESTful APIs for mobile and web applications",
        "Worked on database optimization and performance tuning",
        "Contributed to the development of microservices architecture"
      ],
      technologies: ["JavaScript", "Express.js", "MongoDB", "Docker", "Linux"]
    },
    {
      title: "Junior Developer",
      company: "StartUp Tech",
      location: "Bangalore, India",
      duration: "2021 - 2022",
      description: [
        "Assisted in developing user-friendly web interfaces",
        "Learned and applied best practices in software development",
        "Participated in agile development processes",
        "Gained experience in version control and team collaboration"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React", "Git"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key contributions in software development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-primary">{exp.title}</CardTitle>
                    <p className="text-lg font-semibold text-foreground">{exp.company}</p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-muted-foreground flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-4">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline">
                      {tech}
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
