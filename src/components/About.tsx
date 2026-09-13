import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Layers, Server, Brain, Database } from "lucide-react";

const capabilities = [
  {
    icon: <Layers className="w-4 h-4" />,
    color: "text-blue-600 bg-blue-50 border-blue-100",
    title: "Full-Stack Development",
    description:
      "End-to-end application development — frontend (Angular, React), backend (ASP.NET Core, Node.js), REST API design, and database integration.",
  },
  {
    icon: <Server className="w-4 h-4" />,
    color: "text-slate-700 bg-slate-50 border-slate-200",
    title: "Enterprise Software",
    description:
      "Shipping production-grade features in a professional engineering team at MRI Software — modular UI tooling, scalable architectures, and clean codebases.",
  },
  {
    icon: <Brain className="w-4 h-4" />,
    color: "text-indigo-600 bg-indigo-50 border-indigo-100",
    title: "AI Applications",
    description:
      "Integrating LLM APIs (Gemini), computer vision (YOLO, OpenCV), and ML pipelines (scikit-learn, TensorFlow) into practical software.",
  },
  {
    icon: <Database className="w-4 h-4" />,
    color: "text-emerald-600 bg-emerald-50 border-emerald-100",
    title: "Data & Backend Systems",
    description:
      "Designing data-driven backends with PostgreSQL, MySQL, MongoDB, Firebase — including data pipelines and structured storage for ML workflows.",
  },
];

const About = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.1);

  return (
    <section id="about" className="py-24 bg-white dark:bg-background border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="section-container">
        <div
          ref={ref}
          className={`animate-on-scroll ${isVisible ? "is-visible" : ""}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* ── LEFT: Text content ── */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <p className="section-label">About</p>
                <h2 className="section-title">
                  Software engineer.<br />CS graduate.
                </h2>
              </div>

              <div className="space-y-4 text-slate-600 dark:text-slate-400 text-[15px] leading-relaxed">
                <p>
                  I'm a Computer Science and Engineering graduate from
                  St. Joseph Engineering College (CGPA 9.35), currently working as a 
                  <span className="font-medium text-slate-800 dark:text-slate-200"> Software Engineer 1</span> at{" "}
                  <span className="font-medium text-slate-800 dark:text-slate-200">MRI Software India Pvt Ltd</span> — a
                  global real estate technology company.
                </p>
                <p>
                  At MRI, I work on the Agora Voice Agent platform, an enterprise AI-powered conversational agent integrating with core MRI products. I specialize in backend services using C#/.NET, integrating AI subagents, MCP tools, and Microsoft Agent Framework (MAF) to handle complex customer workflows.
                </p>
                <p>
                  Outside of enterprise work, I build AI-powered applications:
                  a Chrome extension using the Gemini API for LeetCode,
                  marine debris detection with TensorFlow and Google Earth Engine,
                  and Android data systems for ML workflows.
                </p>
              </div>

              {/* Education callout */}
              <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl">
                <div className="text-center pt-0.5">
                  <div className="text-xl font-bold text-slate-900 dark:text-white tracking-tight leading-none">
                    9.35
                  </div>
                  <div className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-0.5">
                    CGPA
                  </div>
                </div>
                <div className="w-px h-10 bg-slate-200 dark:bg-slate-700 self-center" />
                <div>
                  <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    B.E. Computer Science & Engineering
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    St. Joseph Engineering College, Mangaluru · Graduated June 2026
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Capability cards ── */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {capabilities.map((cap, i) => (
                <div
                  key={cap.title}
                  className={`card-base p-5 space-y-3 animate-on-scroll ${isVisible ? "is-visible" : ""}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className={`w-8 h-8 rounded-lg border flex items-center justify-center ${cap.color}`}>
                    {cap.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;