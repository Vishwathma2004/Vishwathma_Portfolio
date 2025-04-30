import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Link } from "lucide-react";

const Projects = () => {
  const projectsData = [
    {
      title: "Sea Trash Detection and Clean-Up System",
      description:
        "Developed an AI/ML-based solution for detecting marine debris using satellite imagery and ROV images. Integrated Google Earth Engine API for data retrieval and OpenCV for image preprocessing.",
      tech: ["Python", "TensorFlow", "GEE API", "OpenCV"],
      links: {
        github: "https://github.com/hackfest-dev/Hackfest25-37",
      },
      date: "Feb 2025",
    },
    {
      title: "Stock Price Predictor App",
      description:
        "Built a stock prediction app using historical stock data fetched from Yahoo Finance and Linear Regression. Delivered insights using MSE evaluation and Matplotlib visualizations.",
      tech: ["Python", "scikit-learn", "pandas", "NumPy"],
      links: {
        github: "https://github.com/Vishwathma2004/stock_price_predictor",
        live: "https://stock-price-predictor-application.streamlit.app/",
      },
      date: "Dec 2024",
    },
  ];

  return (
    <section id="projects" className="section bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <Card key={index} className="card-hover overflow-hidden flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-semibold text-theme-secondary">
                    {project.title}
                  </CardTitle>
                  <Badge variant="outline" className="bg-theme-primary/10 text-theme-primary">
                    {project.date}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="bg-gray-100">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4 flex gap-3">
                {project.links.github && (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
                {project.links.live && (
                  <Button size="sm" asChild>
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <Link className="h-4 w-4" />
                      Live Demo
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
