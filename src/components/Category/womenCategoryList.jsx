import React, { useEffect } from "react";
import { women } from "./categories";
import { Box } from "@mui/material";
import { Categorycard } from "./CategoryCard";
import { getAllWomenProducts } from "../../Services/mainCategoryServices";
import { ProductCard } from "../Product/ProductCard";

export const WomenCategoryList = () => {
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    const fetchWomenProducts = async () => {
      try {
        const response = await getAllWomenProducts();
        setProducts(response.data?.data || []);
      } catch (error) {
        console.error("Failed to fetch women cloths", error);
      }
    };
    fetchWomenProducts();
  }, []);

  const filteredProducts = products.slice(-4);

  return (
    <div style={{display:'flex',justifyContent:"stretch",alignContent:'center',marginLeft:"30px",height:"400px"}}>
    <Box
      sx={{
        display:"flex",
        flexWrap:"wrap",
        gap:"30px",
        justifyContent:"center",
      }}
    >
      {filteredProducts.map((product) => (
        console.log(product),
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
