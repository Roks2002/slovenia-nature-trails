export interface Trip {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  difficulty: "Easy" | "Moderate" | "Hard";
  price: string;
  image: string;
  location: string;
  bestSeason: string[];
  availableTickets: number;
  packageIncludes: string[];
  requiredGear: string[];
  heightDifference?: string;
  fullDescription: string;
}

export const trips: Trip[] = [
  {
    id: "julian-alps-1",
    title: "Triglav Summit Adventure",
    description: "Scale Slovenia's highest peak in this guided mountaineering experience.",
    category: "Julian Alps",
    duration: "2 days",
    difficulty: "Hard",
    price: "€299",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    location: "Triglav National Park",
    bestSeason: ["June", "July", "August", "September"],
    availableTickets: 8,
    packageIncludes: [
      "Professional mountain guide",
      "Safety equipment",
      "Mountain hut accommodation",
      "Meals during the trek",
      "Transport from Bled"
    ],
    requiredGear: [
      "Hiking boots",
      "Warm clothing",
      "Rain jacket",
      "Backpack",
      "Water bottle"
    ],
    heightDifference: "1,700m",
    fullDescription: "Experience the ultimate alpine adventure by climbing Mount Triglav, Slovenia's highest peak. This two-day journey takes you through the heart of the Julian Alps, offering breathtaking views and an unforgettable mountaineering experience."
  },
  {
    id: "kamnik-1",
    title: "Velika Planina Hiking Tour",
    description: "Explore traditional shepherd settlements and beautiful alpine meadows.",
    category: "Kamnik-Savinja Alps",
    duration: "1 day",
    difficulty: "Moderate",
    price: "€89",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    location: "Velika Planina",
    bestSeason: ["April", "May", "June", "July", "August", "September"],
    availableTickets: 12,
    packageIncludes: [
      "Local guide",
      "Lunch",
      "Transport from base"
    ],
    requiredGear: [
      "Hiking shoes",
      "Comfortable clothing",
      "Water bottle",
      "Snacks"
    ],
    fullDescription: "Join us for a scenic hike through Velika Planina, known for its stunning natural beauty and rich cultural heritage. Enjoy breathtaking views and learn about the traditional shepherding lifestyle."
  },
  {
    id: "karavanke-1",
    title: "Stol Ridge Trek",
    description: "Hike along the scenic ridge of the Karavanke mountains.",
    category: "Karavanke",
    duration: "1 day",
    difficulty: "Moderate",
    price: "€99",
    image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99",
    location: "Karavanke Mountain Range",
    bestSeason: ["May", "June", "July", "August", "September"],
    availableTickets: 10,
    packageIncludes: [
      "Experienced guide",
      "Snacks and drinks",
      "Transport from starting point"
    ],
    requiredGear: [
      "Hiking gear",
      "Backpack",
      "Water bottle",
      "Camera"
    ],
    fullDescription: "The Stol Ridge Trek offers stunning panoramic views of Slovenia and beyond. Experience this remarkable hike with our knowledgeable guides as you navigate the beautiful ridge."
  },
  {
    id: "pohorje-1",
    title: "Pohorje Mountain Biking",
    description: "Mountain biking adventure through Pohorje's forests and trails.",
    category: "Pohorje",
    duration: "4 hours",
    difficulty: "Moderate",
    price: "€79",
    image: "https://images.unsplash.com/photo-1473773508845-188df298d2d1",
    location: "Pohorje Mountain",
    bestSeason: ["April", "May", "June", "July", "August"],
    availableTickets: 15,
    packageIncludes: [
      "Bike rental",
      "Protective gear",
      "Guide"
    ],
    requiredGear: [
      "Comfortable clothing",
      "Water bottle",
      "Sunscreen"
    ],
    fullDescription: "Join us for an exciting mountain biking adventure in Pohorje! Ride through scenic trails while enjoying the beautiful nature and exhilarating downhill rides."
  },
  {
    id: "hiking-1",
    title: "Valley of the Seven Lakes",
    description: "Discover the pristine alpine lakes in Triglav National Park.",
    category: "Hiking",
    duration: "1 day",
    difficulty: "Moderate",
    price: "€109",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    location: "Triglav National Park",
    bestSeason: ["June", "July", "August"],
    availableTickets: 20,
    packageIncludes: [
      "Guided hike",
      "Lunch",
      "Entry fees"
    ],
    requiredGear: [
      "Hiking boots",
      "Warm clothing",
      "Rain jacket",
      "Food",
      "Water"
    ],
    fullDescription: "This guided hike takes you through beautiful landscapes where you will find the stunning alpine lakes of Triglav National Park. An experience you won't want to miss!"
  },
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
    id: "julian-alps-2",
    title: "Lake Bled Adventure",
    description: "Explore the magical Lake Bled and its surroundings.",
    category: "Julian Alps",
    duration: "1 day",
    difficulty: "Easy",
    price: "€79",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    location: "Lake Bled",
    bestSeason: ["April", "May", "June", "July", "August", "September"],
    availableTickets: 15,
    packageIncludes: [
      "Professional guide",
      "Boat ride to the island",
      "Castle entrance fee",
      "Traditional cream cake tasting"
    ],
    requiredGear: [
      "Comfortable walking shoes",
      "Camera",
      "Water bottle"
    ],
    fullDescription: "Experience the fairy-tale beauty of Lake Bled, visit its iconic island church, explore the medieval castle, and taste the famous Bled cream cake."
  },
  {
    id: "kamnik-2",
    title: "Logar Valley Hiking",
    description: "Discover the pristine beauty of Logar Valley.",
    category: "Kamnik-Savinja Alps",
    duration: "1 day",
    difficulty: "Moderate",
    price: "€89",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    location: "Logar Valley",
    bestSeason: ["May", "June", "July", "August", "September"],
    availableTickets: 12,
    packageIncludes: [
      "Guide",
      "Transport",
      "Lunch",
      "Waterfall entrance fees"
    ],
    requiredGear: [
      "Hiking boots",
      "Backpack",
      "Rain jacket"
    ],
    fullDescription: "Explore one of Slovenia's most beautiful glacial valleys, featuring stunning waterfalls and alpine meadows."
  },
  {
    id: "karavanke-2",
    title: "Mining Heritage Tour",
    description: "Explore the rich mining history of the Karavanke mountains.",
    category: "Karavanke",
    duration: "1 day",
    difficulty: "Easy",
    price: "€69",
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67",
    location: "Mežica",
    bestSeason: ["April", "May", "June", "July", "August", "September", "October"],
    availableTickets: 10,
    packageIncludes: [
      "Mine tour guide",
      "Safety equipment",
      "Underground train ride",
      "Traditional miners' lunch"
    ],
    requiredGear: [
      "Warm clothing",
      "Closed-toe shoes"
    ],
    fullDescription: "Discover the fascinating underground world of the Karavanke mountains and learn about the region's mining heritage."
  }
];
