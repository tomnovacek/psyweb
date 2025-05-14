import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import translationEN from './locales/en/translation.json';
import translationCS from './locales/cs/translation.json';

// Handle missing translations
const handleMissingTranslation = (key, defaultValue) => {
  if (process.env.NODE_ENV === 'development') {
    console.warn(`Missing translation for key: ${key}`);
  }
  return defaultValue || key;
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN
      },
      cs: {
        translation: translationCS
      }
    },
    fallbackLng: 'cs',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['path', 'navigator'],
      lookupFromPathIndex: 0
    },
    missingKeyHandler: (lng, ns, key, fallbackValue) => handleMissingTranslation(key, fallbackValue)
  });

export default i18n; 