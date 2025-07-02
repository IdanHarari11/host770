'use client';

import { FaPhone, FaWhatsapp, FaInstagram, FaFacebook, FaMapMarkerAlt } from 'react-icons/fa';
import Container from '../ui/Container';
import { useTranslation } from '@/hooks/useTranslation';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t, isRTL } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <Container>
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${isRTL ? 'text-right' : 'text-left'}`}>
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {t('hero.title')}
            </h3>
            <p className="text-gray-300 mb-4">
              {t('footer.description')}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {t('footer.contact')}
            </h3>
            <ul className={`space-y-2 ${isRTL ? 'space-x-reverse' : ''}`}>
              <li className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                <FaPhone className="text-blue-400" />
                <a href="tel:+1XXXXXXXXXX" className="text-gray-300 hover:text-white">
                  {t('contact.phone')}
                </a>
              </li>
              <li className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                <FaWhatsapp className="text-blue-400" />
                <a 
                  href="https://wa.me/1XXXXXXXXXX" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  {t('contact.sendMessage')}
                </a>
              </li>
              <li className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                <FaMapMarkerAlt className="text-blue-400" />
                <span className="text-gray-300">
                  {t('contact.address')}
                </span>
              </li>
            </ul>
          </div>

          {/* Social & Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {t('footer.quickLinks')}
            </h3>
            <div className={`flex mb-6 ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
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
              <a href="#gallery" className="block text-gray-300 hover:text-white">
                {t('nav.gallery')}
              </a>
              <a href="#booking" className="block text-gray-300 hover:text-white">
                {t('nav.booking')}
              </a>
              <a href="#location" className="block text-gray-300 hover:text-white">
                {t('nav.location')}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
          <p>© {currentYear} {t('hero.title')}. {t('footer.allRightsReserved')}</p>
          <div className={`mt-2 flex justify-center text-sm ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
            <a href="#" className="hover:text-white">
              {t('footer.termsOfService')}
            </a>
            <a href="#" className="hover:text-white">
              {t('footer.privacyPolicy')}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer; 