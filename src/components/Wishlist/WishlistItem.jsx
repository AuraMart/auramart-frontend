// src/components/WishlistItem/WishlistItem.jsx
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

const WishlistItem = ({ image, title, color, quantity, price }) => {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg mb-4">
      <div className="flex items-center space-x-4">
        <button className="text-gray-400 hover:text-gray-600">
          <CloseIcon />
        </button>
        <img src={image} alt={title} className="w-20 h-20 object-cover rounded" />
        <div>
          <h3 className="font-medium">{title}</h3>
          <div className="text-sm text-gray-500">
            <p>Color: {color}</p>
            <p>Quantity: {quantity}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <span className="font-medium">Rs {price}</span>
        <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default WishlistItem;