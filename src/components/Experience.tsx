
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, BookOpen } from "lucide-react";

export const Experience = () => {
  const education = [
    {
      title: "Bachelor of Technology Computer Science and Engineering (AI and ML)",
      institution: "Malla Reddy College of Engineering",
      location: "Hyderabad, Telangana",
      duration: "2021 - 2025",
      cgpa: "6.95",
      description: [
        "Specialized in Artificial Intelligence and Machine Learning",
        "Strong foundation in Computer Science fundamentals",
        "Completed major projects in deep learning and software security",
        "Maintained consistent academic performance throughout the program"
      ],
      technologies: ["Python", "AI/ML", "Deep Learning", "Software Engineering", "Database Management"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="section-divider mx-auto mb-8 w-32"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My educational background and academic achievements
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-yellow-400 mb-8 flex items-center justify-center">
            <BookOpen className="mr-3 h-8 w-8" />
            Academic Background
          </h3>
          
          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <Card key={index} className="hover-lift glass-effect border-yellow-400/30 bg-black/40">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl text-yellow-400 mb-2">{edu.title}</CardTitle>
                      <p className="text-xl font-semibold text-white">{edu.institution}</p>
                    </div>
                    <div className="flex flex-col lg:items-end gap-2">
                      <div className="flex items-center gap-2 text-gray-300">
                        <Calendar className="h-5 w-5" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <MapPin className="h-5 w-5" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="text-yellow-400 font-semibold">
                        CGPA: {edu.cgpa}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {edu.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-300 flex items-start gap-3">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Areas of Study:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} className="bg-yellow-400/20 text-yellow-400 border-yellow-400/50">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Profile Summary Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="glass-effect border-yellow-400/30 bg-black/40">
            <CardHeader>
              <CardTitle className="text-2xl text-yellow-400 text-center">Profile Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-lg leading-relaxed text-center">
                Enthusiastic and highly motivated graduate with a strong analytical mindset and a passion for 
                software development. Adept at problem solving, logical thinking, with a solid foundation in 
                programming languages such as HTML, CSS, Python. Eager to leverage technical and problem-solving 
                skills to build innovative solutions in the software industry. To grow and contribute as a IT 
                developer in a dynamic organization.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
