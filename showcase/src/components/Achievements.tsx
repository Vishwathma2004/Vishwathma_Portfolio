
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Award, Star } from "lucide-react";

const Achievements = () => {
  const achievementsData = [
    {
      title: "HackFest'25",
      description: "Top 15 Finalist @ NMAMIT Nitte (National Hackathon)",
      icon: <Award className="h-5 w-5 text-yellow-500" />,
    },
    {
      title: "Reliance Undergraduate Scholar 2022",
      description: "Scholarship",
      icon: <Star className="h-5 w-5 text-yellow-500" />,
    },
    {
      title: "Wipro Earthian",
      description: "Pre-Quarter Finalist – Sustainability Challenge",
      icon: <Award className="h-5 w-5 text-yellow-500" />,
    },
    {
      title: "VTU Rest-of-Bangalore CHESS",
      description: "Runner-Up 2023–24",
      icon: <Award className="h-5 w-5 text-yellow-500" />,
    },
  ];

  const certificationsData = [
    {
      title: "Android App using Java",
      issuer: "Spoken Tutorial, Indian Institute of Technology, Bombay",
      link: "#",
    },
    {
      title: "Introduction to Java",
      issuer: "Online Certification",
      link: "#",
    },
  ];

  return (
    <section id="achievements" className="section">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Achievements & Certifications</h2>
        
        <div className="space-y-10">
          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-6">Achievements</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievementsData.map((item, index) => (
                <Card key={index} className="card-hover">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-theme-primary/10 rounded-full">
                        {item.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg text-theme-secondary">
                          {item.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-6">Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certificationsData.map((item, index) => (
                <Card key={index} className="card-hover">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-theme-secondary">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{item.issuer}</p>
                    <a
                      href={item.link}
                      className="text-theme-primary hover:underline mt-2 inline-block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Credentials
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
