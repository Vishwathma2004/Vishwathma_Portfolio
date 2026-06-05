import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-slate-100 py-12 text-slate-600">
      <div className="container max-w-5xl mx-auto px-6">
        
        {/* Top Segment: Brand, Navigation, and Networks */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-8">
          
          {/* Brand Stack */}
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">
              Vishwathma N
            </h3>
            <p className="text-xs font-medium text-slate-400">
              Full-Stack & Intelligent Systems Engineer
            </p>
          </div>

          {/* Micro Internal Quick Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
          
          {/* Social Network Icon Strips */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Vishwathma2004"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-50 border border-transparent hover:border-slate-100 rounded-xl transition-all shadow-none"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/vishwathma-n"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 border border-transparent hover:border-blue-100 rounded-xl transition-all shadow-none"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:vishwathman@gmail.com"
              className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 border border-transparent hover:border-emerald-100 rounded-xl transition-all shadow-none"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
        
        {/* Bottom Segment: Copyright & Back To Top Interaction */}
        <div className="mt-4 pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-medium">
          <p>© {currentYear} Vishwathma N. All rights reserved.</p>
          
          {/* Back to top button */}
          <button
            onClick={handleScrollToTop}
            className="group flex items-center gap-1.5 text-slate-400 hover:text-slate-900 font-semibold transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5 duration-300" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;