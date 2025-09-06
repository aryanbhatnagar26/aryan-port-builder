import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink } from "lucide-react";
import certificateHPLife from "@/assets/certificate-hp-life.jpg";
import certificateCoursera from "@/assets/certificate-coursera.jpg";
import certificateLinkedIn from "@/assets/certificate-linkedin.jpg";
import certificateMicrosoft from "@/assets/certificate-microsoft.jpg";

const Certifications = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);

  const certificates = [
    {
      title: "HP Life - Data Analytics Fundamentals",
      issuer: "HP Life",
      date: "2024",
      image: certificateHPLife,
      description: "Comprehensive course covering data analysis fundamentals, statistical methods, and business intelligence concepts.",
      skills: ["Data Analysis", "Statistics", "Business Intelligence"],
      credentialUrl: "#",
      featured: true
    },
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Coursera",
      date: "2024",
      image: certificateCoursera,
      description: "Professional certificate program covering the entire data analytics workflow from collection to visualization.",
      skills: ["R Programming", "SQL", "Tableau", "Data Cleaning"],
      credentialUrl: "#",
      featured: true
    },
    {
      title: "Power BI Data Analyst Associate",
      issuer: "LinkedIn Learning",
      date: "2023",
      image: certificateLinkedIn,
      description: "Advanced Power BI training covering DAX, data modeling, and creating interactive dashboards.",
      skills: ["Power BI", "DAX", "Data Modeling", "Visualization"],
      credentialUrl: "#",
      featured: true
    },
    {
      title: "Microsoft Power BI Certification",
      issuer: "Microsoft",
      date: "2023",
      image: certificateMicrosoft,
      description: "Official Microsoft certification demonstrating expertise in Power BI development and administration.",
      skills: ["Power BI", "Azure", "Data Gateway", "Security"],
      credentialUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Certifications & Learning
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning through industry-recognized certifications and professional development courses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <Card 
              key={index} 
              className="project-card cursor-pointer group"
              onClick={() => setSelectedCertificate(cert)}
            >
              <div className="aspect-[4/3] bg-gradient-primary rounded-t-xl overflow-hidden relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-foreground">
                    <Award className="w-3 h-3 mr-1" />
                    Certified
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                
                <div className="flex items-center text-muted-foreground mb-3">
                  <span className="font-medium">{cert.issuer}</span>
                  <span className="mx-2">•</span>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {cert.date}
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {cert.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {cert.skills.slice(0, 3).map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="outline" 
                      className="text-xs border-primary/30 text-primary hover:bg-primary/10"
                    >
                      {skill}
                    </Badge>
                  ))}
                  {cert.skills.length > 3 && (
                    <Badge variant="outline" className="text-xs text-muted-foreground">
                      +{cert.skills.length - 3} more
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certificate Popup Dialog */}
        <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
            {selectedCertificate && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-foreground">
                    {selectedCertificate.title}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <img
                      src={selectedCertificate.image}
                      alt={selectedCertificate.title}
                      className="w-full rounded-lg shadow-medium"
                    />
                  </div>
                  
                  <div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Issuing Organization</h4>
                        <p className="text-muted-foreground">{selectedCertificate.issuer}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Issue Date</h4>
                        <p className="text-muted-foreground">{selectedCertificate.date}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Description</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {selectedCertificate.description}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Skills Covered</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedCertificate.skills.map((skill: string) => (
                            <Badge 
                              key={skill} 
                              variant="outline" 
                              className="border-primary/30 text-primary hover:bg-primary/10"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <a
                          href={selectedCertificate.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Credential
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Certifications;