import React, { useState, useEffect } from 'react';
import CartHeader from '../../components/Cart/CartHeader';
import CartTableHeader from '../../components/Cart/CartTableHeader';
import CartItem from '../../components/Cart/CartItem';
import CartDiscount from '../../components/Cart/CartDiscount';
import CartSummary from '../../components/Cart/CartSummary';
import Navbar from '../../components/Navigation/Navbar';
import FooterSection from '../../components/Footer/FooterSection';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Safely parse localStorage
    try {
      const savedCart = localStorage.getItem('cart');
      const parsedCart = savedCart ? JSON.parse(savedCart) : [];
      
      // Ensure parsedCart is an array
      setCartItems(Array.isArray(parsedCart) ? parsedCart : []);
      setIsLoading(false);
    } catch (error) {
      console.error('Error parsing cart from localStorage:', error);
      setCartItems([]);
      setIsLoading(false);
    }
  }, []); 

  const updateQuantity = (productId, delta) => { 
    const updatedCart = cartItems.map((item) =>
      item.productId === productId
        ? { 
            ...item, 
            quantity: Math.max(1, Math.min(10, item.quantity + delta)) 
          }
        : item
    );

    // Update localStorage
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    
    // Update state
    setCartItems(updatedCart);
  };

  const removeItem = (id) => {
    console.log("it", id)
    try {
      // Retrieve the current cart from localStorage
      const savedCart = localStorage.getItem('cart');
      const parsedCart = savedCart ? JSON.parse(savedCart) : [];

      // Filter out only the specific item by productId
      const updatedCart = parsedCart.filter(item => item.id !== id);

      // Update localStorage with the filtered cart
      localStorage.setItem('cart', JSON.stringify(updatedCart));

      // Update the state
      setCartItems(updatedCart);
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  // Calculate totals with null checks
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingTotal = 0;
  const total = subtotal + shippingTotal;

  // Loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading cart...</p>
      </div>
    );
  }

  // Empty cart state
  if (cartItems.length === 0) {
    return (
      <div className="max-w-6xl p-6 mx-auto text-center mt-[5%]">
        <h2 className="text-2xl font-bold">Your cart is empty</h2>
        <p>Looks like you haven't added any items to your cart yet.</p>
        <button 
          className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
          onClick={() => window.location.href = '/products'}
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div>
      <Navbar/>
      <div className="max-w-6xl p-6 mx-auto">
        <CartHeader />
        
        <div className="w-full">
          <CartTableHeader />
          
          {cartItems.map((item) => (
            <CartItem
              key={item.productId}
              item={{
                ...item,
                id: item.id,
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
      <FooterSection/>
    </div>
  );
};

export default CartPage;