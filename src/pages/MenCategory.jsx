import React, { useState, useEffect } from "react";
import MenSidebar from "../components/Product/MenSidebar";
import { Box, Grid } from "@mui/material";
import ProductCard2 from "../components/Product/ProductCard2";
import { getAllMenProducts } from "../Services/mainCategoryServices";

const MenCategory = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([500, 10000]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllMenProducts();
        console.log("response", response.data?.data);
        setProducts(response.data?.data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const filters = {
    categories: [
      "T-shirts",
      "Shorts",
      "Shirt",
      "Hoodies",
      "Pajamas",
      "Jackets",
      "Joggers",
      "Denim Trousers",
    ],
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
    <Box sx={{ paddingTop: "50px", paddingX: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={3}>
          <MenSidebar
            filters={filters}
            onFilterChange={handleFilterChange}
            onPriceChange={handlePriceChange}
          />
        </Grid>
  
        <Grid item xs={12} sm={8} md={9}>
          <Grid container spacing={2}>
            {filteredProducts.map((product) => (
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
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MenCategory;
