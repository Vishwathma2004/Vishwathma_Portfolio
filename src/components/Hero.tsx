
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)",
        }}
      ></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="animate-fade-in text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-theme-primary">Vishwathma N</span>
          </h1>
          
          <p className="animate-fade-in text-xl md:text-2xl text-gray-600 mb-8 delay-100">
            Computer Science Engineering Student at St. Joseph Engineering College, Mangaluru.
            Passionate about leveraging technology to drive innovation and solve complex problems.
          </p>
          
          <div className="animate-fade-in flex flex-wrap gap-4 mb-8 delay-200">
            <Button asChild className="bg-theme-primary hover:bg-theme-primary/90">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="outline">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          
          <div className="animate-fade-in flex space-x-4 delay-300">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-gray-100 hover:bg-gray-200 text-theme-secondary rounded-full transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-gray-100 hover:bg-gray-200 text-theme-secondary rounded-full transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:abcd@gmail.com" 
              className="p-2 bg-gray-100 hover:bg-gray-200 text-theme-secondary rounded-full transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <svg className="w-6 h-6 text-gray-400" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
