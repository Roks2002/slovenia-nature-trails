import React, { useEffect, useState } from 'react';
import { trips } from '../data/trips';
import { Link } from 'react-router-dom';

const SloveniaMap = () => {
  const [animatedPoints, setAnimatedPoints] = useState<string[]>([]);

  useEffect(() => {
    const points = trips.map(trip => trip.id);
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < points.length) {
        setAnimatedPoints(prev => [...prev, points[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[600px] bg-gray-50 dark:bg-primary overflow-hidden">
      <img
        src="/slovenia-map.svg"
        alt="Slovenia Map"
        className="absolute inset-0 w-full h-full object-contain p-8"
      />
      <div className="absolute inset-0">
        {trips.map((trip) => (
          <Link
            key={trip.id}
            to={`/trip/${trip.id}`}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${
              getLocationPosition(trip.location)
            } ${
              animatedPoints.includes(trip.id)
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-0'
            } transition-all duration-500 ease-out`}
          >
            <div className="relative group">
              <div className="w-4 h-4 bg-primary dark:bg-primary-light rounded-full animate-pulse" />
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="bg-white dark:bg-primary-dark rounded-lg shadow-lg p-2 whitespace-nowrap">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {trip.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-300">
                    {trip.location}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

// Helper function to get position based on location
const getLocationPosition = (location: string): string => {
  const positions: { [key: string]: string } = {
    'Triglav National Park': 'left-[30%] top-[20%]',
    'Velika Planina': 'left-[45%] top-[35%]',
    'Karavanke Mountain Range': 'left-[35%] top-[15%]',
    'Pohorje Mountain': 'left-[60%] top-[45%]',
    'Soča Valley': 'left-[20%] top-[25%]',
    'Lake Bled': 'left-[35%] top-[25%]',
    'Logar Valley': 'left-[50%] top-[30%]',
    'Mežica': 'left-[55%] top-[40%]',
  };

  return positions[location] || 'left-1/2 top-1/2';
};

export default SloveniaMap;