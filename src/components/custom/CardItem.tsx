// Shows name, image, quantity selector (+/-), remove button.
// Connected to Zustand store.

// components/cart/CartItem.tsx
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/useCart";
import { Trash2, Plus, Minus } from "lucide-react";

type CartItemProps = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

const CartItem = ({ id, name, price, image, quantity }: CartItemProps) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCartStore();

  return (
    <div className="flex gap-4 items-center p-4 border rounded-lg bg-white shadow-md">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 object-cover rounded-lg"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-yellow-800">{name}</h3>
        <p className="text-gray-700">₹{price}</p>
        <div className="flex items-center gap-2 mt-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => decreaseQuantity(id)}
          >
            <Minus className="w-4 h-4" />
          </Button>
          <span className="font-semibold">{quantity}</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => increaseQuantity(id)}
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => removeFromCart(id)}
        className="text-red-500 hover:text-red-700"
      >
        <Trash2 />
      </Button>
    </div>
  );
};

export default CartItem;
