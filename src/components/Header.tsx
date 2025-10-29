"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 sm:h-20 px-6 sm:px-8">
            <a href="#" className="flex items-center">
              <span className="text-xl sm:text-2xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                Yakov Suits
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-8 min-w-0">
              <a
                href="#uslugi"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                Услуги
              </a>
              <a
                href="#keisy"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                Кейсы
              </a>
              <a
                href="#komanda"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                Команда
              </a>
            </nav>

            <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
              <Button
                asChild
                size="sm"
                className="hidden sm:inline-flex shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap"
              >
                <a href="#cta">Обсудить проект</a>
              </Button>

              <Button
                asChild
                size="sm"
                className="inline-flex sm:hidden text-xs px-4 py-2"
              >
                <a href="#cta">Написать</a>
              </Button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {mobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />
          <nav className="fixed top-16 left-0 right-0 bg-background border-b border-border shadow-lg p-4 space-y-4">
            <a
              href="#uslugi"
              onClick={closeMobileMenu}
              className="block py-3 px-4 text-base font-medium text-foreground hover:bg-secondary rounded-lg transition-colors"
            >
              Услуги
            </a>
            <a
              href="#keisy"
              onClick={closeMobileMenu}
              className="block py-3 px-4 text-base font-medium text-foreground hover:bg-secondary rounded-lg transition-colors"
            >
              Кейсы
            </a>
            <a
              href="#komanda"
              onClick={closeMobileMenu}
              className="block py-3 px-4 text-base font-medium text-foreground hover:bg-secondary rounded-lg transition-colors"
            >
              Команда
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
