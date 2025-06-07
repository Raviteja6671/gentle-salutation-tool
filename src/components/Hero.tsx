
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Full Stack Developer & Software Engineer";
  
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
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated background particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${Math.random() * 4 + 4}s`
            }}
          />
        ))}
      </div>

      {/* Golden accent elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-yellow-500 rounded-full filter blur-3xl opacity-10 animate-float"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile Image */}
          <div className="flex justify-center lg:justify-start animate-slide-in-left">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-full blur-lg opacity-70 animate-pulse"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-yellow-400 shadow-2xl hover-lift">
                <img 
                  src="/lovable-uploads/1932ce34-1537-49b9-9f5d-2286e71b324c.png" 
                  alt="Raviteja Kodem"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Floating elements around image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-in-right">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-6xl font-bold">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent animate-glow">
                    Raviteja Kodem
                  </span>
                </h1>
                
                <div className="h-16 flex items-center justify-center lg:justify-start">
                  <p className="text-xl sm:text-3xl text-gray-300 typewriter font-light">
                    {text}
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                Passionate about creating innovative solutions and bringing ideas to life through code.
                Experienced in modern web technologies with a focus on 
                <span className="text-yellow-400 font-semibold"> user experience</span> and 
                <span className="text-yellow-400 font-semibold"> performance</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
              <Button 
                onClick={handleResumeDownload} 
                size="lg" 
                className="group px-8 py-4 text-lg bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold hover:from-yellow-500 hover:to-yellow-600 hover-lift shadow-lg hover:shadow-yellow-400/25 transition-all duration-300"
              >
                <Download className="mr-3 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
              
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="hover-lift glass-effect border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/10 hover:border-yellow-400"
                  asChild
                >
                  <a href="https://github.com/ravitejakodem" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="hover-lift glass-effect border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/10 hover:border-yellow-400"
                  asChild
                >
                  <a href="https://linkedin.com/in/ravitejakodem" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="hover-lift glass-effect border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/10 hover:border-yellow-400"
                  asChild
                >
                  <a href="mailto:raviteja.kodem@example.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="pt-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={scrollToNext}
                className="hover:text-yellow-400 animate-float text-gray-400"
              >
                <ArrowDown className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
