import React from "react";

const OrderSummary = () => {
  const items = [
    {
      name: "Blue",
      quantity: 1,
      color: "Yellow",
      price: 29.0,
      image: "/images/girl.png", // Replace with your image path or URL
    },
    {
      name: "Lavender Hoodie",
      quantity: 2,
      color: "Lavender",
      price: 119.0,
      image: "/images/girl.png", // Replace with your image path or URL
    },
    {
      name: "Black Sweatshirt",
      quantity: 2,
      color: "Black",
      price: 123.0,
      image: "/images/girl.png", // Replace with your image path or URL
    },
  ];

  const subtotal = 513.0;
  const savings = 30.0;
  const shipping = 5.0;
  const total = subtotal - savings - shipping;

  return (
    <div className="max-w-md p-6 mx-auto bg-white border border-gray-300 rounded-lg shadow-md ">
      <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">
        Order Summary
      </h2>
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center pb-4 mb-4 border-b border-gray-200"
        >
          <img
            src={item.image}
            alt={item.name}
            className="object-cover w-16 h-16 mr-4 rounded-md"
          />
          <div className="flex-1">
            <p className="text-lg font-medium text-gray-700">
              {item.name} x {item.quantity}
            </p>
            <p className="text-sm text-gray-500">Color: {item.color}</p>
          </div>
          <p className="text-lg font-semibold text-gray-800">
            ${item.price.toFixed(2)}
          </p>
        </div>
      ))}
      <div className="pt-4 border-t border-gray-200">
        <p className="flex justify-between mb-2 text-sm text-gray-600">
          Subtotal ({items.length} items):{" "}
          <span className="font-medium text-gray-800">
            ${subtotal.toFixed(2)}
          </span>
        </p>
        <p className="flex justify-between mb-2 text-sm text-gray-600">
          Savings:{" "}
          <span className="font-medium text-green-600">
            -${savings.toFixed(2)}
          </span>
        </p>
        <p className="flex justify-between mb-2 text-sm text-gray-600">
          Shipping:{" "}
          <span className="font-medium text-gray-800">
            -${shipping.toFixed(2)}
          </span>
        </p>
        <p className="flex justify-between mt-4 text-lg font-semibold text-gray-800">
          Total: <span>${total.toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
};

export default OrderSummary;
