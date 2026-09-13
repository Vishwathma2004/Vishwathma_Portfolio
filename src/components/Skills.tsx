import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillGroups = [
  {
    category: "Languages",
    skills: ["Java", "Python", "TypeScript", "JavaScript", "C", "SQL", "C#"],
  },
  {
    category: "Frontend",
    skills: ["Angular", "React", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend & APIs",
    skills: ["ASP.NET Core", ".NET", "Node.js", "Express", "REST APIs"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "SQL Server"],
  },
  {
    category: "AI & Machine Learning",
    skills: ["scikit-learn", "TensorFlow", "OpenCV", "YOLO", "Gemini API", "Google Earth Engine"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "Android SDK", "Postman", "Figma", "Linux", "Gradle"],
  },
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.08);

  return (
    <section id="skills" className="py-24 bg-slate-50/60 dark:bg-slate-900/20 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="section-container">
        <div
          ref={ref}
          className={`animate-on-scroll ${isVisible ? "is-visible" : ""}`}
        >
          {/* Section header */}
          <div className="mb-14">
            <p className="section-label mb-2">Skills</p>
            <h2 className="section-title">Technical Stack</h2>
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group, gi) => (
              <div
                key={group.category}
                className={`animate-on-scroll ${isVisible ? "is-visible" : ""}`}
                style={{ transitionDelay: `${gi * 60}ms` }}
              >
                {/* Category label */}
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500">
                    {group.category}
                  </span>
                  <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
                </div>

                {/* Skill tokens */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="tech-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Divider note */}
          <p className="mt-10 text-center text-xs text-slate-400 dark:text-slate-500 font-medium">
            Technologies I've used professionally or built projects with.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;