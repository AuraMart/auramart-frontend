import React from "react";

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
        <aside className="w-full sm:w-1/4 p-4 border-r">
          <h2 className="text-xl font-bold mb-6 text-blue-600">Filters</h2> {/* Changed header color */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3 text-green-600">Collection</h3> {/* Changed header color */}
            <div className="mb-3">
              <input type="checkbox" id="collection1" />
              <label htmlFor="collection1" className="ml-2">New Arrivals</label>
            </div>
            <div className="mb-3">
              <input type="checkbox" id="collection2" />
              <label htmlFor="collection2" className="ml-2">Clothing</label>
            </div>
            <div className="mb-3">
              <input type="checkbox" id="collection3" />
              <label htmlFor="collection3" className="ml-2">Collections</label>
            </div>
            <div className="mb-3">
              <input type="checkbox" id="collection4" />
              <label htmlFor="collection4" className="ml-2">Sale</label>
            </div>
            <div className="mb-3">
              <input type="checkbox" id="collection5" />
              <label htmlFor="collection5" className="ml-2">Workware</label>
            </div>
            <div className="mb-3">
              <input type="checkbox" id="collection6" />
              <label htmlFor="collection6" className="ml-2">Gift Cards</label>
            </div>
          </div>
      
          <div className="mb-6">
            <h3 className="font-semibold mb-3 text-green-600">Availability</h3> 
            <div className="mb-3">
              <input type="checkbox" id="inStock" />
              <label htmlFor="inStock" className="ml-2">In Stock</label>
            </div>
            <div className="mb-3">
              <input type="checkbox" id="outStock" />
              <label htmlFor="outStock" className="ml-2">Out of Stock</label>
            </div>
          </div>
      
          
          {/* Color Filter */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3 text-green-600">Colors</h3>
            <div className="grid grid-cols-4 gap-2">
              <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
              <div className="w-6 h-6 bg-black rounded-full"></div>
              <div className="w-6 h-6 bg-red-500 rounded-full"></div>
              <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
              <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
              <div className="w-6 h-6 bg-white rounded-full"></div>
              <div className="w-6 h-6 bg-green-500 rounded-full"></div>
              <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
              <div className="w-6 h-6 bg-gray-500 rounded-full"></div>
              <div className="w-6 h-6 bg-pink-500 rounded-full"></div>
              <div className="w-6 h-6 bg-brown-500 rounded-full"></div>
              <div className="w-6 h-6 bg-teal-500 rounded-full"></div>
            </div>
          </div>
  
          {/* Size Filter */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3 text-green-600">Size</h3>
            <div className="grid grid-cols-4 gap-2">
              <button className="border py-1 px-2 rounded-md text-sm">XXS</button>
              <button className="border py-1 px-2 rounded-md text-sm">XS</button>
              <button className="border py-1 px-2 rounded-md text-sm">S</button>
              <button className="border py-1 px-2 rounded-md text-sm">M</button>
              <button className="border py-1 px-2 rounded-md text-sm">L</button>
              <button className="border py-1 px-2 rounded-md text-sm">XL</button>
              <button className="border py-1 px-2 rounded-md text-sm">XXL</button>
              <button className="border py-1 px-2 rounded-md text-sm">3XL</button>
              <button className="border py-1 px-2 rounded-md text-sm">4XL</button>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-semibold mb-3 text-green-600">Price</h3>
            <div className="flex justify-between items-center">
              <span>$70</span>
              <input
                type="range"
                min="70"
                max="600"
                className="w-full mx-2"
              />
              <span>$600</span>
            </div>
          </div>
  
      
          <div className="mb-6">
            <h3 className="font-semibold mb-3 text-green-600">Product Type</h3> 
            <div className="mb-3">
              <input type="checkbox" id="dress" />
              <label htmlFor="dress" className="ml-2">Dress</label>
            </div>
            <div className="mb-3">
              <input type="checkbox" id="WomenT" />
              <label htmlFor="WomenT" className="ml-2">Women T-Shirts</label>
            </div>
            <div className="mb-3">
              <input type="checkbox" id="menT" />
              <label htmlFor="menT" className="ml-2">Men's T-Shirt</label>
            </div>
            <div className="mb-3">
              <input type="checkbox" id="menoffice" />
              <label htmlFor="menoffice" className="ml-2">Mens Office Ware</label>
            </div>
            <div className="mb-3">
              <input type="checkbox" id="hoodies" />
              <label htmlFor="hoodies" className="ml-2">Hoodies</label>
            </div>
          </div>
        </aside>
     
      
            
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