import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-theme-dark/90 shadow-md backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <Link
          to="/"
          className="text-2xl font-bold text-theme-secondary hover:text-theme-primary transition-colors"
        >
          Vishwathma N
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-theme-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/Vishwathma_Resume.pdf"
            download
            className="text-white bg-theme-primary hover:bg-theme-primary/90 px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Resume
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-theme-secondary" />
          ) : (
            <Menu className="h-6 w-6 text-theme-secondary" />
          )}
        </button>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-theme-dark shadow-lg">
            <nav className="flex flex-col p-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="py-2 text-gray-600 hover:text-theme-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="Vishwathma_Portfolio\Vishwathma_N_Resume.pdf"
                download
                className="mt-4 text-white bg-theme-primary hover:bg-theme-primary/90 px-4 py-2 rounded-md text-center"
              >
                Resume
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
