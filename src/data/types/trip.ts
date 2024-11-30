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