
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ProductFilter from '../components/Product/ProductFilter';
import ProductList from '../components/Product/ProductList';
import { Box, Grid} from '@mui/material';

const kidsCategory = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Black Sweatshirt', brand: 'Fashion Brand', price: 1200, image: 'image-url' },
        { id: 2, name: 'White T-Shirt', brand: 'Fashion Brand', price: 900, image: 'image-url' },
      ]);
      

  const filters = {
    categories: ['Tops', 'T-Shirts', 'Pants', 'Skirts'],
    colors: ['#ff0000', '#0000ff', '#00ff00', '#000000', '#ffffff', '#ff69b4'],
  };

  const handleFilterChange = (e) => {
    
  };

  return (
    <Box>
      <Navbar />
      <Grid container>
        <Grid item xs={3}>
          <ProductFilter filters={filters} onFilterChange={handleFilterChange} />
        </Grid>
        <Grid item xs={9}>
          <ProductList products={products} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default kidsCategory;
