
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Education
          </h2>
          <div className="w-32 h-1 bg-cyan-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white border-gray-200 shadow-sm">
            <CardContent className="p-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">
                    Bachelor of Technology in Computer Science Engineering
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Malla Reddy College of Engineering (Bharati Vidyapeeth's College of Information Technology & Science)
                  </p>
                  <p className="text-gray-500 mb-4">Graduated in 2025</p>
                  <p className="text-gray-700 leading-relaxed">
                    Completed a comprehensive computer science curriculum with focus on software 
                    development, algorithms, data structures, networking, and database management. 
                    Gained solid foundation in both theoretical concepts and practical applications of 
                    computer science principles with specialization in AI and ML.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
