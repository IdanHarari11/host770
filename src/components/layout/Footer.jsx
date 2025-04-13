'use client';

import { FaPhone, FaWhatsapp, FaInstagram, FaFacebook, FaMapMarkerAlt } from 'react-icons/fa';
import Container from '../ui/Container';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Koosh Management Rental</h3>
            <p className="text-gray-300 mb-4">
              Fully furnished and designed apartments for rent at the Griffin Project.
              Modern, white + cream aesthetic design, perfect for families & hi-tech professionals.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <FaPhone className="text-[#b19470]" />
                <a href="tel:+19543197577" className="text-gray-300 hover:text-white">
                  954-319-7577
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaWhatsapp className="text-[#b19470]" />
                <a 
                  href="https://wa.me/19543197577" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  Send WhatsApp Message
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-[#b19470]" />
                <span className="text-gray-300">
                  2750 Griffin Road, Fort Lauderdale
                </span>
              </li>
            </ul>
          </div>

          {/* Social & Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white text-2xl"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white text-2xl"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
            </div>
            <div className="space-y-2">
              <a href="#gallery" className="block text-gray-300 hover:text-white">Gallery</a>
              <a href="#booking" className="block text-gray-300 hover:text-white">Check Availability</a>
              <a href="#location" className="block text-gray-300 hover:text-white">Directions</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
          <p>© {currentYear} Koosh Management Rental. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4 text-sm">
            <a href="#" className="hover:text-white">Terms of Use</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer; 