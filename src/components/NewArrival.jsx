import React from "react";
import { ProductCard } from "../components/Product/ProductCard";
import { Box } from "@mui/material";


export const NewArrival = () => {
    const products = [
        {
          id: 1,
          name: "Long Sleeve White Rib Top",
          brand: "ZigZag brand",
          price: "Rs. 2,790.00",
          url: "/assets/images/women 1.png",
          availability: "In Stock",
        },
        {
          id: 2,
          name: "Long Sleeve White Rib Top",
          brand: "Polo brand",
          price: "Rs. 2,790.00",
          url: "/assets/images/women 1.png",
          availability: "In Stock",
        },
    
        {
          id: 3,
          name: "Long Sleeve White Rib Top",
          brand: "ZigZag brand",
          price: "Rs. 2,790.00",
          url: "/assets/images/women 1.png",
          availability: "In Stock",
        },
        {
          id: 4,
          name: "Long Sleeve White Rib Top",
          brand: "ZigZag brand",
          price: "Rs. 2,790.00",
          url: "/assets/images/women 1.png",
          availability: "In Stock",
        }
      ];
    return (
        <div className="">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            // justifyContent: "center",
  
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
  )
}


