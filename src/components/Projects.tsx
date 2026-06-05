import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Sparkles, FolderCode } from "lucide-react";

const Projects = () => {
  const projectsData = [
    {
      title: "LeetCode Hint Fetcher Extension",
      description:
        "An advanced Chrome Extension that intelligently fetches hints and architectural insights for LeetCode problems using the Google Gemini API. Backed by a high-throughput, deployed Node.js architecture.",
      tech: ["JavaScript", "Chrome Extension", "Node.js", "Express", "Gemini API"],
      links: {
        github: "https://github.com/Vishwathma2004/leetcode-hint-extension",
        live: "https://leetcode-hint-extension.onrender.com",
      },
      date: "Jul 2025",
      domain: "AI/ML",
      featured: true, // Takes double grid space
    },
    {
      title: "AgriData System",
      description:
        "Production-grade Android application designed to securely collect, parse, and upload structured farmer image metadata optimized for downstream Graph Neural Network (GNN) agricultural workflows.",
      tech: ["Java", "Firebase", "Cloudinary", "Android SDK"],
      links: { github: "" },
      date: "May 2025 – Present",
      domain: "Android",
      featured: true, // Takes double grid space
    },
    {
      title: "Sea Trash Detection & Clean-Up",
      description:
        "AI-powered detection system identifying marine debris using satellite imagery and autonomous ROV feeds. Integrated Google Earth Engine pipelines with custom OpenCV manipulation layers.",
      tech: ["Python", "TensorFlow", "GEE API", "OpenCV"],
      links: { github: "https://github.com/hackfest-dev/Hackfest25-37" },
      date: "Feb 2025",
      domain: "AI/ML",
      featured: false,
    },
    {
      title: "Stock Price Predictor App",
      description:
        "Predictive time-series application utilizing continuous Yahoo Finance data streams and optimized regression modeling. Rendered via responsive dashboard layers.",
      tech: ["Python", "scikit-learn", "pandas", "Streamlit"],
      links: {
        github: "https://github.com/Vishwathma2004/stock_price_predictor",
        live: "https://stock-price-predictor-application.streamlit.app/",
      },
      date: "Dec 2024",
      domain: "AI/ML",
      featured: false,
    },
    {
      title: "Currency Converter App",
      description:
        "Android utility engineered for instantaneous calculation matching using live REST API integration. Designed around strict modern state management paradigms.",
      tech: ["Java", "REST API", "Android Studio"],
      links: {
        github: "https://github.com/Vishwathma2004/Currency-Converter-App",
      },
      date: "Aug 2024",
      domain: "Android",
      featured: false,
    },
    {
      title: "Expense Tracker Architecture",
      description:
        "Clean, user-centric client dashboard managing variable personal ledger statements. Supports localized data persistence and state synchronization loops.",
      tech: ["JavaScript", "HTML", "CSS", "LocalStorage"],
      links: {
        github: "https://github.com/Vishwathma2004/Expense-Tracker",
        live: "https://expense-tracker-vishwathma2004s-projects.vercel.app/",
      },
      date: "Jun 2025",
      domain: "Full-Stack",
      featured: false,
    },
    {
      title: "Tic-Tac-Toe App",
      description:
        "Interactive native gaming experience compiled using Gradle automated configurations. Implements local state pattern matching algorithms.",
      tech: ["Java", "Android SDK", "Gradle"],
      links: { github: "https://github.com/Vishwathma2004/Tic-Tac-Toe-App" },
      date: "Sept 2024",
      domain: "Android",
      featured: false,
    },
  ];

  // Streamlining tag list into cohesive core domains to clean up button noise
  const domains = ["All", "AI/ML", "Android", "Full-Stack"];
  const [selectedDomain, setSelectedDomain] = useState("All");

  const filteredProjects = selectedDomain === "All"
    ? projectsData
    : projectsData.filter((p) => p.domain === selectedDomain);

  return (
    <section id="projects" className="py-24 bg-slate-50/40">
      <div className="container max-w-6xl mx-auto px-6">
        
        {/* Modern Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-3">
            Selected Architecture & Projects
          </h2>
          <div className="h-1 w-12 bg-blue-600 rounded-full" />
        </div>

        {/* Clean Categorized Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-1.5 mb-12 max-w-md mx-auto p-1 bg-slate-100/80 rounded-xl border border-slate-200/40">
          {domains.map((domain) => (
            <button
              key={domain}
              onClick={() => setSelectedDomain(domain)}
              className={`flex-grow sm:flex-none px-4 py-1.5 rounded-lg text-xs font-bold tracking-wide uppercase transition-all duration-200
                ${selectedDomain === domain
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-900"
                }`}
            >
              {domain}
            </button>
          ))}
        </div>

        {/* High-Quality Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[minmax(340px,_auto)]">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index} 
              className={`group flex flex-col h-full border border-slate-100 bg-white hover:shadow-xl shadow-slate-100/60 transition-all duration-500 rounded-2xl overflow-hidden
                ${project.featured ? "lg:col-span-2" : "lg:col-span-1"}`}
            >
              {/* Card Header */}
              <CardHeader className="p-6 pb-4">
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      {project.date}
                    </span>
                    <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </div>
                  
                  {/* Premium Feature Visual Flags */}
                  <div className="flex flex-col items-end gap-1.5">
                    <Badge variant="secondary" className="bg-slate-50 border border-slate-200/50 font-medium text-[10px] px-2 py-0.5 rounded-md text-slate-500">
                      {project.domain}
                    </Badge>
                    {project.featured && (
                      <Badge className="bg-blue-50 text-blue-700 hover:bg-blue-50 border border-blue-100/60 font-semibold px-2 py-0.5 rounded-md text-[10px] flex items-center gap-1 shadow-none">
                        <Sparkles className="w-2.5 h-2.5" /> Flagship
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>

              {/* Card Technical Content Body */}
              <CardContent className="p-6 pt-0 flex-grow flex flex-col justify-between gap-6">
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {project.description}
                </p>
                
                {/* Micro Tech Skill Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tech.map((tech, i) => (
                    <Badge 
                      key={i} 
                      variant="outline" 
                      className="text-[10px] font-semibold bg-slate-50/50 border-slate-200/40 text-slate-500 rounded-md px-2 py-0.5 shadow-none"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              {/* Clean Action Anchors Footer */}
              <CardFooter className="p-6 pt-4 border-t border-slate-50 bg-slate-50/20 flex gap-3">
                {project.links.github ? (
                  <Button variant="outline" size="sm" asChild className="border-slate-200 bg-white hover:bg-slate-50 hover:text-slate-900 text-slate-600 h-9 rounded-xl px-4 text-xs font-semibold">
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                      <Github className="h-3.5 w-3.5" /> Code
                    </a>
                  </Button>
                ) : (
                  <Button disabled size="sm" className="border border-dashed border-slate-200 bg-slate-50/50 text-slate-400 h-9 rounded-xl px-4 text-xs font-medium cursor-not-allowed">
                    <FolderCode className="h-3.5 w-3.5 opacity-60" /> Source Confidential
                  </Button>
                )}
                
                {project.links.live && (
                  <Button size="sm" asChild className="bg-slate-900 hover:bg-slate-800 text-white h-9 rounded-xl px-4 text-xs font-semibold shadow-md shadow-slate-900/5 group/btn">
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                      Live Demo <ExternalLink className="h-3 w-3 opacity-60 group-hover/btn:opacity-100 transition-opacity" />
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;