import React, { useEffect, useState } from "react";
import axios from "axios";

const OrderDetails = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:9191/api/v1/orders/user/2`) // Adjust to your actual API endpoint
      .then((response) => {
        setOrders(response.data.data); // Assuming data is returned as { data: [OrderDto] }
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load orders.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="max-w-4xl p-6 mx-auto bg-white border border-gray-300 rounded-lg shadow-md">
      <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">
        User Orders
      </h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            className="p-4 mb-6 border border-gray-200 rounded-lg"
          >
            <h3 className="mb-2 text-lg font-semibold text-gray-800">
              Order ID: {order.id}
            </h3>
            <p className="text-sm text-gray-500">
              Order Date: {new Date(order.orderDate).toLocaleString()}
            </p>
            <p className="text-sm text-gray-500">
              Status: <span className="font-semibold">{order.status}</span>
            </p>
            <p className="text-sm text-gray-500">
              Total Amount: ${order.totalAmount.toFixed(2)}
            </p>
            <div className="mt-4">
              <h4 className="mb-2 font-semibold text-gray-800 text-md">
                Items:
              </h4>
              {order.items.map((item, index) => (
                // <div
                //   key={index}
                //   className="flex justify-between p-2 border border-gray-100 rounded-md"
                // >
                //   <div>
                //     <p className="text-sm font-medium text-gray-700">
                //       {item.productName}
                //     </p>
                //     <p className="text-xs text-gray-500">
                //       Quantity: {item.quantity}
                //     </p>
                //   </div>
                //   <p className="text-sm font-semibold text-gray-800">
                //     ${item.price.toFixed(2)}
                //   </p>
                // </div>
                <div
          key={index}
          className="flex items-center pb-4 mb-4 border-b border-gray-200"
        >
          <img
            src={item.image}
            alt={item.productName}
            className="object-cover w-16 h-16 mr-4 rounded-md"
          />
          <div className="flex-1">
            <p className="text-lg font-medium text-gray-700">
              {item.productName} x {item.quantity}
            </p>
            {/* <p className="text-sm text-gray-500">Color: {item.color}</p> */}
          </div>
          <p className="text-lg font-semibold text-gray-800">
            ${item.price.toFixed(2)}
          </p>
        </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderDetails;
