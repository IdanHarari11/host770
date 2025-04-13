'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteRight, FaStar } from 'react-icons/fa';
import Section from '../ui/Section';
import { register } from 'swiper/element/bundle';

// רישום Swiper כקומפוננטת web component
register();

const GuestFeedback = () => {
  // מידע על ביקורות האורחים
  const reviews = [
    {
      id: 1,
      name: 'שירי',
      date: 'יולי 2024',
      rating: 5,
      text: 'הוילה מהממת! הבריכה נקייה והנוף עוצר נשימה. נחזור בהחלט בקרוב!'
    },
    {
      id: 2,
      name: 'יוסי',
      date: 'יוני 2024',
      rating: 5,
      text: 'מקום מושלם למשפחות. הילדים נהנו מהבריכה ואנחנו מהשקט והפרטיות. התארחנו כבר פעמיים השנה!'
    },
    {
      id: 3,
      name: 'מיכל ודני',
      date: 'מאי 2024',
      rating: 5,
      text: 'בילינו סוף שבוע רומנטי מושלם בוילה אורית. הג׳קוזי והנוף לגלבוע הם משהו שלא נשכח במהרה.'
    },
    {
      id: 4,
      name: 'משפחת כהן',
      date: 'אפריל 2024',
      rating: 4,
      text: 'האירוח היה מעולה והבית מאובזר ברמה גבוהה. נהנינו מאוד מהשהייה ומהאטרקציות בסביבה.'
    },
    {
      id: 5,
      name: 'רונית',
      date: 'מרץ 2024',
      rating: 5,
      text: 'מקום נקי, מטופח ומפנק. צבי ואורית מארחים למופת ודואגים לכל צורך. מומלץ בחום!'
    },
    {
      id: 6,
      name: 'אלון',
      date: 'פברואר 2024',
      rating: 5,
      text: 'הגענו לחגוג יום הולדת. הוילה מרווחת ומאובזרת היטב. המטבח מושלם לבישול ארוחות משותפות והבריכה היתה חוויה בפני עצמה.'
    }
  ];
  
  // רפרנס לקומפוננטת הסווייפר
  const swiperRef = useRef(null);
  
  useEffect(() => {
    // הגדרת פרמטרים לסווייפר
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

    // הגדרת הפרמטרים והתחלת הסווייפר
    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  // קומפוננטת דירוג כוכבים
  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1 mb-2" dir="ltr">
        {[...Array(5)].map((_, i) => (
          <FaStar 
            key={i}
            className={i < rating ? "text-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>
    );
  };

  // אנימציה לכרטיסי הביקורות
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
      title="ביקורות אורחים"
      subtitle="מה אומרים עלינו האורחים שהתארחו בוילה אורית בגלבוע"
    >
      <div className="relative w-full overflow-hidden py-8">
        <swiper-container 
          ref={swiperRef} 
          init="false"
          dir="rtl"
          class="w-full h-full"
        >
          {reviews.map((review) => (
            <swiper-slide key={review.id} class="h-auto p-4">
              <motion.div 
                className="bg-white rounded-xl shadow-lg p-6 h-full flex flex-col"
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="text-[#4caf50] opacity-30 mb-3">
                  <FaQuoteRight size={24} />
                </div>
                
                <StarRating rating={review.rating} />
                
                <p className="text-gray-700 mb-4 flex-grow">"{review.text}"</p>
                
                <div className="flex items-center mt-auto">
                  <div className="flex-shrink-0 h-10 w-10 bg-[#4caf50]/20 rounded-full flex items-center justify-center text-[#4caf50] font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div className="mr-3">
                    <h4 className="font-bold">{review.name}</h4>
                    <p className="text-gray-500 text-sm">{review.date}</p>
                  </div>
                </div>
              </motion.div>
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
      
      {/* כפתורי ניווט מותאמים */}
      <div className="flex justify-center gap-2 mt-6">
        <button
          onClick={() => swiperRef.current.swiper.slidePrev()}
          className="bg-white border border-gray-200 rounded-full w-10 h-10 flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors"
          aria-label="ביקורת קודמת"
        >
          <span className="text-lg">‹</span>
        </button>
        <button
          onClick={() => swiperRef.current.swiper.slideNext()}
          className="bg-white border border-gray-200 rounded-full w-10 h-10 flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors"
          aria-label="ביקורת הבאה"
        >
          <span className="text-lg">›</span>
        </button>
      </div>
    </Section>
  );
};

export default GuestFeedback; 