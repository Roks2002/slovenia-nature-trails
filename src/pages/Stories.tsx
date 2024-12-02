import { blogPosts } from "../data/blogs";
import { formatDistance } from "date-fns";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

const Stories = () => {
  return (
    <div className="pt-20 px-4 min-h-screen bg-white dark:bg-primary-dark">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          Adventure Stories
        </h1>
        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <Link 
              to={`/stories/${post.id}`} 
              key={post.id}
              className="block hover:shadow-xl transition-shadow duration-300"
            >
              <Card className={`overflow-hidden ${index % 2 === 0 ? 'animate-fade-in' : 'animate-slide-in'}`}>
                <div className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="w-full md:w-1/2 h-[300px]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full md:w-1/2 p-8 flex flex-col justify-between bg-white dark:bg-primary">
                    <div>
                      <div className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                        {formatDistance(new Date(post.date), new Date(), {
                          addSuffix: true,
                        })}
                      </div>
                      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="inline-block bg-gray-100 dark:bg-primary-dark text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full text-sm">
                        {post.category}
                      </span>
                      <span className="text-primary dark:text-primary-light font-medium">
                        Read more →
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;