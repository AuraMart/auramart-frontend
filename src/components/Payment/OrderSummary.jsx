// import React from "react";

// const OrderSummary = () => {
//   const items = [
//     {
//       name: "Blue",
//       quantity: 1,
//       color: "Yellow",
//       price: 29.0,
//       image: "/images/girl.png", // Replace with your image path or URL
//     },
//     {
//       name: "Lavender Hoodie",
//       quantity: 2,
//       color: "Lavender",
//       price: 119.0,
//       image: "/images/girl.png", // Replace with your image path or URL
//     },
//     {
//       name: "Black Sweatshirt",
//       quantity: 2,
//       color: "Black",
//       price: 123.0,
//       image: "/images/girl.png", // Replace with your image path or URL
//     },
//   ];

//   const subtotal = 513.0;
//   const savings = 30.0;
//   const shipping = 5.0;
//   const total = subtotal - savings - shipping;

//   return (
//     <div className="max-w-md p-6 mx-auto bg-white border border-gray-300 rounded-lg shadow-md ">
//       <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">
//         Order Summary
//       </h2>
//       {items.map((item, index) => (
//         <div
//           key={index}
//           className="flex items-center pb-4 mb-4 border-b border-gray-200"
//         >
//           <img
//             src={item.image}
//             alt={item.name}
//             className="object-cover w-16 h-16 mr-4 rounded-md"
//           />
//           <div className="flex-1">
//             <p className="text-lg font-medium text-gray-700">
//               {item.name} x {item.quantity}
//             </p>
//             <p className="text-sm text-gray-500">Color: {item.color}</p>
//           </div>
//           <p className="text-lg font-semibold text-gray-800">
//             ${item.price.toFixed(2)}
//           </p>
//         </div>
//       ))}
//       <div className="pt-4 border-t border-gray-200">
//         <p className="flex justify-between mb-2 text-sm text-gray-600">
//           Subtotal ({items.length} items):{" "}
//           <span className="font-medium text-gray-800">
//             ${subtotal.toFixed(2)}
//           </span>
//         </p>
//         <p className="flex justify-between mb-2 text-sm text-gray-600">
//           Savings:{" "}
//           <span className="font-medium text-green-600">
//             -${savings.toFixed(2)}
//           </span>
//         </p>
//         <p className="flex justify-between mb-2 text-sm text-gray-600">
//           Shipping:{" "}
//           <span className="font-medium text-gray-800">
//             -${shipping.toFixed(2)}
//           </span>
//         </p>
//         <p className="flex justify-between mt-4 text-lg font-semibold text-gray-800">
//           Total: <span>${total.toFixed(2)}</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default OrderSummary;



import React, { useState, useEffect } from 'react';
import CartHeader from '../../components/Cart/CartHeader';
import CartTableHeader from '../../components/Cart/CartTableHeader';
import CartItem from '../../components/Cart/CartItem';
import CartDiscount from '../../components/Cart/CartDiscount';
import CartSummary from '../../components/Cart/CartSummary';
import PaymentSummary from './PaymentSummary';

const OrderSummary = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Safely parse localStorage
    try {
      const savedCart = localStorage.getItem('cart');
      const parsedCart = savedCart ? JSON.parse(savedCart) : [];
      
      // Ensure parsedCart is an array
      setCartItems(Array.isArray(parsedCart) ? parsedCart : []);
    } catch (error) {
      console.error('Error parsing cart from localStorage:', error);
      setCartItems([]);
    }
  }, []); // Empty dependency array means this runs once on component mount


  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.productId === id
          ? { ...item, quantity: Math.max(1, Math.min(10, item.quantity + delta)) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.productId !== id));
  };

  // Add null checks and default to 0 if cartItems is not an array
  const subtotal = Array.isArray(cartItems) 
    ? cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    : 0;
  const shippingTotal = 0;
  const total = subtotal + shippingTotal;

  // If cart is empty, show a message
  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    return (
      <div className="max-w-6xl p-6 mx-auto text-center">
        <h2 className="text-2xl font-bold">Your cart is empty</h2>
        <p>Looks like you haven't added any items to your cart yet.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl p-6 mx-auto">
      
      <div className="w-full">
        <CartTableHeader />
        
        {cartItems.map((item) => (
          <CartItem
            key={item.productId}
            item={{
              ...item,
              id: item.productId,
              name: item.name,
              shipping: 'FREE',
              imageURL: item.imageUrl
            }}
            onUpdateQuantity={updateQuantity}
            onRemove={removeItem}
          />
        ))}
      </div>

      <div className="flex items-start justify-between mt-6">
  <div className="ml-auto">
    <PaymentSummary
      subtotal={subtotal}
      shippingTotal={shippingTotal}
      total={total}
    />
  </div>
</div>

    </div>
  );
};

export default OrderSummary;
