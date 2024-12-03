export const translations = {
  en: {
    // Navigation
    home: "Visit Slovenia",
    experiences: "Experiences",
    stories: "Stories",
    booking: "Booking",
    destinations: "Destination Slovenia",

    // Homepage sections
    discoverSlovenia: "Discover Slovenia",
    experienceNature: "Experience the natural beauty of Europe's hidden gem",
    startAdventure: "Start Your Adventure",
    hiddenGems: "Slovenia's Hidden Gems",
    howItWorks: "How It Works",
    popularAdventures: "Popular Adventures",
    stayUpdated: "Stay Updated",
    subscribeNewsletter: "Subscribe to our newsletter for the latest adventures and special offers",
    subscribe: "Subscribe",
    enterEmail: "Enter your email",
    contactUs: "Contact Us",
    contactDescription: "Have questions about our adventures or need help planning your trip?",

    // Footer
    allRightsReserved: "All rights reserved",
    quickLinks: "Quick Links",
    contact: "Contact",

    // Search steps
    search: "Search",
    searchDescription: "Search for your favourite destination and experience",
    book: "Book",
    bookDescription: "Book an experience or vacation of your choice",
    travel: "Travel",
    travelDescription: "Travel and enjoy unforgettable experiences",
  },
  sl: {
    // Navigation
    home: "Obiščite Slovenijo",
    experiences: "Doživetja",
    stories: "Zgodbe",
    booking: "Rezervacije",
    destinations: "Destinacija Slovenija",

    // Homepage sections
    discoverSlovenia: "Odkrijte Slovenijo",
    experienceNature: "Doživite naravne lepote skritega bisera Evrope",
    startAdventure: "Začnite svojo pustolovščino",
    hiddenGems: "Skriti biseri Slovenije",
    howItWorks: "Kako deluje",
    popularAdventures: "Priljubljena doživetja",
    stayUpdated: "Ostanite na tekočem",
    subscribeNewsletter: "Naročite se na naše novice za najnovejše pustolovščine in posebne ponudbe",
    subscribe: "Naroči se",
    enterEmail: "Vnesite svoj e-poštni naslov",
    contactUs: "Kontaktirajte nas",
    contactDescription: "Imate vprašanja o naših dogodivščinah ali potrebujete pomoč pri načrtovanju potovanja?",

    // Footer
    allRightsReserved: "Vse pravice pridržane",
    quickLinks: "Hitre povezave",
    contact: "Kontakt",

    // Search steps
    search: "Išči",
    searchDescription: "Poiščite svojo najljubšo destinacijo in doživetje",
    book: "Rezerviraj",
    bookDescription: "Rezervirajte doživetje ali počitnice po vaši izbiri",
    travel: "Potuj",
    travelDescription: "Potujte in uživajte v nepozabnih doživetjih",
  }
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;