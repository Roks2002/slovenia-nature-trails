import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mountain, Bike, Waves, Wind, ChevronLeft, ChevronRight } from "lucide-react";
import { trips } from "../data/trips";

const Index = () => {
  const [email, setEmail] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const bannerRef = useRef<HTMLDivElement>(null);
  const popularTrips = trips.slice(0, 5); // Get first 5 trips for slider

  useEffect(() => {
    const handleScroll = () => {
      if (bannerRef.current) {
        const scrolled = window.scrollY;
        bannerRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % popularTrips.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + popularTrips.length) % popularTrips.length);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-primary-dark">
      {/* Hero Section with Parallax */}
      <div className="relative h-screen overflow-hidden">
        <div ref={bannerRef} className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
            alt="Slovenia Landscape"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Discover Slovenia
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-slide-in">
              Experience the natural beauty of Europe's hidden gem
            </p>
            <Link
              to="/experiences"
              className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Start Your Adventure
            </Link>
          </div>
        </div>
      </div>

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

      {/* Keep existing Newsletter and Contact Form sections */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-8">Subscribe to our newsletter for the latest adventures and special offers</p>
          <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-6 py-3 rounded-full text-gray-900 w-full md:w-96"
              required
            />
            <button
              type="submit"
              className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
            Contact Us
          </h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border dark:bg-primary-dark dark:text-white"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border dark:bg-primary-dark dark:text-white"
                required
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full px-4 py-3 rounded-lg border dark:bg-primary-dark dark:text-white"
              required
            ></textarea>
            <div className="text-center">
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;
