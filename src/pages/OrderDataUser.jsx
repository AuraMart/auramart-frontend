import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Grid, Chip, Box } from "@mui/material";
import axios from "axios";

const OrderDataUser = () => {

  const API_BASE_URL = "http://localhost:9191/api/v1";
  const [orders, setOrders] = useState([]);
  const userId = 2;

  useEffect(() => {
    axios.get(`${API_BASE_URL}/${userId}/order`)
      .then(response => {
        console.log("Orders fetched successfully!", response.data);
        setOrders(response.data.data);
      })
      .catch(error => {
        console.error("There was an error fetching the orders!", error);
      });
  }, [userId]);

  return (
    <Box className="flex items-center justify-center min-h-screen bg-gray-50">
      <Box className="p-6 bg-white w-1/2 rounded-lg shadow-lg" style={{ overflowY: 'auto', maxHeight: '80vh' }}>
        <Typography
          variant="h4"
          className="text-center text-blue-700 font-bold mb-6"
        >
          User Orders
        </Typography>
        {orders.length > 0 ? (
          orders.map((order) => (
            <Card key={order.id} className="mb-6 shadow-lg rounded-xl bg-gray-100">
              <CardContent>
                <Grid container spacing={2} className="items-center">
                  <Grid item xs={12}>
                    <Typography variant="h6" className="text-blue-600">
                      Order ID: {order.id}
                    </Typography>
                    <Typography variant="body2" className="text-gray-500">
                      Placed on: {order.orderDate}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2} className="mt-4">
                  <Grid item xs={6}>
                    <Typography>
                      <strong>Total Amount:</strong> Rs {order.totalAmount.toFixed(2)}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} className="text-right">
                    <Chip
                      label={order.status}
                      color={
                        order.status === "PENDING"
                          ? "warning"
                          : order.status === "COMPLETED"
                            ? "success"
                            : "error"
                      }
                      size="small"
                      className="text-white font-bold"
                    />
                  </Grid>
                </Grid>
                <Typography
                  variant="subtitle1"
                  className="text-gray-700 mt-4 mb-2"
                >
                  Order Items:
                </Typography>
                {order.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b last:border-b-0"
                  >
                    <Typography>{item.productName}</Typography>
                    <Typography>
                      {item.quantity} x Rs {item.price.toFixed(2)}
                    </Typography>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography variant="h6" className="text-center text-red-500">
            No orders found for this user.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default OrderDataUser;