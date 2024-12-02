import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";

interface MobileMenuProps {
  isOpen: boolean;
}

export const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <Link
          to="/"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-white hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          {t("home")}
        </Link>
        <Link
          to="/experiences"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-white hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          {t("experiences")}
        </Link>
        <Link
          to="/journey-finder"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-white hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800 border border-primary/20"
        >
          Find Your Journey
        </Link>
        <Link
          to="/stories"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-white hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          {t("stories")}
        </Link>
        <Link
          to="/booking"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-white hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          {t("booking")}
        </Link>
      </div>
    </div>
  );
};