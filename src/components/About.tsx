
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code, Target, Heart } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="h-8 w-8 text-yellow-400" />,
      title: "Fresh Graduate",
      description: "Bachelor of Technology in Computer Science and Engineering (AI and ML) - 2025"
    },
    {
      icon: <Code className="h-8 w-8 text-yellow-400" />,
      title: "Programming Skills",
      description: "Proficient in HTML, CSS, Python with experience in AI/ML and software development"
    },
    {
      icon: <Target className="h-8 w-8 text-yellow-400" />,
      title: "Goal-Oriented",
      description: "Focused on becoming a skilled fullstack developer with expertise in modern technologies"
    },
    {
      icon: <Heart className="h-8 w-8 text-yellow-400" />,
      title: "Problem Solver",
      description: "Strong analytical mindset with passion for building innovative solutions in software industry"
    }
  ];

  return (
    <section id="about" className="py-20 bg-black relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 animate-fade-in">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="section-divider mx-auto mb-8 w-32"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">
                Hi, I'm <span className="text-yellow-400">Raviteja Kodem</span>
              </h3>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  I'm an enthusiastic and highly motivated graduate with a strong analytical mindset 
                  and a passion for software development. With expertise in problem solving and logical 
                  thinking, I bring a solid foundation in programming languages.
                </p>
                <p>
                  Eager to leverage technical and problem-solving skills to build innovative solutions 
                  in the software industry. To grow and contribute as a IT developer in a dynamic organization.
                </p>
                <p>
                  Currently pursuing Bachelor of Technology in Computer Science and Engineering 
                  with specialization in AI and ML from Malla Reddy College of Engineering.
                </p>
              </div>
            </div>

            <Card className="glass-effect border-yellow-400/30 bg-yellow-400/5">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-yellow-400 mb-4">Contact Information</h4>
                <div className="space-y-2 text-gray-300">
                  <p><strong>Mobile:</strong> +917036918762</p>
                  <p><strong>Location:</strong> Hyderabad-Telangana</p>
                  <p><strong>Email:</strong> ravitejaraviteja6671@gmail.com</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 animate-slide-in-right">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="hover-lift glass-effect border-yellow-400/30 bg-black/40 backdrop-blur-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-yellow-400/20 rounded-lg">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-300">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
