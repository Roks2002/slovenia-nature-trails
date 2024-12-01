import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";

const experienceCategories = [
  { name: "Hiking", path: "/experiences/hiking" },
  { name: "Mountain Biking", path: "/experiences/mountain-biking" },
  { name: "Via Ferrata", path: "/experiences/via-ferrata" },
  { name: "Water Activities", path: "/experiences/water-activities" },
];

export const MobileMenu = ({ isOpen }: { isOpen: boolean }) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white dark:bg-primary-dark">
      <div className="px-2 pt-2 pb-3 space-y-1">
        <div className="block px-3 py-2 text-gray-700 dark:text-white">
          <span className="font-medium">{t("destinations")}</span>
          <div className="pl-4 mt-2 space-y-2">
            <Link
              to="/destination/julian-alps"
              className="block px-3 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-primary rounded-md"
            >
              Julian Alps
            </Link>
            <Link
              to="/destination/kamnik-savinja-alps"
              className="block px-3 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-primary rounded-md"
            >
              Kamnik-Savinja Alps
            </Link>
            <Link
              to="/destination/karavanke"
              className="block px-3 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-primary rounded-md"
            >
              Karavanke
            </Link>
            <Link
              to="/destination/pohorje"
              className="block px-3 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-primary rounded-md"
            >
              Pohorje
            </Link>
          </div>
        </div>
        <div className="block px-3 py-2 text-gray-700 dark:text-white">
          <span className="font-medium">{t("experiences")}</span>
          <div className="pl-4 mt-2 space-y-2">
            {experienceCategories.map((category) => (
              <Link
                key={category.path}
                to={category.path}
                className="block px-3 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-primary rounded-md"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
        <Link
          to="/stories"
          className="block px-3 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-primary rounded-md"
        >
          {t("stories")}
        </Link>
        <Link
          to="/booking"
          className="block px-3 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-primary rounded-md"
        >
          {t("booking")}
        </Link>
      </div>
    </div>
  );
};