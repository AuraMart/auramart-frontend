// CartItem.js
import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="grid grid-cols-12 border-b p-4 items-center">
      <div className="col-span-4 flex gap-4">
        <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?cs=srgb&dl=pexels-anastasiya-gepp-654466-1462637.jpg&fm=jpg"
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-medium">{item.name}</h3>
          <p className="text-sm text-gray-500">Color: {item.color}</p>
          <p className="text-sm text-gray-500">Size: {item.size}</p>
        </div>
      </div>

      <div className="col-span-2 text-center">
        Rs {item.price.toFixed(2)}
      </div>

      <div className="col-span-2 flex justify-center">
        <div className="flex items-center border rounded">
          <button 
            onClick={() => onUpdateQuantity(item.id, -1)}
            className="p-1 hover:bg-gray-100"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="px-4 py-1 border-x">{item.quantity}</span>
          <button 
            onClick={() => onUpdateQuantity(item.id, 1)}
            className="p-1 hover:bg-gray-100"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="col-span-2 text-center">
        {item.shipping === 'FREE' ? 'FREE' : `Rs ${item.shipping.toFixed(2)}`}
      </div>

      <div className="col-span-1 text-center">
        Rs {(item.price * item.quantity).toFixed(2)}
      </div>

      <div className="col-span-1 flex justify-center">
        <button 
          onClick={() => onRemove(item.id)}
          className="text-red-500 hover:text-red-700 p-1"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;