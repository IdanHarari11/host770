'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Skeleton from '../ui/Skeleton';
import { useTranslation } from '@/hooks/useTranslation';

const Hero = () => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Modern kosher apartments and living spaces from Unsplash
  const backgroundImages = [
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop', // Modern apartment living room
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop', // Modern kitchen with kosher-style design
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2070&auto=format&fit=crop', // Elegant apartment bedroom
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2070&auto=format&fit=crop', // Modern apartment exterior/balcony view
    'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2070&auto=format&fit=crop', // Clean modern kitchen
  ];

  const imageDescriptions = [
    'Modern furnished living room in Miami kosher apartment',
    'Contemporary kosher kitchen with modern appliances and design',
    'Elegant bedroom in fully furnished apartment for religious families',
    'Modern apartment building exterior with balcony view in Miami',
    'Clean modern kosher kitchen perfect for religious Jewish families'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [backgroundImages.length]);

  return (
    <section 
      id="hero" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Images */}
      {!imagesLoaded && (
        <Skeleton className="absolute inset-0 w-full h-full" />
      )}
      {backgroundImages.map((image, index) => (
        <div 
          key={index}
          className="absolute inset-0 transition-opacity duration-1500"
          style={{
            opacity: index === currentImageIndex ? 1 : 0,
            zIndex: index === currentImageIndex ? 1 : 0,
          }}
        >
          <Image
            src={image}
            alt={imageDescriptions[index]}
            fill
            priority={index === 0}
            sizes="100vw"
            quality={80}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFeAJ5MUZMpgAAAABJRU5ErkJggg=="
            className="object-cover"
            loading={index === 0 ? "eager" : "lazy"}
            onLoad={() => setImagesLoaded(true)}
          />
        </div>
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 max-w-4xl">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t('hero.subtitle')}
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t('hero.description')}
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button onClick={() => window.location.href = '#booking'}>
            {t('hero.bookNow')}
          </Button>
          
          <Button 
            variant="secondary"
            onClick={() => window.location.href = 'tel:+19543197577'}
          >
            {t('nav.callUs')}
          </Button>
        </motion.div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div
          className="w-8 h-12 border-2 border-white rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <motion.div 
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ opacity: [1, 0, 1], y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 