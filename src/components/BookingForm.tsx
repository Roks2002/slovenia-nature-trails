import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const trips = [
  "Triglav National Park Hiking",
  "Lake Bled Adventure",
  "Soča Valley Rafting",
  "Julian Alps Via Ferrata",
  "Mountain Biking in Pohorje",
  "Rock Climbing in Osp",
  "Paragliding in Bohinj",
  "General Inquiry"
];

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    trip: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    toast({
      title: "Inquiry Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", trip: "", message: "" });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Book Your Adventure</CardTitle>
        <CardDescription>
          Fill out the form below and we'll get back to you with more information about your selected trip.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your full name"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your.email@example.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="trip">Select Trip</Label>
            <Select
              required
              onValueChange={(value) => setFormData({ ...formData, trip: value })}
              value={formData.trip}
            >
              <SelectTrigger id="trip">
                <SelectValue placeholder="Choose a trip or make a general inquiry" />
              </SelectTrigger>
              <SelectContent>
                {trips.map((trip) => (
                  <SelectItem key={trip} value={trip}>
                    {trip}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your preferences, questions, or special requirements..."
              className="min-h-[150px]"
            />
          </div>

          <Button type="submit" className="w-full">
            Send Inquiry
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default BookingForm;