import { useRef, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import NewsletterSection from "../components/NewsletterSection";
import ContactForm from "../components/ContactForm";
import ConsultationSteps from "../components/ConsultationSteps";
import SloveniaMap from "../components/SloveniaMap";
import { PopularTrips } from "../components/home/PopularTrips";

const Index = () => {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bannerRef.current) {
        const scrolled = window.scrollY;
        bannerRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-primary-dark">
      <HeroSection />

      {/* Slovenia Map Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 dark:text-white animate-fade-in">
            Discover Our Trails
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in">
            Explore the diverse landscapes of Slovenia through our carefully curated
            trails
          </p>
          <SloveniaMap />
        </div>
      </section>

      <PopularTrips />
      <NewsletterSection />

      {/* Contact Form Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-primary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 dark:text-white">
            Contact Us
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Have questions about our adventures or need help planning your trip?
            We're here to help you create unforgettable experiences in Slovenia.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-primary rounded-full p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg dark:text-white">
                    Email Us
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    info@testslovenia.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-primary rounded-full p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg dark:text-white">
                    Call Us
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    +386 1 234 5678
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-primary rounded-full p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg dark:text-white">
                    Visit Us
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Ljubljana, Slovenia
                  </p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
