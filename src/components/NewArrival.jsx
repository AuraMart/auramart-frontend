import React, { useRef, useEffect,useState } from "react";
import { ProductCard } from "../components/Product/ProductCard";
import { Box } from "@mui/material";
import { getProductsNew } from "../Services/api";
import axios from "axios";

export const NewArrival = () => {

  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProductsNew();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);


  return (
    <div className="">
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            brand={product.brand}
            price={product.price}
            //url={product.url}
            url={Array.isArray(product.imageUrls) ? product.imageUrls[0] : product.imageUrls} 
            //availability={product.availability}
          />
        ))}
      </Box>
    </div>
  );
};
