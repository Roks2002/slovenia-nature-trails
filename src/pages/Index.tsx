import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mountain, Bike, Waves, Wind } from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-primary-dark">
      {/* Hero Section */}
      <div className="relative h-screen">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
          alt="Slovenia Landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Discover Slovenia
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-slide-in">
              Experience the natural beauty of Europe's hidden gem
            </p>
            <Link
              to="/experiences"
              className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Start Your Adventure
            </Link>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-primary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
            How to Plan Your Perfect Trip
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Search",
                description: "Find your perfect destination and experience",
                number: "1",
              },
              {
                title: "Book",
                description: "Choose your dates and secure your adventure",
                number: "2",
              },
              {
                title: "Enjoy",
                description: "Experience unforgettable moments in Slovenia",
                number: "3",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="bg-white dark:bg-primary-dark p-6 rounded-lg shadow-lg text-center"
              >
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
            Popular Activities
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: <Mountain className="h-8 w-8" />, name: "Hiking" },
              { icon: <Bike className="h-8 w-8" />, name: "Mountain Biking" },
              { icon: <Waves className="h-8 w-8" />, name: "Water Activities" },
              { icon: <Wind className="h-8 w-8" />, name: "Paragliding" },
            ].map((activity) => (
              <Link
                key={activity.name}
                to={`/experiences/${activity.name.toLowerCase()}`}
                className="bg-white dark:bg-primary-dark p-6 rounded-lg shadow-lg text-center hover:transform hover:scale-105 transition duration-300"
              >
                <div className="text-primary dark:text-primary-light mb-4">
                  {activity.icon}
                </div>
                <h3 className="text-xl font-semibold dark:text-white">{activity.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-8">Subscribe to our newsletter for the latest adventures and special offers</p>
          <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-6 py-3 rounded-full text-gray-900 w-full md:w-96"
              required
            />
            <button
              type="submit"
              className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
            Contact Us
          </h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border dark:bg-primary-dark dark:text-white"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border dark:bg-primary-dark dark:text-white"
                required
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full px-4 py-3 rounded-lg border dark:bg-primary-dark dark:text-white"
              required
            ></textarea>
            <div className="text-center">
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;