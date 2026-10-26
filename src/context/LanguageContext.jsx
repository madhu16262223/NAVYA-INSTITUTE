import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext({
  lang: 'en',
  setLang: () => {},
  toggleLang: () => {},
  t: (key) => key,
});

export const useLanguage = () => useContext(LanguageContext);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    return localStorage.getItem('navya_lang') || 'en';
  });

  const setLang = useCallback((newLang) => {
    setLangState(newLang);
    localStorage.setItem('navya_lang', newLang);
    document.documentElement.lang = newLang;
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === 'en' ? 'te' : 'en');
  }, [lang, setLang]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useCallback(
    (key) => {
      const dict = translations[lang] || translations.en;
      return dict[key] || translations.en[key] || key;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
