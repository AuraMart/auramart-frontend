import React, { useState } from 'react';
import women from '../../assets/women 1.png';

const Cartitem = () => {
  // State to manage cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: women,
      name: 'Blue Flower Print Crop Top',
      color: 'Yellow',
      size: 'M',
      price: 229,
      quantity: 1,
      shipping: 'FREE',
    },
    {
      id: 2,
      image: women,
      name: 'Lavender Hoodie',
      color: 'Lavender',
      size: 'XXL',
      price: 3119,
      quantity: 2,
      shipping: 'FREE',
    },
    {
      id: 3,
      image: women,
      name: 'Black Sweatshirt',
      color: 'Black',
      size: 'XXL',
      price: 123,
      quantity: 2,
      shipping: 'Rs 5.00',
    },
  ]);

  // Function to update quantity
  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) } // Prevent quantity from going below 1
          : item
      )
    );
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-4">
      {/* Breadcrumb Navigation */}
      <nav className="text-sm text-gray-600 mb-4">
        <a href="/" className="text-blue-500 hover:underline">
          Home
        </a>{' '}
        <span className="mx-2">{'>'}</span>
        <span className="font-medium text-gray-800">Add To Cart</span>
      </nav>

      {/* Title and Description */}
      <h2 className="text-2xl font-semibold mb-4">Add To Cart</h2>
      <p className="text-gray-600">
        Please fill in the fields below and click place order to complete your purchase!{' '}
        <a href="/login" className="text-blue-500 underline">
          Please login here
        </a>
      </p>

      {/* Cart Items Table */}
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-200 px-4 py-2 text-left">PRODUCT DETAILS</th>
              <th className="border border-gray-200 px-4 py-2">PRICE</th>
              <th className="border border-gray-200 px-4 py-2">QUANTITY</th>
              <th className="border border-gray-200 px-4 py-2">SHIPPING</th>
              <th className="border border-gray-200 px-4 py-2">SUBTOTAL</th>
              <th className="border border-gray-200 px-4 py-2">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-b border-gray-200">
                <td className="border border-gray-200 px-4 py-4 flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">Color: {item.color}</p>
                    <p className="text-sm text-gray-500">Size: {item.size}</p>
                  </div>
                </td>
                <td className="border border-gray-200 px-4 py-4 text-center">
                  Rs {item.price.toFixed(2)}
                </td>
                <td className="border border-gray-200 px-4 py-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-2 py-1 bg-gray-200 hover:bg-gray-300 text-gray-600 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-2 py-1 bg-gray-200 hover:bg-gray-300 text-gray-600 rounded"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="border border-gray-200 px-4 py-4 text-center">
                  {item.shipping}
                </td>
                <td className="border border-gray-200 px-4 py-4 text-center">
                  Rs {(item.price * item.quantity).toFixed(2)}
                </td>
                <td className="border border-gray-200 px-4 py-4 text-center">
                  <button className="text-red-500 hover:text-red-700 text-xl">🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cartitem;
