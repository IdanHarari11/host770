import { useLanguage } from '@/contexts/LanguageContext';
import { texts } from '@/lib/i18n/texts';

export const useTranslation = () => {
  const { language, isRTL } = useLanguage();

  // Get nested property from object using dot notation
  const getNestedProperty = (obj, path) => {
    return path.split('.').reduce((current, key) => {
      return current && current[key] !== undefined ? current[key] : null;
    }, obj);
  };

  // Translation function with interpolation support
  const t = (key, variables = {}) => {
    try {
      // Get text for current language
      const currentLanguageTexts = texts[language];
      if (!currentLanguageTexts) {
        console.warn(`Language '${language}' not found in texts`);
        return key;
      }

      // Get the translation text
      let text = getNestedProperty(currentLanguageTexts, key);
      
      // Fallback to English if translation not found
      if (text === null && language !== 'en') {
        console.warn(`Translation key '${key}' not found for language '${language}', falling back to English`);
        text = getNestedProperty(texts.en, key);
      }

      // If still not found, return the key
      if (text === null) {
        console.warn(`Translation key '${key}' not found in any language`);
        return key;
      }

      // Handle interpolation
      if (typeof text === 'string' && Object.keys(variables).length > 0) {
        return text.replace(/\{\{(\w+)\}\}/g, (match, variable) => {
          return variables[variable] !== undefined ? variables[variable] : match;
        });
      }

      return text;
    } catch (error) {
      console.error(`Error getting translation for key '${key}':`, error);
      return key;
    }
  };

  // Helper function for text alignment classes
  const getTextAlign = () => {
    return isRTL ? 'text-right' : 'text-left';
  };

  // Helper function for flex direction classes
  const getFlexDirection = () => {
    return isRTL ? 'flex-row-reverse' : 'flex-row';
  };

  // Helper function for margin/padding classes (for directional spacing)
  const getDirectionalSpacing = (baseClass) => {
    if (isRTL) {
      return baseClass.replace(/ml-/g, 'temp-mr-')
                    .replace(/mr-/g, 'ml-')
                    .replace(/temp-mr-/g, 'mr-')
                    .replace(/pl-/g, 'temp-pr-')
                    .replace(/pr-/g, 'pl-')
                    .replace(/temp-pr-/g, 'pr-');
    }
    return baseClass;
  };

  return {
    t,
    language,
    isRTL,
    getTextAlign,
    getFlexDirection,
    getDirectionalSpacing,
  };
}; 