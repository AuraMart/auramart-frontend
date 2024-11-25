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

const ClothingCat = ({product}) => {

  const productColors = [
    { color_id: 1, product_id: 1, color_name: "Black", color_value: "black", image:"https://res.cloudinary.com/dymz9yfzv/image/upload/v1707279632/samples/two-ladies.jpg" },
    { color_id: 2, product_id: 1, color_name: "Red", color_value: "red", image:"https://res.cloudinary.com/dymz9yfzv/image/upload/v1715838920/mmbcbmhwn1d8wc2zzbhr.jpg" },
    { color_id: 3, product_id: 1, color_name: "Blue", color_value: "blue", image:"https://res.cloudinary.com/dymz9yfzv/image/upload/v1707279632/samples/two-ladies.jpg" },
  ];

  const productSizes = [
    { size_id: 1, color_id: 1, size: "S", quantity: 10 },
    { size_id: 2, color_id: 1, size: "M", quantity: 5 },
    { size_id: 3, color_id: 1, size: "L", quantity: 0 },
    { size_id: 4, color_id: 2, size: "M", quantity: 9 },
    { size_id: 5, color_id: 2, size: "XL",quantity: 32 },
    { size_id: 6, color_id: 3, size: "S", quantity: 0 },
    { size_id: 7, color_id: 3, size: "M", quantity: 8 },
    { size_id: 8, color_id: 3, size: "L", quantity: 0 },
  ];

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState(
    productColors[0].color_value
  );
  const [selectedColorID, setSelectedColorID] = useState(1);
  const [selectedSizeID, setSelectedSizeID] = useState(1);
  const [quantity, setQuantity] = useState(1);

  const availableSizes = productSizes.filter(
    (size) =>
      productColors.find((color) => color.color_value === selectedColor)
        ?.color_id === size.color_id && size.quantity > 0
  );

  const handleColorChange = (colorId, colorValue) => {
    setSelectedColor(colorValue);
    setSelectedColorID(colorId);
    setSelectedSize(""); 
    
    const colorIndex = productColors.findIndex(
        (color) => color.color_value === colorValue
      );
      if (colorIndex !== -1) {
        setSelectedImage(colorIndex);
    } else {
        setSelectedImage(0); 
      }
  };

  const handleSizeChange = (size) => {
    if (availableSizes.some((s) => s.size === size)) {
      setSelectedSize(size);
      setSelectedSizeID(
        availableSizes.find((s) => s.size === size).size_id
      );
    }
  };

  const handleQuantityChange = (action) => {
    if (action === "increase") {
      setQuantity((prevQuantity) => prevQuantity + 1);
    } else if (action === "decrease" && quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

const handleBuyNow = () => {
    console.log("Product Details:", {
        id: product.id,
        colorId: selectedColorID,
        sizeId: selectedSizeID,
        quantity: quantity,
    });
}

const handleWishList = () => {
  console.log("Product added to wishlist:", {
      id: product.id,
      color: selectedColor,
      size: selectedSize,
      quantity: quantity,
  })}

  return (
    <div className="max-w-7xl mx-auto py-4 px-4">
      <div className="flex flex-col md:flex-row gap-8 md:gap-x-16">
        <div className="flex gap-4 md:w-1/2 md:items-center">
          <div className="flex flex-col gap-4 w-20 items-center">
            {productColors.map((img, index) => (
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
                  image={img.image || productColors[0].image}
                  alt={`Product thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </Card>
            ))}
            <div className="flex flex-col">
              <button
                onClick={() =>
                  setSelectedImage(
                    (selectedImage - 1 + productColors.length) %
                      productColors.length
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
                  setSelectedImage((selectedImage + 1) % productColors.length)
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
              image={productColors[selectedImage].image || productColors[0].image}
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
              {product.category}
            </Link>
            <Typography color="text.primary">{product.name}</Typography>
          </Breadcrumbs>
          <div>
            <Typography variant="h4" component="h1" className="font-bold mb-4">
              {product.name}
            </Typography>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center justify-center">
                <Rating value={3.5} precision={0.5} readOnly />
                <span className="ml-2">3.5</span>
              </div>
              <span className="text-gray-600">120 comments</span>
            </div>

            <Typography variant="h5" className="font-semibold mb-6">
              Rs {product.price.toFixed(2)}
            </Typography>
          </div>
          <div>
            {product.category !== "Bags" && (
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
                  {productSizes
                    .filter(
                      (size) =>
                        productColors.find(
                          (color) => color.color_value === selectedColor
                        )?.color_id === size.color_id
                    )
                    .map((size) => (
                      <ToggleButton
                        key={size.size}
                        value={size.size}
                        disabled={size.quantity === 0}
                        className={`w-12 h-12 rounded-full border ${
                          selectedSize === size.size
                            ? "border-black bg-black text-white"
                            : "border-red-300"
                        }`}
                      >
                        {size.size}
                      </ToggleButton>
                    ))}
                </ToggleButtonGroup>
              </div>
            )}

            <div className="mb-6">
              <span className="block text-lg mb-2">Colours Available</span>
              <div className="flex gap-2">
                {productColors.map((color) => (
                  <IconButton
                    key={color.color_name}
                    onClick={() => handleColorChange(color.color_id, color.color_value)}
                    className={`w-7 h-7 rounded-full ${
                      selectedColor === color.color_value
                        ? "ring-2 ring-offset-2 ring-slate-500"
                        : ""
                    }`}
                    style={{ backgroundColor: color.color_value }}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="mb-6">
            <span className="block text-lg mb-2">Quantity</span>
            <div className="flex gap-4 mb-6 items-center">
              <Button
                onClick={() => handleQuantityChange("decrease")}
                variant="outlined"
                className="w-10 h-10"
              >
                -
              </Button>
              <span className="text-lg">{quantity}</span>
              <Button
                onClick={() => handleQuantityChange("increase")}
                variant="outlined"
                className="w-10 h-10"
              >
                +
              </Button>
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
              <IconButton className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center"
              onClick={handleWishList}>
                {}
                <Heart className="w-5 h-5" />
              </IconButton>
            </div>

            <Button
              variant="outlined"
              fullWidth
              className="w-full border border-gray-300 py-3 rounded-lg mb-8"
              onClick={handleBuyNow}
            >
              Buy it Now
            </Button>
          </div>
          <Divider />
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
              <span className="text-base">Easy Returns</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClothingCat;
