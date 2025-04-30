
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title text-center">About Me</h2>
        
        <div className="max-w-3xl mx-auto">
          <Card className="border-none shadow-md">
            <CardContent className="pt-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Deeply passionate about leveraging technology to drive innovation and solve complex problems. 
                I possess a strong foundation in programming and algorithms. 
                I am committed to continuous learning and staying updated with the latest advancements in the field.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                As a Computer Science Engineering student at St. Joseph Engineering College, I've been
                actively involved in various technical projects and have a keen interest in machine learning
                and Android development. I enjoy tackling challenging problems and creating innovative solutions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Currently, I'm focused on expanding my knowledge in Android Development and Machine Learning
                while applying my skills to real-world projects. I'm always open to collaborate on exciting
                projects and opportunities to learn and grow.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
