import { Trip } from "../types/trip";

export const viaFerrataTrips: Trip[] = [
  {
    id: "via-ferrata-1",
    title: "Prisojnik Via Ferrata",
    description: "Experience the thrill of via ferrata climbing in the Julian Alps.",
    category: "Via Ferrata",
    duration: "1 day",
    difficulty: "Hard",
    price: "€149",
    image: "https://images.unsplash.com/photo-1522163182402-834f871fd851",
    location: "Julian Alps",
    bestSeason: ["July", "August", "September"],
    availableTickets: 6,
    packageIncludes: [
      "Professional instructor",
      "Safety equipment",
      "Lunch"
    ],
    requiredGear: [
      "Climbing shoes",
      "Comfortable clothing",
      "Water bottle"
    ],
    fullDescription: "Join the adventure and experience the breathtaking climbs on the Prisojnik via ferrata, suitable for the adventurous spirit seeking challenges in the stunning Julian Alps."
  }
];