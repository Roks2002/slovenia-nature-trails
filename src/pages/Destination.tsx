import { useParams } from "react-router-dom";
import { trips } from "../data/trips";
import { Link } from "react-router-dom";

const destinations = {
  "julian-alps": {
    title: "Julian Alps",
    description: "The Julian Alps, a stunning mountain range in northwestern Slovenia, offer some of the most breathtaking landscapes in Europe. Home to Mount Triglav, Slovenia's highest peak, this region is a paradise for outdoor enthusiasts.",
    attractions: [
      {
        name: "Triglav National Park",
        description: "Slovenia's only national park, featuring pristine lakes, waterfalls, and diverse wildlife.",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e"
      },
      {
        name: "Lake Bled",
        description: "An iconic alpine lake with a picturesque island church and medieval castle.",
        image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
      },
      {
        name: "Soča Valley",
        description: "Known for its emerald river and rich World War I history.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
      }
    ]
  },
  "kamnik-savinja-alps": {
    title: "Kamnik-Savinja Alps",
    description: "The Kamnik-Savinja Alps offer a perfect blend of challenging peaks and gentle valleys, making it an ideal destination for both experienced mountaineers and casual hikers.",
    attractions: [
      {
        name: "Velika Planina",
        description: "One of Europe's largest high-altitude herdsmen's settlements.",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
      },
      {
        name: "Logar Valley",
        description: "A glacial valley known for its scenic beauty and waterfalls.",
        image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716"
      },
      {
        name: "Mount Grintovec",
        description: "The highest peak in the range, offering challenging climbing routes.",
        image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86"
      }
    ]
  },
  "karavanke": {
    title: "Karavanke",
    description: "The Karavanke mountain range forms a natural border between Slovenia and Austria, offering unique cross-border hiking experiences and rich mining heritage.",
    attractions: [
      {
        name: "Mount Stol",
        description: "The highest peak in the range, offering panoramic views of two countries.",
        image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
      },
      {
        name: "Dovžan Gorge",
        description: "A natural monument with remarkable geological features.",
        image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67"
      }
    ]
  },
  "pohorje": {
    title: "Pohorje",
    description: "Pohorje is a unique mountain range in northeastern Slovenia, characterized by vast forests, peat bogs, and excellent skiing opportunities.",
    attractions: [
      {
        name: "Mariborsko Pohorje",
        description: "The largest ski resort in Slovenia.",
        image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843"
      },
      {
        name: "Black Lake",
        description: "A mystical lake surrounded by ancient forest.",
        image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff"
      }
    ]
  }
};

const Destination = () => {
  const { region } = useParams();
  const destination = destinations[region as keyof typeof destinations];
  const relatedTrips = trips.filter(trip => trip.category === destination.title);

  if (!destination) {
    return <div className="pt-20 px-4">Destination not found</div>;
  }

  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">{destination.title}</h1>
        
        <p className="text-lg mb-12 text-gray-700 dark:text-gray-300">{destination.description}</p>
        
        <h2 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">Key Attractions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {destination.attractions.map((attraction, index) => (
            <div key={index} className="bg-white dark:bg-primary rounded-lg shadow-lg overflow-hidden">
              <img src={attraction.image} alt={attraction.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{attraction.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{attraction.description}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">Available Trips in {destination.title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {relatedTrips.map((trip) => (
            <Link to={`/trip/${trip.id}`} key={trip.id} className="bg-white dark:bg-primary rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img src={trip.image} alt={trip.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{trip.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{trip.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary dark:text-primary-light font-bold">{trip.price}</span>
                  <span className="text-gray-500 dark:text-gray-400">{trip.duration}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destination;