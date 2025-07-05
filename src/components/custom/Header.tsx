import { Button } from "../ui/button";
import Navbar from "./Navbar";

import Logo from "/Food_Assets/assets/logo/logo.png";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = document.documentElement.scrollTop;
      setNav(scrollValue > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={nav ? "sticky" : "header"}>
      <div className="w-full shadow-md px-4 py-3 flex items-center justify-between transition-all duration-300">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-16 md:h-20 object-contain" />
        </Link>

        {/* Navbar */}
        <Navbar />

        {/* Cart + Auth */}
        <div className="flex items-center gap-4">
          {/* Cart Icon */}
          <div className="relative">
            <Link
              to="/cart"
              className="text-yellow-700 hover:text-yellow-900 transition-colors"
              aria-label="View Cart"
            >
              <ShoppingCart className="w-6 h-6" />
            </Link>

            {/* Notification Ping Dot */}
            <span className="absolute -top-1 -right-1 flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
            </span>
          </div>

          {/* Sign In Button */}
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
