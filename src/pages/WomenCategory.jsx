import React, { useState, useEffect } from "react";
import WomenSidebar from "../components/Product/WomenSidebar";
import { Box, Grid2 } from "@mui/material";
import { getAllWomenProducts } from "../Services/mainCategoryServices";
import { ProductCard } from "../components/Product/ProductCard";

const WomenCategory = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchWomenProducts = async () => {
      try {
        const response = await getAllWomenProducts();
        setProducts(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Failed to fetch women cloths", error);
      }
    };
    fetchWomenProducts();
    console.log("women cloths", products);
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

  // const filteredProducts = products.filter(
  //   (product) =>
  //     (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
  //     (selectedColors.length === 0 || selectedColors.includes(product.color))
  // );

  return (
    <Box>
      <Grid2 container spacing={8}>
        <Grid2 item xs={12} sm={4} md={3}>
          <WomenSidebar filters={filters} onFilterChange={handleFilterChange} />
        </Grid2>
          <Grid2 container spacing={3} className="mt-4" >
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

export default WomenCategory;
