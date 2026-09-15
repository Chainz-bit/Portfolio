import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "Tentang" },
  { href: "#projects", label: "Proyek" },
  { href: "#experience", label: "Keahlian" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-strong py-3 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary transition-colors flex items-center"
        >
          Diwangga.<span className="text-primary">Dev</span>
        </a>

        {/* Desktop Nav - Floating Glass Pill */}
        <div className="hidden md:flex items-center">
          <div className="bg-slate-900/60 backdrop-blur-md rounded-full px-6 py-2 flex items-center gap-1 border border-white/10 shadow-lg shadow-black/20 hover:border-primary/30 transition-colors">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-1.5 text-sm font-medium text-slate-200 hover:text-teal-400 hover:bg-white/5 rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a href="#contact" className="inline-block">
            <Button
              size="sm"
              className="!text-slate-950 font-semibold hover:scale-105 hover:shadow-primary/40 transition-all duration-300 cursor-pointer"
            >
              Hubungi Saya
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-200 hover:text-teal-400 py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full !text-slate-950 font-semibold">
                Hubungi Saya
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
