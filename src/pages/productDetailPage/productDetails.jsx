import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Typography,
  Button,
  IconButton,
  Breadcrumbs,
  Link,
  Card,
  CardMedia,
  Divider,
  Chip,
  Rating,
  Snackbar,
  Alert,
} from "@mui/material";
import { Heart, ShoppingCart, Shield, Package, RefreshCw } from "lucide-react";
import axios from "axios";

const ProductDetails = () => {
  const API_BASE_URL = "http://localhost:9191/api/v1";
  const navigate = useNavigate();
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [averageRating, setAverageRating] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [cartId, setCartId] = useState(0);
  const [wishListId, setWishListId] = useState({ id: 0, productIds: [] });
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const userId = 1; // Hardcoded user ID for now

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const [productResponse, commentsResponse, cartIdResponse, wishListId] = await Promise.all([
          axios.get(`${API_BASE_URL}/products/product/${productId}/product`),
          axios.get(`${API_BASE_URL}/comments/product/${productId}`),
          axios.get(`${API_BASE_URL}/carts/user/${userId}`),
          axios.get(`${API_BASE_URL}/wishlist-items/user/${userId}`),
        ]);
        console.log(wishListId.data);
        setComments(commentsResponse.data);
        setProduct(productResponse.data.data);
        setCartId(cartIdResponse.data.id);
        setWishListId(wishListId.data);

        const totalRating = commentsResponse.data.reduce((acc, comment) => acc + comment.rating, 0);
        const avgRating = totalRating / commentsResponse.data.length;
        setAverageRating(avgRating || 0);

        setCommentCount(commentsResponse.data.length);

      } catch (err) {
        setError("Failed to fetch product data");
      }
    };

    fetchProduct();
  }, [productId]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleQuantityChange = (action) => {
    setQuantity((prevQuantity) =>
      action === "increase" ? prevQuantity + 1 : Math.max(prevQuantity - 1, 1)
    );
  };

  const handleBuyNow = () => {
    navigate("/payment", {
      state: {
        productId: product.id,
        quantity: quantity,
      },
    });
  };

  const handleAddToCart = async () => {
    try {
      const cartItemRequest = {
        cartId: cartId,
        quantity: quantity,
        unitPrice: product.price,
      };

      const response = await axios.post(
        `${API_BASE_URL}/cartItems/item/add/${product.id}`,
        cartItemRequest,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setSnackbar({ open: true, message: "Product added to cart successfully!", severity: "success" });
      } else {
        console.error("Failed to add product to cart:", response.data);
      }
    } catch (error) {
      setSnackbar({ open: true, message: "Failed to add product to cart!", severity: "error" });
    }
  };


  const handleWishList = async () => {
    try {
      if (!wishListId || !wishListId.productIds) {
        console.error("Wishlist or productIds is undefined.");
        return;
      }

      const isProductInWishlist = wishListId.productIds.includes(product.id);

      if (isProductInWishlist) {
        await axios.delete(`${API_BASE_URL}/wishlist-items/remove/${product.id}`);
        setWishListId((prevState) => ({
          ...prevState,
          productIds: prevState.productIds.filter((id) => id !== product.id),
        }));
        setSnackbar({ open: true, message: "Product removed from wishlist.", severity: "info" });
      } else {
        await axios.post(`${API_BASE_URL}/wishlist-items/add/${product.id}`, {
          wishlistId: wishListId.id,
        });
        setWishListId((prevState) => ({
          ...prevState,
          productIds: [...prevState.productIds, product.id],
        }));
        setSnackbar({ open: true, message: "Product added to wishlist.", severity: "success" });
      }
    } catch (error) {
      console.error("Error updating wishlist:", error.response?.data || error.message);
      setSnackbar({ open: true, message: "Failed to update wishlist!", severity: "error" });
    }
  };

  const isProductInWishlist = wishListId.productIds && wishListId.productIds.includes(product.id);

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const getColorBackground = (color) => {
    switch (color.toLowerCase()) {
      case 'red':
        return '#ff0000';
      case 'blue':
        return '#0000ff';
      case 'blues':
        return '#0000ff';
      case 'green':
        return '#008000';
      case 'yellow':
        return '#ffff00';
      case 'black':
        return '#000000';
      case 'white':
        return '#ffffff';
      default:
        return '#f0f0f0';
    }
  };

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="px-4 py-4 mx-auto max-w-7xl mt-12">
      <div className="flex flex-col gap-8 md:flex-row md:gap-x-16">
        <div className="md:w-1/2">
          <div className="flex flex-col gap-8 md:flex-row md:gap-4">
            <div className="flex flex-col gap-2">
              {product.imageUrls.map((img, index) => (
                <Card
                  key={index}
                  onClick={() => handleImageClick(index)}
                  className={`w-16 h-16 rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${selectedImageIndex === index
                      ? "border-slate-500"
                      : "border-transparent"
                    }`}
                >
                  <CardMedia
                    component="img"
                    image={img}
                    height="80"
                    alt={`Thumbnail ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                </Card>
              ))}
            </div>
            <div className="flex-grow">
              <Card className="overflow-hidden">
                <CardMedia
                  component="img"
                  height="80"
                  image={product.imageUrls[selectedImageIndex]}
                  alt={`Product image ${selectedImageIndex + 1}`}
                  className="w-full h-full object-cover aspect-[3/4]"
                />
              </Card>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 md:space-y-4">
          <Breadcrumbs className="mb-6 text-gray-600" separator=">">
            <Link underline="hover" color="inherit" href="#" className="hover:text-blue-500">
              Shop
            </Link>
            <Link underline="hover" color="inherit" href="#" className="hover:text-blue-500">
              {product.category.name}
            </Link>
            <Typography color="text.primary">{product.name}</Typography>
          </Breadcrumbs>

          <Typography variant="h4" component="h1" className="mb-4 font-bold">
            {product.name}
          </Typography>
          <div className="space-y-2">
            <Typography variant="h5" className=" font-semibold">
              Rs {product.price.toFixed(2)}
            </Typography>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center justify-center">
                <Rating value={averageRating} precision={0.5} readOnly />
                <span className="ml-2">{averageRating.toFixed(1)}</span>
              </div>
              <span className="text-gray-600">{commentCount} comments</span>
            </div>
          </div>
          <div className="space-y-2 py-2">
            <div className="flex flex-row items-center gap-10 ">
              <Typography variant="h6" className="font-semibold mb-2">
                Size:
              </Typography>
              <div
                className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-sm text-gray-700 font-semibold"
              >
                {product.size.toUpperCase()}
              </div>

            </div>
            <div className="flex flex-row items-center gap-8">
              <Typography variant="h6" className="font-semibold mb-2 mt-4">
                Color:
              </Typography>
              <Chip
                label={product.color}
                style={{
                  backgroundColor: getColorBackground(product.color),
                  color: 'white',
                }}
              />
            </div>
          </div>

          <div className="pb-4">
            <span className="block mb-2 text-lg">Quantity</span>
            <div className="flex items-center gap-4">
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

          <div className="flex gap-4 mb-6">
            <Button
              variant="contained"
              className="flex-1 py-3 text-white rounded-lg hover:bg-purple-700"
              startIcon={<ShoppingCart />}
              onClick={handleAddToCart}
            >
              Add to cart
            </Button>
            <IconButton
              onClick={handleWishList}
            >
              <Heart
                fill={isProductInWishlist ? '#f44336' : 'none'}
                stroke={isProductInWishlist ? '#f44336' : 'currentColor'}
              />
            </IconButton>
          </div>

          <Snackbar
            open={snackbar.open}
            autoHideDuration={3000}
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert
              onClose={handleCloseSnackbar}
              severity={snackbar.severity}
              sx={{ width: "100%" }}
            >
              {snackbar.message}
            </Alert>
          </Snackbar>

          <Button
            variant="outlined"
            fullWidth
            className="py-3 mb-8 border border-gray-300 rounded-lg"
            onClick={handleBuyNow}
          >
            Buy it Now
          </Button>

          <Divider />

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span className="text-base">Secure payment</span>
            </div>
            <div className="flex items-center gap-2">
              <Package className="w-5 h-5" />
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

export default ProductDetails;
