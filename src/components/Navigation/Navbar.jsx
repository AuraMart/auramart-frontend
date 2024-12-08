import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="">
      {/* Navigation Bar */}
      <header className="fixed top-0 z-50 flex items-center justify-between w-full py-4 pl-32 pr-32 bg-gray-100 border-b border-gray-300 shadow-md">
        <div 
          className="text-2xl font-bold cursor-pointer" 
          onClick={() => navigate("/")}
        >
          Aura Mart
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="/" className="text-gray-700 hover:text-gray-900">Shop</a></li>
            <li><a href="/mens" className="text-gray-700 hover:text-gray-900">Men</a></li>
            <li><a href="/women" className="text-gray-700 hover:text-gray-900">Women</a></li>
            <li><a href="/kids" className="text-gray-700 hover:text-gray-900">Kids</a></li>
            <li><a href="/shoes" className="text-gray-700 hover:text-gray-900">Shoes</a></li>
            <li><a href="/offers" className="text-gray-700 hover:text-gray-900">Sales & Offers</a></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <input 
            type="text" 
            placeholder="Search" 
            className="px-3 py-1 border rounded-md focus:outline-none focus:ring focus:ring-purple-300"
          />
          <button 
            className="text-lg" 
            onClick={() => navigate("/wishlist")}
          >
            ❤️
          </button>
          <button 
            className="text-lg" 
            onClick={() => navigate("/login")}
          >
            👤
          </button>
          <button 
            className="text-lg text-purple-600" 
            onClick={() => navigate("/cart")}
          >
            🛒
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
