import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './en.json';
import translationTR from './tr.json';

const resources = {
  en: {
    translation: translationEN,
  },
  tr: {
    translation: translationTR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'tr', // Varsayılan olarak İngilizce kullan
  fallbackLng: 'en', // Yedek dil
  interpolation: {
    escapeValue: false, // React içindeki değişkenlerin kullanımını etkinleştir
  },
  whitelist: ['en', 'tr'],
});

export default i18n;
