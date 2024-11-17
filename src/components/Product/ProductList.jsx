import React from "react";
import { ProductCard } from "./ProductCard";
import Masonry from "react-masonry-css";
import { Box } from "@mui/material";

export const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Long Sleeve White Rib Top",
      brand: "ZigZag brand",
      price: "Rs. 2,790.00",
      url: "/women 1.png",
      availability: "In Stock",
    },
    {
      id: 2,
      name: "Long Sleeve White Rib Top",
      brand: "Polo brand",
      price: "Rs. 2,790.00",
      url: "/women 1.png",
      availability: "Out Stock",
    },

    {
      id: 3,
      name: "Long Sleeve White Rib Top",
      brand: "ZigZag brand",
      price: "Rs. 2,790.00",
      url: "/women 1.png",
      availability: "Out Stock",
    },
    {
      id: 4,
      name: "Long Sleeve White Rib Top",
      brand: "ZigZag brand",
      price: "Rs. 2,790.00",
      url: "/women 1.png",
      availability: "Out Stock",
    },
    {
      id: 5,
      name: "Long Sleeve White Rib Top",
      brand: "ZigZag brand",
      price: "Rs. 2,790.00",
      url: "/women 1.png",
      availability: "Out Stock",
    },
    {
      id: 6,
      name: "Long Sleeve White Rib Top",
      brand: "ZigZag brand",
      price: "Rs. 2,790.00",
      url: "/women 1.png",
      availability: "In Stock",
    },
    {
      id: 7,
      name: "Long Sleeve White Rib Top",
      brand: "ZigZag brand",
      price: "Rs. 2,790.00",
      url: "/women 1.png",
      availability: "In Stock",
    },
  ];
  return (
    <div className="">
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          justifyContent: "center",
          padding: "16px",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            brand={product.brand}
            price={product.price}
            url={product.url}
            availability={product.availability}
          />
        ))}
      </Box>
    </div>
  );
};
