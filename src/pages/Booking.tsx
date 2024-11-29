import { useState } from "react";
import { trips } from "../data/trips";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Booking = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    trip: "",
    message: "",
    isGeneralInquiry: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({
      name: "",
      email: "",
      trip: "",
      message: "",
      isGeneralInquiry: false
    });
  };

  return (
    <div className="pt-20 px-4 min-h-screen bg-white dark:bg-primary-dark">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center dark:text-white">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2 dark:text-white">Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg dark:bg-primary-dark dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 dark:text-white">Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg dark:bg-primary-dark dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 dark:text-white">
              <input
                type="checkbox"
                checked={formData.isGeneralInquiry}
                onChange={(e) => setFormData({ ...formData, isGeneralInquiry: e.target.checked })}
                className="mr-2"
              />
              General Inquiry
            </label>
          </div>
          {!formData.isGeneralInquiry && (
            <div>
              <label className="block text-sm font-medium mb-2 dark:text-white">Select Trip</label>
              <select
                value={formData.trip}
                onChange={(e) => setFormData({ ...formData, trip: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg dark:bg-primary-dark dark:text-white"
              >
                <option value="">Select a trip</option>
                {trips.map((trip) => (
                  <option key={trip.id} value={trip.id}>
                    {trip.title}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div>
            <label className="block text-sm font-medium mb-2 dark:text-white">Message</label>
            <textarea
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={6}
              className="w-full px-4 py-2 border rounded-lg dark:bg-primary-dark dark:text-white"
            ></textarea>
          </div>
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Booking;