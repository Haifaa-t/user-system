import { Users as UsersIcon } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-6">
      <div className="bg-white shadow-lg p-10 rounded-lg max-w-xl w-full">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <UsersIcon className="w-8 h-8 text-red-600" />
          <h1 className="text-4xl font-bold text-red-600">Welcome to the System</h1>
        </div>

        {/* Subtext */}
        <p className="text-lg text-gray-700 mb-6">
          This platform helps you explore users and their related posts, albums, and todos.
        </p>

        {/* Button */}
        <a
          href="/users"
          className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg shadow transition"
        >
          <UsersIcon className="w-5 h-5" />
          View Users
        </a>
      </div>
    </div>
  );
};

export default Home;
