import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

interface MobileMenuProps {
  isOpen: boolean;
}

export const MobileMenu = ({ isOpen }: MobileMenuProps) => {
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
        
        {/* Auth Button */}
        {session ? (
          <Button
            variant="outline"
            onClick={handleSignOut}
            className="w-full justify-start text-left"
          >
            Sign Out
          </Button>
        ) : (
          <Button
            onClick={handleAuthClick}
            className="w-full bg-primary text-white hover:bg-primary/90"
          >
            Sign In
          </Button>
        )}
      </div>
    </div>
  );
};