import { useSearchParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPostsByUserId } from '@/api/users';
import { StickyNote, ArrowLeft } from 'lucide-react';

const Posts = () => {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get('userId');
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    if (userId) {
      getPostsByUserId(userId).then(setPosts);
    }
  }, [userId]);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-xl">
       
        <div className="flex items-center gap-2 mb-6">
          <StickyNote className="w-6 h-6 text-red-500" />
          <h1 className="text-2xl font-bold text-red-600">
            Posts for User {userId}
          </h1>
        </div>

       
        <div className="space-y-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="p-6 border-l-4 border-yellow-400 bg-gray-50 rounded-lg shadow hover:shadow-md transition"
            >
              <h2 className="text-xl font-bold mb-2 text-red-600">
                {post.title}
              </h2>
              <p className="text-gray-700">{post.body}</p>
            </div>
          ))}
        </div>

       
        <div className="mt-10">
          <Link
            to="/users"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-red-600 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Users
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Posts;

