import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
          alt="Slovenia Landscape"
          className="w-full h-full object-cover"
        />
      </div>
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
  );
};

export default HeroSection;