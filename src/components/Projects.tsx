import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Sales Analytics Dashboard",
      description: "Interactive Power BI dashboard analyzing sales performance across multiple regions with real-time KPI tracking and predictive analytics.",
      technologies: ["Power BI", "SQL Server", "Python", "DAX"],
      image: "/api/placeholder/400/250",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Customer Segmentation Analysis",
      description: "Machine learning project using Python to segment customers based on purchasing behavior, resulting in 25% increase in targeted marketing effectiveness.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
      image: "/api/placeholder/400/250",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Financial Data Visualization",
      description: "Comprehensive Tableau dashboard for financial analysis with interactive charts, trend analysis, and automated reporting capabilities.",
      technologies: ["Tableau", "SQL", "Excel", "Financial Modeling"],
      image: "/api/placeholder/400/250",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Inventory Management System",
      description: "End-to-end data pipeline for inventory optimization using SQL databases and Python automation, reducing stock costs by 18%.",
      technologies: ["Python", "MySQL", "Apache Airflow", "Docker"],
      image: "/api/placeholder/400/250",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Web Scraping & Analysis",
      description: "Automated data collection and analysis system for market research, processing 10k+ data points daily with Python and BeautifulSoup.",
      technologies: ["Python", "BeautifulSoup", "Pandas", "Jupyter"],
      image: "/api/placeholder/400/250",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of data analytics and business intelligence projects that showcase my expertise
          </p>
        </div>

        <div className="grid gap-8">
          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {projects.filter(p => p.featured).map((project) => (
              <Card key={project.title} className="project-card">
                <div className="aspect-video bg-gradient-primary rounded-t-xl" />
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project) => (
              <Card key={project.title} className="project-card">
                <div className="aspect-video bg-gradient-primary rounded-t-xl" />
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-foreground">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs text-muted-foreground px-2 py-1">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 text-xs">
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 text-xs">
                      <Github className="mr-1 h-3 w-3" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
