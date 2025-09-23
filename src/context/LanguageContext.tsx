// src/context/LanguageContext.tsx
'use client';
import { createContext, useState, useEffect, ReactNode } from 'react';
import { translations } from '../data/translations';

type Language = 'en' | 'mr';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: typeof translations['en']; // currently selected translations
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  toggleLanguage: () => {},
  t: translations.en,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [t, setT] = useState(translations.en);

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang) {
      setLanguage(savedLang);
      setT(translations[savedLang]);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang: Language = language === 'en' ? 'mr' : 'en';
    setLanguage(newLang);
    setT(translations[newLang]);
    localStorage.setItem('language', newLang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
