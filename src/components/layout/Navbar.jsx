'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import Container from '../ui/Container';
import Button from '../ui/Button';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Apartments', href: '#villa-details' },
  { name: 'Features', href: '#amenities' },
  { name: 'Location', href: '#location' },
  { name: 'Booking', href: '#booking' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <Container className="flex justify-between items-center">
        <div className="flex-1">
          <a href="#hero" className="block">
            <Image 
              src="/logo.png" 
              alt="Koosh Management Rental Logo" 
              width={150} 
              height={40} 
              className="object-contain"
              priority
              loading="eager"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-800 hover:text-[#b19470] transition-colors px-2"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button 
            onClick={() => window.location.href = '#booking'}
            className="ml-4"
          >
            Book Now
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#b19470] focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg"
          >
            <Container className="py-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-800 hover:text-[#b19470] transition-colors py-2 px-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <Button 
                  onClick={() => {
                    window.location.href = '#booking';
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Book Now
                </Button>
                <a 
                  href="tel:+19543197577" 
                  className="flex items-center justify-center space-x-2 text-[#b19470] py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FaPhone />
                  <span>Call Us</span>
                </a>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 