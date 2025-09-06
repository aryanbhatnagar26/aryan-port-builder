import { Progress } from "@/components/ui/progress";
import { Code, Database, BarChart3, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 85 },
        { name: "R", level: 70 },
        { name: "JavaScript", level: 65 }
      ]
    },
    {
      title: "BI & Analytics Tools",
      icon: BarChart3,
      skills: [
        { name: "Power BI", level: 90 },
        { name: "Tableau", level: 85 },
        { name: "Excel", level: 95 },
        { name: "Google Analytics", level: 75 }
      ]
    },
    {
      title: "Database Technologies",
      icon: Database,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 70 },
        { name: "SQLite", level: 90 }
      ]
    },
    {
      title: "Data Science & ML",
      icon: Brain,
      skills: [
        { name: "Pandas", level: 85 },
        { name: "NumPy", level: 80 },
        { name: "Scikit-learn", level: 75 },
        { name: "Matplotlib", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technical proficiencies and tools I use to deliver data-driven solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div key={category.title} className="skill-card">
                <div className="flex items-center mb-6">
                  <IconComponent className="h-8 w-8 text-primary mr-4" />
                  <h3 className="text-2xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm font-semibold text-primary">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-3 bg-secondary"
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;