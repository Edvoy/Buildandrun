import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoHeader from "@/assets/logo-header.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#accueil", label: "accueil" },
    { href: "#offres", label: "offres" },
    { href: "#methode", label: "méthode" },
    { href: "#etude-de-cas", label: "étude de cas" },
    { href: "#apropos", label: "à propos" },
    { href: "#contact", label: "contact" },
  ];

  return (
    <header className="relative z-50 bg-foreground">
      <div className="px-6 md:px-12 lg:px-20 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#accueil" className="flex items-center gap-3">
          <img 
            src={logoHeader} 
            alt="Build&Run Logo" 
            className="h-8 w-auto"
          />
          <div className="flex flex-col">
            <span className="text-background text-sm font-light tracking-wide">build&run</span>
            <span className="text-background/60 text-xs mono">business architecture</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-background/60 hover:text-background transition-colors text-sm font-light"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-background"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-foreground border-t border-background/20"
          >
            <nav className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-background font-light text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
