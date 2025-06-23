import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frontend",
      skills: ["Java", "Python", "C", "HTML", "CSS", "JavaScript", "React (Beginner)", "Go (Beginner)"],
    },
    {
      title: "Backend & Databases",
      skills: ["Java Backend", "REST APIs (Basic)", "MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      title: "Technologies",
      skills: ["Machine Learning", "Android"],
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "Figma", "Unix"],
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Technical Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
