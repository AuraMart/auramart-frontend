
import React from 'react';
import { Grid2 } from '@mui/material';
import { ProductCard } from './ProductCard';



const ProductList = ({ products }) => {
  return (
    <Grid2 container spacing={2}>
      {products.map((product) => (
        <Grid2 item key={product.id} xs={12} sm={6} md={4}>
          <ProductCard product={product} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default ProductList;
