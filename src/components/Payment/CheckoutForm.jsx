import React, { useState } from "react";
import PayHere from "./PayHere";

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    streetAddress: "",
    apt: "",
    city: "",
    state: "",
    postalCode: "",
    phone: "",
    saveInfo: false,
  });

  const [paymentData, setPaymentData] = useState(null);

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission and trigger PayHere
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setPaymentData(formData); // Set payment data to be passed to PayHere
  };

  return (
    <div className="max-w-4xl p-8 mx-auto">
      <h2 className="mb-6 text-2xl font-semibold text-gray-800">Checkout</h2>
      <form onSubmit={handleSubmit} className="mb-20 space-y-6">
        <div>
          <label
            htmlFor="streetAddress"
            className="block text-sm font-medium text-gray-600"
          >
            Street Address*
          </label>
          <input
            id="streetAddress"
            type="text"
            value={formData.streetAddress}
            onChange={handleInputChange}
            placeholder="House number and street name"
            className="block w-full px-4 py-2 mt-2 transition duration-200 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
          />
        </div>

        <div>
          <label
            htmlFor="apt"
            className="block text-sm font-medium text-gray-600"
          >
            Apt, Suite, Unit (optional)
          </label>
          <input
            id="apt"
            type="text"
            value={formData.apt}
            onChange={handleInputChange}
            placeholder="Apartment, suite, unit (optional)"
            className="block w-full px-4 py-2 mt-2 transition duration-200 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
          />
        </div>

        <div className="flex space-x-6">
          <div className="w-1/3">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-600"
            >
              City*
            </label>
            <input
              id="city"
              type="text"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="City"
              className="block w-full px-4 py-2 mt-2 transition duration-200 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
            />
          </div>
          <div className="w-1/3">
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-600"
            >
              State*
            </label>
            <input
              id="state"
              type="text"
              value={formData.state}
              onChange={handleInputChange}
              placeholder="State"
              className="block w-full px-4 py-2 mt-2 transition duration-200 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
            />
          </div>
          <div className="w-1/3">
            <label
              htmlFor="postalCode"
              className="block text-sm font-medium text-gray-600"
            >
              Postal Code*
            </label>
            <input
              id="postalCode"
              type="text"
              value={formData.postalCode}
              onChange={handleInputChange}
              placeholder="Postal Code"
              className="block w-full px-4 py-2 mt-2 transition duration-200 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-600"
          >
            Phone*
          </label>
          <input
            id="phone"
            type="text"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone"
            className="block w-full px-4 py-2 mt-2 transition duration-200 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
          />
        </div>

        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            id="saveInfo"
            checked={formData.saveInfo}
            onChange={handleInputChange}
            className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-2 focus:ring-purple-600"
          />
          <label htmlFor="saveInfo" className="ml-2 text-sm text-gray-600">
            Save my information for a faster checkout
          </label>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-3 mt-6 text-white transition duration-300 bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
        >
          Pay Now
        </button>
      </form>

      {paymentData && <PayHere formData={paymentData} />}
    </div>
  );
};

export default CheckoutForm;
