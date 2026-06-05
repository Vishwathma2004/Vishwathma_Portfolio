import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, Sparkles } from "lucide-react";

const Experience = () => {
  const experienceData = [
    {
      position: "Software Development Intern",
      company: "MRI Software",
      location: "Bangalore",
      period: "Mar 2026 – Present",
      responsibilities: [
        "Contributing to the development of the Appstudio PageBuilder tool, enabling dynamic UI component customization across core product suites.",
        "Engineering scalable, modular interface architectures and internal framework tooling utilizing Angular and .NET.",
        "Collaborating with cross-functional development teams to maintain clean codebases, optimize performance, and ship refined user interfaces."
      ],
      tags: ["Angular", ".NET", "TypeScript", "UI Customization", "Enterprise Architecture"],
      isCurrent: true,
    },
    {
      position: "Junior Intern",
      company: "The Nirvana Labs (Currently ProfileCity)",
      location: "Remote",
      period: "Mar 2024 – Apr 2024",
      responsibilities: [
        "Collaborated within the Refermate - Outreach Team project to handle dynamic outreach logic over a focused 4.5-week execution window.",
        "Dedicated 50+ hours of software development time to refining internal project criteria and delivering performance features."
      ],
      tags: ["Outreach Automation", "Team Collaboration"],
      isCurrent: false,
    },
  ];

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-3">
            Professional Experience
          </h2>
          <div className="h-1 w-12 bg-blue-600 rounded-full" />
        </div>

        {/* Timeline Line Track */}
        <div className="relative border-l border-slate-200 ml-4 sm:ml-32 space-y-12 paths-track">
          {experienceData.map((item, index) => (
            <div key={index} className="relative pl-8 group">
              
              {/* Sidebar Period Display (Desktop Only) */}
              <div className="hidden sm:block absolute right-full mr-8 top-1.5 text-right w-28">
                <span className={`text-sm font-semibold block transition-colors duration-300
                  ${item.isCurrent ? "text-blue-600 font-bold" : "text-slate-400 group-hover:text-slate-600"}`}
                >
                  {item.period}
                </span>
              </div>

              {/* Dynamic Connecting Timeline Dot */}
              <div className={`absolute -left-[11px] top-1.5 w-5 h-5 rounded-full border-4 transition-all duration-300 flex items-center justify-center
                ${item.isCurrent 
                  ? "bg-blue-600 border-blue-100 ring-4 ring-blue-50 scale-110" 
                  : "bg-white border-slate-300 group-hover:border-blue-500"
                }`} 
              />

              {/* Main Content Card */}
              <Card className={`border rounded-xl overflow-hidden transition-all duration-300 bg-white
                ${item.isCurrent 
                  ? "border-blue-100 shadow-lg shadow-blue-500/5 hover:border-blue-200" 
                  : "border-slate-100 hover:shadow-md hover:border-slate-200/80"
                }`}
              >
                <CardContent className="p-6 space-y-4">
                  
                  {/* Card Title Header Block */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div className="space-y-1">
                      {/* Responsive Date Tag (Mobile Only) */}
                      <span className="inline-flex sm:hidden items-center gap-1.5 text-xs font-semibold text-slate-400 mb-1">
                        <Calendar className="w-3 h-3" /> {item.period}
                      </span>
                      
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-snug">
                          {item.position}
                        </h3>
                        {item.isCurrent && (
                          <Badge className="bg-blue-50 text-blue-700 hover:bg-blue-50 border border-blue-200/60 font-medium px-2.5 py-0.5 rounded-full text-xs flex items-center gap-1 shadow-none animate-pulse">
                            <Sparkles className="w-3 h-3" /> Active Role
                          </Badge>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm pt-0.5">
                        <span className="font-semibold text-slate-700">{item.company}</span>
                        <span className="flex items-center gap-1 text-xs text-slate-400 font-normal">
                          <MapPin className="w-3.5 h-3.5" /> {item.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bulleted Functional Narrative */}
                  <ul className="space-y-2.5 text-slate-600 text-sm leading-relaxed list-none pl-0">
                    {item.responsibilities.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Micro Tech Skill Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.tags.map((tag, tagIdx) => (
                      <Badge 
                        key={tagIdx} 
                        variant="secondary"
                        className="bg-slate-50 border border-slate-200/60 text-slate-600 hover:bg-slate-100 transition-colors font-medium text-[11px] px-2.5 py-0.5 rounded-md shadow-none"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                </CardContent>
              </Card>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;