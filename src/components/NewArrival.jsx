import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { ProductCard } from "../components/Product/ProductCard";
import { getProductsNew } from "../Services/api";

export const NewArrival = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProductsNew();
        setProducts(data);
      } catch (error) {
        setError("No New Arrivals");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>{error}</div>;

  return (
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
          url={product.url} // First image URL
          id={product.id}
        />
      ))}
    </Box>
  );
};
