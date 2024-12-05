import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { trips } from "../../data/trips";

export const PopularTrips = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const popularTrips = trips.slice(0, 5);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % popularTrips.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + popularTrips.length) % popularTrips.length
    );
  };

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-primary">
      <div className="max-w-7xl mx-auto">
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
              style={{ transform: `translateX(-${currentSlide * 25}%)` }}
            >
              {popularTrips.map((trip) => (
                <div key={trip.id} className="w-1/4 flex-shrink-0 px-2">
                  <Link to={`/trip/${trip.id}`} className="block">
                    <div className="bg-white dark:bg-primary-dark rounded-lg shadow-lg overflow-hidden h-full">
                      <img
                        src={trip.image}
                        alt={trip.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2 dark:text-white">
                          {trip.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                          {trip.description}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-primary dark:text-primary-light font-bold">
                            {trip.price}
                          </span>
                          <span className="text-gray-500 dark:text-gray-400">
                            {trip.duration}
                          </span>
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
  );
};