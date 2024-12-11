import React, { useRef, useEffect,useState } from "react";
import { men } from "./categories";
import { Box } from "@mui/material";
import { Categorycard } from "./CategoryCard";
import { getAllMenProducts } from "../../Services/mainCategoryServices";
import { ProductCard } from "../Product/ProductCard";


export const MenCategoryList = () => {
  const [products, setProducts] = useState([]);
      
      useEffect(() => {
        const fetcMenProducts = async () => {
            try {
                const response = await getAllMenProducts();
                setProducts(response.data?.data || []);
                
            } catch (error) {
                console.error("Failed to fetch products", error);
            }
        };
        fetcMenProducts();
    }, []);


    // Get the last 4 products
    const filteredProducts = products.slice(-4);


  return (
    <div style={{display:'flex',justifyContent:"stretch",alignContent:'center', marginLeft:"30px",height:"400px"}}>
    <Box
      sx={{
        display:"flex",
        flexWrap:"wrap",
        gap:"30px",
        justifyContent:"center",
      }}
    >
      {filteredProducts?.map((product) => (
        <ProductCard
        key={product.id}
        name={product.name}
        brand={product.brand}
        price={product.price}
        url={product.imageUrls[0]} // First image URL
        id={product.id}
      />
      ))}
    </Box>
  </div>
  );
};
