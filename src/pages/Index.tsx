import { useRef, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import NewsletterSection from "../components/NewsletterSection";
import ContactForm from "../components/ContactForm";
import ConsultationSteps from "../components/ConsultationSteps";
import SloveniaMap from "../components/SloveniaMap";
import { PopularTrips } from "../components/home/PopularTrips";
import SloveniaHighlights from "../components/home/SloveniaHighlights";

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
      <SloveniaHighlights />
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
      <ContactForm />
    </div>
  );
};

export default Index;