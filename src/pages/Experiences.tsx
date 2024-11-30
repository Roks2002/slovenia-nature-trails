import { useParams, Link } from "react-router-dom";
import { trips } from "../data/trips";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Experiences = () => {
  const { category } = useParams();
  const filteredTrips = category ? trips.filter(trip => trip.category.toLowerCase().replace(/\s+/g, '-') === category) : trips;

  return (
    <div className="pt-20 px-4 min-h-screen bg-white dark:bg-primary-dark">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          {category ? category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : "All Experiences"}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTrips.map((trip) => (
            <Link to={`/trip/${trip.id}`} key={trip.id}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-0">
                  <img 
                    src={trip.image} 
                    alt={trip.title} 
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{trip.category}</Badge>
                    <span className="text-primary font-bold">{trip.price}</span>
                  </div>
                  <CardTitle className="mb-2">{trip.title}</CardTitle>
                  <CardDescription>{trip.description}</CardDescription>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Duration: {trip.duration}
                    </span>
                    <Badge variant={
                      trip.difficulty === "Easy" ? "success" :
                      trip.difficulty === "Moderate" ? "warning" : "destructive"
                    }>
                      {trip.difficulty}
                    </Badge>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;