import React, { useState, useEffect } from "react";
import SideNavigation from "../../components/SideNavigation/SideNavigation";
import Breadcrumb from "../../components/Wishlist/BreadCumb";
import WishlistItem from "../../components/Wishlist/WishlistItem";

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  // Load wishlist items from localStorage
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistItems(storedWishlist);
  }, []);

  // Remove item from wishlist
  const removeItem = (indexToRemove) => {
    const updatedWishlist = wishlistItems.filter((_, index) => index !== indexToRemove);
    setWishlistItems(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Sidebar */}
      <aside className="border-r">
        <div className="p-6">
          <h2 className="text-xl font-medium mb-2">Hello Sandeepa</h2>
          <p className="text-gray-500 text-sm">Welcome to your Account</p>
        </div>
        <SideNavigation activeItem="Wishlist" />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <Breadcrumb />
        <h1 className="text-2xl font-medium mb-8">Wishlist</h1>
        <div className="space-y-4">
          {wishlistItems.length > 0 ? (
            wishlistItems.map((item, index) => (
              <WishlistItem
                key={index}
                id= {item.id}
                imageUrls={item.imageUrls}
                title={item.name}
                color={item.color}
                quantity={1} // Default quantity
                price={item.price}
                onRemove={() => removeItem(index)} // Pass the remove handler
              />
            ))
          ) : (
            <p className="text-gray-500">Your wishlist is empty.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default WishlistPage;
