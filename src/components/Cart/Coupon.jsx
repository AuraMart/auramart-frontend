import React from 'react';

const Coupon = () => {
  return (
    <div className="max-w-6xl mx-auto mt-10 p-4 flex flex-col lg:flex-row gap-8">
      {/* Left Section: Discount Code */}
      <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Discount Codes</h3>
        <p className="text-sm text-gray-600 mb-4">Enter your coupon code if you have one</p>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Enter your coupon code"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          <button className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600">
            Apply Coupon
          </button>
        </div>
        <button className="mt-6 px-4 py-2 border border-gray-300 text-gray-600 rounded-md hover:bg-gray-200">
          Continue Shopping
        </button>
      </div>

      {/* Right Section: Checkout Summary */}
      <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Sub Total</span>
            <span>Rs 513.00</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Shipping</span>
            <span>Rs 5.00</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-semibold text-lg">
            <span>Grand Total</span>
            <span>Rs 518.00</span>
          </div>
        </div>
        <button className="mt-6 w-full px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600">
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default Coupon;
