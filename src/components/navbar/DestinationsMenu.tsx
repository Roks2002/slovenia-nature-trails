import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

export const DestinationsMenu = () => {
  const { t } = useLanguage();
  
  return (
    <div className="relative group">
      <button className="text-gray-700 dark:text-white hover:text-primary flex items-center py-2 px-3 rounded-md transition-colors duration-200">
        {t("destinations")}
        <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
      </button>
      <div className="absolute top-full left-0 w-56 bg-white dark:bg-primary-dark shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
        <Link
          to="/destination/julian-alps"
          className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-primary transition-colors duration-200"
        >
          Julian Alps
        </Link>
        <Link
          to="/destination/kamnik-savinja-alps"
          className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-primary transition-colors duration-200"
        >
          Kamnik-Savinja Alps
        </Link>
        <Link
          to="/destination/karavanke"
          className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-primary transition-colors duration-200"
        >
          Karavanke
        </Link>
        <Link
          to="/destination/pohorje"
          className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-primary transition-colors duration-200"
        >
          Pohorje
        </Link>
      </div>
    </div>
  );
};