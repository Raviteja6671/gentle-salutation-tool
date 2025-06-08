
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export const Hero = () => {
  const handleResumeDownload = () => {
    window.open("https://docs.google.com/document/d/1qjrMbh0RD535hKsqsRCJZCEX4Z634t6X/edit", "_blank");
  };

  return (
    <section id="home" className="min-h-screen relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/1932ce34-1537-49b9-9f5d-2286e71b324c.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-white">Hello, I'm</span>
                <span className="block text-cyan-400">
                  Raviteja Kodem
                </span>
              </h1>
              
              <p className="text-2xl text-gray-300">
                Fullstack Developer & Software Engineer
              </p>
            </div>
            
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Enthusiastic and highly motivated graduate with a strong analytical mindset and a passion for 
              software development. Adept at problem solving, logical thinking, with a solid foundation in 
              programming languages.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Button 
                onClick={handleResumeDownload} 
                size="lg" 
                className="px-8 py-3 bg-blue-600 text-white hover:bg-blue-700"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="w-12 h-12 border-gray-400 text-gray-300 hover:bg-gray-700"
                  asChild
                >
                  <a href="https://github.com/Raviteja6671" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="w-12 h-12 border-gray-400 text-gray-300 hover:bg-gray-700"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/raviteja-kodem-841761337" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="w-12 h-12 border-gray-400 text-gray-300 hover:bg-gray-700"
                  asChild
                >
                  <a href="mailto:ravitejaraviteja6671@gmail.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
