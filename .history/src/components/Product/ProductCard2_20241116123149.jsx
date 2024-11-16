
import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const ProductCard2 = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="body1" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.brand}
        </Typography>
        <Typography variant="body2" color="text.primary">
          Rs {product.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard2;

