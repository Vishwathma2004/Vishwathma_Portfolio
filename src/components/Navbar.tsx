import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowDownToLine } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { name: "About",      href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects",   href: "#projects" },
  { name: "Skills",     href: "#skills" },
  { name: "Contact",    href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen]     = useState(false);
  const [isScrolled, setIsScrolled]     = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);

  /* ── Scroll detection ── */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Active section via IntersectionObserver ── */
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* ── Close menu on outside click ── */
  useEffect(() => {
    if (!isMenuOpen) return;
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isMenuOpen]);

  /* ── Prevent body scroll when mobile menu open ── */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const scrollTo = (href: string) => {
    setIsMenuOpen(false);
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-3">
      <header
        ref={menuRef}
        className={`w-full max-w-5xl transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 shadow-lg shadow-slate-900/5 rounded-2xl"
            : "bg-transparent"
        }`}
      >
        <div className={`h-14 px-5 flex justify-between items-center transition-all duration-300`}>

          {/* Brand */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
            aria-label="Go to top"
          >
            <span className="w-7 h-7 flex items-center justify-center rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold font-mono group-hover:bg-blue-600 dark:group-hover:bg-blue-500 transition-colors duration-200">
              V
            </span>
            <span className="text-sm font-semibold text-slate-800 dark:text-slate-100 tracking-tight">
              Vishwathma N
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className={`nav-link relative ${
                    isActive
                      ? "text-slate-900 dark:text-white font-semibold"
                      : "text-slate-500 dark:text-slate-400"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-600" />
                  )}
                </button>
              );
            })}

            <ThemeToggle />

            <div className="w-px h-4 bg-slate-200 dark:bg-slate-700 mx-2" />

            <a
              href="/Vishwathma_N_Resume.pdf"
              download
              className="inline-flex items-center gap-1.5 bg-slate-900 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-500 text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 shadow-sm"
            >
              Resume
              <ArrowDownToLine className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {isMenuOpen && (
          <div className="md:hidden mx-2 mb-2 p-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl rounded-xl animate-slide-in">
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <button
                    key={link.name}
                    onClick={() => scrollTo(link.href)}
                    className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold"
                        : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
              <div className="h-px bg-slate-100 dark:bg-slate-800 my-2" />
              <a
                href="/Vishwathma_N_Resume.pdf"
                download
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-slate-900 text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-600 transition-colors"
              >
                Download Resume
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