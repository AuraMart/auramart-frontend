// src/components/Breadcrumb/Breadcrumb.jsx
import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Breadcrumb = () => {
  return (
    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
      <span>Home</span>
      <ChevronRightIcon sx={{ fontSize: 16 }} />
      <span>My Account</span>
      <ChevronRightIcon sx={{ fontSize: 16 }} />
      <span>Wishlist</span>
    </div>
  );
};

export default Breadcrumb;