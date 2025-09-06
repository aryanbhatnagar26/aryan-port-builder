import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about transforming complex data into meaningful business insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg leading-relaxed mb-6 text-foreground">
              I'm a dedicated <span className="font-semibold text-primary">Data Analyst and BI Developer</span> with 
              a passion for uncovering insights from complex datasets. My journey in data analytics combines 
              technical expertise with business acumen to deliver solutions that drive decision-making.
            </p>
            
            <p className="text-lg leading-relaxed mb-8 text-foreground">
              With proficiency in <span className="font-semibold text-primary">Python, SQL, Power BI, and Tableau</span>, 
              I specialize in creating comprehensive data visualizations and automated reporting systems that 
              help organizations make informed decisions.
            </p>

            <div className="flex flex-wrap gap-3">
              {["Python", "SQL", "Power BI", "Tableau", "Excel", "Data Visualization", "Machine Learning"].map((skill) => (
                <span
                  key={skill}
                  className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card className="project-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-8 w-8 text-primary mr-4" />
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <p className="text-muted-foreground">
                  Continuously learning through various platforms including HP Life, 
                  Coursera, and LinkedIn Learning to stay current with industry trends.
                </p>
              </CardContent>
            </Card>

            <Card className="project-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-primary mr-4" />
                  <h3 className="text-xl font-semibold">Career Goals</h3>
                </div>
                <p className="text-muted-foreground">
                  Aspiring to become a senior data scientist while helping organizations 
                  leverage data-driven strategies for sustainable growth.
                </p>
              </CardContent>
            </Card>

            <Card className="project-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Heart className="h-8 w-8 text-primary mr-4" />
                  <h3 className="text-xl font-semibold">Interests</h3>
                </div>
                <p className="text-muted-foreground">
                  When not analyzing data, I enjoy exploring new technologies, 
                  contributing to open-source projects, and sharing knowledge with the community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;