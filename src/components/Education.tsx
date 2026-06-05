import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "B.E. in Computer Science and Engineering",
      institution: "St. Joseph Engineering College",
      location: "Mangaluru, India",
      period: "2022 – 2026",
      metricLabel: "Cumulative CGPA",
      metricValue: "9.35",
      isCurrent: true,
    },
    {
      degree: "PUC (PCMB)",
      institution: "SAPHSS",
      location: "Agalpady",
      period: "2020 – 2022",
      metricLabel: "Aggregate",
      metricValue: "97.08%",
      isCurrent: false,
    },
    {
      degree: "SSLC",
      institution: "NHSS",
      location: "Perdala",
      period: "2019 – 2020",
      metricLabel: "Performance",
      metricValue: "All A+",
      isCurrent: false,
    },
  ];

  return (
    <section id="education" className="py-24 bg-slate-50/40">
      <div className="container max-w-4xl mx-auto px-6">
        
        {/* Main Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-3">
            Academic Journey
          </h2>
          <div className="h-1 w-12 bg-blue-600 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-slate-200 ml-4 sm:ml-32 space-y-8 paths-track">
          {educationData.map((item, index) => (
            <div key={index} className="relative pl-8 group">
              
              {/* Timeline Left-Side Date Marker (Visible on larger screens) */}
              <div className="hidden sm:block absolute right-full mr-8 top-1.5 text-right w-24">
                <span className="text-sm font-semibold text-slate-400 group-hover:text-blue-600 transition-colors duration-300">
                  {item.period}
                </span>
              </div>

              {/* Timeline Dynamic Node Dot */}
              <div className={`absolute -left-[11px] top-1.5 w-5 h-5 rounded-full border-4 transition-all duration-300 flex items-center justify-center
                ${item.isCurrent 
                  ? "bg-blue-600 border-blue-100 ring-4 ring-blue-50 scale-110" 
                  : "bg-white border-slate-300 group-hover:border-blue-500"
                }`} 
              />

              {/* Content Card */}
              <Card className="border border-slate-100 bg-white hover:shadow-md hover:border-slate-200/80 transition-all duration-300 rounded-xl overflow-hidden">
                <CardContent className="p-6">
                  
                  {/* Title & Info Wrapper */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="space-y-1">
                      {/* Responsive Date Tag (Only shows on mobile view) */}
                      <span className="inline-flex sm:hidden items-center gap-1.5 text-xs font-semibold text-slate-400 mb-1">
                        <Calendar className="w-3 h-3" /> {item.period}
                      </span>
                      
                      <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-snug group-hover:text-blue-600 transition-colors duration-300">
                        {item.degree}
                      </h3>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500 pt-0.5">
                        <span className="font-medium text-slate-700">{item.institution}</span>
                        <span className="flex items-center gap-1 text-xs text-slate-400">
                          <MapPin className="w-3 h-3" /> {item.location}
                        </span>
                      </div>
                    </div>

                    {/* Premium Highlight Academic Badge */}
                    <div className="flex items-center md:self-start">
                      <div className="flex flex-col items-end border-l-2 border-slate-100 pl-4">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                          {item.metricLabel}
                        </span>
                        <span className="text-xl font-black text-slate-800 tracking-tight">
                          {item.metricValue}
                        </span>
                      </div>
                    </div>
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

export default Education;