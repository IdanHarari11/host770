'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaClock } from 'react-icons/fa';
import dayjs from 'dayjs';
import Button from '../ui/Button';
import { useTranslation } from '@/hooks/useTranslation';

const BookingCountdown = () => {
  const { t } = useTranslation();
  // Set target date - upcoming weekend
  const [targetDate, setTargetDate] = useState(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });
  
  // When component loads, calculate the date for the upcoming weekend
  useEffect(() => {
    const now = dayjs();
    const friday = now.day(5).hour(17).minute(0).second(0); // Friday at 5:00 PM
    
    // If today is already Friday after 5:00 PM, take next Friday
    const target = now.isAfter(friday) ? friday.add(7, 'day') : friday;
    
    setTargetDate(target);
  }, []);
  
  // Update timer every second
  useEffect(() => {
    if (!targetDate) return;
    
    const timerInterval = setInterval(() => {
      const now = dayjs();
      
      if (now.isAfter(targetDate)) {
        // If we reached the target date, update to next weekend
        const newTarget = targetDate.add(7, 'day');
        setTargetDate(newTarget);
        return;
      }
      
      const diff = targetDate.diff(now, 'second');
      const days = Math.floor(diff / (60 * 60 * 24));
      const hours = Math.floor((diff % (60 * 60 * 24)) / (60 * 60));
      const minutes = Math.floor((diff % (60 * 60)) / 60);
      
      setTimeLeft({ days, hours, minutes });
    }, 1000);
    
    return () => clearInterval(timerInterval);
  }, [targetDate]);
  
  const handleCheckAvailability = () => {
    // Scroll to the booking section
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Animation for numbers
  const numberVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 }
  };
  
  return (
    <div className="bg-gradient-to-l from-blue-50/40 to-blue-100/80 p-6 lg:p-8 rounded-2xl shadow-lg">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="text-center lg:text-left">
          <motion.h3 
            className="text-2xl lg:text-3xl font-bold mb-3 text-blue-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t('bookingCountdown.daysLeft').replace('{days}', timeLeft.days)}
          </motion.h3>
          <motion.p 
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('bookingCountdown.secureStay').replace('{title}', t('hero.title'))}
          </motion.p>
        </div>
        
        <div className="flex flex-col items-center gap-4">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">{t('bookingCountdown.timeLeft')}</p>
            <div className="flex gap-3">
              {/* Days */}
              <motion.div 
                className="text-center"
                variants={numberVariants}
                initial="initial"
                animate="animate"
                key={timeLeft.days}
              >
                <div className="bg-blue-600 text-white rounded-lg px-3 py-2 min-w-[60px]">
                  <div className="text-2xl font-bold">{timeLeft.days}</div>
                </div>
                <div className="text-xs text-gray-600 mt-1">{t('bookingCountdown.days')}</div>
              </motion.div>
              
              {/* Hours */}
              <motion.div 
                className="text-center"
                variants={numberVariants}
                initial="initial"
                animate="animate"
                key={timeLeft.hours}
              >
                <div className="bg-blue-500 text-white rounded-lg px-3 py-2 min-w-[60px]">
                  <div className="text-2xl font-bold">{timeLeft.hours}</div>
                </div>
                <div className="text-xs text-gray-600 mt-1">{t('bookingCountdown.hours')}</div>
              </motion.div>
              
              {/* Minutes */}
              <motion.div 
                className="text-center"
                variants={numberVariants}
                initial="initial"
                animate="animate"
                key={timeLeft.minutes}
              >
                <div className="bg-blue-400 text-white rounded-lg px-3 py-2 min-w-[60px]">
                  <div className="text-2xl font-bold">{timeLeft.minutes}</div>
                </div>
                <div className="text-xs text-gray-600 mt-1">{t('bookingCountdown.minutes')}</div>
              </motion.div>
            </div>
          </div>
          
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={handleCheckAvailability}
              className="flex items-center gap-2"
            >
              <FaClock />
              <span>{t('hero.bookNow')}</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BookingCountdown; 