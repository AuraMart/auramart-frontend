// src/components/SideNavigation/SideNavigation.jsx
import React from 'react';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LogoutIcon from '@mui/icons-material/Logout';

const SideNavigation = ({ activeItem }) => {
  const menuItems = [
    { icon: <ShoppingBagOutlinedIcon />, label: 'My orders' },
    { icon: <FavoriteBorderIcon />, label: 'Wishlist' },
    { icon: <PersonOutlineIcon />, label: 'My info' },
    { icon: <LogoutIcon />, label: 'Sign out' }
  ];

  return (
    <div className="w-64 p-6 space-y-4">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer
            ${item.label === activeItem ? 'bg-purple-100' : 'hover:bg-gray-100'}`}
        >
          <span className={`${item.label === activeItem ? 'text-purple-600' : 'text-gray-600'}`}>
            {item.icon}
          </span>
          <span className={`${item.label === activeItem ? 'text-purple-600' : 'text-gray-600'}`}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SideNavigation;