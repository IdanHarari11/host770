'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import LanguageToggle from '@/components/ui/LanguageToggle';
import { useTranslation } from '@/hooks/useTranslation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, getTextAlign } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', href: '#hero', text: t('nav.home') },
    { id: 'gallery', href: '#gallery', text: t('nav.gallery') },
    { id: 'apartments', href: '#villa-details', text: t('nav.apartments') },
    { id: 'features', href: '#amenities', text: t('nav.features') },
    { id: 'location', href: '#location', text: t('nav.location') },
    { id: 'booking', href: '#booking', text: t('nav.booking') }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-blue-200/50' 
        : 'bg-white/80 backdrop-blur-sm shadow-lg'
    }`}>
      <Container>
        <div className={`flex justify-between items-center transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-6'
        }`}>
          {/* Logo */}
          <div className="flex-1">
            <a href="#hero" className="block group">
              <Image
                src="/logo.png"
                alt="Host770 Logo"
                width={isScrolled ? 140 : 160}
                height={isScrolled ? 47 : 53}
                className={`object-contain transition-all duration-300 group-hover:scale-105 ${
                  isScrolled ? 'h-12 w-auto' : 'h-14 w-auto'
                }`}
                priority
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden lg:flex space-x-8 ${getTextAlign()}`}>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="relative text-blue-800 hover:text-blue-600 transition-all duration-300 px-3 py-2 font-medium text-lg group"
              >
                {link.text}
                {/* Hover underline effect */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <LanguageToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-blue-800 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden mt-2 pb-6 space-y-1 ${getTextAlign()} border-t border-blue-200/50 pt-4`}>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="block text-blue-800 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 py-3 px-4 rounded-lg font-medium text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.text}
              </a>
            ))}
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar; 