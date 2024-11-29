import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Globe } from "lucide-react";

const languages = [
  { code: "en", name: "English" },
  { code: "sl", name: "Slovenščina" },
  { code: "hr", name: "Hrvatski" },
  { code: "de", name: "Deutsch" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  return (
    <nav className="bg-white dark:bg-primary-dark shadow-lg fixed w-full z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src="/logo.svg" alt="Explore Slovenia" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <div className="relative group">
              <Link to="/destinations" className="text-gray-700 dark:text-white hover:text-primary flex items-center">
                Destination Slovenia
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <div className="absolute hidden group-hover:block w-48 bg-white dark:bg-primary-dark shadow-lg rounded-md mt-2">
                <Link to="/destinations/julian-alps" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-primary">Julian Alps</Link>
                <Link to="/destinations/kamnik-alps" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-primary">Kamnik-Savinja Alps</Link>
                <Link to="/destinations/karavanke" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-primary">Karavanke</Link>
                <Link to="/destinations/pohorje" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-primary">Pohorje</Link>
              </div>
            </div>

            <div className="relative group">
              <Link to="/experiences" className="text-gray-700 dark:text-white hover:text-primary flex items-center">
                Experiences
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <div className="absolute hidden group-hover:block w-48 bg-white dark:bg-primary-dark shadow-lg rounded-md mt-2">
                <Link to="/experiences/hiking" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-primary">Hiking</Link>
                <Link to="/experiences/via-ferrata" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-primary">Via Ferrata</Link>
                <Link to="/experiences/biking" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-primary">Mountain Biking</Link>
                <Link to="/experiences/climbing" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-primary">Rock Climbing</Link>
                <Link to="/experiences/water" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-primary">Water Experiences</Link>
                <Link to="/experiences/wind" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-primary">Wind Adventures</Link>
              </div>
            </div>

            <Link to="/stories" className="text-gray-700 dark:text-white hover:text-primary">Stories</Link>
            <Link to="/booking" className="text-gray-700 dark:text-white hover:text-primary">Booking</Link>

            <div className="relative">
              <button
                onClick={() => setShowLangDropdown(!showLangDropdown)}
                className="flex items-center text-gray-700 dark:text-white hover:text-primary"
              >
                <Globe className="h-5 w-5 mr-1" />
                <span className="uppercase">{currentLang}</span>
              </button>
              {showLangDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-primary-dark shadow-lg rounded-md">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang.code);
                        setShowLangDropdown(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-primary"
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
            <Link to="/destinations" className="block px-3 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-primary">
              Destination Slovenia
            </Link>
            <Link to="/experiences" className="block px-3 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-primary">
              Experiences
            </Link>
            <Link to="/stories" className="block px-3 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-primary">
              Stories
            </Link>
            <Link to="/booking" className="block px-3 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-primary">
              Booking
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;