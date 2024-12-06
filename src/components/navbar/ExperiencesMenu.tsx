import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

const experienceCategories = [
  { name: "Hiking", path: "/experiences/hiking" },
  { name: "Mountain Biking", path: "/experiences/mountain-biking" },
  { name: "Via Ferrata", path: "/experiences/via-ferrata" },
  { name: "Water Activities", path: "/experiences/water-activities" },
];

export const ExperiencesMenu = () => {
  const { t } = useLanguage();
  
  return (
    <div className="relative group">
      <Link 
        to="/experiences"
        className="text-gray-700 dark:text-white hover:text-primary flex items-center py-2 px-3 rounded-md transition-colors duration-200"
      >
        {t("experiences")}
        <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
      </Link>
      <div className="absolute top-full left-0 w-56 bg-white dark:bg-primary-dark shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
        {experienceCategories.map((category) => (
          <Link
            key={category.path}
            to={category.path}
            className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-primary transition-colors duration-200"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};