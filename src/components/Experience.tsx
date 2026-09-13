import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Calendar } from "lucide-react";

const experienceData = [
  {
    position: "Software Engineer 1",
    company: "MRI Software India Pvt Ltd",
    companyDesc: "Global real estate technology platform",
    location: "Bangalore, India",
    period: "Jun 2026 – Present",
    isCurrent: true,
    responsibilities: [
      "Contributing to an enterprise AI-powered voice agent platform integrating MRI products including Evolution, Maintain, and Ask Agora.",
      "Developing backend services and agent workflows using C#/.NET, with AI agents, subagents, MCP-based integrations, and Microsoft Agent Framework (MAF).",
      "Building and maintaining tools for customer information retrieval, work-order creation and updates, appointment workflows, and business-data validation.",
      "Working with configurable base prompts, shared rules, tenant-specific configurations, and tool capabilities to support client-specific conversational workflows.",
    ],
    tags: ["C#", ".NET", "AI Agents", "MCP", "Microsoft Agent Framework", "Prompt Engineering"],
    accentColor: "bg-blue-600",
    borderColor: "border-blue-100 dark:border-blue-900/50",
    shadowColor: "shadow-blue-500/5 dark:shadow-blue-900/10",
  },
  {
    position: "Software Engineer Intern",
    company: "MRI Software India Pvt Ltd",
    companyDesc: "Global real estate technology platform",
    location: "Bangalore, India",
    period: "Jan 2026 – Jun 2026",
    isCurrent: false,
    responsibilities: [
      "Contributed to Application Studio — an internal product enabling dynamic UI component configuration across MRI's core property management suites.",
      "Engineered modular, reusable Angular components and internal framework tooling, improving UI customization workflows used by enterprise customers.",
      "Collaborated across frontend and backend layers using TypeScript and .NET Core, maintaining clean separation of concerns and consistent API contracts.",
      "Participated in Agile sprint ceremonies, code reviews, and production release pipelines alongside senior engineers.",
    ],
    tags: ["Angular", "TypeScript", ".NET Core", "REST APIs", "Enterprise UI", "Agile"],
    accentColor: "bg-slate-400",
    borderColor: "border-slate-100 dark:border-slate-800",
    shadowColor: "shadow-slate-200/50 dark:shadow-none",
  },
  {
    position: "Junior Intern",
    company: "The Nirvana Labs",
    companyDesc: "Early-stage startup (now ProfileCity)",
    location: "Remote",
    period: "Mar 2024 – Apr 2024",
    isCurrent: false,
    responsibilities: [
      "Worked on the Refermate outreach automation project, contributing to dynamic outreach logic over a concentrated 4.5-week sprint.",
      "Delivered 50+ hours of focused development work, refining internal feature criteria and implementing performance-oriented enhancements.",
    ],
    tags: ["Outreach Automation", "Team Collaboration"],
    accentColor: "bg-slate-400",
    borderColor: "border-slate-100 dark:border-slate-800",
    shadowColor: "shadow-slate-200/50 dark:shadow-none",
  },
];

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.08);

  return (
    <section id="experience" className="py-24 bg-slate-50/60 dark:bg-slate-900/20 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="section-container-narrow">
        <div
          ref={ref}
          className={`animate-on-scroll ${isVisible ? "is-visible" : ""}`}
        >
          {/* Section header */}
          <div className="mb-14">
            <p className="section-label mb-2">Experience</p>
            <h2 className="section-title">Professional History</h2>
          </div>

          {/* Timeline */}
          <div className="relative space-y-8">
            {/* Vertical line */}
            <div className="absolute left-0 top-2 bottom-2 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />

            {experienceData.map((item, index) => (
              <div
                key={index}
                className={`relative sm:pl-8 animate-on-scroll ${isVisible ? "is-visible" : ""}`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-6 -translate-x-[5px] hidden sm:block w-[11px] h-[11px] rounded-full border-2 border-white dark:border-slate-950 ring-2 ${
                    item.isCurrent
                      ? "bg-blue-600 ring-blue-200 dark:ring-blue-900"
                      : "bg-slate-300 dark:bg-slate-700 ring-slate-100 dark:ring-slate-800"
                  }`}
                />

                {/* Card */}
                <div
                  className={`bg-white dark:bg-slate-900 border ${item.borderColor} rounded-xl p-6 hover:shadow-lg ${item.shadowColor} transition-all duration-300`}
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                          {item.position}
                        </h3>
                        {item.isCurrent && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800/50 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-wide rounded-full">
                            <span className="w-1 h-1 bg-emerald-500 rounded-full" />
                            Active
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                          {item.company}
                        </span>
                        <span className="text-xs text-slate-400 dark:text-slate-500">
                          {item.companyDesc}
                        </span>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-5">
                    {item.responsibilities.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        <span className="mt-2 w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span key={tag} className="tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;