
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const educationData = [
    {
      degree: "B.E. in Computer Science and Engineering",
      institution: "St. Joseph Engineering College",
      location: "Mangaluru, India",
      period: "2022 – 2026",
      achievements: ["CGPA: 9.26 (Till 5th Semester)"],
    },
    {
      degree: "PUC (PCMB)",
      institution: "SAPHSS",
      location: "Agalpady",
      period: "2020 – 2022",
      achievements: ["Percentage: 97.08%"],
    },
    {
      degree: "SSLC",
      institution: "NHSS",
      location: "Perdala",
      period: "2019 – 2020",
      achievements: ["Grade: All A+"],
    },
  ];

  return (
    <section id="education" className="section bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Education</h2>
        
        <div className="space-y-6 max-w-3xl mx-auto">
          {educationData.map((item, index) => (
            <Card key={index} className="card-hover">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-theme-secondary">{item.degree}</CardTitle>
                    <CardDescription className="text-base">
                      {item.institution}, {item.location}
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="bg-theme-primary/10 text-theme-primary">
                    {item.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  {item.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-700">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
