
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Detecting and Mitigating Botnet Attacks in Software-Defined Networks using Deep Learning Techniques",
      description: "The project focuses on securing Software-Defined Networks (SDN) against botnet-based DDoS attacks using deep learning. By leveraging a lightweight detection model, it enhances accuracy and reduces processing time compared to traditional methods like Decision Trees and SVM. The research highlights SDN's flexibility while addressing its security vulnerabilities, ensuring robust and efficient threat mitigation.",
      technologies: ["AI&ML", "Deep Learning", "Python", "Machine Learning"],
      category: "AI/ML Project",
      features: [
        "Lightweight detection model for botnet attacks",
        "Enhanced accuracy compared to traditional methods",
        "Efficient threat mitigation in SDN environments",
        "Deep learning-based security approach"
      ]
    },
    {
      title: "Leaf Disease Detection Using Deep Learning",
      description: "This project focuses on detecting leaf diseases using deep learning techniques, particularly Convolutional Neural Networks (CNNs). It involves image processing, feature extraction, and classification to identify plant diseases from leaf images. The system leverages a Kaggle dataset and employs data augmentation and transfer learning to improve accuracy.",
      technologies: ["Machine Learning", "Deep Learning", "Python", "CNNs", "Kaggle"],
      category: "Computer Vision",
      features: [
        "Image processing and feature extraction",
        "Convolutional Neural Networks implementation",
        "Data augmentation techniques",
        "Transfer learning for improved accuracy",
        "Kaggle dataset integration"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-divider mx-auto mb-8 w-32"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Academic projects showcasing my skills in AI/ML and software development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="hover-lift glass-effect border-yellow-400/30 bg-black/40 backdrop-blur-lg transition-all duration-300 h-full"
            >
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <Badge className="bg-yellow-400/20 text-yellow-400 border-yellow-400/50 mb-3">
                      {project.category}
                    </Badge>
                    <CardTitle className="text-xl text-yellow-400 leading-tight">
                      {project.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 flex items-start gap-2">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline"
                        className="border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex items-center gap-2 border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/20"
                    asChild
                  >
                    <a href="https://github.com/Raviteja6671" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
