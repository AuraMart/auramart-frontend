
import React from 'react';
import { Grid } from '@mui/material';
import ProductCard2 from './ProductCard2';


const ProductList = ({ products }) => {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <ProductCard2 product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
