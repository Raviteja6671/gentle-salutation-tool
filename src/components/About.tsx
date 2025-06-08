
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code, Target, Heart } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="h-8 w-8 text-yellow-400" />,
      title: "Fresh Graduate",
      description: "Recent graduate with a passion for web development and modern technologies"
    },
    {
      icon: <Code className="h-8 w-8 text-yellow-400" />,
      title: "Self-Taught Developer",
      description: "Continuously learning and building projects to enhance my programming skills"
    },
    {
      icon: <Target className="h-8 w-8 text-yellow-400" />,
      title: "Goal-Oriented",
      description: "Focused on becoming a skilled frontend developer with expertise in React and modern web technologies"
    },
    {
      icon: <Heart className="h-8 w-8 text-yellow-400" />,
      title: "Passionate Learner",
      description: "Enthusiastic about creating beautiful, functional user interfaces and solving complex problems"
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
          {/* Left side - Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">
                Hi, I'm <span className="text-yellow-400">Raviteja Kodem</span>
              </h3>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate fresher with a strong foundation in frontend development. 
                  My journey into programming began with curiosity and has grown into a deep 
                  love for creating intuitive and beautiful web experiences.
                </p>
                <p>
                  As a recent graduate, I bring fresh perspectives, enthusiasm for learning, 
                  and a strong commitment to writing clean, efficient code. I'm always eager 
                  to take on new challenges and contribute to meaningful projects.
                </p>
                <p>
                  My goal is to grow as a frontend developer while building applications 
                  that make a positive impact on users' lives.
                </p>
              </div>
            </div>

            {/* Personal Interests */}
            <Card className="glass-effect border-yellow-400/30 bg-yellow-400/5">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-yellow-400 mb-4">When I'm not coding...</h4>
                <p className="text-gray-300">
                  I enjoy exploring new technologies, participating in coding challenges, 
                  reading tech blogs, and working on personal projects that help me learn 
                  and grow as a developer.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right side - Highlights */}
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
