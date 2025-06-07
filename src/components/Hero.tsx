
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
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-6">
            <div className="inline-block">
              <h1 className="text-5xl sm:text-7xl font-bold text-foreground mb-4">
                Hi, I'm{" "}
                <span className="gradient-text animate-glow">
                  Raviteja Kodem
                </span>
              </h1>
            </div>
            
            <div className="h-16 flex items-center justify-center">
              <p className="text-xl sm:text-3xl text-muted-foreground typewriter">
                {text}
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-in-left">
              Passionate about creating innovative solutions and bringing ideas to life through code.
              Experienced in modern web technologies and software development with a focus on 
              user experience and performance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-in-right">
            <Button 
              onClick={handleResumeDownload} 
              size="lg" 
              className="group px-8 py-4 text-lg hover-lift animate-glow"
            >
              <Download className="mr-3 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
            
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="icon" 
                className="hover-lift glass-effect"
                asChild
              >
                <a href="https://github.com/ravitejakodem" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="hover-lift glass-effect"
                asChild
              >
                <a href="https://linkedin.com/in/ravitejakodem" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="hover-lift glass-effect"
                asChild
              >
                <a href="mailto:raviteja.kodem@example.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="pt-12 animate-float">
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToNext}
              className="hover:text-primary"
            >
              <ArrowDown className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
