import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Trophy, Medal, Award, ExternalLink, GraduationCap, MapPin } from "lucide-react";

/* ── Education ── */
const educationData = [
  {
    degree: "B.E. Computer Science & Engineering",
    institution: "St. Joseph Engineering College",
    location: "Mangaluru, India",
    period: "2022 – 2026",
    metric: "9.35 CGPA",
    current: true,
  },
  {
    degree: "PUC (PCMB)",
    institution: "SAPHSS",
    location: "Agalpady",
    period: "2020 – 2022",
    metric: "97.08%",
    current: false,
  },
  {
    degree: "SSLC",
    institution: "NHSS",
    location: "Perdala",
    period: "2019 – 2020",
    metric: "All A+",
    current: false,
  },
];

/* ── Achievements ── */
const achievements = [
  {
    title: "HackFest'25 — Top 15 Finalist",
    desc: "National hackathon at NMAMIT Nitte. Built an AI marine debris detection system.",
    icon: <Trophy className="w-4 h-4 text-amber-600 dark:text-amber-500" />,
    iconBg: "bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/20",
  },
  {
    title: "Reliance Undergraduate Scholar 2022",
    desc: "Prestigious national academic merit scholarship.",
    icon: <Medal className="w-4 h-4 text-blue-600 dark:text-blue-500" />,
    iconBg: "bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/20",
  },
  {
    title: "Wipro Earthian — Pre-Quarter Finalist",
    desc: "National sustainability engineering challenge.",
    icon: <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-500" />,
    iconBg: "bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20",
  },
  {
    title: "VTU Chess — Runner-Up 2023–24",
    desc: "Rest-of-Bangalore regional competitive tournament.",
    icon: <Award className="w-4 h-4 text-indigo-600 dark:text-indigo-500" />,
    iconBg: "bg-indigo-50 dark:bg-indigo-500/10 border-indigo-200 dark:border-indigo-500/20",
  },
];

/* ── Certifications ── */
const certs = [
  {
    title: "Android App Development (Java)",
    issuer: "Spoken Tutorial, IIT Bombay",
    link: "https://www.linkedin.com/posts/vishwathma-n_course-certificate-activity-7235506751226138624-4r_e/",
  },
  {
    title: "Introduction to Java",
    issuer: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/CTXJ8YQSM4TU",
  },
  {
    title: "Full-Stack Web Development Bootcamp",
    issuer: "Udemy",
    link: "https://www.udemy.com/certificate/UC-481091a1-53b4-4564-a07b-403bc98c752e/",
  },
];

const Achievements = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.06);

  return (
    <section id="achievements" className="py-24 bg-white dark:bg-background border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="section-container">
        <div
          ref={ref}
          className={`animate-on-scroll ${isVisible ? "is-visible" : ""}`}
        >
          {/* Section header */}
          <div className="mb-14">
            <p className="section-label mb-2">Background</p>
            <h2 className="section-title">Education & Recognition</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

            {/* ── LEFT: Education timeline ── */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                <h3 className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  Education
                </h3>
              </div>

              {educationData.map((edu, i) => (
                <div
                  key={edu.degree}
                  className={`card-base p-4 flex items-start justify-between gap-4 animate-on-scroll ${isVisible ? "is-visible" : ""}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="space-y-0.5 min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 leading-snug truncate">
                        {edu.degree}
                      </h4>
                      {edu.current && (
                        <span className="shrink-0 text-[9px] font-bold uppercase px-1.5 py-0.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800/50 rounded-md">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      <span>{edu.institution}</span>
                      <span className="text-slate-300 dark:text-slate-600">·</span>
                      <MapPin className="w-3 h-3 text-slate-400 dark:text-slate-500" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="text-[11px] text-slate-400 dark:text-slate-500">{edu.period}</div>
                  </div>
                  <div className="shrink-0 text-right">
                    <div className="text-lg font-bold text-slate-900 dark:text-slate-100 leading-none">
                      {edu.metric}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ── RIGHT: Achievements + Certs ── */}
            <div className="lg:col-span-7 space-y-10">

              {/* Achievements */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Trophy className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                  <h3 className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    Achievements
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {achievements.map((item, i) => (
                    <div
                      key={item.title}
                      className={`card-base p-4 flex items-start gap-3 animate-on-scroll ${isVisible ? "is-visible" : ""}`}
                      style={{ transitionDelay: `${100 + i * 70}ms` }}
                    >
                      <div className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 ${item.iconBg}`}>
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs font-semibold text-slate-900 dark:text-slate-100 leading-snug mb-0.5">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <Award className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                  <h3 className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    Certifications
                  </h3>
                </div>
                <div className="space-y-2">
                  {certs.map((cert, i) => (
                    <a
                      key={cert.title}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center justify-between p-3.5 card-base hover:border-blue-200 dark:hover:border-blue-800/50 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 animate-on-scroll ${isVisible ? "is-visible" : ""}`}
                      style={{ transitionDelay: `${200 + i * 70}ms` }}
                    >
                      <div>
                        <div className="text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                          {cert.title}
                        </div>
                        <div className="text-xs text-slate-400 dark:text-slate-500">{cert.issuer}</div>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors shrink-0 ml-3" />
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;