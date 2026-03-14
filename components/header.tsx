"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Início", href: "#" },
  { name: "Nossa História", href: "#historia" },
  { name: "Atividades", href: "#atividades" },
  { name: "Transparência", href: "#transparencia" },
  { name: "Contato", href: "#contato" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 shadow-lg backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
                isScrolled ? "bg-teal" : "bg-yellow"
              }`}
            >
              <span
                className={`text-sm font-bold ${
                  isScrolled ? "text-white" : "text-foreground"
                }`}
              >
                AS
              </span>
            </div>
            <span
              className={`font-sans text-lg font-bold transition-colors ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Creche Auta de Souza
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-teal ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
            <Button
              className={`rounded-full transition-all ${
                isScrolled
                  ? "bg-teal text-white hover:bg-teal-dark"
                  : "bg-yellow text-foreground hover:bg-yellow-dark"
              }`}
            >
              Como Ajudar
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 md:hidden ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-border bg-white md:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-foreground transition-colors hover:text-teal"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button className="mt-2 w-full rounded-full bg-teal text-white hover:bg-teal-dark">
                Como Ajudar
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
