'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaClock } from 'react-icons/fa';
import dayjs from 'dayjs';
import Button from '../ui/Button';

const BookingCountdown = () => {
  // נקבע תאריך יעד - הסופ"ש הקרוב
  const [targetDate, setTargetDate] = useState(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });
  
  // כאשר הקומפוננטה נטענת, מחשבים את התאריך של סוף השבוע הקרוב
  useEffect(() => {
    const now = dayjs();
    const friday = now.day(5).hour(17).minute(0).second(0); // יום שישי בשעה 17:00
    
    // אם היום כבר יום שישי אחרי 17:00, קח את יום שישי הבא
    const target = now.isAfter(friday) ? friday.add(7, 'day') : friday;
    
    setTargetDate(target);
  }, []);
  
  // מעדכן את הטיימר בכל שנייה
  useEffect(() => {
    if (!targetDate) return;
    
    const timerInterval = setInterval(() => {
      const now = dayjs();
      
      if (now.isAfter(targetDate)) {
        // אם הגענו לתאריך היעד, עדכן את התאריך לסופ"ש הבא
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
    // גלילה אל אזור ההזמנות בדף
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // אנימציה לספרות
  const numberVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 }
  };
  
  return (
    <div className="bg-gradient-to-l from-[#4caf50]/10 to-[#4caf50]/20 p-6 lg:p-8 rounded-2xl shadow-lg">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="text-center lg:text-right">
          <motion.h3 
            className="text-2xl lg:text-3xl font-bold mb-3 text-[#4caf50]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            נותרו רק {timeLeft.days} ימים להזמין את הסופ"ש הקרוב!
          </motion.h3>
          <motion.p 
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            הבטיחו את מקומכם בוילה אורית בגלבוע לחופשה מושלמת
          </motion.p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 lg:gap-4 mb-4">
            {/* ימים */}
            <div className="flex flex-col items-center">
              <motion.div 
                className="bg-white w-16 lg:w-20 h-16 lg:h-20 rounded-lg shadow-md flex items-center justify-center text-2xl lg:text-3xl font-bold text-[#4caf50]"
                variants={numberVariants}
                initial="initial"
                animate="animate"
                key={timeLeft.days}
              >
                {timeLeft.days}
              </motion.div>
              <span className="text-xs mt-1">ימים</span>
            </div>
            
            <span className="text-2xl">:</span>
            
            {/* שעות */}
            <div className="flex flex-col items-center">
              <motion.div 
                className="bg-white w-16 lg:w-20 h-16 lg:h-20 rounded-lg shadow-md flex items-center justify-center text-2xl lg:text-3xl font-bold text-[#4caf50]"
                variants={numberVariants}
                initial="initial"
                animate="animate"
                key={timeLeft.hours}
              >
                {timeLeft.hours}
              </motion.div>
              <span className="text-xs mt-1">שעות</span>
            </div>
            
            <span className="text-2xl">:</span>
            
            {/* דקות */}
            <div className="flex flex-col items-center">
              <motion.div 
                className="bg-white w-16 lg:w-20 h-16 lg:h-20 rounded-lg shadow-md flex items-center justify-center text-2xl lg:text-3xl font-bold text-[#4caf50]"
                variants={numberVariants}
                initial="initial"
                animate="animate"
                key={timeLeft.minutes}
              >
                {timeLeft.minutes}
              </motion.div>
              <span className="text-xs mt-1">דקות</span>
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
              <span>בדוק זמינות עכשיו</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BookingCountdown; 