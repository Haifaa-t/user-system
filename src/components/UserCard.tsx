import { Link } from 'react-router-dom';

type UserCardProps = {
  id: number;
  name: string;
  email: string;
  phone: string;
  street: string;
  company: string;
};

const UserCard = ({ id, name, email, phone, street, company }: UserCardProps) => (
  <li
    className="bg-white border-l-4 border-yellow-400 p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
  >
    <Link
      to={`/users/${id}`}
      className="text-red-600 font-bold text-xl hover:underline block mb-2"
    >
      {name}
    </Link>
    <p className="text-gray-700">
      <strong className="text-gray-900">Email:</strong> {email}
    </p>
    <p className="text-gray-700">
      <strong className="text-gray-900">Phone:</strong> {phone}
    </p>
    <p className="text-gray-700">
      <strong className="text-gray-900">Street:</strong> {street}
    </p>
    <p className="text-gray-700">
      <strong className="text-gray-900">Company:</strong> {company}
    </p>
  </li>
);

export default UserCard;
