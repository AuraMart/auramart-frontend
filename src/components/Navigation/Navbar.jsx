import React from "react";


const Navbar = () => {
  return (
    <div className="">
      {/* Navigation Bar */}
      <header className="fixed top-0 z-50 flex items-center justify-between w-full py-4 pl-32 pr-32 bg-gray-100 border-b border-gray-300 shadow-md">
        <div className="text-2xl font-bold ">Online Store</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="/home" className="text-gray-700 hover:text-gray-900">Shop</a></li>
            <li><a href="/MenCategory" className="text-gray-700 hover:text-gray-900">Men</a></li>
            <li><a href="/WomenCategory" className="text-gray-700 hover:text-gray-900">Women</a></li>
            <li><a href="/kidsCategory" className="text-gray-700 hover:text-gray-900">Kids</a></li>
            <li><a href="/ShoesCategory" className="text-gray-700 hover:text-gray-900">Shoes</a></li>
            <li><a href="/offers" className="text-gray-700 hover:text-gray-900">Sales & Offers</a></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <input 
            type="text" 
            placeholder="Search" 
            className="px-3 py-1 border rounded-md focus:outline-none focus:ring focus:ring-purple-300"
          />
          <button className="text-lg">❤️</button>
          <button className="text-lg">👤</button>
          <button className="text-lg text-purple-600">🛒</button>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="px-6 py-2 text-sm bg-gray-50">
        <a href="/" className="text-gray-600 hover:underline">Home</a> &gt; 
        <a href="/account" className="text-gray-600 hover:underline"> My Account</a> &gt; 
        <span className="text-gray-900"> Check Out</span>
      </div>

    
    </div>
  );
};

export default Navbar;
