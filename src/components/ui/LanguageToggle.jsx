'use client';

import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="relative group flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg"
      aria-label={`Switch to ${language === 'en' ? 'Hebrew' : 'English'}`}
    >
      {/* Language Icons */}
      <div className="flex items-center gap-2">
        {language === 'en' ? (
          <>
            <span className="text-2xl">🇺🇸</span>
            <span className="text-sm font-medium text-blue-800 group-hover:text-blue-600 transition-colors">EN</span>
          </>
        ) : (
          <>
            <span className="text-2xl">🇮🇱</span>
            <span className="text-sm font-medium text-blue-800 group-hover:text-blue-600 transition-colors">עב</span>
          </>
        )}
      </div>
      
      {/* Toggle indicator */}
      <div className="w-6 h-3 bg-gray-300 rounded-full relative overflow-hidden">
        <div 
          className={`absolute top-0 h-full w-3 bg-blue-600 rounded-full transition-transform duration-300 ease-in-out ${
            language === 'he' ? 'translate-x-3' : 'translate-x-0'
          }`}
        />
      </div>
    </button>
  );
};

export default LanguageToggle; 