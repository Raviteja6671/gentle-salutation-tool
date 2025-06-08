
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Frontend Developer & UI/UX Enthusiast";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const handleResumeDownload = () => {
    window.open("https://docs.google.com/document/d/1qjrMbh0RD535hKsqsRCJZCEX4Z634t6X/edit", "_blank");
  };

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/1932ce34-1537-49b9-9f5d-2286e71b324c.png')`,
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        
        {/* Yellow accent overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-transparent to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in">
            {/* Name with large, bold styling */}
            <div className="space-y-6">
              <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold leading-tight">
                <span className="block text-white drop-shadow-2xl">RAVITEJA</span>
                <span className="block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent animate-glow drop-shadow-2xl">
                  KODEM
                </span>
              </h1>
              
              <div className="h-16 flex items-center justify-center">
                <p className="text-2xl sm:text-4xl text-yellow-400 font-light typewriter drop-shadow-lg">
                  {text}
                </p>
              </div>
            </div>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Passionate fresher eager to create innovative web solutions and bring ideas to life through code.
              Focused on modern frontend technologies with a keen eye for 
              <span className="text-yellow-400 font-semibold"> user experience</span> and 
              <span className="text-yellow-400 font-semibold"> clean design</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Button 
                onClick={handleResumeDownload} 
                size="lg" 
                className="group px-12 py-6 text-xl bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold hover:from-yellow-500 hover:to-yellow-600 hover-lift shadow-2xl hover:shadow-yellow-400/50 transition-all duration-300 rounded-full"
              >
                <Download className="mr-4 h-6 w-6 group-hover:animate-bounce" />
                Download Resume
              </Button>
              
              <div className="flex gap-6">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="w-16 h-16 hover-lift glass-effect border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/20 hover:border-yellow-400 rounded-full shadow-lg"
                  asChild
                >
                  <a href="https://github.com/ravitejakodem" target="_blank" rel="noopener noreferrer">
                    <Github className="h-8 w-8" />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="w-16 h-16 hover-lift glass-effect border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/20 hover:border-yellow-400 rounded-full shadow-lg"
                  asChild
                >
                  <a href="https://linkedin.com/in/ravitejakodem" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-8 w-8" />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="w-16 h-16 hover-lift glass-effect border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/20 hover:border-yellow-400 rounded-full shadow-lg"
                  asChild
                >
                  <a href="mailto:raviteja.kodem@example.com">
                    <Mail className="h-8 w-8" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="pt-12">
              <Button
                variant="ghost"
                size="icon"
                onClick={scrollToNext}
                className="hover:text-yellow-400 animate-float text-white w-16 h-16 rounded-full"
              >
                <ArrowDown className="h-8 w-8" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles for visual appeal */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};
