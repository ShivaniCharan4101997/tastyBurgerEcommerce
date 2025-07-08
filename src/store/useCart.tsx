import { create } from "zustand";

type CartItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

type CartState = {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  clearCart: () => void;
  total: number;
};

export const useCartStore = create<CartState>((set, get) => ({
  cart: [],

  addToCart: (item) => {
    const existing = get().cart.find((i) => i.id === item.id);
    if (existing) {
      set({
        cart: get().cart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      });
    } else {
      set({ cart: [...get().cart, { ...item, quantity: 1 }] });
    }
  },

  removeFromCart: (id) => {
    set({ cart: get().cart.filter((item) => item.id !== id) });
  },

  increaseQuantity: (id) => {
    set({
      cart: get().cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  },

  decreaseQuantity: (id) => {
    set({
      cart: get()
        .cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0),
    });
  },

  clearCart: () => set({ cart: [] }),

  total: 0,
}));
