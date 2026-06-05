import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Server, Brain, Laptop } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frontend",
      icon: <Code2 className="w-4 h-4 text-blue-600" />,
      iconBg: "bg-blue-50 border-blue-100/60",
      skills: ["Java", "Python", "TypeScript", "JavaScript", "Angular", "React", "C", "HTML5 / CSS3"],
    },
    {
      title: "Backend & Architecture",
      icon: <Server className="w-4 h-4 text-indigo-600" />,
      iconBg: "bg-indigo-50 border-indigo-100/60",
      skills: [".NET Core", "Node.js", "Express", "RESTful APIs", "PostgreSQL", "MySQL", "MongoDB", "Firebase"],
    },
    {
      title: "AI / ML & Intelligent Systems",
      icon: <Brain className="w-4 h-4 text-emerald-600" />,
      iconBg: "bg-emerald-50 border-emerald-100/60",
      skills: ["Machine Learning", "Computer Vision (YOLO)", "RAG Frameworks", "Gemini API", "scikit-learn", "OpenCV"],
    },
    {
      title: "Platforms & Hardware Ecosystems",
      icon: <Laptop className="w-4 h-4 text-amber-600" />,
      iconBg: "bg-amber-50 border-amber-100/60",
      skills: ["Android SDK", "Git / GitHub", "Unix / Linux", "Figma", "IoT Integration (ESP32)", "Gradle"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container max-w-6xl mx-auto px-6">
        
        {/* Main Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-3">
            Technical Capabilities
          </h2>
          <div className="h-1 w-12 bg-blue-600 rounded-full" />
        </div>

        {/* High-Quality Structural Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="border border-slate-100 bg-slate-50/30 hover:bg-white hover:shadow-xl hover:border-slate-200/60 transition-all duration-500 rounded-2xl overflow-hidden"
            >
              <CardContent className="p-6 sm:p-8 space-y-6">
                
                {/* Category Header Element */}
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl border ${category.iconBg}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {category.title}
                  </h3>
                </div>

                {/* Flowing Badge Framework Wrap */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-white border border-slate-200/60 hover:border-slate-300 text-slate-700 hover:text-slate-900 font-medium text-xs px-3 py-1 rounded-xl transition-colors shadow-none"
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