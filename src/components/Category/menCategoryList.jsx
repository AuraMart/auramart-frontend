import React, { useRef, useEffect,useState } from "react";
//import { men } from "./categories";
import { Box } from "@mui/material";
import { Categorycard } from "./CategoryCard";
import { getProductsMen } from "../../Services/api";


export const MenCategoryList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // Fetch products from the backend
    const fetchProducts = async () => {
      try {
        const data = await getProductsMen();
        console.log(data.url);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div style={{display:'flex',justifyContent:"stretch",alignContent:'center'}}>
    <Box
      sx={{
        display:"flex",
        flexWrap:"wrap",
        gap:"30px",
        justifyContent:"center",
      }}
    >
      {products.map((men) => (
        <Categorycard
          key={men.id}
          title={men.title}
          //image={men.url}
          image={Array.isArray(men.imageUrls) ? men.imageUrls[0] : men.imageUrls}
        />
      ))}
    </Box>
  </div>
  );
};
