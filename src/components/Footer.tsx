import { Link } from "react-router-dom";
import { TreePine, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <TreePine className="h-8 w-8" />
              <span className="text-xl font-semibold">Visit Slovenia</span>
            </Link>
            <p className="text-gray-300">
              Discover the hidden gems of Slovenia with our expert-guided
              adventures.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/experiences" className="hover:text-primary-light">
                  Experiences
                </Link>
              </li>
              <li>
                <Link to="/stories" className="hover:text-primary-light">
                  Stories
                </Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-primary-light">
                  Book a Trip
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Destinations</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/destination/julian-alps"
                  className="hover:text-primary-light"
                >
                  Julian Alps
                </Link>
              </li>
              <li>
                <Link
                  to="/destination/kamnik-savinja-alps"
                  className="hover:text-primary-light"
                >
                  Kamnik-Savinja Alps
                </Link>
              </li>
              <li>
                <Link
                  to="/destination/karavanke"
                  className="hover:text-primary-light"
                >
                  Karavanke
                </Link>
              </li>
              <li>
                <Link
                  to="/destination/pohorje"
                  className="hover:text-primary-light"
                >
                  Pohorje
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>Email: info@testslovenia.com</li>
              <li>Phone: +386 1 234 5678</li>
              <li className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-primary-light">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-primary-light">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-primary-light">
                  <Twitter className="h-6 w-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} Test Slovenia. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
