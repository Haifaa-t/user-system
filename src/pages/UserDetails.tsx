import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  getUserById,
  getUserPosts,
  getUserAlbums,
  getUserTodos,
} from '@/api/users';

import {
  User,
  Mail,
  Phone,
  Building2,
  Globe,
  StickyNote,
  Image,
  CheckCircle,
  ArrowLeft,
} from 'lucide-react';

const UserDetails = () => {
  const { userId } = useParams();
  const [user, setUser] = useState<any>(null);
  const [posts, setPosts] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (userId) {
      getUserById(userId).then(setUser);
      getUserPosts(userId).then(setPosts);
      getUserAlbums(userId).then(setAlbums);
      getUserTodos(userId).then(setTodos);
    }
  }, [userId]);

  if (!user) return <div className="text-center py-20">Loading user details...</div>;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-xl">
      
        <div className="flex items-center gap-2 mb-6">
          <User className="w-6 h-6 text-red-600" />
          <h1 className="text-2xl font-bold text-red-600">{user.name}</h1>
        </div>

       
        <div className="space-y-3 mb-6 text-gray-700">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-gray-500" />
            <p><strong>Email:</strong> {user.email}</p>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-gray-500" />
            <p><strong>Phone:</strong> {user.phone}</p>
          </div>
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-gray-500" />
            <p><strong>Company:</strong> {user.company.name}</p>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-gray-500" />
            <p><strong>Website:</strong> {user.website}</p>
          </div>
        </div>

        <hr className="my-6" />

       
        <section className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <StickyNote className="w-5 h-5 text-red-500" />
            <h2 className="text-xl font-semibold">Posts</h2>
          </div>
          <ul className="list-disc pl-5">
            {posts.slice(0, 3).map((post: any) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
          <Link to={`/posts?userId=${userId}`} className="text-blue-600 hover:underline mt-2 inline-block">
            View all posts
          </Link>
        </section>

      
        <section className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Image className="w-5 h-5 text-yellow-500" />
            <h2 className="text-xl font-semibold">Albums</h2>
          </div>
          <ul className="list-disc pl-5">
            {albums.slice(0, 3).map((album: any) => (
              <li key={album.id}>
                {album.title}{' '}
                <Link
                  to={`/photos?albumId=${album.id}`}
                  className="ml-2 text-blue-600 hover:underline text-sm"
                >
                  View photos
                </Link>
              </li>
            ))}
          </ul>
        </section>

       
        <section>
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <h2 className="text-xl font-semibold">Todos</h2>
          </div>
          <ul className="list-disc pl-5">
            {todos.slice(0, 3).map((todo: any) => (
              <li key={todo.id}>
                {todo.title} <span>{todo.completed ? '✅' : '❌'}</span>
              </li>
            ))}
          </ul>
        </section>

      
        <div className="mt-10">
          <Link to="/users" className="inline-flex items-center gap-2 text-gray-700 hover:text-red-600 transition">
            <ArrowLeft className="w-4 h-4" />
            Back to Users
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
