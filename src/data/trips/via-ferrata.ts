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
  },
  {
    id: "via-ferrata-2",
    title: "Mojstrana Via Ferrata",
    description: "Perfect introduction to via ferrata climbing.",
    category: "Via Ferrata",
    duration: "Half day",
    difficulty: "Moderate",
    price: "€89",
    image: "https://images.unsplash.com/photo-1522163182402-834f871fd851",
    location: "Mojstrana",
    bestSeason: ["June", "July", "August", "September"],
    availableTickets: 8,
    packageIncludes: [
      "Professional guide",
      "Equipment rental",
      "Safety briefing"
    ],
    requiredGear: [
      "Sturdy shoes",
      "Comfortable clothing",
      "Small backpack"
    ],
    fullDescription: "Start your via ferrata journey with this beginner-friendly route in Mojstrana. Learn essential climbing techniques and safety procedures while enjoying stunning mountain views."
  }
];
