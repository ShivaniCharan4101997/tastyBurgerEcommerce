// show items in cart (with quantity control +remove)
// show total price
// show "clear cart" & "checkout" btn
// update quantity
// remove item
// cart summary(total,subtotal)
// read the cart from zustand

// pages/Cart.tsx
import { useCartStore } from "@/store/useCart";
import CartItem from "@/components/custom/CardItem";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
type CartItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-yellow-700 mb-4">
          Your cart is empty 🛒
        </h2>
        <Link to="/menu">
          <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">
            Go to Menu
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-yellow-800 mb-6 text-center">
        Your Cart
      </h1>

      <div className="space-y-6">
        {cart.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>

      {/* Summary */}
      <div className="mt-10 border-t pt-6 flex justify-between items-center">
        <div className="text-xl font-semibold text-yellow-800">
          Total: ₹{total.toFixed(2)}
        </div>
        <div className="flex gap-3">
          <Button
            onClick={clearCart}
            className="border border-yellow-500 text-yellow-700 hover:bg-yellow-100"
          >
            Clear Cart
          </Button>
          <Link to="/checkout">
            <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">
              Checkout
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
