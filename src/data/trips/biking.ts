import { Trip } from "../types/trip";

export const bikingTrips: Trip[] = [
  {
    id: "biking-1",
    title: "Soča Valley Cycling Tour",
    description: "Cycle along the emerald Soča River through beautiful valleys.",
    category: "Mountain Biking",
    duration: "1 day",
    difficulty: "Moderate",
    price: "€89",
    image: "https://images.unsplash.com/photo-1473773508845-188df298d2d1",
    location: "Soča Valley",
    bestSeason: ["April", "May", "June", "July", "August"],
    availableTickets: 10,
    packageIncludes: [
      "Bike rental",
      "Guide",
      "Snacks"
    ],
    requiredGear: [
      "Casual clothing",
      "Water bottle",
      "Sunscreen"
    ],
    fullDescription: "Join us for a picturesque cycling tour along the Soča River. Experience the stunning landscapes and the rich cultural heritage of the valley as you pedal through this exciting journey."
  },
  {
    id: "biking-2",
    title: "Pohorje Mountain Biking Adventure",
    description: "Thrilling mountain biking through Pohorje's forests.",
    category: "Mountain Biking",
    duration: "4 hours",
    difficulty: "Hard",
    price: "€99",
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f",
    location: "Pohorje Mountain",
    bestSeason: ["May", "June", "July", "August", "September"],
    availableTickets: 8,
    packageIncludes: [
      "Professional bike",
      "Safety equipment",
      "Guide",
      "Energy snacks"
    ],
    requiredGear: [
      "Athletic clothing",
      "Sports shoes",
      "Sunglasses"
    ],
    fullDescription: "Challenge yourself with this thrilling mountain biking adventure through Pohorje's diverse terrain. Perfect for experienced riders looking for an adrenaline rush."
  }
];