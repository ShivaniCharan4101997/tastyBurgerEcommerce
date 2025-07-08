// billing address input
// confirm order(just clear cart and show toast)
// ?form to take name,adress,email,phone
// On submit, send cart + userInfo to Firebase (e.g. under /orders node in Realtime DB).

import { useCartStore } from "@/store/useCart";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, clearCart } = useCartStore();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.address) {
      toast.error("Please fill in all fields");
      return;
    }

    // Later you can save to Firebase here
    toast.success("Order placed successfully!");
    clearCart();
    navigate("/");
  };

  if (cart.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-yellow-700 mb-4">
          No items to checkout!
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-yellow-800 mb-6 text-center">
        Checkout
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-6 rounded-lg shadow-lg"
      >
        <div>
          <label className="block font-medium text-yellow-700">Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded mt-1"
            required
          />
        </div>
        <div>
          <label className="block font-medium text-yellow-700">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-2 rounded mt-1"
            required
          />
        </div>
        <div>
          <label className="block font-medium text-yellow-700">Address</label>
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            className="w-full border p-2 rounded mt-1 min-h-[100px]"
            required
          ></textarea>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold text-yellow-800">
            Total: ₹{total.toFixed(2)}
          </p>
          <Button
            type="submit"
            className="bg-yellow-600 hover:bg-yellow-700 text-white"
          >
            Place Order
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
