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
import { Github, Link } from "lucide-react";

const Projects = () => {
  const projectsData = [
    {
      title: "AgriData",
      description:
        "Android app to collect farmer image data for GNN-based agricultural analysis.",
      tech: ["Java", "Firebase", "Cloudinary", "Android SDK"],
      links: { github: "" },
      date: "May 2025 – Present",
      tags: [],
    },
    {
      title: "Sea Trash Detection and Clean-Up System",
      description:
        "AI/ML-based detection of marine debris using satellite and ROV images. Integrated Google Earth Engine and OpenCV.",
      tech: ["Python", "TensorFlow", "GEE API", "OpenCV"],
      links: { github: "https://github.com/hackfest-dev/Hackfest25-37" },
      date: "Feb 2025",
      tags: ["Hackathon Project"],
    },
    {
      title: "Stock Price Predictor App",
      description:
        "Stock prediction app using Yahoo Finance data and Linear Regression. Visualized with Matplotlib.",
      tech: ["Python", "scikit-learn", "pandas", "NumPy"],
      links: {
        github: "https://github.com/Vishwathma2004/stock_price_predictor",
        live: "https://stock-price-predictor-application.streamlit.app/",
      },
      date: "Dec 2024",
      tags: [],
    },
    {
      title: "Tic-Tac-Toe Game App",
      description:
        "Android-based interactive Tic-Tac-Toe game built using Java and Gradle.",
      tech: ["Java", "Android SDK", "Gradle"],
      links: { github: "https://github.com/Vishwathma2004/Tic-Tac-Toe-App" },
      date: "Sept 2024",
      tags: ["Mini Project"],
    },
    {
      title: "Currency Converter App",
      description:
        "Android app to convert currencies using a live REST API. Designed for simplicity and speed.",
      tech: ["Java", "REST API", "Android Studio"],
      links: { github: "https://github.com/Vishwathma2004/Currency-Converter-App" },
      date: "Aug 2024",
      tags: ["Mini Project"],
    },
  ];

  const allTechs = Array.from(
    new Set(projectsData.flatMap((p) => p.tech))
  ).sort();

  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const filteredProjects = selectedTech
    ? projectsData.filter((p) => p.tech.includes(selectedTech))
    : projectsData;

  return (
    <section id="projects" className="section bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Projects</h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 my-4">
          <Button
            variant={selectedTech === null ? "default" : "outline"}
            onClick={() => setSelectedTech(null)}
          >
            All
          </Button>
          {allTechs.map((tech) => (
            <Button
              key={tech}
              variant={selectedTech === tech ? "default" : "outline"}
              onClick={() => setSelectedTech(tech)}
            >
              {tech}
            </Button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="card-hover overflow-hidden flex flex-col"
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-semibold text-theme-secondary">
                    {project.title}
                  </CardTitle>
                  <div className="flex flex-col items-end gap-1">
                    <Badge variant="outline" className="bg-theme-primary/10 text-theme-primary">
                      {project.date}
                    </Badge>
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs bg-blue-100 text-blue-600">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="outline" className="bg-gray-100">
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
