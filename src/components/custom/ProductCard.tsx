import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/useCart";
import { motion } from "framer-motion";

type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  description?: string;
};

const ProductCard = ({ id, name, image, price, description }: Product) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <motion.div
      className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <motion.img
        src={image}
        alt={name}
        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
        whileHover={{ scale: 1.05 }}
      />

      <div className="p-4">
        <h3 className="text-xl font-bold text-yellow-700">{name}</h3>
        {description && (
          <p className="text-gray-600 text-sm mt-1 mb-2 line-clamp-2">
            {description}
          </p>
        )}
        <div className="flex items-center justify-between mt-3">
          <span className="text-lg font-semibold text-yellow-800">
            ₹{price}
          </span>
          <Button
            onClick={() => addToCart({ id, name, image, price })}
            className="bg-yellow-600 hover:bg-yellow-700 text-white"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
