import { useEffect, useState } from 'react';
import { getUsers } from '@/api/users';
import { Link } from 'react-router-dom';

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: { street: string };
  company: { name: string };
};

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto bg-white/90 shadow-xl rounded-xl p-8">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {users.map(user => (
            <li
              key={user.id}
              className="p-6 border-l-4 border-yellow-400 bg-white rounded-lg shadow hover:shadow-md transition-all duration-200"
            >
              <Link
                to={`/users/${user.id}`}
                className="text-xl font-semibold text-red-600 hover:underline block mb-2"
              >
                {user.name}
              </Link>
              <p className="text-gray-700">
                <span className="font-medium text-gray-900">Email:</span> {user.email}
              </p>
              <p className="text-gray-700">
                <span className="font-medium text-gray-900">Phone:</span> {user.phone}
              </p>
              <p className="text-gray-700">
                <span className="font-medium text-gray-900">Street:</span> {user.address.street}
              </p>
              <p className="text-gray-700">
                <span className="font-medium text-gray-900">Company:</span> {user.company.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Users;

