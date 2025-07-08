import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

import { Button } from "../ui/button";
import Navbar from "./Navbar";
import { useCartStore } from "@/store/useCart";

import Logo from "/Food_Assets/assets/logo/logo.png";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  const cartCount = useCartStore((state) =>
    state.cart.reduce((acc, item) => acc + item.quantity, 0)
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      setIsSticky(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={isSticky ? "sticky" : "header"}>
      <div className="w-full shadow-md px-4 py-3 flex items-center justify-between transition-all duration-300">
        {/* Logo */}
        <Link to="/" aria-label="Go to home page">
          <img
            src={Logo}
            alt="Food Burger Logo"
            className="h-16 md:h-20 object-contain"
          />
        </Link>

        {/* Navbar */}
        <Navbar />

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <Link
            to="/cart"
            className="relative text-yellow-700 hover:text-yellow-900 transition-colors"
            aria-label="View cart"
          >
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <>
                {/* Cart count badge */}
                <span
                  title={`Cart contains ${cartCount} items`}
                  className="absolute -top-2 -right-2 bg-yellow-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"
                >
                  {cartCount}
                </span>

                {/* Notification Ping */}
                <span className="absolute -top-1 -right-1 flex size-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                </span>
              </>
            )}
          </Link>

          {/* Sign In */}
          <Button
            variant="outline"
            size="sm"
            className="hidden md:inline-block border-yellow-500 text-yellow-700 hover:bg-yellow-200"
          >
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
