import React, { useState,useEffect  } from 'react';
import CartHeader from '../../../components/Cart/CartHeader';
import CartTableHeader from '../../../components/Cart/CartTableHeader';
import CartItem from '../../../components/Cart/CartItem';
import CartDiscount from '../../../components/Cart/CartDiscount';
import CartSummary from '../../../components/Cart/CartSummary';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Blue Flower Print Crop Top',
      color: 'Yellow',
      size: 'M',
      price: 229.00,
      quantity: 1,
      shipping: 'FREE',
    },
    {
      id: 2,
      name: 'Lavender Hoodie',
      color: 'Lavender',
      size: 'XXL',
      price: 3119.00,
      quantity: 1,
      shipping: 'FREE',
    },
    {
      id: 3,
      name: 'Black Sweatshirt',
      color: 'Black',
      size: 'XXL',
      price: 123.00,
      quantity: 1,
      shipping: 5.00,
    }
  ]);



  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, Math.min(10, item.quantity + delta)) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingTotal = cartItems.reduce((sum, item) => 
    sum + (item.shipping === 'FREE' ? 0 : item.shipping), 0);
  const total = subtotal + shippingTotal;

  return (
    <div className="max-w-6xl p-6 mx-auto">
      <CartHeader />
      
      <div className="w-full">
        <CartTableHeader />
        
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
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

// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Import Axios
// import CartHeader from '../../../components/Cart/CartHeader';
// import CartTableHeader from '../../../components/Cart/CartTableHeader';
// import CartItem from '../../../components/Cart/CartItem';
// import CartDiscount from '../../../components/Cart/CartDiscount';
// import CartSummary from '../../../components/Cart/CartSummary';

// const CartPage = () => {
//   const [cartItems, setCartItems] = useState([
//   ]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch cart items from backend
//     const fetchCartItems = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get('/carts/1/my-cart'); // Update endpoint as per your backend
//         setCartItems(response.data);
//       } catch (err) {
//         setError('Failed to load cart items.');
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCartItems();
//   }, []);

//   const updateQuantity = async (id, delta) => {
//     try {
//       const updatedItem = cartItems.find((item) => item.id === id);
//       if (!updatedItem) return;

//       const newQuantity = Math.max(1, Math.min(10, updatedItem.quantity + delta));

//       const response = await axios.put(`/api/cart/${id}`, {
//         quantity: newQuantity,
//       });

//       setCartItems((prevItems) =>
//         prevItems.map((item) =>
//           item.id === id ? { ...item, quantity: response.data.quantity } : item
//         )
//       );
//     } catch (err) {
//       setError('Failed to update quantity.');
//       console.error(err);
//     }
//   };

//   const removeItem = async (id) => {
//     try {
//       await axios.delete(`/carts/1/clear`);
//       setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
//     } catch (err) {
//       setError('Failed to remove item.');
//       console.error(err);
//     }
//   };

//   const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   const shippingTotal = cartItems.reduce(
//     (sum, item) => sum + (item.shipping === 'FREE' ? 0 : item.shipping),
//     0
//   );
//   const total = subtotal + shippingTotal;


//   return (
//     <div className="max-w-6xl p-6 mx-auto">
//        <CartHeader />
      
//        <div className="w-full">
//          <CartTableHeader />
        
//          {cartItems.map((item) => (
//           <CartItem
//             key={item.id}
//             item={item}
//             onUpdateQuantity={updateQuantity}
//             onRemove={removeItem}
//           />
//         ))}
//       </div>

//       <div className="flex items-start justify-between mt-6">
//         <CartDiscount />
//         <CartSummary
//           subtotal={subtotal}
//           shippingTotal={shippingTotal}
//           total={total}
//         />
//       </div>
//     </div>

    
//   );
// };

// export default CartPage;
