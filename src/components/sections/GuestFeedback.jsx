'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteRight, FaStar } from 'react-icons/fa';
import Section from '../ui/Section';
import { register } from 'swiper/element/bundle';
import { useTranslation } from '@/hooks/useTranslation';

// Register Swiper as a web component
register();

const GuestFeedback = () => {
  const { t } = useTranslation();
  
  // Guest reviews data
  const reviews = [
    {
      id: 1,
      name: 'Sarah & David',
      date: 'July 2024',
      rating: 5,
      text: 'Perfect kosher apartment for our family vacation! The kashering was done professionally and the location near the synagogue was ideal.'
    },
    {
      id: 2,
      name: 'Rabbi Cohen',
      date: 'June 2024',
      rating: 5,
      text: 'Excellent service from Host770. The apartment was fully kosher-certified and walking distance to minyan. Highly recommended for Torah observant families.'
    },
    {
      id: 3,
      name: 'Miriam & Yosef',
      date: 'May 2024',
      rating: 5,
      text: 'Amazing experience for our honeymoon! The kosher kitchen was perfectly set up and the staff understood all our religious requirements.'
    },
    {
      id: 4,
      name: 'Goldstein Family',
      date: 'April 2024',
      rating: 4,
      text: 'Great location with easy access to kosher restaurants and mikvahs. The apartment was clean and well-maintained according to halachic standards.'
    },
    {
      id: 5,
      name: 'Chaya',
      date: 'March 2024',
      rating: 5,
      text: 'Host770 made our Miami stay worry-free! Everything was kosher and the customer service in Hebrew was excellent. Will definitely return!'
    },
    {
      id: 6,
      name: 'Shimon',
      date: 'February 2024',
      rating: 5,
      text: 'Business trip made easy with kosher accommodations. The apartment had everything needed for maintaining kashrut away from home.'
    }
  ];
  
  // Reference to Swiper component
  const swiperRef = useRef(null);
  
  useEffect(() => {
    // Set Swiper parameters
    const swiperContainer = swiperRef.current;
    const params = {
      slidesPerView: 1,
      spaceBetween: 16,
      grabCursor: true,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        }
      }
    };

    // Set parameters and initialize Swiper
    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  // Star rating component
  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <FaStar 
            key={i}
            className={i < rating ? "text-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>
    );
  };

  // Animation for review cards
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <Section 
      id="reviews" 
      title="Guest Reviews"
      subtitle={`What our guests say about their stay at ${t('hero.title')}`}
      bgColor="bg-white"
    >
      <div className="relative w-full overflow-hidden py-8">
        <swiper-container 
          ref={swiperRef} 
          init="false"
          dir="ltr"
          class="w-full h-full"
        >
          {reviews.map((review) => (
            <swiper-slide key={review.id} class="h-auto p-4">
              <motion.div 
                className="bg-blue-50 rounded-xl shadow-lg p-6 h-full flex flex-col"
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="text-blue-600 opacity-30 mb-3">
                  <FaQuoteRight size={24} />
                </div>
                
                <StarRating rating={review.rating} />
                
                <p className="text-gray-700 mb-4 flex-grow">&ldquo;{review.text}&rdquo;</p>
                
                <div className="flex items-center mt-auto">
                  <div className="flex-shrink-0 h-10 w-10 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-600 font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <h4 className="font-bold">{review.name}</h4>
                    <p className="text-gray-500 text-sm">{review.date}</p>
                  </div>
                </div>
              </motion.div>
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
      
      {/* Custom navigation buttons */}
      <div className="flex justify-center gap-2 mt-6">
        <button
          onClick={() => swiperRef.current.swiper.slidePrev()}
          className="bg-white border border-gray-200 rounded-full w-10 h-10 flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors"
          aria-label="Previous review"
        >
          <span className="text-lg">‹</span>
        </button>
        <button
          onClick={() => swiperRef.current.swiper.slideNext()}
          className="bg-white border border-gray-200 rounded-full w-10 h-10 flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors"
          aria-label="Next review"
        >
          <span className="text-lg">›</span>
        </button>
      </div>
    </Section>
  );
};

export default GuestFeedback; 