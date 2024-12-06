import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, TreePine } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { DestinationsMenu } from "./navbar/DestinationsMenu";
import { ExperiencesMenu } from "./navbar/ExperiencesMenu";
import { LanguageSelector } from "./navbar/LanguageSelector";
import { MobileMenu } from "./navbar/MobileMenu";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const session = useSession();
  const supabase = useSupabaseClient();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Signed out successfully",
      });
    }
  };

  const handleAuthClick = () => {
    navigate("/auth");
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md dark:bg-primary-dark/90 shadow-lg fixed w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link
              to="/"
              className="flex-shrink-0 flex items-center space-x-2 group"
            >
              <TreePine className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
              <span className="text-xl font-semibold text-primary dark:text-white">
                Visit Slovenia
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <DestinationsMenu />
            <ExperiencesMenu />
            <Link
              to="/journey-finder"
              className="text-gray-700 dark:text-white hover:text-primary py-2 px-3 rounded-md transition-colors duration-200 border border-primary/20 hover:border-primary/40"
            >
              Find Your Journey
            </Link>
            <Link
              to="/stories"
              className="text-gray-700 dark:text-white hover:text-primary py-2 px-3 rounded-md transition-colors duration-200"
            >
              {t("stories")}
            </Link>
            <Link
              to="/booking"
              className="text-gray-700 dark:text-white hover:text-primary py-2 px-3 rounded-md transition-colors duration-200"
            >
              {t("booking")}
            </Link>
            <LanguageSelector />
            
            {/* Auth Button */}
            {session ? (
              <Button
                variant="outline"
                onClick={handleSignOut}
                className="ml-4"
              >
                Sign Out
              </Button>
            ) : (
              <Button
                onClick={handleAuthClick}
                className="bg-primary text-white hover:bg-primary/90"
              >
                Sign In
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-white hover:text-primary hover:bg-gray-100 dark:hover:bg-primary focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <MobileMenu isOpen={isOpen} />
    </nav>
  );
};

export default Navbar;