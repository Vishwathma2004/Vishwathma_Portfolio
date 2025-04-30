
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "Python", "C", "HTML", "CSS"],
    },
    {
      title: "Technologies",
      skills: ["Machine Learning", "Android Development"],
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "MySQL", "Figma", "Unix"],
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-theme-primary">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className="skill-badge"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
