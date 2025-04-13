'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaArrowLeft, FaExpand } from 'react-icons/fa';
import Section from '../ui/Section';

const images = [
  { url: '/image/WhatsApp Image 2025-04-09 at 09.27.32.jpeg', alt: 'וילה אורית - חזית הבית' },
  { url: '/image/WhatsApp Image 2025-04-09 at 09.27.31.jpeg', alt: 'נוף מרהיב לגלבוע' },
  { url: '/image/WhatsApp Image 2025-04-09 at 09.27.13.jpeg', alt: 'בריכת שחייה פרטית' },
  { url: '/image/WhatsApp Image 2025-04-09 at 09.27.14.jpeg', alt: 'אזור ישיבה חיצוני' },
  { url: '/image/WhatsApp Image 2025-04-09 at 09.25.29.jpeg', alt: 'חדר שינה מפואר' },
  { url: '/image/WhatsApp Image 2025-04-09 at 09.25.30 (1).jpeg', alt: 'מטבח מאובזר' },
  { url: '/image/WhatsApp Image 2025-04-09 at 09.25.31 (1).jpeg', alt: 'סלון מרווח' },
  { url: '/image/WhatsApp Image 2025-04-09 at 09.27.17 (3).jpeg', alt: 'פינת אוכל' },
  { url: '/image/WhatsApp Image 2025-04-09 at 09.27.20.jpeg', alt: 'מרפסת עם נוף' },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, []);

  // Auto-slide
  useEffect(() => {
    
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [goToNext]);
  

  return (
    <Section 
      id="gallery" 
      title="גלריה"
      subtitle="התרשמו מהנוף, החדרים והאירוח היוקרתי בוילה אורית"
      bgColor="bg-[#f5f5dc]"
    >
      <div className={`
        relative overflow-hidden rounded-2xl shadow-xl
        w-full h-[300px] md:h-[500px]
      `}>
        
        {/* Images */}
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: index === currentIndex ? 1 : 0,
                scale: index === currentIndex ? 1 : 1.1 
              }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black to-transparent p-4 text-white">
                <p className="text-lg md:text-xl">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 bg-white bg-opacity-50 p-3 rounded-full text-gray-800 hover:bg-opacity-70 transition-all"
          aria-label="תמונה קודמת"
        >
          <FaArrowRight />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 bg-white bg-opacity-50 p-3 rounded-full text-gray-800 hover:bg-opacity-70 transition-all"
          aria-label="תמונה הבאה"
        >
          <FaArrowLeft />
        </button>
        
        {/* Thumbnails */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-white scale-125' : 'bg-white bg-opacity-50'
              }`}
              aria-label={`עבור לתמונה ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Grid Gallery */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-8 text-center">תמונות נוספות</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            '/image/WhatsApp Image 2025-04-09 at 09.25.30 (2).jpeg',
            '/image/WhatsApp Image 2025-04-09 at 09.25.31 (2).jpeg',
            '/image/WhatsApp Image 2025-04-09 at 09.25.32 (1).jpeg',
            '/image/WhatsApp Image 2025-04-09 at 09.25.33 (1).jpeg',
            '/image/WhatsApp Image 2025-04-09 at 09.26.57 (1).jpeg',
            '/image/WhatsApp Image 2025-04-09 at 09.26.58.jpeg',
            '/image/WhatsApp Image 2025-04-09 at 09.27.01.jpeg',
            '/image/WhatsApp Image 2025-04-09 at 09.27.19 (1).jpeg',
          ].map((img, index) => (
            <motion.div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                setCurrentIndex(images.findIndex(image => image.url === img) !== -1 
                  ? images.findIndex(image => image.url === img) 
                  : 0);
              }}
            >
              <img
                src={img}
                alt={`תמונה נוספת של וילה אורית ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Gallery; 