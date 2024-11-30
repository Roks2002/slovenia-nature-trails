import { useParams } from "react-router-dom";
import { blogPosts } from "../data/blogs";
import { formatDistance } from "date-fns";

const StoryDetails = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === id);

  if (!post) {
    return (
      <div className="pt-20 px-4 min-h-screen bg-white dark:bg-primary-dark">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Story not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 px-4 min-h-screen bg-white dark:bg-primary-dark">
      <div className="max-w-3xl mx-auto">
        <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-8" />
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{post.title}</h1>
        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-8">
          <span>{formatDistance(new Date(post.date), new Date(), { addSuffix: true })}</span>
          <span className="mx-2">•</span>
          <span className="bg-gray-100 dark:bg-primary-dark px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>
        <div className="prose dark:prose-invert max-w-none">
          {post.content}
        </div>
      </div>
    </div>
  );
};

export default StoryDetails;