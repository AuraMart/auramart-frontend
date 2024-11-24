import React, { useState, useEffect } from "react";
import md5 from "md5";

const PayHere = () => {
  const [selectedMethod, setSelectedMethod] = useState("creditCard");

  const handleMethodChange = (method) => {
    setSelectedMethod(method);
  };

  const orderId = "123456";
  const name = "Iphone16";
  const amount = 1000;
  const merchantId = "1228662";
  const merchantSecret = "NTAzMjg2MjQyMjg1NjI5NjI1NTI5MTM0MTQwNzI0MTY5Mzg5Mzg=";

  const hashedSecret = md5(merchantSecret).toString().toUpperCase();
  const amountFormated = parseFloat(amount)
    .toLocaleString("en-us", { minimumFractionDigits: 2 })
    .replaceAll(",", "");
  const currency = "LKR";

  const hash = md5(
    merchantId + orderId + amountFormated + currency + hashedSecret
  )
    .toString()
    .toUpperCase();

  const paymentData = {
    sandbox: true,
    merchant_id: "1228662",
    return_url: "http://localhost:3000",
    cancel_url: "http://sample.com/cancel",
    notify_url: "http://sample.com/notify",
    order_id: orderId,
    items: name,
    amount: amount,
    currency: currency,
    first_name: "kanishka",
    last_name: "udayanga",
    email: "2001kavidusandeepa@gmail.com",
    phone: "0784657729",
    address: "kurunda",
    city: "city",
    country: "Lanka",
    hash: hash,
  };

  useEffect(() => {
    window.payhere.onCompleted = function onCompleted(paymentId) {
      console.log("Payment completed. Payment Id:" + paymentId);
    };

    window.payhere.onDismissed = function onDismissed() {
      console.log("Payment dismissed");
    };

    window.payhere.onError = function onError(error) {
      console.log("Error:" + error);
    };
  }, []);

  const paymentDone = () => {
    console.log("paymentDone");
    window.payhere.startPayment(paymentData);
  };

  const payment = async () => {
    console.log("payment");
    paymentDone();
  };

  return (
    //max-w-lg mx-auto p-6 border border-gray-300 rounded-lg shadow-md bg-white
    <div className="">
      <h2 className="mb-2 text-2xl font-semibold text-gray-800">
        Payment Method
      </h2>
      <p className="mb-6 text-sm text-gray-500">
        All transactions are secure and encrypted.
      </p>

      {/* Credit Card Section */}
      <div
        className={`p-4 rounded-lg border ${
          selectedMethod === "creditCard"
            ? "border-purple-600"
            : "border-gray-300"
        } mb-4`}
      >
        <label className="flex items-center mb-4 cursor-pointer">
          <input
            type="radio"
            name="paymentMethod"
            className="mr-3 text-purple-600 focus:ring-purple-600"
            checked={selectedMethod === "creditCard"}
            onChange={() => handleMethodChange("creditCard")}
          />
          <span className="text-lg font-medium text-gray-700">Credit Card</span>
        </label>
        {selectedMethod === "creditCard" && (
          <div>
            <p className="mb-4 text-sm text-gray-500">
              We accept all major credit cards.
            </p>
            <div className="flex gap-2 mb-4">
              <img src="path_to_googlepay_logo" alt="GPay" className="h-8" />
              <img src="path_to_visa_logo" alt="Visa" className="h-8" />
              <img src="path_to_paypal_logo" alt="PayPal" className="h-8" />
              <img src="path_to_paypass_logo" alt="PayPass" className="h-8" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Card number"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <input
                type="text"
                placeholder="Name of card"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <input
                type="text"
                placeholder="Expiration date (MM/YY)"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <div className="relative">
                <input
                  type="password"
                  placeholder="Security Code"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <button className="absolute text-gray-500 top-2 right-2 hover:text-gray-700">
                  👁️
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Cash on Delivery Section */}
      <div
        className={`p-4 rounded-lg border ${
          selectedMethod === "cashOnDelivery"
            ? "border-purple-600"
            : "border-gray-300"
        } mb-4`}
      >
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="paymentMethod"
            className="mr-3 text-purple-600 focus:ring-purple-600"
            checked={selectedMethod === "cashOnDelivery"}
            onChange={() => handleMethodChange("cashOnDelivery")}
          />
          <span className="text-lg font-medium text-gray-700">
            Cash on delivery
          </span>
        </label>
        {selectedMethod === "cashOnDelivery" && (
          <p className="mt-2 text-sm text-gray-500">
            Pay with cash upon delivery.
          </p>
        )}
      </div>

      {/* PayPal Section */}
      <div
        className={`p-4 rounded-lg border ${
          selectedMethod === "paypal" ? "border-purple-600" : "border-gray-300"
        }`}
      >
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="paymentMethod"
            className="mr-3 text-purple-600 focus:ring-purple-600"
            checked={selectedMethod === "paypal"}
            onChange={() => handleMethodChange("paypal")}
          />
          <span className="text-lg font-medium text-gray-700">Paypal</span>
        </label>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-6">
        <button
          className="w-full max-w-sm py-2 font-medium text-white transition bg-purple-600 rounded-lg hover:bg-purple-700"
          onClick={payment}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default PayHere;
