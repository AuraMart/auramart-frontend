import React from "react";
import PayHere from "./PayHere";


const CheckoutForm = () => {
  return (
    <div className="max-w-4xl p-8 mx-auto">
      <h2 className="mb-6 text-2xl font-semibold text-gray-800">Checkout</h2>
      <form className="mb-20 space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-600"
            >
              First Name*
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="First Name"
              className="block w-full px-4 py-2 mt-2 transition duration-200 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-600"
            >
              Last Name*
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Last Name"
              className="block w-full px-4 py-2 mt-2 transition duration-200 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-600"
            >
              Country / Region*
            </label>
            <input
              id="country"
              type="text"
              placeholder="Country / Region"
              className="block w-full px-4 py-2 mt-2 transition duration-200 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-600"
            >
              Company Name (optional)
            </label>
            <input
              id="company"
              type="text"
              placeholder="Company (optional)"
              className="block w-full px-4 py-2 mt-2 transition duration-200 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
            />
          </div>
        </div>

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
            placeholder="Phone"
            className="block w-full px-4 py-2 mt-2 transition duration-200 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
          />
        </div>

        {/* <div className="mt-6">
          <button
            type="submit"
            className="w-full px-4 py-3 text-white transition duration-300 bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
          >
            Continue to delivery
          </button>
        </div>*/}

        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            id="saveInfo"
            className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-2 focus:ring-purple-600"
          />
          <label htmlFor="saveInfo" className="ml-2 text-sm text-gray-600">
            Save my information for a faster checkout
          </label>
        </div>
      </form>
      <PayHere/>
    </div>
  );
};

export default CheckoutForm;
