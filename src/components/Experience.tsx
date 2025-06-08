
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, BookOpen, Award } from "lucide-react";

export const Experience = () => {
  const education = [
    {
      title: "Bachelor's in Computer Science",
      institution: "Your University Name",
      location: "City, Country",
      duration: "2020 - 2024",
      description: [
        "Graduated with strong foundation in programming and software development",
        "Completed coursework in Data Structures, Algorithms, and Web Development",
        "Participated in coding competitions and technical workshops",
        "Maintained good academic performance throughout the program"
      ],
      technologies: ["Java", "Python", "C++", "Database Management", "Software Engineering"]
    }
  ];

  const certifications = [
    {
      title: "Web Development Bootcamp",
      provider: "Online Platform",
      date: "2024",
      description: "Comprehensive course covering HTML, CSS, JavaScript, and React"
    },
    {
      title: "JavaScript Fundamentals",
      provider: "FreeCodeCamp",
      date: "2023",
      description: "Mastered core JavaScript concepts and modern ES6+ features"
    },
    {
      title: "Responsive Web Design",
      provider: "Coursera",
      date: "2023",
      description: "Learned advanced CSS techniques and responsive design principles"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Education & <span className="gradient-text">Learning</span>
          </h2>
          <div className="section-divider mx-auto mb-8 w-32"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My educational background and continuous learning journey
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-yellow-400 mb-8 flex items-center">
            <BookOpen className="mr-3 h-8 w-8" />
            Education
          </h3>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="hover-lift glass-effect border-yellow-400/30 bg-black/40">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl text-yellow-400">{edu.title}</CardTitle>
                      <p className="text-xl font-semibold text-white">{edu.institution}</p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2">
                      <div className="flex items-center gap-2 text-gray-300">
                        <Calendar className="h-5 w-5" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <MapPin className="h-5 w-5" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {edu.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-300 flex items-start gap-2">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {edu.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} className="bg-yellow-400/20 text-yellow-400 border-yellow-400/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-bold text-yellow-400 mb-8 flex items-center">
            <Award className="mr-3 h-8 w-8" />
            Certifications & Courses
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover-lift glass-effect border-yellow-400/30 bg-black/40">
                <CardHeader>
                  <CardTitle className="text-lg text-yellow-400">{cert.title}</CardTitle>
                  <p className="text-white font-medium">{cert.provider}</p>
                  <p className="text-sm text-gray-400">{cert.date}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
