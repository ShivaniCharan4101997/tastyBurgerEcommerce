import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-yellow-50 px-6 text-center">
      <h1 className="text-6xl font-bold text-yellow-700 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
