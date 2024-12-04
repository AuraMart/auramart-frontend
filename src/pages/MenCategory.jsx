import React, { useState } from 'react';
import MenSidebar from '../components/Product/MenSidebar';
import { Box, Grid2} from '@mui/material';
import { useEffect } from 'react';
import {ProductCard} from '../components/Product/ProductCard';
import { getAllMenProducts } from '../Services/mainCategoryServices';

const MenCategory = () => {
    const [products, setProducts] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [wishlist, setWishlist] = useState([]);
      
    useEffect(() => {
      const fetchMenProducts = async () => {
        try {
          const response = await getAllMenProducts();
          setProducts(Array.isArray(response.data) ? response.data : []);
        } catch (error) {
          console.error("Failed to fetch men cloths", error);
        }
      };
      fetchMenProducts();
      console.log("men cloths", products);
    }, []);

  const filters = {
    categories: ['Shirts', 'T-Shirts', 'Trousers', 'Denim trousers'],
    colors: ['#ff0000', '#0000ff', '#00ff00', '#000000', '#ffffff', '#ff69b4'],
  };

  const handleFilterChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "category") {
      setSelectedCategories((prev) => {
          return checked
              ? [...prev, value] 
              : prev.filter((category) => category !== value);
      });
  } else if (name === "color") {
      setSelectedColors((prev) => {
          return checked
              ? [...prev, value] 
              : prev.filter((color) => color !== value); 
      });
  }
    
  };

  const handleWishlist = (product) => {
    setWishlist((prevWishlist) => {
        if (prevWishlist.some((item) => item.id === product.id)) {
            return prevWishlist; 
        } else {
            return [...prevWishlist, product]; 
        }
    });
};

const filteredProducts = products.filter(
  (product) =>
    (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
    (selectedColors.length === 0 || selectedColors.includes(product.color))
);


  return (
    <Box>
      <Grid2 container spacing={8}>
        <Grid2 item xs={12} sm={4} md={3}>
          <MenSidebar filters={filters} onFilterChange={handleFilterChange} />
        </Grid2>
          <Grid2 container spacing={2} className="mt-4">
          {Array.isArray(products) &&
              products.map((product) => (
                <ProductCard
                  name={product.name} // Match field from API
                  brand={product.brand}
                  price={product.price}
                  url={product.imgUrls}
                />
              ))}
          </Grid2>
      </Grid2>
    </Box>
  );
};

export default MenCategory;
