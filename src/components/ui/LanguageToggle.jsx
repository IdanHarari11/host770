'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/hooks/useTranslation';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <button
      onClick={toggleLanguage}
      className="relative group flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg"
      aria-label={language === 'en' ? t('accessibility.switchToHebrew') : t('accessibility.switchToEnglish')}
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
    </button>
  );
};

export default LanguageToggle; 