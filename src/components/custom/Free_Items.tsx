import { Link } from "react-router-dom";

const Free_Items = () => {
  return (
    <div className="max-w-6xl mx-auto mt-16 px-4 grid md:grid-cols-2 gap-8">
      {/* Free Fries */}
      <div className="flex flex-col md:flex-row items-center bg-yellow-50 rounded-2xl overflow-hidden shadow-md">
        <img
          src="/Food_Assets/assets/ads/fries.jpg"
          alt="Free Fries"
          className="w-full md:w-1/2 h-64 object-cover"
        />
        <div className="p-6 text-center md:text-left">
          <h4 className="text-yellow-700 text-xl font-semibold">
            Get your free
          </h4>
          <h5 className="text-2xl font-bold mb-2">Cheese Fries 🍟</h5>
          <Link
            to="/"
            className="text-yellow-600 hover:underline text-sm font-medium"
          >
            Learn more
          </Link>
        </div>
      </div>

      {/* Free Drink */}
      <div className="flex flex-col md:flex-row items-center bg-yellow-50 rounded-2xl overflow-hidden shadow-md">
        <img
          src="/Food_Assets/assets/ads/drinks.jpg"
          alt="Free Drink"
          className="w-full md:w-1/2 h-64 object-cover"
        />
        <div className="p-6 text-center md:text-left">
          <h4 className="text-yellow-700 text-xl font-semibold">
            Get your free
          </h4>
          <h5 className="text-2xl font-bold mb-2">Cold Drink 🥤</h5>
          <Link
            to="/"
            className="text-yellow-600 hover:underline text-sm font-medium"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Free_Items;
