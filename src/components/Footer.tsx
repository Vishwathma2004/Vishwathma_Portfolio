import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800/60 py-10">
      <div className="section-container">

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">

          {/* Brand */}
          <div className="space-y-1">
            <div className="text-sm font-bold text-slate-100 tracking-tight">
              Vishwathma N
            </div>
            <div className="text-xs text-slate-500 font-medium">
              Software Engineer · Full-Stack · AI Applications
            </div>
          </div>

          {/* Quick links */}
          <nav className="hidden md:flex items-center gap-5" aria-label="Footer navigation">
            {[
              { label: "About",      href: "#about" },
              { label: "Experience", href: "#experience" },
              { label: "Projects",   href: "#projects" },
              { label: "Contact",    href: "#contact" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 hover:text-slate-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-1.5">
            <a
              href="https://github.com/Vishwathma2004"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:text-slate-200 hover:bg-slate-800 border border-slate-800 hover:border-slate-600 transition-all"
            >
              <Github size={14} />
            </a>
            <a
              href="https://linkedin.com/in/vishwathma-n"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:text-blue-400 hover:bg-blue-950 border border-slate-800 hover:border-blue-800 transition-all"
            >
              <Linkedin size={14} />
            </a>
            <a
              href="mailto:vishwathman@gmail.com"
              aria-label="Email"
              className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:text-emerald-400 hover:bg-emerald-950 border border-slate-800 hover:border-emerald-800 transition-all"
            >
              <Mail size={14} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-slate-600">
          <span>© {currentYear} Vishwathma N. All rights reserved.</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-1.5 text-slate-500 hover:text-slate-300 transition-colors font-medium"
            aria-label="Scroll to top"
          >
            Back to top
            <ArrowUp
              size={12}
              className="transition-transform group-hover:-translate-y-0.5 duration-200"
            />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;