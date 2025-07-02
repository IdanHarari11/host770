'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [isRTL, setIsRTL] = useState(false);

  // Check if localStorage is available (client-side only)
  const getStoredLanguage = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('language') || 'en';
    }
    return 'en';
  };

  // Store language in localStorage (client-side only)
  const storeLanguage = (lang) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };

  useEffect(() => {
    const storedLanguage = getStoredLanguage();
    setLanguage(storedLanguage);
    setIsRTL(storedLanguage === 'he');
  }, []);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    setIsRTL(newLanguage === 'he');
    storeLanguage(newLanguage);
    
    // Update document direction and language
    if (typeof document !== 'undefined') {
      document.documentElement.dir = newLanguage === 'he' ? 'rtl' : 'ltr';
      document.documentElement.lang = newLanguage;
    }
  };

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'he' : 'en';
    changeLanguage(newLanguage);
  };

  // Apply direction and language to document on mount and change
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';
      document.documentElement.lang = language;
    }
  }, [language]);

  const value = {
    language,
    isRTL,
    changeLanguage,
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}; 