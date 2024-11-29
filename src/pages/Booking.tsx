import BookingForm from "@/components/BookingForm";

const Booking = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-gray-50 dark:bg-primary-dark">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 dark:text-white">Book Your Slovenian Adventure</h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Whether you're interested in a specific trip or have general questions about our tours,
          we're here to help you plan your perfect Slovenian adventure.
        </p>
        <BookingForm />
      </div>
    </div>
  );
};

export default Booking;