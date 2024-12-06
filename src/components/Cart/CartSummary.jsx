import React from 'react';
import { useNavigate } from 'react-router-dom';

const CartSummary = ({ subtotal, shippingTotal, total }) => {

  const handleNavigation = () => {
    navigate('/payment');
    // Retrieve existing cart items from localStorage
    let existingCart = [];
    try {
        const storedCart = localStorage.getItem('cart');
        existingCart = storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
        console.error('Error parsing cart from localStorage:', error);
    }

    // Ensure `existingCart` is an array
    if (!Array.isArray(existingCart)) {
        console.warn('Cart data is not an array, resetting cart.');
        existingCart = [];
    }

    // Calculate subTotal
    const subTotal = existingCart.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    // Store subTotal in localStorage
    try {
        localStorage.setItem('subTotal', JSON.stringify(subTotal));
        console.log('SubTotal saved to localStorage:', subTotal);
    } catch (error) {
        console.error('Error saving subTotal to localStorage:', error);
    }

    // Navigate to another page if needed
    // Example: window.location.href = '/checkout';
};

  const navigate = useNavigate();
  return (
    <div className="w-72">
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Sub Total</span>
          <span>Rs {subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>Rs {shippingTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between pt-2 font-medium border-t">
          <span>Grand Total</span>
          <span>Rs {total.toFixed(2)}</span>
        </div>
      </div>
      <button
        className="w-full py-2 mt-4 text-white bg-purple-600 rounded"
        onClick={() => {
          handleNavigation()
        }}
      >
        Proceed To Checkout
      </button>
      <button className="w-full py-2 mt-2 border border-gray-300 rounded">
        Continue Shopping
      </button>
    </div>
  );
};

export default CartSummary;
