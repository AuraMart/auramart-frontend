import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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


const ClothingCat = ({ product }) => {
  const navigate = useNavigate();

  const productColors = [
    {
      color_id: 1,
      color_name: "Black",
      color_value: "black",
      image:
        "https://res.cloudinary.com/dymz9yfzv/image/upload/v1707279632/samples/two-ladies.jpg",
    },
    {
      color_id: 2,
      color_name: "Red",
      color_value: "red",
      image:
        "https://res.cloudinary.com/dymz9yfzv/image/upload/v1715838920/mmbcbmhwn1d8wc2zzbhr.jpg",
    },
    {
      color_id: 3,
      color_name: "Blue",
      color_value: "blue",
      image:
        "https://res.cloudinary.com/dymz9yfzv/image/upload/v1707279632/samples/two-ladies.jpg",
    },
  ];

  const productSizes = [
    { size_id: 1, color_id: 1, size: "S", quantity: 10 },
    { size_id: 2, color_id: 1, size: "M", quantity: 5 },
    { size_id: 3, color_id: 1, size: "L", quantity: 0 },
    { size_id: 4, color_id: 2, size: "M", quantity: 9 },
    { size_id: 5, color_id: 2, size: "XL", quantity: 32 },
    { size_id: 6, color_id: 3, size: "S", quantity: 0 },
    { size_id: 7, color_id: 3, size: "M", quantity: 8 },
    { size_id: 8, color_id: 3, size: "L", quantity: 0 },
  ];

  const [productSelection, setProductSelection] = useState({
    productId:product.id,
    color: product.color,
    colorID: productColors[0].color_id,
    size: product.size,
    sizeID: null,
    quantity: 1,
    image: productColors[0].image,
  });

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setProductSelection(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever `productSelection` changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(productSelection));
  }, [productSelection]);

  // Function to add a new product to the cart
  const AddToCart = (newProduct) => {
    // Get the current cart data from localStorage
    const savedCart = localStorage.getItem("cart");
    const currentCart = savedCart ? JSON.parse(savedCart) : [];

    // Check if the product already exists in the cart
    const existingProduct = currentCart.find(
      (product) => product.id === newProduct.id
    );

    let updatedCart;
    if (existingProduct) {
      // If it exists, update the quantity or details
      updatedCart = currentCart.map((product) =>
        product.id === newProduct.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
    } else {
      // If it doesn't exist, add it to the cart
      updatedCart = [...currentCart, { ...newProduct, quantity: 1 }];
    }

    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    // Update the state
    setProductSelection(updatedCart);
  };

  const handleColorChange = (colorId, colorValue, image) => {
    setProductSelection((prev) => ({
      ...prev,
      color: colorValue,
      colorID: colorId,
      image: image,
      size: "",
      sizeID: null,
    }));
  };

  const handleSizeChange = (size) => {
    const sizeObj = productSizes.find(
      (s) =>
        s.size === size &&
        s.color_id === productSelection.colorID &&
        s.quantity > 0
    );
    if (sizeObj) {
      setProductSelection((prev) => ({
        ...prev,
        size: size,
        sizeID: sizeObj.size_id,
      }));
    }
  };

  const handleQuantityChange = (action) => {
    setProductSelection((prev) => ({
      ...prev,
      quantity:
        action === "increase"
          ? prev.quantity + 1
          : prev.quantity > 1
          ? prev.quantity - 1
          : 1,
    }));
  };

  const handleAddToCart = () => {
    console.log("Adding to Cart:", productSelection);
  };

  const handleBuyNow = () => {
    navigate("/payment", {
      state: productSelection,
    });
  };

  const handleWishList = () => {
    console.log("Product added to wishlist:", productSelection);
  };

  const availableSizes = productSizes.filter(
    (size) => size.color_id === productSelection.colorID && size.quantity > 0
  );

  return (
    <div className="px-4 py-4 mx-auto max-w-7xl">
      <div className="flex flex-col gap-8 md:flex-row md:gap-x-16">
        <div className="flex gap-4 md:w-1/2 md:items-center">
          <div className="flex flex-col items-center w-20 gap-4">
            {productColors.map((color, index) => (
              <Card
                key={index}
                onClick={() =>
                  handleColorChange(
                    color.color_id,
                    color.color_value,
                    color.image
                  )
                }
                className={`w-16 h-16 rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${
                  productSelection.color === color.color_value
                    ? "border-slate-500"
                    : "border-transparent"
                }`}
              >
                <CardMedia
                  component="img"
                  height="80"
                  image={color.image}
                  alt={`Color ${color.color_name}`}
                  className="object-cover w-full h-full"
                />
              </Card>
            ))}
            <div className="flex flex-col">
              <button
                onClick={() => {
                  const currentIndex = productColors.findIndex(
                    (color) => color.image === productSelection.image
                  );
                  const prevIndex =
                    (currentIndex - 1 + productColors.length) %
                    productColors.length;
                  handleColorChange(
                    productColors[prevIndex].color_id,
                    productColors[prevIndex].color_value,
                    productColors[prevIndex].image
                  );
                }}
                className="rounded-full hover:bg-gray-200"
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
                onClick={() => {
                  const currentIndex = productColors.findIndex(
                    (color) => color.image === productSelection.image
                  );
                  const nextIndex = (currentIndex + 1) % productColors.length;
                  handleColorChange(
                    productColors[nextIndex].color_id,
                    productColors[nextIndex].color_value,
                    productColors[nextIndex].image
                  );
                }}
                className="rounded-full hover:bg-gray-200"
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
              image={productSelection.image}
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
            <Typography variant="h4" component="h1" className="mb-4 font-bold">
              {product.name}
            </Typography>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center justify-center">
                <Rating value={3.5} precision={0.5} readOnly />
                <span className="ml-2">3.5</span>
              </div>
              <span className="text-gray-600">120 comments</span>
            </div>

            <Typography variant="h5" className="mb-6 font-semibold">
              Rs {product.price.toFixed(2)}
            </Typography>
          </div>
          <div>
            {product.category !== "Bags" && (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg">Select Size</span>
                  <Button
                    endIcon={<ArrowRight className="w-4 h-4 ml-1" />}
                    color="inherit"
                    className="flex items-center text-gray-600"
                  >
                    Size Guide
                  </Button>
                </div>
                <ToggleButtonGroup
                  value={productSelection.size}
                  exclusive
                  onChange={(e, newSize) =>
                    setProductSelection((prevSelection) => ({
                      ...prevSelection,
                      size: newSize,
                    }))
                  }
                  className="flex gap-2"
                >
                  {productSizes
                    .filter(
                      (size) =>
                        productColors.find(
                          (color) =>
                            color.color_value === productSelection.color
                        )?.color_id === size.color_id
                    )
                    .map((size) => (
                      <ToggleButton
                        key={size.size}
                        value={size.size}
                        disabled={size.quantity === 0}
                        className={`w-12 h-12 rounded-full border ${
                          productSelection.size === size.size
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
              <span className="block mb-2 text-lg">Colours Available</span>
              <div className="flex gap-2">
                {productColors.map((color) => (
                  <button
                    key={color.color_name}
                    onClick={() =>
                      handleColorChange(
                        color.color_id,
                        color.color_value,
                        color.image
                      )
                    }
                    className={`w-7 h-7 rounded-full transition ${
                      productSelection.color_value === color.color_value
                        ? "ring-2 ring-offset-2 ring-slate-500"
                        : ""
                    }`}
                    style={{ backgroundColor: color.color_value }}
                    aria-label={`Select ${color.color_name}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
          <div className="mb-6">
            <span className="block mb-2 text-lg">Quantity</span>
            <div className="flex items-center gap-4 mb-6">
              <Button
                onClick={() => handleQuantityChange("decrease")}
                variant="outlined"
                className="w-10 h-10"
              >
                -
              </Button>
              <span className="text-lg">{productSelection.quantity}</span>
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
                className="flex items-center justify-center flex-1 gap-2 py-3 text-white rounded-lg hover:bg-purple-700"
                startIcon={<ShoppingCart className="w-5 h-5" />}
                onClick={handleAddToCart}
              >
                Add to cart
              </Button>
              <IconButton
                className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-lg"
                onClick={handleWishList}
              >
                {}
                <Heart className="w-5 h-5" />
              </IconButton>
            </div>

            <Button
              variant="outlined"
              fullWidth
              className="w-full py-3 mb-8 border border-gray-300 rounded-lg"
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
