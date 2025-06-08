
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["HTML", "CSS", "Python"],
      icon: "P",
      bgColor: "bg-cyan-500"
    },
    {
      title: "Database",
      skills: ["MySQL"],
      icon: "D",
      bgColor: "bg-cyan-500"
    },
    {
      title: "Version Control",
      skills: ["GitHub", "Git"],
      icon: "V",
      bgColor: "bg-cyan-500"
    },
    {
      title: "Others",
      skills: ["Communication", "Problem-Solving", "Time Management", "Active Listening", "Punctuality", "Patience"],
      icon: "O",
      bgColor: "bg-blue-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Technical Skills
          </h2>
          <div className="w-32 h-1 bg-cyan-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-gray-700 border-gray-600">
              <CardHeader className="text-center pb-4">
                <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-white text-xl font-bold">{category.icon}</span>
                </div>
                <CardTitle className="text-lg text-gray-300">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-gray-600 text-gray-300 border-gray-500"
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
