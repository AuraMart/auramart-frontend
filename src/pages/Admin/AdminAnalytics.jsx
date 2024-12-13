import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  PieChart, Pie, Cell, ResponsiveContainer 
} from 'recharts';
import { 
  People as UsersIcon, 
  ShoppingCart as OrdersIcon, 
  AttachMoney as RevenueIcon 
} from '@mui/icons-material';

const AdminAnalytics = () => {
  const [statistics, setStatistics] = useState({
    totalUsers: 8,
    totalOrders: 0,
    totalRevenue: 0,
    pendingOrders: 0,
    completedOrders: 0,
    productCount: 19,
    averageOrderValue: 0
  });

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await fetch('http://localhost:9191/api/v1/statistics');
        const data = await response.json();
        setStatistics(data);
      } catch (error) {
        console.error('Failed to fetch statistics:', error);
      }
    };

    fetchStatistics();
  }, []);

  // Prepare data for charts
  const orderStatusData = [
    { name: 'Pending', value: statistics.pendingOrders },
    { name: 'Completed', value: statistics.completedOrders }
  ];

  const productData = [
    { name: 'Products', value: statistics.productCount },
    { name: 'Potential Products', value: 50 - statistics.productCount } // Assuming a max of 50 products
  ];

  const revenueData = [
    { name: 'Total Revenue', value: statistics.totalRevenue },
    { name: 'Potential Revenue', value: statistics.totalUsers * statistics.averageOrderValue }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white shadow-md rounded-lg p-4">
          <div className="flex items-center mb-4">
            <UsersIcon className="text-blue-500 mr-2" />
            <h2 className="text-xl font-semibold">User Statistics</h2>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={[
              { name: 'Total Users', value: statistics.totalUsers }
            ]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <div className="flex items-center mb-4">
            <OrdersIcon className="text-green-500 mr-2" />
            <h2 className="text-xl font-semibold">Order Status</h2>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={orderStatusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {orderStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <div className="flex items-center mb-4">
            <RevenueIcon className="text-purple-500 mr-2" />
            <h2 className="text-xl font-semibold">Revenue Overview</h2>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']} />
              <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Product Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={productData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {productData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Detailed Statistics</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">Total Users</p>
              <p className="text-xl font-bold text-blue-600">{statistics.totalUsers}</p>
            </div>
            <div>
              <p className="text-gray-600">Product Count</p>
              <p className="text-xl font-bold text-green-600">{statistics.productCount}</p>
            </div>
            <div>
              <p className="text-gray-600">Total Revenue</p>
              <p className="text-xl font-bold text-purple-600">${statistics.totalRevenue.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-gray-600">Avg Order Value</p>
              <p className="text-xl font-bold text-red-600">${statistics.averageOrderValue.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;