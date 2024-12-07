import React, { useState, useEffect } from 'react';
import CartHeader from '../../components/Cart/CartHeader';
import CartTableHeader from '../../components/Cart/CartTableHeader';
import CartItem from '../../components/Cart/CartItem';
import CartDiscount from '../../components/Cart/CartDiscount';
import CartSummary from '../../components/Cart/CartSummary';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Safely parse localStorage
    try {
      const savedCart = localStorage.getItem('cart');
      const parsedCart = savedCart ? JSON.parse(savedCart) : [];
      
      // Ensure parsedCart is an array
      setCartItems(Array.isArray(parsedCart) ? parsedCart : []);
    } catch (error) {
      console.error('Error parsing cart from localStorage:', error);
      setCartItems([]);
    }
  }, []); // Empty dependency array means this runs once on component mount


  const updateQuantity = (id, delta) => { 
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.productId === id
          ? { ...item, quantity: Math.max(1, Math.min(10, item.quantity + delta)) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    try {
      // Fetch the cart from localStorage
      const storedCart = localStorage.getItem("cart");
      const parsedCart = storedCart ? JSON.parse(storedCart) : [];
  
      // Filter out the item to be removed
      const updatedCart = parsedCart.filter((item) => item.productId !== id);
  
      // Update localStorage
      localStorage.setItem("cart", JSON.stringify(updatedCart));
  
      // Update the state
      setCartItems(updatedCart);
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  // Add null checks and default to 0 if cartItems is not an array
  const subtotal = Array.isArray(cartItems) 
    ? cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    : 0;
  const shippingTotal = 0;
  const total = subtotal + shippingTotal;

  // If cart is empty, show a message
  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    return (
      <div className="max-w-6xl p-6 mx-auto text-center">
        <h2 className="text-2xl font-bold">Your cart is empty</h2>
        <p>Looks like you haven't added any items to your cart yet.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl p-6 mx-auto">
      <CartHeader />
      
      <div className="w-full">
        <CartTableHeader />
        
        {cartItems.map((item) => (
          <CartItem
            key={item.productId}
            item={{
              ...item,
              id: item.productId,
              name: item.name,
              shipping: 'FREE',
              imageURL: item.imageUrl
            }}
            onUpdateQuantity={updateQuantity}
            onRemove={removeItem}
          />
        ))}
      </div>

      <div className="flex items-start justify-between mt-6">
        <CartDiscount />
        <CartSummary
          subtotal={subtotal}
          shippingTotal={shippingTotal}
          total={total}
        />
      </div>
    </div>
  );
};

export default CartPage;