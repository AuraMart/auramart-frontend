import React, { useState, useEffect } from 'react';
import WomenSidebar from '../components/Product/WomenSidebar';
import { Box, Grid } from '@mui/material';
import axios from 'axios';
import ProductCard2 from '../components/Product/ProductCard2';

const getAllWomenProducts = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/women'); 
    return response.data;
  } catch (error) {
    console.error("Failed to fetch women products", error);
    return [];
  }
};

const WomenCategory = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllWomenProducts(); 
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };
    fetchProducts();
  }, []);

  const filters = {
    categories: ['Tops', 'T-Shirts', 'Pants', 'Skirts'],
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
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={3}>
          <WomenSidebar filters={filters} onFilterChange={handleFilterChange} />
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <Grid container spacing={2}>
            {products.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <ProductCard2
                  product={product}
                  name={product.productName} 
                  brand={product.brand}
                  price={product.price}
                  url={product.image} 
                  availability={product.availability}
                  onWishlistClick={handleWishlist}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WomenCategory;
