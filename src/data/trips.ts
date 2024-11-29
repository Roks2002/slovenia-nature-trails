export interface Trip {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  difficulty: "Easy" | "Moderate" | "Hard";
  price: string;
  image: string;
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
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e"
  },
  {
    id: "kamnik-1",
    title: "Velika Planina Hiking Tour",
    description: "Explore traditional shepherd settlements and beautiful alpine meadows.",
    category: "Kamnik-Savinja Alps",
    duration: "1 day",
    difficulty: "Moderate",
    price: "€89",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
  },
  {
    id: "karavanke-1",
    title: "Stol Ridge Trek",
    description: "Hike along the scenic ridge of the Karavanke mountains.",
    category: "Karavanke",
    duration: "1 day",
    difficulty: "Moderate",
    price: "€99",
    image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99"
  },
  {
    id: "pohorje-1",
    title: "Pohorje Mountain Biking",
    description: "Mountain biking adventure through Pohorje's forests and trails.",
    category: "Pohorje",
    duration: "4 hours",
    difficulty: "Moderate",
    price: "€79",
    image: "https://images.unsplash.com/photo-1473773508845-188df298d2d1"
  },
  {
    id: "hiking-1",
    title: "Valley of the Seven Lakes",
    description: "Discover the pristine alpine lakes in Triglav National Park.",
    category: "Hiking",
    duration: "1 day",
    difficulty: "Moderate",
    price: "€109",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
  },
  {
    id: "via-ferrata-1",
    title: "Prisojnik Via Ferrata",
    description: "Experience the thrill of via ferrata climbing in the Julian Alps.",
    category: "Via Ferrata",
    duration: "1 day",
    difficulty: "Hard",
    price: "€149",
    image: "https://images.unsplash.com/photo-1522163182402-834f871fd851"
  },
  {
    id: "biking-1",
    title: "Soča Valley Cycling Tour",
    description: "Cycle along the emerald Soča River through beautiful valleys.",
    category: "Mountain Biking",
    duration: "1 day",
    difficulty: "Moderate",
    price: "€89",
    image: "https://images.unsplash.com/photo-1473773508845-188df298d2d1"
  }
];