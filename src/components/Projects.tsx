import { useState } from "react";
import { Github, ExternalLink, FolderCode } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/* ──────────────────────────────────────────────────────────────
   PROJECT DATA — Only factual entries from existing portfolio
   Tic-Tac-Toe and Currency Converter removed from main display
────────────────────────────────────────────────────────────── */
const allProjects = [
  {
    title: "LeetCode Hint Extension",
    tagline: "AI-powered Chrome extension for competitive programming",
    description:
      "A Chrome extension that fetches contextual hints and architectural insights for any LeetCode problem using the Google Gemini API. Backed by a deployed Node.js + Express server handling API orchestration.",
    tech: ["JavaScript", "Chrome Extension API", "Node.js", "Express", "Gemini API"],
    links: {
      github: "https://github.com/Vishwathma2004/leetcode-hint-extension",
      live: "https://leetcode-hint-extension.onrender.com",
    },
    date: "Jul 2025",
    domain: "AI/ML",
    featured: true,
    highlights: [
      "Chrome MV3 extension with content scripts",
      "REST backend deployed on Render",
      "Gemini API prompt engineering",
    ],
  },
  {
    title: "AgriData Collection System",
    tagline: "Android data pipeline for downstream GNN workflows",
    description:
      "Production-grade Android application for securely collecting, parsing, and uploading structured farmer image metadata, optimized for Graph Neural Network (GNN) agricultural research pipelines.",
    tech: ["Java", "Android SDK", "Firebase", "Cloudinary"],
    links: { github: "" },
    date: "May 2025 – Present",
    domain: "Android",
    featured: true,
    highlights: [
      "Firebase Realtime Database integration",
      "Cloudinary image storage pipeline",
      "Structured metadata schema for GNN training",
    ],
  },
  {
    title: "Sea Trash Detection & Clean-Up",
    tagline: "Satellite + ROV marine debris detection (HackFest'25 — Top 15)",
    description:
      "AI-powered detection system identifying marine debris using satellite imagery and autonomous ROV feeds. Integrated Google Earth Engine data pipelines with custom YOLO/OpenCV detection layers.",
    tech: ["Python", "TensorFlow", "Google Earth Engine API", "OpenCV", "YOLO"],
    links: { github: "https://github.com/hackfest-dev/Hackfest25-37" },
    date: "Feb 2025",
    domain: "AI/ML",
    featured: false,
    highlights: [],
  },
  {
    title: "Stock Price Predictor",
    tagline: "Real-time ML dashboard with live market data",
    description:
      "Time-series prediction application using Yahoo Finance live data streams and regression models, visualized through an interactive Streamlit dashboard.",
    tech: ["Python", "scikit-learn", "pandas", "Streamlit", "Yahoo Finance API"],
    links: {
      github: "https://github.com/Vishwathma2004/stock_price_predictor",
      live: "https://stock-price-predictor-application.streamlit.app/",
    },
    date: "Dec 2024",
    domain: "AI/ML",
    featured: false,
    highlights: [],
  },
  {
    title: "Expense Tracker",
    tagline: "Client-side personal finance dashboard",
    description:
      "Clean, responsive personal finance tracker supporting multi-category ledger entries, with local data persistence and real-time state updates.",
    tech: ["JavaScript", "HTML", "CSS", "LocalStorage API"],
    links: {
      github: "https://github.com/Vishwathma2004/Expense-Tracker",
      live: "https://expense-tracker-vishwathma2004s-projects.vercel.app/",
    },
    date: "Jun 2025",
    domain: "Full-Stack",
    featured: false,
    highlights: [],
  },
];

const domains = ["All", "AI/ML", "Android", "Full-Stack"];

const Projects = () => {
  const [selectedDomain, setSelectedDomain] = useState("All");
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.06);

  const filtered =
    selectedDomain === "All"
      ? allProjects
      : allProjects.filter((p) => p.domain === selectedDomain);

  const featured = filtered.filter((p) => p.featured);
  const secondary = filtered.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-background border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="section-container">
        <div
          ref={ref}
          className={`animate-on-scroll ${isVisible ? "is-visible" : ""}`}
        >
          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div>
              <p className="section-label mb-2">Projects</p>
              <h2 className="section-title">Selected Work</h2>
            </div>

            {/* Domain filter */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800/50 rounded-xl self-start sm:self-auto">
              {domains.map((domain) => (
                <button
                  key={domain}
                  onClick={() => setSelectedDomain(domain)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                    selectedDomain === domain
                      ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                  }`}
                >
                  {domain}
                </button>
              ))}
            </div>
          </div>

          {/* ── Featured Projects ── */}
          {featured.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
              {featured.map((project, i) => (
                <div
                  key={project.title}
                  className={`group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col animate-on-scroll ${isVisible ? "is-visible" : ""}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {/* Card top accent bar */}
                  <div className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-400" />

                  <div className="p-6 flex flex-col flex-1">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 border border-blue-100 dark:border-blue-800/50 rounded-md">
                            {project.domain}
                          </span>
                          <span className="text-[11px] text-slate-400 dark:text-slate-500 font-mono">
                            {project.date}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                          {project.title}
                        </h3>
                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                          {project.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5 flex-1">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    {project.highlights.length > 0 && (
                      <div className="mb-5 space-y-1.5">
                        {project.highlights.map((h) => (
                          <div key={h} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                            <span className="w-1 h-1 rounded-full bg-blue-400 shrink-0" />
                            {h}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((t) => (
                        <span key={t} className="tech-tag">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                      {project.links.github ? (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-outline py-2 px-3.5 text-xs"
                        >
                          <Github className="w-3.5 h-3.5" />
                          Source
                        </a>
                      ) : (
                        <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-dashed border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500 text-xs cursor-not-allowed">
                          <FolderCode className="w-3.5 h-3.5" />
                          Source Confidential
                        </div>
                      )}
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary py-2 px-3.5 text-xs"
                        >
                          Live Demo
                          <ExternalLink className="w-3 h-3 opacity-80" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── Secondary Projects ── */}
          {secondary.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {secondary.map((project, i) => (
                <div
                  key={project.title}
                  className={`group card-base p-5 flex flex-col animate-on-scroll ${isVisible ? "is-visible" : ""}`}
                  style={{ transitionDelay: `${(featured.length + i) * 70}ms` }}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 rounded-md">
                      {project.domain}
                    </span>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">
                      {project.date}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-tag text-[10px] py-0.5 px-2">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 mt-auto pt-3 border-t border-slate-100 dark:border-slate-800">
                    {project.links.github ? (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Source
                      </a>
                    ) : null}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors ml-auto"
                      >
                        Live Demo
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* GitHub CTA */}
          <div className="mt-8 text-center">
            <a
              href="https://github.com/Vishwathma2004"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              More projects on GitHub
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;