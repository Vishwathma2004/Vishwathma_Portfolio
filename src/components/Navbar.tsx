import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowDownToLine, Terminal } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Strategically balanced core categories to accommodate the Skills section safely
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" }, // Added explicit target mapping to your Technical Capabilities section
    { name: "Journey", href: "#experience" }, 
    { name: "Projects", href: "#projects" },
    { name: "Honors", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-0 sm:px-4 md:px-6 transition-all duration-300">
      <header
        className={`mx-auto w-full max-w-5xl transition-all duration-500 ${
          isScrolled
            ? "mt-4 bg-white/80 backdrop-blur-md border border-slate-200/50 shadow-lg shadow-slate-100/40 rounded-2xl h-14"
            : "bg-transparent h-20 border-border/0"
        }`}
      >
        <div className="h-full px-6 flex justify-between items-center">
          
          {/* Portfolio Brand Signature Label */}
          <Link
            to="/"
            className="flex items-center gap-2 text-base font-bold text-slate-900 tracking-tight hover:opacity-80 transition-opacity"
          >
            <div className="p-1.5 bg-slate-900 text-white rounded-lg hidden sm:block">
              <Terminal className="w-3.5 h-3.5" />
            </div>
            <span>Vishwathma N</span>
          </Link>

          {/* Desktop Navigation Link Group */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-slate-900 px-2.5 py-1.5 rounded-lg hover:bg-slate-50 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
            
            {/* Download Resume Action Element */}
            <div className="h-4 w-px bg-slate-200 mx-2.5" />
            <a
              href="/Vishwathma_N_Resume.pdf"
              download
              className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white px-3.5 py-1.5 rounded-xl text-xs font-bold tracking-wide uppercase shadow-sm shadow-slate-900/10 transition-all active:scale-[0.98]"
            >
              <span>Resume</span>
              <ArrowDownToLine className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* Mobile Hamburg Trigger Element */}
          <button
            className="md:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-xl transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu Drawer Panel */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 mt-2 p-4 bg-white border border-slate-100 shadow-xl rounded-2xl animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-slate-100 my-2" />
              <a
                href="/Vishwathma_N_Resume.pdf"
                download
                className="flex items-center justify-center gap-2 bg-slate-900 text-white py-3 rounded-xl font-semibold text-sm shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Download Resume</span>
                <ArrowDownToLine className="w-4 h-4" />
              </a>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;