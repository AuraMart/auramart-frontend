import React from "react";

export const OfferSideBar = () => {
    return(
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
    )
}