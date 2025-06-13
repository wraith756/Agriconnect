import React, { useState, useEffect } from "react";
import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Leaf className="w-8 h-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-800">AgriConnect</span>
          </div>

          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                About Us
              </a>
            </li>
            <li>
              <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                Contact Us
              </a>
            </li>
          </ul>

          <Link 
            to="/signin" 
            className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
