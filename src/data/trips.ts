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
  }
];
