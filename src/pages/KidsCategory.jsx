import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import KidsSidebar from '../components/Product/KidsSidebar';
import { Box, Grid} from '@mui/material';
import { getAllKidsProducts } from '../Services/KidsService';
import { useEffect } from 'react';
// import axios from 'axios';
import ProductCard2 from '../components/Product/ProductCard2';


const KidsCategory = () => {
    const [products, setProducts] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [wishlist, setWishlist] = useState([]);


      
      useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getAllKidsProducts();
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


  return (
    <Box>
      <Navbar />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={3}>
          <KidsSidebar filters={filters} onFilterChange={handleFilterChange} />
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <Grid container spacing={2}>
            {products.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <ProductCard2
                  product={product}
                  name={product.name}
                  brand={product.brand}
                  price={product.price}
                  url={product.url}
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

export default KidsCategory;
