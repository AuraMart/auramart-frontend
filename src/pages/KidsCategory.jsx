import React, { useState } from "react";
import KidsSidebar from "../components/Product/KidsSidebar";
import { Box, Grid2 } from "@mui/material";
import { getAllKidsProducts } from "../Services/mainCategoryServices";
import { useEffect } from "react";
import { ProductCard } from "../components/Product/ProductCard";

const KidsCategory = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchKidsCloths = async () => {
      try {
        const response = await getAllKidsProducts();
        setProducts(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Failed to fetch kids cloths", error);
      }
    };
    fetchKidsCloths();
  }, []);

  const filters = {
    categories: ["Tops", "T-Shirts", "Pants", "Skirts"],
    colors: ["#ff0000", "#0000ff", "#00ff00", "#000000", "#ffffff", "#ff69b4"],
  };

  const handleFilterChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "category") {
      setSelectedCategories((prev) => {
        return checked
          ? [...prev, value]
          : prev.filter((category) => category !== value);
      });
    } else if (name === "color") {
      setSelectedColors((prev) => {
        return checked
          ? [...prev, value]
          : prev.filter((color) => color !== value);
      });
    }
  };

  const handleWishlist = (product) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.some((item) => item.id === product.id)) {
        return prevWishlist;
      } else {
        return [...prevWishlist, product];
      }
    });
  };

  return (
    <Box>
      <Grid2 container spacing={8}>
        <Grid2 item xs={12} sm={4} md={3}>
          <KidsSidebar filters={filters} onFilterChange={handleFilterChange} />
        </Grid2>
        <Grid2 container spacing={2} className="mt-4">
          {Array.isArray(products) &&
            products.map((product) => (
              <ProductCard
                name={product.name} // Match field from API
                brand={product.brand}
                price={product.price}
                url={product.imgUrls}
              />
            ))}
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default KidsCategory;
