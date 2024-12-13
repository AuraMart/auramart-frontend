import React, { useState, useEffect, useRef } from "react";

import { useNavigate } from "react-router-dom";

const NavbarUser = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchInputRef = useRef(null);
  const searchResultsRef = useRef(null);

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:9191/api/v1/products/all");
        const data = await response.json();
        if (data.message === "success") {
          setProducts(data.data);
          setFilteredProducts(data.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Handle search input change
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(value) ||
      product.brand.toLowerCase().includes(value) ||
      product.description.toLowerCase().includes(value) ||
      product.category.name.toLowerCase().includes(value)
    );

    setFilteredProducts(filtered);
  };

  // Handle search input focus
  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  // Close search results
  const handleCloseSearch = () => {
    setIsSearchFocused(false);
    setSearchTerm("");
    setFilteredProducts(products);
  };

  // Handle click outside of search results
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target) &&
        searchResultsRef.current &&
        !searchResultsRef.current.contains(event.target)
      ) {
        setIsSearchFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
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
            <li><a href="/user/" className="text-gray-700 hover:text-gray-900">Shop</a></li>
            <li><a href="/user/mens" className="text-gray-700 hover:text-gray-900">Men</a></li>
            <li><a href="/user/women" className="text-gray-700 hover:text-gray-900">Women</a></li>
            <li><a href="/user/kids" className="text-gray-700 hover:text-gray-900">Kids</a></li>
            <li><a href="/user/shoes" className="text-gray-700 hover:text-gray-900">Shoes</a></li>
            <li><a href="/user/offers" className="text-gray-700 hover:text-gray-900">Sales & Offers</a></li>
          </ul>
        </nav>
        <div className="relative flex items-center space-x-4">
          <input 
            ref={searchInputRef}
            type="text" 
            placeholder="Search" 
            value={searchTerm}
            onChange={handleSearch}
            onFocus={handleSearchFocus}
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

      {/* Search Results */}
      {isSearchFocused && searchTerm && (
        <div 
          ref={searchResultsRef}
          className="fixed top-20 left-1/2 transform -translate-x-1/2 w-3/4 bg-white shadow-lg rounded-lg z-50 max-h-[70vh] overflow-y-auto"
        >
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-bold">Search Results</h2>
            <button 
              onClick={handleCloseSearch}
              className="text-gray-600 hover:text-gray-900"
            >
              ✖️ Close
            </button>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4">
              {filteredProducts.map((product) => (
                <div key={product.id} className="p-4 border rounded-lg shadow-md">
                  <img 
                    src={product.imageUrls[0]} 
                    alt={product.name} 
                    className="object-cover w-full h-40 mb-2 rounded-md"
                  />
                  <h2 className="text-lg font-bold">{product.name}</h2>
                  <p className="text-gray-700">{product.brand}</p>
                  <p className="font-bold text-gray-900">${product.price.toFixed(2)}</p>
                  <button 
                    className="px-4 py-2 mt-2 text-white bg-purple-600 rounded-md hover:bg-purple-700"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    View Product
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-gray-500">
              No products found matching your search.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NavbarUser;