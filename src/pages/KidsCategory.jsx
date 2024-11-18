
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import KidsSidebar from '../components/Product/KidsSidebar';
import ProductList from '../components/Product/ProductList';
import { Box, Grid} from '@mui/material';
import { getAllKidsProducts } from '../Services/KidsService';
import { useEffect } from 'react';


const KidsCategory = () => {
    const [products, setProducts] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);

      
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
              ? [...prev, value] // Add category if checked
              : prev.filter((category) => category !== value); // Remove if unchecked
      });
  } else if (name === "color") {
      setSelectedColors((prev) => {
          return checked
              ? [...prev, value] // Add color if checked
              : prev.filter((color) => color !== value); // Remove if unchecked
      });
  }
    
  };

  return (
    <Box>
      <Navbar />
      <Grid container>
        <Grid item xs={3}>
          <KidsSidebar filters={filters} onFilterChange={handleFilterChange} />
        </Grid>
        <Grid item xs={9}>
          <ProductList products={products} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default KidsCategory;
