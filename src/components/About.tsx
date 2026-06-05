import { Card, CardContent } from "@/components/ui/card";
import { Code2, Brain, Smartphone, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50/50 cross-bg">
      <div className="container max-w-6xl mx-auto px-6">
        
        {/* Subtle section sub-header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-3">
            About Me
          </h2>
          <div className="h-1 w-12 bg-blue-600 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Narrative (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-slate-600 leading-relaxed text-lg">
            <p className="text-xl font-medium text-slate-900 leading-normal">
              I’m an engineer in training who loves turning theoretical algorithms into robust, fluid user applications.
            </p>
            <p>
              As a Computer Science student at St. Joseph Engineering College, I’ve moved beyond classroom syntax to build functional software. I bridge the gap between backend heavy-lifting—like training models—and creative frontend execution.
            </p>
            <p>
              I thrive on optimization problems, whether that means trimming layout rendering pipelines in application builds or minimizing validation loss during training cycles.
            </p>
          </div>

          {/* Column 2: Highlights / Focus Cards (5 Cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            
            <Card className="border border-slate-100 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-5 flex items-start gap-4">
                <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                  <Brain className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Machine Learning</h4>
                  <p className="text-sm text-slate-500">Exploring model optimizations, data architectures, and predictive solutions.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-slate-100 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-5 flex items-start gap-4">
                <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Android Development</h4>
                  <p className="text-sm text-slate-500">Building intuitive layouts, handling asynchronous states, and clean architecture.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-slate-100 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-5 flex items-start gap-4">
                <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Academic Foundation</h4>
                  <p className="text-sm text-slate-500">Strong roots in core algorithms, complexity structures, and computing systems.</p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;