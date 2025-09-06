import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Instagram, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "aryan@example.com",
      href: "mailto:aryan@example.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/aryanbhatnagar"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my repositories",
      href: "https://github.com/aryanbhatnagar"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@bhatnagararyan2601",
      href: "https://instagram.com/bhatnagararyan2601"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on your next data project? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="project-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Send Me a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    First Name
                  </label>
                  <Input placeholder="John" className="transition-smooth" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Last Name
                  </label>
                  <Input placeholder="Doe" className="transition-smooth" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email Address
                </label>
                <Input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="transition-smooth" 
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Subject
                </label>
                <Input 
                  placeholder="Project Collaboration Inquiry" 
                  className="transition-smooth" 
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell me about your project or how we can work together..."
                  className="min-h-[120px] transition-smooth resize-none"
                />
              </div>
              
              <Button className="w-full hero-button">
                <Mail className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Get in Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or simply chat about data analytics and business intelligence. Whether you have a 
                project in mind or just want to connect, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((contact) => {
                const IconComponent = contact.icon;
                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 rounded-xl bg-card border border-border/50 hover:shadow-medium transition-smooth group"
                  >
                    <IconComponent className="h-6 w-6 text-primary mr-4 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {contact.label}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {contact.value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            <Card className="skill-card bg-gradient-primary text-primary-foreground border-0">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-3">
                  Looking for collaboration?
                </h4>
                <p className="text-primary-foreground/90 mb-4">
                  I'm currently open to freelance projects and full-time opportunities 
                  in data analytics and business intelligence.
                </p>
                <Button 
                  variant="secondary" 
                  className="w-full bg-white/20 text-white hover:bg-white/30 border-white/30"
                >
                  Download Resume
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;