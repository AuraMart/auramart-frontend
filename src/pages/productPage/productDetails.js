import React, { useState } from "react";
import {
  Heart,
  ArrowRight,
  ShoppingCart,
  Package,
  Shield,
  RefreshCw,
} from "lucide-react";
import {
  Typography,
  Button,
  Rating,
  ToggleButton,
  ToggleButtonGroup,
  IconButton,
  Breadcrumbs,
  Link,
  Card,
  CardMedia,
  Divider,
} from "@mui/material";

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("black");

  const images = [
    "https://res.cloudinary.com/dymz9yfzv/image/upload/v1707279632/samples/two-ladies.jpg",
    " https://res.cloudinary.com/dymz9yfzv/image/upload/v1715838920/mmbcbmhwn1d8wc2zzbhr.jpg",
    "https://res.cloudinary.com/dymz9yfzv/image/upload/v1707279632/samples/two-ladies.jpg",
  ];

  const sizes = ["XS", "S", "M", "L", "XL"];
  const colors = [
    { name: "Black", value: "black" },
    { name: "Yellow", value: "yellow" },
    { name: "Pink", value: "pink" },
    { name: "Red", value: "red" },
  ];

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="max-w-7xl mx-auto py-4 px-4">
      <div className="flex flex-col md:flex-row gap-8 md:gap-x-16">
        <div className="flex gap-4 md:w-1/2 md:items-center">
          <div className="flex flex-col gap-4 w-20 items-center">
            {images.map((img, index) => (
              <Card
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-16 h-16 rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${
                  selectedImage === index
                    ? "border-slate-500"
                    : "border-transparent"
                }`}
              >
                <CardMedia
                  component="img"
                  height="80"
                  image={img}
                  alt={`Product thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </Card>
            ))}
            <div className="flex flex-col">
              <button
                onClick={() =>
                  setSelectedImage(
                    (selectedImage - 1 + images.length) % images.length
                  )
                }
                className="hover:bg-gray-200 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#312f31"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-circle-chevron-up"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m8 14 4-4 4 4" />
                </svg>
              </button>
              <button
                onClick={() =>
                  setSelectedImage((selectedImage + 1) % images.length)
                }
                className="hover:bg-gray-200 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#312f31"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-circle-chevron-down"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m16 10-4 4-4-4" />
                </svg>
              </button>
            </div>
          </div>

          <Card className="flex-1 overflow-hidden">
            <CardMedia
              component="img"
              image={images[selectedImage]}
              alt="Main product view"
              className="w-full h-full object-cover aspect-[3/4]"
            />
          </Card>
        </div>
        <div className="md:w-1/2 md:space-y-7">
          <Breadcrumbs className="mb-6 text-gray-600" separator=">">
            <Link
              underline="hover"
              color="inherit"
              href="#"
              className="hover:text-blue-500"
            >
              Shop
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="#"
              className="hover:text-blue-500"
            >
              Women
            </Link>
            <Typography color="text.primary">Top</Typography>
          </Breadcrumbs>
          <div>
            <Typography variant="h4" component="h1" className="font-bold mb-4">
              Raven Hoodie With Black colored Design
            </Typography>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center justify-center">
                <Rating value={3.5} precision={0.5} readOnly />
                <span className="ml-2">3.5</span>
              </div>
              <span className="text-gray-600">120 comment</span>
            </div>

            <Typography variant="h5" className="font-semibold mb-6">
              Rs2000.00
            </Typography>
          </div>
          <div>
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg">Select Size</span>
                <Button
                  endIcon={<ArrowRight className="w-4 h-4 ml-1" />}
                  color="inherit"
                  className="text-gray-600 flex items-center"
                >
                  Size Guide
                </Button>
              </div>
              <ToggleButtonGroup
                value={selectedSize}
                exclusive
                onChange={(e, newSize) => handleSizeChange(newSize)}
                className="flex gap-2"
              >
                {sizes.map((size) => (
                  <ToggleButton
                    key={size}
                    value={size}
                    className={`w-12 h-12 rounded-full border ${
                      selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-gray-300"
                    }`}
                  >
                    {size}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </div>
            <div className="mb-6">
              <span className="block text-lg mb-2">Colours Available</span>
              <div className="flex gap-2">
                {colors.map((color) => (
                  <IconButton
                    key={color.name}
                    onClick={() => setSelectedColor(color.value)}
                    className={`w-7 h-7 rounded-full ${
                      selectedColor === color.value
                        ? "ring-2 ring-offset-2 ring-slate-500"
                        : ""
                    }`}
                    style={{ backgroundColor: color.value }}
                  />
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-4 mb-6">
              <Button
                variant="contained"
                className="flex-1 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-purple-700"
                startIcon={<ShoppingCart className="w-5 h-5" />}
              >
                Add to cart
              </Button>
              <IconButton className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </IconButton>
            </div>

            <Button
              variant="outlined"
              fullWidth
              className="w-full border border-gray-300 py-3 rounded-lg mb-8"
            >
              Buy it Now
            </Button>
          </div>
          <Divider/>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span className="text-base">Secure payment</span>
            </div>
            <div className="flex items-center gap-2">
              <Package className="w-5 h-5" />
              <span className="text-base">Size & Fit</span>
            </div>
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              <span className="text-base">Free shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <RefreshCw className="w-5 h-5" />
              <span className="text-base">Free Shipping & Returns</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
