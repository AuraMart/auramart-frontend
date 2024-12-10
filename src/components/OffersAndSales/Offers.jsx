import React,{useEffect,useState} from "react";
import { OfferSideBar } from "./offerSideBar";
import Slide from './Slide';
import AOS from "aos";

const products = [
    {
      id: 1,
      name: "Office Ware Dark Blue Shirt",
      price: 2990.0,
      originalPrice: 4990.0,
      discount: 66,
      image: "https://res.cloudinary.com/dcaqcian4/image/upload/v1733576465/shirt3_zsjcs8.jpg",
      inStock: true,
    },

    {
      id: 2,
      name: "Shirt",
      price: 990.0,
      originalPrice: 2290.0,
      discount: 57,
      image: "https://res.cloudinary.com/dcaqcian4/image/upload/v1733576449/men2_hbt2pz.jpg",
      inStock: false,
    },
    {
        id: 3,
        name: "Office Ware Shirt",
        price: 1990.0,
        originalPrice: 3490.0,
        discount: 50,
        image: "https://res.cloudinary.com/dcaqcian4/image/upload/v1733576454/shirt1_zauayn.jpg",
        inStock: true,
      },

    {
      id: 3,
      name: "Raglan Long Sleeve Grey T-Shirt",
      price: 1990.0,
      originalPrice: 2990.0,
      discount: 30,
      image: "https://res.cloudinary.com/dcaqcian4/image/upload/v1733576442/men1_ts7ucf.jpg",
      inStock: true,
    },
    {
        id: 4,
        name: "I am Pirnted Crew Neck Tshirt",
        price: 1470.0,
        originalPrice: 3190.0,
        discount: 54,
        image: "https://res.cloudinary.com/dcaqcian4/image/upload/v1733576473/women1_hpd0jj.webp",
        inStock: true,
      },
      {
        id: 5,
        name: "Long Sleeve Blue Hoodie",
        price: 1603.0,
        originalPrice: 2290.0,
        discount: 30,
        image: "https://res.cloudinary.com/dcaqcian4/image/upload/v1733576479/women2_wwddbb.webp",
        inStock: true,
      },
      {
        id: 6,
        name: "Bow Tie Deep Vneck Green Dress",
        price: 3340.0,
        originalPrice: 6690.0,
        discount: 51,
        image: "https://res.cloudinary.com/dcaqcian4/image/upload/v1733576485/women3_nxfmdh.webp",
        inStock: true,
      },
      {
        id: 3,
        name: "Three Colour Tie And Dye T-Shirt",
        price: 1445.0,
        originalPrice: 2890.0,
        discount: 50,
        image: "https://res.cloudinary.com/dcaqcian4/image/upload/v1733576489/women4_ok5jhf.webp",
        inStock: true,
      },
      {
        id: 7,
        name: "Crop Top Tshirt",
        price: 3340.0,
        originalPrice: 6690.0,
        discount: 51,
        image: "https://res.cloudinary.com/dcaqcian4/image/upload/v1733576496/women5_as09z7.webp",
        inStock: true,
      },
      
  ];


 
  
  const Offers = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

    return (
      <>
      <Slide handleOrderPopup={handleOrderPopup} />
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
      </>
    );
  };
  
  export default Offers;