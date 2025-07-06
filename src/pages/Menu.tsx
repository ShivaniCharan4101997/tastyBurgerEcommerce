import { useState } from "react";
import { Button } from "@/components/ui/button";
import menuData from "@/menuData.json";
import { motion } from "framer-motion";

type MenuItem = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
};

const categories = [
  "All",
  "Beverages",
  "Burger",
  "Fries",
  "Combos",
  "Specials & Snacks",
];

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? menuData
      : menuData.filter(
          (item: MenuItem) =>
            item.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-yellow-700 text-center mb-10">
        Our Menu
      </h1>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={selectedCategory === cat ? "default" : "outline"}
            onClick={() => setSelectedCategory(cat)}
            className={`rounded-full border-yellow-500 ${
              selectedCategory === cat
                ? "bg-yellow-600 text-white hover:bg-yellow-700"
                : "bg-white text-yellow-700 hover:bg-yellow-100"
            }`}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Menu Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item: MenuItem) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="rounded-2xl overflow-hidden shadow-ring bg-white hover:shadow-xl transition-all"
          >
            <motion.img
              src={item.image}
              alt={item.name}
              className="w-full h-120 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-yellow-700">
                {item.name}
              </h3>
              <p className="text-gray-500 text-sm mb-1">{item.category}</p>
              <p className="text-gray-700 mb-3">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-yellow-800">
                  ₹{item.price}
                </span>
                <Button
                  variant="secondary"
                  className="text-yellow-700 border-yellow-700 hover:bg-yellow-100"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
