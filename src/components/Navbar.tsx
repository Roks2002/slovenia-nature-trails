import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Globe, TreePine, Compass } from "lucide-react";

const languages = [
  { code: "en", name: "English" },
  { code: "sl", name: "Slovenščina" },
  { code: "hr", name: "Hrvatski" },
  { code: "de", name: "Deutsch" },
];

const experienceCategories = [
  { name: "Hiking", path: "/experiences/hiking" },
  { name: "Mountain Biking", path: "/experiences/mountain-biking" },
  { name: "Via Ferrata", path: "/experiences/via-ferrata" },
  { name: "Water Activities", path: "/experiences/water-activities" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md dark:bg-primary-dark/90 shadow-lg fixed w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center space-x-2 group">
              <TreePine className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
              <span className="text-xl font-semibold text-primary dark:text-white">Explore Slovenia</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <div className="relative group">
              <button className="text-gray-700 dark:text-white hover:text-primary flex items-center py-2 px-3 rounded-md transition-colors duration-200">
                Destination Slovenia
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute hidden group-hover:block w-56 bg-white dark:bg-primary-dark shadow-lg rounded-md mt-1 py-2 transition-all duration-300">
                <Link to="/destination/julian-alps" className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-primary transition-colors duration-200">Julian Alps</Link>
                <Link to="/destination/kamnik-savinja-alps" className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-primary transition-colors duration-200">Kamnik-Savinja Alps</Link>
                <Link to="/destination/karavanke" className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-primary transition-colors duration-200">Karavanke</Link>
                <Link to="/destination/pohorje" className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-primary transition-colors duration-200">Pohorje</Link>
              </div>
            </div>

            <div className="relative group">
              <button className="text-gray-700 dark:text-white hover:text-primary flex items-center py-2 px-3 rounded-md transition-colors duration-200">
                Experiences
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute hidden group-hover:block w-56 bg-white dark:bg-primary-dark shadow-lg rounded-md mt-1 py-2 transition-all duration-300">
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

            <Link to="/stories" className="text-gray-700 dark:text-white hover:text-primary py-2 px-3 rounded-md transition-colors duration-200">Stories</Link>
            <Link to="/booking" className="text-gray-700 dark:text-white hover:text-primary py-2 px-3 rounded-md transition-colors duration-200">Booking</Link>

            <div className="relative">
              <button
                onClick={() => setShowLangDropdown(!showLangDropdown)}
                className="flex items-center text-gray-700 dark:text-white hover:text-primary py-2 px-3 rounded-md transition-colors duration-200"
              >
                <Globe className="h-5 w-5 mr-1" />
                <span className="uppercase">{currentLang}</span>
              </button>
              {showLangDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-primary-dark shadow-lg rounded-md py-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang.code);
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
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-white hover:text-primary hover:bg-gray-100 dark:hover:bg-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-primary-dark">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="block px-3 py-2 text-gray-700 dark:text-white">
              <span className="font-medium">Destination Slovenia</span>
              <div className="pl-4 mt-2 space-y-2">
                <Link to="/destination/julian-alps" className="block px-3 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-primary rounded-md">Julian Alps</Link>
                <Link to="/destination/kamnik-savinja-alps" className="block px-3 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-primary rounded-md">Kamnik-Savinja Alps</Link>
                <Link to="/destination/karavanke" className="block px-3 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-primary rounded-md">Karavanke</Link>
                <Link to="/destination/pohorje" className="block px-3 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-primary rounded-md">Pohorje</Link>
              </div>
            </div>
            <div className="block px-3 py-2 text-gray-700 dark:text-white">
              <span className="font-medium">Experiences</span>
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
            <Link to="/stories" className="block px-3 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-primary rounded-md">Stories</Link>
            <Link to="/booking" className="block px-3 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-primary rounded-md">Booking</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;