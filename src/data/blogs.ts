export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "triglav-adventure",
    title: "Conquering Triglav: A Journey to Remember",
    excerpt: "Our two-day adventure scaling Slovenia's highest peak was filled with challenges and unforgettable moments.",
    content: "Last weekend, our group of experienced mountaineers embarked on an ambitious journey to climb Mount Triglav...",
    date: "2024-02-15",
    author: "Jana Novak",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    category: "Mountaineering"
  },
  {
    id: "soca-valley-cycling",
    title: "Cycling Through Paradise: Soča Valley Adventure",
    excerpt: "Exploring the emerald beauty of Soča Valley on two wheels.",
    content: "The Soča Valley is known for its stunning emerald river and breathtaking mountain views...",
    date: "2024-02-10",
    author: "Marko Kovač",
    image: "https://images.unsplash.com/photo-1473773508845-188df298d2d1",
    category: "Cycling"
  },
  {
    id: "velika-planina-spring",
    title: "Spring Awakening on Velika Planina",
    excerpt: "Witnessing the bloom of alpine flowers and traditional shepherd life.",
    content: "As spring arrives in the Kamnik-Savinja Alps, Velika Planina transforms into a carpet of colorful wildflowers...",
    date: "2024-02-05",
    author: "Nina Horvat",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    category: "Hiking"
  }
];