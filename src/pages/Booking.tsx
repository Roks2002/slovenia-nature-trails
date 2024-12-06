import BookingForm from "@/components/BookingForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Booking = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-primary-dark">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 dark:text-white">Book Your Adventure</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Ready to embark on an unforgettable journey? Fill out the form below to start planning your perfect adventure in Slovenia. Our team will get back to you within 24 hours.
            </p>
          </div>

          <div className="max-w-2xl mx-auto grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12">
            <div className="flex items-start space-x-3">
              <MapPin className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold mb-1 dark:text-white">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">Ljubljana, Slovenia</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Clock className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold mb-1 dark:text-white">Office Hours</h3>
                <p className="text-gray-600 dark:text-gray-300">Mon-Fri: 9:00 - 17:00</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Phone className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold mb-1 dark:text-white">Contact</h3>
                <p className="text-gray-600 dark:text-gray-300">+386 1 234 5678</p>
                <p className="text-gray-600 dark:text-gray-300">info@slovenia-adventures.com</p>
              </div>
            </div>
          </div>

          <BookingForm />

          <div className="mt-12 bg-gray-50 dark:bg-primary-dark/50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">What to Expect</h2>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>• Confirmation within 24 hours</li>
              <li>• Detailed trip information and preparation guidelines</li>
              <li>• Flexible payment options</li>
              <li>• Professional guides and equipment</li>
              <li>• Free cancellation up to 48 hours before the trip</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;