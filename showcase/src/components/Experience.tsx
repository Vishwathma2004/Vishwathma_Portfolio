
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experienceData = [
    {
      position: "Junior Intern",
      company: "The Nirvana Labs (Currently ProfileCity)",
      period: "Mar 2024 – Apr 2024",
      description: "Worked on the Refermate - Outreach Team project for 4.5 weeks (50 hours).",
    },
  ];

  return (
    <section id="experience" className="section">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Experience</h2>
        
        <div className="max-w-3xl mx-auto">
          {experienceData.map((item, index) => (
            <Card key={index} className="card-hover">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div className="flex gap-3">
                    <div className="mt-1 p-2 bg-theme-primary/10 rounded-full">
                      <Briefcase className="h-5 w-5 text-theme-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-theme-secondary">{item.position}</CardTitle>
                      <CardDescription className="text-base">{item.company}</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-theme-primary/10 text-theme-primary">
                    {item.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
