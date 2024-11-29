import { useParams } from "react-router-dom";
import { trips } from "../data/trips";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const TripDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [tickets, setTickets] = useState(1);
  
  const trip = trips.find((t) => t.id === id);
  const similarTrips = trips.filter(
    (t) => t.category === trip?.category && t.id !== trip?.id
  );

  if (!trip) {
    return <div className="pt-20 px-4">Trip not found</div>;
  }

  const handleBooking = () => {
    if (!selectedDate) {
      toast({
        title: "Please select a date",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Booking request sent!",
      description: "We will contact you soon to confirm your booking.",
    });
  };

  return (
    <div className="pt-20 px-4 min-h-screen bg-white dark:bg-primary-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <img
            src={trip.image}
            alt={trip.title}
            className="w-full h-[400px] object-cover rounded-lg"
          />
          <div>
            <h1 className="text-4xl font-bold mb-4 dark:text-white">{trip.title}</h1>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="dark:text-white">
                <p className="font-semibold">Duration:</p>
                <p>{trip.duration}</p>
              </div>
              <div className="dark:text-white">
                <p className="font-semibold">Location:</p>
                <p>{trip.location}</p>
              </div>
              <div className="dark:text-white">
                <p className="font-semibold">Difficulty:</p>
                <p>{trip.difficulty}</p>
              </div>
              <div className="dark:text-white">
                <p className="font-semibold">Price:</p>
                <p>{trip.price}</p>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2 dark:text-white">Best Season</h2>
              <div className="flex gap-2">
                {trip.bestSeason.map((month) => (
                  <span
                    key={month}
                    className="bg-primary/10 px-3 py-1 rounded-full text-sm dark:text-white"
                  >
                    {month}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2 dark:text-white">Book Your Trip</h2>
              <div className="bg-gray-50 dark:bg-primary p-4 rounded-lg">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="mb-4"
                />
                <div className="flex items-center gap-4 mb-4">
                  <label className="dark:text-white">Tickets:</label>
                  <input
                    type="number"
                    min="1"
                    max={trip.availableTickets}
                    value={tickets}
                    onChange={(e) => setTickets(Number(e.target.value))}
                    className="w-20 px-2 py-1 border rounded"
                  />
                </div>
                <Button onClick={handleBooking} className="w-full">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">Description</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-8">{trip.fullDescription}</p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Package Includes</h3>
              <ul className="list-disc list-inside dark:text-white">
                {trip.packageIncludes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Required Gear</h3>
              <ul className="list-disc list-inside dark:text-white">
                {trip.requiredGear.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-6 dark:text-white">Similar Trips</h2>
          <Carousel className="mb-12">
            <CarouselContent>
              {similarTrips.map((trip) => (
                <CarouselItem key={trip.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card>
                    <CardHeader>
                      <img
                        src={trip.image}
                        alt={trip.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                    </CardHeader>
                    <CardContent>
                      <CardTitle>{trip.title}</CardTitle>
                      <CardDescription>{trip.description}</CardDescription>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default TripDetails;