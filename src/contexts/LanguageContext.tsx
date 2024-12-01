import { createContext, useContext, useState, ReactNode } from "react";
import { translations, Language, TranslationKey } from "../i18n/translations";

type LanguageContextType = {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("en");

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
  };

  const t = (key: TranslationKey): string => {
    return translations[currentLanguage][key] || translations.en[key];
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}