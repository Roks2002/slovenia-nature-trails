import { Trip } from "../types/trip";

export const waterTrips: Trip[] = [
  {
    id: "water-1",
    title: "Soča River Rafting",
    description: "White water rafting adventure on the emerald Soča River.",
    category: "Water Activities",
    duration: "4 hours",
    difficulty: "Moderate",
    price: "€69",
    image: "https://images.unsplash.com/photo-1438565434616-3ef039228b15",
    location: "Bovec, Soča River",
    bestSeason: ["May", "June", "July", "August", "September"],
    availableTickets: 24,
    packageIncludes: [
      "Professional guide",
      "All rafting equipment",
      "Safety briefing",
      "Transport to starting point"
    ],
    requiredGear: [
      "Swimwear",
      "Towel",
      "Change of clothes"
    ],
    fullDescription: "Experience the thrill of rafting on one of Europe's most beautiful rivers. Perfect for beginners and intermediate rafters alike."
  },
  {
    id: "water-2",
    title: "Lake Bohinj Kayaking",
    description: "Peaceful kayaking adventure on Lake Bohinj.",
    category: "Water Activities",
    duration: "3 hours",
    difficulty: "Easy",
    price: "€49",
    image: "https://images.unsplash.com/photo-1438565434616-3ef039228b15",
    location: "Lake Bohinj",
    bestSeason: ["May", "June", "July", "August", "September"],
    availableTickets: 12,
    packageIncludes: [
      "Kayak and equipment",
      "Instructor",
      "Safety briefing"
    ],
    requiredGear: [
      "Swimwear",
      "Towel",
      "Sunscreen"
    ],
    fullDescription: "Enjoy a peaceful kayaking experience on Slovenia's largest permanent lake. Perfect for beginners and families, this tour includes basic instruction and plenty of time to enjoy the stunning alpine scenery."
  }
];
