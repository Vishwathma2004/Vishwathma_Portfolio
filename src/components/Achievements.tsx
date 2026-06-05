import { Card, CardContent } from "@/components/ui/card";
import { Award, Trophy, Medal, GraduationCap, ExternalLink } from "lucide-react";

const Achievements = () => {
  const achievementsData = [
    {
      title: "HackFest'25",
      description: "Top 15 Finalist @ NMAMIT Nitte (National Hackathon)",
      type: "hackathon",
    },
    {
      title: "Reliance Undergraduate Scholar 2022",
      description: "Prestigious national academic merit scholarship.",
      type: "scholar",
    },
    {
      title: "Wipro Earthian",
      description: "Pre-Quarter Finalist – Sustainability Challenge",
      type: "sustainability",
    },
    {
      title: "VTU Rest-of-Bangalore CHESS",
      description: "Runner-Up 2023–24 Competitive Tournament",
      type: "sports",
    },
  ];

  const certificationsData = [
    {
      title: "Android App using Java",
      issuer: "Spoken Tutorial, IIT Bombay",
      link: "https://www.linkedin.com/posts/vishwathma-n_course-certificate-activity-7235506751226138624-4r_e/",
    },
    {
      title: "Introduction to Java",
      issuer: "Coursera Verification",
      link: "https://www.coursera.org/account/accomplishments/verify/CTXJ8YQSM4TU",
    },
    {
      title: "The Complete Full-Stack Web Development Bootcamp",
      issuer: "Udemy Professional",
      link: "https://www.udemy.com/certificate/UC-481091a1-53b4-4564-a07b-403bc98c752e/",
    },
  ];

  // Helper function to inject context-aware premium iconography
  const getIcon = (type: string) => {
    switch (type) {
      case "hackathon": return <Trophy className="h-5 w-5 text-amber-600" />;
      case "scholar": return <Medal className="h-5 w-5 text-blue-600" />;
      case "sports": return <Award className="h-5 w-5 text-emerald-600" />;
      default: return <Award className="h-5 w-5 text-indigo-600" />;
    }
  };

  const getIconBg = (type: string) => {
    switch (type) {
      case "hackathon": return "bg-amber-50 border border-amber-100";
      case "scholar": return "bg-blue-50 border border-blue-100";
      case "sports": return "bg-emerald-50 border border-emerald-100";
      default: return "bg-indigo-50 border border-indigo-100";
    }
  };

  return (
    <section id="achievements" className="py-24 bg-white">
      <div className="container max-w-6xl mx-auto px-6">
        
        {/* Main Clean Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-3">
            Honors & Qualifications
          </h2>
          <div className="h-1 w-12 bg-blue-600 rounded-full" />
        </div>

        {/* Dynamic Multi-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT PANEL: Achievements Layout (7 Columns) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <Trophy className="w-5 h-5 text-slate-400" />
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">Key Achievements</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievementsData.map((item, index) => (
                <Card 
                  key={index} 
                  className="group relative border border-slate-100 bg-slate-50/40 hover:bg-white hover:shadow-md transition-all duration-300 rounded-xl overflow-hidden"
                >
                  <CardContent className="p-5 flex flex-col justify-between h-full min-h-[140px]">
                    <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-xl transition-transform group-hover:scale-110 duration-300 ${getIconBg(item.type)}`}>
                        {getIcon(item.type)}
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-slate-900 text-base leading-tight group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-sm text-slate-600 leading-normal pt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* RIGHT PANEL: Certifications Structured List (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <GraduationCap className="w-5 h-5 text-slate-400" />
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">Certifications</h3>
            </div>

            <div className="space-y-3">
              {certificationsData.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 border border-slate-100 rounded-xl bg-white hover:border-slate-200 shadow-sm hover:shadow transition-all group"
                >
                  <div className="space-y-0.5 max-w-[80%]">
                    <h4 className="font-medium text-slate-900 text-sm leading-tight truncate group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 font-normal">
                      {item.issuer}
                    </p>
                  </div>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 border border-transparent hover:border-blue-100 rounded-lg transition-all"
                    title="Verify Credential"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;