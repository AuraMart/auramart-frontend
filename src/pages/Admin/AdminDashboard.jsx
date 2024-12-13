import React, { useState, useEffect } from 'react';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PackageIcon from '@mui/icons-material/Inventory';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';

const StatCard = ({ icon: Icon, title, value, color }) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-5">
    <div className="flex items-center">
      <div className={`p-3 rounded-full mr-4 ${color} bg-opacity-10`}>
        <Icon className={`w-6 h-6 ${color}`} />
      </div>
      <div>
        <p className="text-sm text-gray-500 mb-1">{title}</p>
        <p className="text-2xl font-bold">{value.toLocaleString()}</p>
      </div>
    </div>
  </div>
);

const AdminDashboard = () => {
  const [statistics, setStatistics] = useState({
    totalUsers: 0,
    totalOrders: 0,
    totalRevenue: 0,
    pendingOrders: 0,
    completedOrders: 0,
    productCount: 0,
    averageOrderValue: 0
  });

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await fetch('http://localhost:9191/api/v1/statistics');
        if (!response.ok) {
          throw new Error('Failed to fetch statistics');
        }
        const data = await response.json();
        setStatistics(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchStatistics();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-500">Loading statistics...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-red-50 text-red-600">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard 
          icon={PeopleIcon} 
          title="Total Users" 
          value={statistics.totalUsers} 
          color="text-blue-500" 
        />
        <StatCard 
          icon={ShoppingCartIcon} 
          title="Total Orders" 
          value={statistics.totalOrders} 
          color="text-green-500" 
        />
        <StatCard 
          icon={AttachMoneyIcon} 
          title="Total Revenue" 
          value={statistics.totalRevenue} 
          color="text-purple-500" 
        />
        <StatCard 
          icon={PendingIcon} 
          title="Pending Orders" 
          value={statistics.pendingOrders} 
          color="text-yellow-500" 
        />
        <StatCard 
          icon={CheckCircleIcon} 
          title="Completed Orders" 
          value={statistics.completedOrders} 
          color="text-green-600" 
        />
        <StatCard 
          icon={PackageIcon} 
          title="Product Count" 
          value={statistics.productCount} 
          color="text-indigo-500" 
        />
      </div>
      <div className="mt-6 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Additional Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">Average Order Value</p>
            <p className="text-2xl font-bold text-blue-600">
              ${statistics.averageOrderValue.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;