
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  const highlights = [
    {
      title: "Problem Solver",
      description: "Finding efficient solutions to complex technical challenges"
    },
    {
      title: "Continuous Learner",
      description: "Always exploring new technologies and methodologies"
    },
    {
      title: "Team Collaborator",
      description: "Working effectively with development teams"
    },
    {
      title: "Detail Oriented",
      description: "Focused on writing clean, maintainable code"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            About Me
          </h2>
          <div className="w-32 h-1 bg-cyan-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <div className="space-y-6">
            <Card className="bg-white border-gray-200 shadow-sm">
              <CardContent className="p-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  I'm an enthusiastic and highly motivated graduate with a strong analytical mindset 
                  and a passion for software development. With expertise in problem solving and logical 
                  thinking, I bring a solid foundation in programming languages.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Eager to leverage technical and problem-solving skills to build innovative solutions 
                  in the software industry. To grow and contribute as a IT developer in a dynamic organization.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Currently pursuing Bachelor of Technology in Computer Science and Engineering 
                  with specialization in AI and ML from Malla Reddy College of Engineering.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h4>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Mobile:</strong> +917036918762</p>
                  <p><strong>Location:</strong> Hyderabad-Telangana</p>
                  <p><strong>Email:</strong> ravitejaraviteja6671@gmail.com</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="bg-blue-600 border-blue-600 text-white">
                <CardContent className="p-6 text-center">
                  <h4 className="text-lg font-semibold mb-3">
                    {highlight.title}
                  </h4>
                  <p className="text-blue-100 text-sm">
                    {highlight.description}
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
