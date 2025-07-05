import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Show button after scrolling 300px
  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Scroll To Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-full shadow-lg z-50 transition-all"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Footer Content */}
      <footer className="bg-yellow-50 text-gray-700 py-12 border-t border-yellow-200">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8 text-sm">
          {/* Location */}
          <div>
            <h3 className="text-yellow-700 font-semibold text-lg mb-2">
              Location
            </h3>
            <p>5505 Waterford District</p>
            <p>Dr, Miami, FL 33126</p>
            <p>United States</p>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-yellow-700 font-semibold text-lg mb-2">
              Working Hours
            </h3>
            <p>Mon-Fri: 9:00AM - 10:00PM</p>
            <p>Saturday: 10:00AM - 8:30PM</p>
            <p>Sunday: 12:00PM - 5:00PM</p>
          </div>

          {/* Order Now */}
          <div>
            <h3 className="text-yellow-700 font-semibold text-lg mb-2">
              Order Now
            </h3>
            <p>Quaerat neque purus ipsum</p>
            <p className="font-bold text-yellow-800 mt-2">999-888-7777</p>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-yellow-700 font-semibold text-lg mb-2">
              Follow Us
            </h3>
            <p>Quaerat neque purus ipsum</p>
            {/* You can add social icons here */}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-yellow-200 mt-10 pt-6 text-center text-xs text-gray-500">
          <p>
            © 2023{" "}
            <span className="font-bold text-yellow-700 uppercase">
              tasty burgers
            </span>
            . All Rights Reserved
          </p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="#" className="hover:text-yellow-700">
              About Us
            </a>
            <a href="#" className="hover:text-yellow-700">
              Terms Of Use
            </a>
            <a href="#" className="hover:text-yellow-700">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
