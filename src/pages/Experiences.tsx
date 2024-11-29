import { useParams, Link } from "react-router-dom";
import { trips } from "../data/trips";

const Experiences = () => {
  const { category } = useParams();
  const filteredTrips = category ? trips.filter(trip => trip.category === category) : trips;

  return (
    <div className="pt-20 px-4 min-h-screen bg-white dark:bg-primary-dark">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          {category || "All Experiences"}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTrips.map((trip) => (
            <Link to={`/trip/${trip.id}`} key={trip.id} className="bg-white dark:bg-primary rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img src={trip.image} alt={trip.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{trip.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{trip.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary dark:text-primary-light font-bold">{trip.price}</span>
                  <span className="text-gray-500 dark:text-gray-400">{trip.duration}</span>
                </div>
                <div className="mt-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                    trip.difficulty === "Easy" ? "bg-green-100 text-green-800" :
                    trip.difficulty === "Moderate" ? "bg-yellow-100 text-yellow-800" :
                    "bg-red-100 text-red-800"
                  }`}>
                    {trip.difficulty}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;