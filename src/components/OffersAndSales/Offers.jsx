import React from "react";
import { OfferSideBar } from "./offerSideBar";
const products = [
    {
      id: 1,
      name: "Office Ware Dark Green Shirt",
      price: 2990.0,
      originalPrice: 4990.0,
      discount: 66,
      image: "Cloths/shirt2.png",
      inStock: true,
    },

    {
      id: 2,
      name: "Office Ware Shirt",
      price: 990.0,
      originalPrice: 2290.0,
      discount: 57,
      image: "Cloths/men2.jpg",
      inStock: false,
    },
    {
        id: 3,
        name: "Office Ware Shirt",
        price: 1990.0,
        originalPrice: 3490.0,
        discount: 50,
        image: "Cloths/men1.jpg",
        inStock: true,
      },

    {
      id: 3,
      name: "Raglan Long Sleeve Grey T-Shirt",
      price: 1990.0,
      originalPrice: 2990.0,
      discount: 30,
      image: "Cloths/shirt3.jpg",
      inStock: true,
    },
    {
        id: 4,
        name: "I am Pirnted Crew Neck Tshirt",
        price: 1470.0,
        originalPrice: 3190.0,
        discount: 54,
        image: "Cloths/women1.jpg",
        inStock: true,
      },
      {
        id: 5,
        name: "Long Sleeve Blue Hoodie",
        price: 1603.0,
        originalPrice: 2290.0,
        discount: 30,
        image: "Cloths/women2.jpg",
        inStock: true,
      },
      {
        id: 6,
        name: "Bow Tie Deep Vneck Green Dress",
        price: 3340.0,
        originalPrice: 6690.0,
        discount: 51,
        image: "Cloths/women3.jpg",
        inStock: true,
      },
      {
        id: 3,
        name: "Three Colour Tie And Dye T-Shirt",
        price: 1445.0,
        originalPrice: 2890.0,
        discount: 50,
        image: "Cloths/women4.jpg",
        inStock: true,
      },
      {
        id: 7,
        name: "Bow Tie Deep Vneck Green Dress",
        price: 3340.0,
        originalPrice: 6690.0,
        discount: 51,
        image: "Cloths/women5.png",
        inStock: true,
      },
      
  ];
  
  const Offers = () => {
    return (
        <div className="flex flex-col sm:flex-row p-4">
        {/* Sidebar Filters */}
        
        <OfferSideBar />
      
            
        {/* Product Grid */}
        <main className="w-full sm:w-3/4 p-4">
          <h2 className="text-lg font-bold mb-4">Offers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg p-4 flex flex-col items-center"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-contain mb-4"
                />
                <h3 className="font-semibold text-center mb-2">
                  {product.name}
                </h3>
                <p className="text-center text-red-500">
                  Rs {product.price.toFixed(2)}{" "}
                  <span className="line-through text-gray-500">
                    Rs {product.originalPrice.toFixed(2)}
                  </span>
                </p>
                <span className="bg-green-100 text-green-700 px-2 py-1 text-xs rounded-full">
                  {product.discount}% Off
                </span>
                <span
                  className={`mt-2 text-xs ${
                    product.inStock ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  };
  
  export default Offers;