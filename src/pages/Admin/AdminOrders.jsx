import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  Sort as SortIcon, 
  FilterList as FilterIcon, 
  MoreVert as MoreVertIcon,
  Search as SearchIcon 
} from '@mui/icons-material';

const API_BASE_URL = 'http://localhost:9191/api/v1';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [sortDirection, setSortDirection] = useState('desc');
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch orders
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/orders`);
        setOrders(response.data.data);
        setFilteredOrders(response.data.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, []);

  // Sort orders
  const handleSort = () => {
    const newDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    setSortDirection(newDirection);
    
    const sorted = [...filteredOrders].sort((a, b) => {
      // Default to sorting by ID if no order date
      const dateA = a.orderDate || a.id;
      const dateB = b.orderDate || b.id;
      
      return newDirection === 'asc' 
        ? dateA - dateB 
        : dateB - dateA;
    });
    
    setFilteredOrders(sorted);
  };

  // Search/Filter orders
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = orders.filter(order => 
      order.id.toString().includes(term) ||
      order.userId.toString().includes(term) ||
      order.status.toLowerCase().includes(term) ||
      order.items.some(item => 
        item.productName.toLowerCase().includes(term)
      )
    );

    setFilteredOrders(filtered);
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white shadow-md rounded-lg">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-2xl font-bold text-gray-800">Order Management</h2>
          
          <div className="flex items-center space-x-4">
            {/* Search Input */}
            <div className="relative">
              <input 
                type="text"
                placeholder="Search orders..."
                value={searchTerm}
                onChange={handleSearch}
                className="pl-8 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <SearchIcon className="absolute left-2 top-3 text-gray-400" />
            </div>

            {/* Sort Button */}
            <button 
              onClick={handleSort}
              className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              <SortIcon className="mr-2" />
              Sort {sortDirection === 'asc' ? 'Ascending' : 'Descending'}
            </button>
          </div>
        </div>

        {/* Orders Table */}
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Order ID</th>
              <th className="p-3 text-left">User ID</th>
              <th className="p-3 text-left">Total Amount</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Items</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map(order => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{order.id}</td>
                <td className="p-3">{order.userId}</td>
                <td className="p-3">${order.totalAmount.toFixed(2)}</td>
                <td className="p-3">
                  <span className={`
                    px-2 py-1 rounded-full text-xs font-semibold
                    ${order.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}
                  `}>
                    {order.status}
                  </span>
                </td>
                <td className="p-3">
                  {order.items.length > 0 
                    ? order.items.map(item => 
                        `${item.quantity}x ${item.productName}`
                      ).join(', ')
                    : 'No items'}
                </td>
                <td className="p-3 text-right">
                  <button className="text-gray-500 hover:text-blue-600">
                    <MoreVertIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* No Orders Found */}
        {filteredOrders.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No orders found
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminOrders;