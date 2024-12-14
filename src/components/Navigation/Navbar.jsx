import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form submission
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="fixed top-0 z-50 flex items-center justify-between w-full py-4 px-8 bg-gray-100 border-b border-gray-300 shadow-md">
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
        <form className="flex items-center border rounded-md" onSubmit={handleSearch}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="px-3 py-1 border-none focus:outline-none"
          />
        </form>
        <button className="text-lg" onClick={() => navigate("/wishlist")}>
          ❤️
        </button>
        <button className="text-lg" onClick={() => navigate("/login")}>
          👤
        </button>
        <button className="text-lg text-purple-600" onClick={() => navigate("/cart")}>
          🛒
        </button>
      </div>
    </header>
  );
};

export default Navbar;

