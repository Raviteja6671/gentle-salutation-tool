
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export const Hero = () => {
  const handleResumeDownload = () => {
    window.open("https://docs.google.com/document/d/1qjrMbh0RD535hKsqsRCJZCEX4Z634t6X/edit", "_blank");
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-bold text-foreground">
              Hi, I'm <span className="text-primary">Raviteja Kodem</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Full Stack Developer & Software Engineer
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating innovative solutions and bringing ideas to life through code.
              Experienced in modern web technologies and software development.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={handleResumeDownload} size="lg" className="group">
              <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Download Resume
            </Button>
            <div className="flex gap-4">
              <Button variant="outline" size="icon">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
