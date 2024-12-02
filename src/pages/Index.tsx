import { useRef, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import NewsletterSection from "../components/NewsletterSection";
import ContactForm from "../components/ContactForm";
import ConsultationSteps from "../components/ConsultationSteps";
import { trips } from "../data/trips";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const bannerRef = useRef<HTMLDivElement>(null);
  const popularTrips = trips.slice(0, 5);

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % popularTrips.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + popularTrips.length) % popularTrips.length
    );
  };

  return (
    <div className="min-h-screen bg-white dark:bg-primary-dark">
      <HeroSection />

      {/* Slovenia's Beauty Section */}
      <section className="py-16 px-4 bg-white dark:bg-primary-dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
            Slovenia's Hidden Gems
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Nestled between the Alps and the Adriatic Sea, Slovenia is a land of extraordinary natural diversity. From pristine lakes and rushing rivers to majestic mountains and mysterious caves, every corner of this small but mighty country holds a new wonder to discover.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Our carefully curated experiences take you beyond the typical tourist paths to discover the authentic heart of Slovenia. Whether you're seeking adventure in the Julian Alps, tranquility in the Logar Valley, or cultural immersion in charming villages, we'll help you uncover the true essence of this remarkable destination.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1458668383970-8ddd3927deed" alt="Slovenia Nature" className="rounded-lg object-cover h-48 w-full" />
              <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b" alt="Slovenia Mountains" className="rounded-lg object-cover h-48 w-full" />
            </div>
          </div>
        </div>
      </section>

      <ConsultationSteps />

      {/* Popular Trips Slider */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-primary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
            Popular Adventures
          </h2>
          <div className="relative">
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-primary-dark/80 p-2 rounded-full shadow-lg"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-primary-dark/80 p-2 rounded-full shadow-lg"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {popularTrips.map((trip) => (
                  <div key={trip.id} className="w-full flex-shrink-0 px-4">
                    <Link to={`/trip/${trip.id}`} className="block">
                      <div className="bg-white dark:bg-primary-dark rounded-lg shadow-lg overflow-hidden">
                        <img src={trip.image} alt={trip.title} className="w-full h-64 object-cover" />
                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2 dark:text-white">{trip.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">{trip.description}</p>
                          <div className="flex justify-between items-center">
                            <span className="text-primary dark:text-primary-light font-bold">{trip.price}</span>
                            <span className="text-gray-500 dark:text-gray-400">{trip.duration}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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
