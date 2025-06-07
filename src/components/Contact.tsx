
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "raviteja.kodem@example.com",
      href: "mailto:raviteja.kodem@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 99999 99999",
      href: "tel:+919999999999"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/ravitejakodem",
      color: "hover:text-gray-900"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/ravitejakodem",
      color: "hover:text-blue-600"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/ravitejakodem",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out to me through any of the following channels. 
                I'll get back to you as soon as possible!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <a 
                      href={info.href}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    asChild
                    className={`transition-colors ${social.color}`}
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Message Card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Send a Quick Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                Interested in working together or have a question? Click the button below 
                to send me an email directly.
              </p>
              
              <div className="space-y-4">
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => window.open('mailto:raviteja.kodem@example.com?subject=Hello%20Raviteja&body=Hi%20Raviteja,%0D%0A%0D%0AI%20would%20like%20to%20discuss...', '_blank')}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full" 
                  size="lg"
                  onClick={() => window.open("https://docs.google.com/document/d/1qjrMbh0RD535hKsqsRCJZCEX4Z634t6X/edit", "_blank")}
                >
                  View Resume
                </Button>
              </div>

              <div className="text-center pt-4">
                <p className="text-sm text-muted-foreground">
                  I typically respond within 24 hours
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground">
            © 2024 Raviteja Kodem. Built with React and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};
