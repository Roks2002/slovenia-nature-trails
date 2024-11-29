import { blogPosts } from "../data/blogs";
import { formatDistance } from "date-fns";

const Stories = () => {
  return (
    <div className="pt-20 px-4 min-h-screen bg-white dark:bg-primary-dark">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Adventure Stories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white dark:bg-primary rounded-lg shadow-lg overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-2">
                  <span>{formatDistance(new Date(post.date), new Date(), { addSuffix: true })}</span>
                  <span className="mx-2">•</span>
                  <span>{post.author}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{post.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <span className="inline-block bg-gray-100 dark:bg-primary-dark text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm">
                  {post.category}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;