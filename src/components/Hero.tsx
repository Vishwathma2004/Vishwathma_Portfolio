import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight, Code2, Terminal } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-white pt-16"
    >
      {/* Premium, ultra-soft modern radial mesh background overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/5 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a05_1px,transparent_1px),linear-gradient(to_bottom,#0f172a05_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container max-w-6xl mx-auto px-6 z-10 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: Deep Typographic Stack (7 Columns) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-xs font-semibold tracking-wide uppercase animate-fade-in">
              <Code2 className="w-3.5 h-3.5" /> Available for Opportunities
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                  Vishwathma N
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-700 tracking-tight">
                Full-Stack Developer & Intelligent Systems Engineer
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-xl">
              Computer Science & Engineering student at St. Joseph Engineering College. 
              Specialized in crafting optimized full-stack architectures and implementing 
              computer vision pipelines to resolve complex engineering challenges.
            </p>

            {/* Main Action Group Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-medium px-6 h-12 shadow-lg shadow-slate-900/10 transition-all active:scale-[0.98] group">
                <a href="#projects" className="flex items-center gap-2">
                  View Architecture 
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl font-medium px-6 h-12 transition-all active:scale-[0.98]">
                <a href="#contact">Let's Connect</a>
              </Button>
            </div>

            {/* Embedded Structural Social Row */}
            <div className="flex items-center gap-3 pt-6 border-t border-slate-100 max-w-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">Profiles</span>
              <a 
                href="https://github.com/Vishwathma2004" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 rounded-xl border border-slate-200/40 transition-all"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com/in/vishwathma-n" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-blue-600 rounded-xl border border-slate-200/40 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:vishwathman@gmail.com" 
                className="p-2.5 bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-emerald-600 rounded-xl border border-slate-200/40 transition-all"
                aria-label="Send Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: The High-Quality Mock IDE Terminal (5 Columns) */}
          <div className="lg:col-span-5 hidden lg:block relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 rounded-2xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            
            <div className="relative border border-slate-800 bg-[#0b0f19] shadow-2xl rounded-2xl overflow-hidden font-mono text-xs text-slate-400">
              {/* Terminal Window Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0d1321] border-b border-slate-800/80">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-[11px] text-slate-500 font-medium flex items-center gap-1.5">
                  <Terminal className="w-3 h-3" /> profile.tsx
                </div>
                <div className="w-12" /> {/* Spacer */}
              </div>

              {/* Terminal Code Body */}
              <div className="p-6 space-y-2 leading-relaxed text-slate-300">
                <div><span className="text-pink-400">const</span> <span className="text-blue-400">developer</span> = &#123;</div>
                <div className="pl-4"><span className="text-slate-400">name:</span> <span className="text-amber-300">"Vishwathma N"</span>,</div>
                <div className="pl-4">
                  <span className="text-slate-400">stack:</span> [
                  <span className="text-emerald-400">"React"</span>,{" "}
                  <span className="text-emerald-400">".NET"</span>,{" "}
                  <span className="text-emerald-400">"PostgreSQL"</span>
                  ],
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">domains:</span> [
                  <span className="text-indigo-400">"Computer Vision"</span>,{" "}
                  <span className="text-indigo-400">"IoT"</span>
                  ]
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">latestImpact:</span> <span className="text-amber-300">"Sea Trash Detection"</span>
                </div>
                <div>&#125;;</div>
                <div className="pt-4 text-slate-500">// Executing continuous development pipeline...</div>
                <div className="flex items-center gap-1">
                  <span className="text-emerald-400">$&nbsp;</span>
                  <span>npm run optimize --portfolio</span>
                  <span className="w-1.5 h-4 bg-blue-500 animate-pulse inline-block align-middle ml-0.5" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Centered Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden md:block">
        <a href="#about" aria-label="Scroll down" className="flex flex-col items-center gap-1 text-[10px] uppercase font-bold tracking-widest text-slate-400 hover:text-slate-900 transition-colors">
          <span className="animate-bounce block">↓</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;