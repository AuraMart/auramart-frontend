import React, { useState, useEffect } from "react";
import WomenSidebar from "../components/Product/WomenSidebar";
import { Box, CircularProgress, Grid } from "@mui/material";
import axios from "axios";
import ProductCard2 from "../components/Product/ProductCard2";
import { getAllWomenProducts } from "../Services/mainCategoryServices";

const WomenCategory = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([500, 10000]);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchWomenProducts = async () => {
      try {
        const response = await getAllWomenProducts();
        setProducts(response.data?.data || []);
      } catch (error) {
        console.error("Failed to fetch women cloths", error);
      } finally {
        setLoading(false); // Ensures loading is set to false after the try/catch block
      }
    };

    setLoading(true); // Set loading to true before fetching
    fetchWomenProducts();
  }, []);

  const filters = {
    categories: ["Tops", "T-Shirts", "Pants", "Skirts", "Dresses"],
    colors: ["Black", "White", "Yellow", "Green", "Red", "Blue"],
    sizes: ["XXS", "XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"],
    brands: [
      "Nike",
      "Adidas",
      "Puma",
      "Reebok",
      "Levis",
      "Wrangler",
      "Pepe Jeans",
      "UCB",
      "HRX",
    ],
  };

  const handleFilterChange = (e) => {
    const { name, value, checked } = e.target;
    console.log("name", name, value, checked);
    if (name === "category") {
      setSelectedCategories((prev) =>
        checked ? [...prev, value] : prev.filter((cat) => cat !== value)
      );
    } else if (name === "color") {
      setSelectedColors((prev) =>
        prev.includes(value)
          ? prev.filter((col) => col !== value)
          : [...prev, value]
      );
    } else if (name === "size") {
      setSelectedSizes((prev) =>
        prev.includes(value)
          ? prev.filter((sz) => sz !== value)
          : [...prev, value]
      );
    } else if (name === "brand") {
      setSelectedBrands((prev) =>
        checked ? [...prev, value] : prev.filter((br) => br !== value)
      );
    }
  };

  const handlePriceChange = (newValue) => setPriceRange(newValue);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.name);
    const matchesColor =
      selectedColors.length === 0 || selectedColors.includes(product.color);
    const matchesSize =
      selectedSizes.length === 0 || selectedSizes.includes(product.size);
    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];

    return (
      matchesCategory &&
      matchesColor &&
      matchesSize &&
      matchesBrand &&
      matchesPrice
    );
  });

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
    <Box sx={{ paddingTop: "50px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={3}>
          <WomenSidebar
            filters={filters}
            onFilterChange={handleFilterChange}
            onPriceChange={handlePriceChange}
          />
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <Grid container spacing={2}>
            {loading ? (
              <Box sx={{ display: "flex", height: "100vh",marginLeft:"40%",marginTop:"20%" }}>
              <CircularProgress />
            </Box>
            ) : (
              filteredProducts.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                  <ProductCard2
                    product={product}
                    name={product.name}
                    brand={product.brand}
                    price={product.price}
                    color={product.color}
                    size={product.size}
                    url={product.imageUrls[0]}
                    onWishlistClick={handleWishlist}
                  />
                </Grid>
              ))
            )}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WomenCategory;
