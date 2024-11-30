import { Trip } from "../types/trip";

export const hikingTrips: Trip[] = [
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
    id: "hiking-2",
    title: "Velika Planina Trail",
    description: "Explore traditional shepherd settlements in the Kamnik Alps.",
    category: "Hiking",
    duration: "1 day",
    difficulty: "Easy",
    price: "€79",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    location: "Velika Planina",
    bestSeason: ["May", "June", "July", "August", "September"],
    availableTickets: 15,
    packageIncludes: [
      "Professional guide",
      "Traditional lunch",
      "Cable car ticket"
    ],
    requiredGear: [
      "Walking shoes",
      "Light jacket",
      "Water bottle",
      "Camera"
    ],
    fullDescription: "Experience the charm of traditional Alpine dairy farming on this scenic hike through Velika Planina. Visit authentic shepherd huts and taste local dairy products."
  }
];