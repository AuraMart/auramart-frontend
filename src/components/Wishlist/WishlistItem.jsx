import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const WishlistItem = ({ id,imageUrls, title, color, quantity, price, onRemove }) => {
  // Handle adding to cart
  const handleAddToCart = () => {
    const newCartItem = {
      id,
      title,
      color,
      quantity,
      price,
      imageUrls,
    };

    // Retrieve the existing cart from localStorage
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add the new item to the cart
    const updatedCart = [...existingCart, newCartItem];

    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    alert(`${title} has been added to the cart!`);
  };

  return (
    <div className="flex items-center justify-between p-4 border rounded-lg">
      <div className="flex items-center space-x-4">
        <button
          className="text-gray-400 hover:text-gray-600"
          onClick={onRemove} // Call the remove handler
        >
          <CloseIcon />
        </button>
        {/* Display the first image */}
        <img
          src={imageUrls[0]}
          alt={title}
          className="w-20 h-20 object-cover rounded"
        />
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
        <button
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          onClick={handleAddToCart} // Add to cart handler
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default WishlistItem;
