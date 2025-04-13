'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUniversalAccess, FaTextHeight, FaFont, FaAdjust } from 'react-icons/fa';

const Accessibility = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(0);
  const [highContrast, setHighContrast] = useState(false);

  // פונקציה להגדלת גודל הפונט
  const changeFontSize = (change) => {
    const newSize = fontSize + change;
    setFontSize(newSize);
    
    // הוספת משתנה CSS גלובאלי שניתן להשתמש בו בכל מקום באתר
    document.documentElement.style.setProperty('--accessibility-font-size', `${newSize}px`);
  };

  // פונקציה להחלפת מצב ניגודיות גבוהה
  const toggleHighContrast = () => {
    const newContrast = !highContrast;
    setHighContrast(newContrast);
    
    if (newContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  };

  return (
    <>
      {/* כפתור פתיחת תפריט הנגישות */}
      <motion.button
        className="fixed top-1/2 left-3 z-50 bg-[#4caf50] text-white p-3 rounded-full shadow-lg hover:bg-[#3d8b40] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="אפשרויות נגישות"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaUniversalAccess className="text-lg" />
      </motion.button>

      {/* תפריט הנגישות */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed top-1/2 left-16 transform -translate-y-1/2 z-50 bg-white p-4 rounded-lg shadow-lg border border-gray-200 w-64"
          >
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <FaUniversalAccess /> אפשרויות נגישות
            </h3>
            
            <div className="space-y-4">
              {/* שינוי גודל טקסט */}
              <div>
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <FaTextHeight /> גודל טקסט
                </h4>
                <div className="flex justify-between">
                  <button
                    className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-md"
                    onClick={() => changeFontSize(-1)}
                    aria-label="הקטנת גודל טקסט"
                  >
                    <FaFont className="text-sm" /> -
                  </button>
                  <span className="mx-2">{fontSize}</span>
                  <button
                    className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-md"
                    onClick={() => changeFontSize(1)}
                    aria-label="הגדלת גודל טקסט"
                  >
                    <FaFont className="text-lg" /> +
                  </button>
                </div>
              </div>
              
              {/* ניגודיות גבוהה */}
              <div>
                <button
                  className={`flex items-center gap-2 w-full px-3 py-2 rounded-md ${
                    highContrast ? 'bg-[#4caf50] text-white' : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  onClick={toggleHighContrast}
                >
                  <FaAdjust /> ניגודיות גבוהה
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* סגנונות CSS למצב ניגודיות גבוהה */}
      {highContrast && (
        <style jsx global>{`
          .high-contrast {
            filter: contrast(150%);
          }
        `}</style>
      )}
    </>
  );
};

export default Accessibility; 