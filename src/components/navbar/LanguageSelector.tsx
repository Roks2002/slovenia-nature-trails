import { Globe } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { useState } from "react";

const languages = [
  { code: "en", name: "English" },
  { code: "sl", name: "Slovenščina" },
];

export const LanguageSelector = () => {
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const { currentLanguage, setLanguage } = useLanguage();

  return (
    <div className="relative">
      <button
        onClick={() => setShowLangDropdown(!showLangDropdown)}
        className="flex items-center text-gray-700 dark:text-white hover:text-primary py-2 px-3 rounded-md transition-colors duration-200"
      >
        <Globe className="h-5 w-5 mr-1" />
        <span className="uppercase">{currentLanguage}</span>
      </button>
      {showLangDropdown && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-primary-dark shadow-lg rounded-md py-2">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code as "en" | "sl");
                setShowLangDropdown(false);
              }}
              className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-primary transition-colors duration-200"
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};