import React, { useState, useEffect } from "react";
import md5 from "md5";
import axios from "axios";

const PayHere = ({formData}) => {
  const [selectedMethod, setSelectedMethod] = useState("creditCard");

  const handleMethodChange = (method) => {
    setSelectedMethod(method);
  };

  const orderId = "123456";
  const name = localStorage.getItem("");
  const amount = localStorage.getItem("subTotal")
  const amountInt = parseInt(amount.replace(/[^\d.-]/g, ""), 10);
  const orderItems = JSON.parse(localStorage.getItem("cart")) || [];
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
    items: orderItems.map((item) => item.name).join(", "),
    amount: amount,
    currency: currency,
    first_name: "kavidu",
    last_name: "sandeepa",
    email: "2001kavidusandeepa@gmail.com",
    phone: "0740069927",
    address: "madaketiya",
    city: "Tangalle",
    country: "Sri Lanka",
    hash: hash,
  };

  useEffect(() => {
    console.log(formData);
    console.log(orderItems.map((item) => item.name).join(", "));
  
    if (window.payhere) {
      window.payhere.onCompleted =async function onCompleted(paymentId) {
        console.log("Payment completed. Payment Id:" + paymentId);
  
        // Prepare the data to send to the backend
        const orderData = {
          address: formData.fullAddress,
          subtotal: amountInt,
          orderItems: orderItems.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
            price:item.price,
          })),
          userId: 2,
          orderStatus: "PENDING", // Default status
          orderDate : new Date().toISOString().split('T')[0],// Current date
          //paymentId: paymentId,
        };
        console.log(orderData);
  
        const res= await axios.post("http://localhost:9191/api/v1/order",orderData)

        console.log(res);
      };
  
      window.payhere.onDismissed = function onDismissed() {
        console.log("Payment dismissed");
      };
  
      window.payhere.onError = function onError(error) {
        console.log("Error:" + error);
      };
    } else {
      alert("PayHere library is not loaded.");
      console.warn("PayHere library is not loaded.");
    }
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
      <div className="flex justify-center mt-6">
        <button
          className="w-full max-w-sm py-2 font-medium text-white transition bg-purple-600 rounded-lg hover:bg-purple-700"
          onClick={payment}
        >
          Add Card
        </button>
      </div>
    </div>
  );
};

export default PayHere;
