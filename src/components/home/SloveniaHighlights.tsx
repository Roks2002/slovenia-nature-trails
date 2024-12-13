import { Leaf, Mountain, Waves, Castle } from "lucide-react";

const SloveniaHighlights = () => {
  return (
    <section className="py-16 bg-white dark:bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 dark:text-white">
          Why Visit Slovenia?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Discover a hidden gem in the heart of Europe where Alpine peaks meet
          Mediterranean beaches, and ancient forests lead to historic castles.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <Mountain className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 dark:text-white">Alpine Adventures</h3>
            <p className="text-gray-600 dark:text-gray-300">
              From the majestic Julian Alps to the Triglav National Park, experience
              world-class hiking and skiing destinations.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <Leaf className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 dark:text-white">Natural Beauty</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Explore emerald lakes, underground caves, and pristine forests in one
              of Europe's greenest countries.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <Castle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 dark:text-white">Rich Heritage</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Visit medieval castles, charming towns, and discover a culture where
              Central European and Mediterranean influences meet.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <Waves className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 dark:text-white">Coastal Charm</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Enjoy the Adriatic coastline with its picturesque towns, beaches, and
              fresh seafood cuisine.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 dark:bg-primary rounded-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-6 dark:text-white">
            Did You Know?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">60%</p>
              <p className="text-gray-600 dark:text-gray-300">
                of Slovenia is covered in forests
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">24,000</p>
              <p className="text-gray-600 dark:text-gray-300">
                animal species call Slovenia home
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">10,000+</p>
              <p className="text-gray-600 dark:text-gray-300">
                caves to explore
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SloveniaHighlights;