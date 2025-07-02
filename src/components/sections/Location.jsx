'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaDirections } from 'react-icons/fa';
import Section from '../ui/Section';
import Button from '../ui/Button';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';

const Location = () => {
  const { t } = useTranslation();
  const [mapLoaded, setMapLoaded] = useState(false);
  const [isMapVisible, setIsMapVisible] = useState(false);

  // טעינת המפה רק כשהיא נראית במסך
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMapVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const mapElement = document.getElementById('map-container');
    if (mapElement) {
      observer.observe(mapElement);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Section 
      id="location" 
      title={t('nav.location')}
      subtitle={t('contact.address')}
      bgColor="bg-[#f5f5f5]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Map */}
        <div className="order-2 lg:order-1">
          <div className="bg-white p-2 rounded-2xl shadow-lg overflow-hidden h-[350px] lg:h-full">
            <div id="map-container" className="relative w-full h-full rounded-xl overflow-hidden">
              {!mapLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
                </div>
              )}
              {isMapVisible && (
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.3!2d-80.1918!3d25.7617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b64!2sMiami%2C%20FL!5e0!3m2!1sen!2sus!4v1665612345678!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  onLoad={() => setMapLoaded(true)}
                  title="Map location of Host770 Miami"
                ></iframe>
              )}
            </div>
          </div>
        </div>
        
        {/* Info */}
        <div className="order-1 lg:order-2">
          <div className="flex items-center gap-2 text-xl mb-4">
            <FaMapMarkerAlt className="text-blue-600 text-2xl" />
            <h3 className="font-bold">{t('contact.address')}</h3>
          </div>
          
          <p className="text-gray-600 mb-6">
            {t('footer.description')}
          </p>
          
          <Button 
            onClick={() => window.open('https://maps.google.com/?q=Miami+FL', '_blank')}
            className="mb-8"
          >
            <div className="flex items-center gap-2">
              <FaDirections />
              <span>Get Directions</span>
            </div>
          </Button>
          
          <h3 className="text-xl font-bold mb-4 text-blue-600">{t('footer.contact')}</h3>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <ul className="space-y-3">
              <li className="flex gap-2">
                <span className="font-bold">WhatsApp:</span>
                <span>Available 24/6</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">Phone:</span>
                <span>{t('contact.phone')}</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">Email:</span>
                <span>{t('contact.email')}</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">Website:</span>
                <span>www.Host770.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Location; 