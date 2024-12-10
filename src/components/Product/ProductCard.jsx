import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardMedia, Typography, CardActions, Button, Box, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { styled } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ name, brand, price, url, id }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/product/${id}`);
  };

  const handleAddToWishlist = (event) => {
    // Prevent triggering the card click event
    event.stopPropagation();

    // Get the existing wishlist from localStorage
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    
    // Check if the product is already in the wishlist
    const isAlreadyInWishlist = wishlist.some((item) => item.id === id);
    if (!isAlreadyInWishlist) {
      // Add the new product to the wishlist
      wishlist.push({ id, name, brand, price, url });
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  };

  return (
    <Card sx={{ width: "300px" }} onClick={handleNavigate}>
      <CardMedia sx={{ height: "290px" }} image={url} title={name} />
      <CardContent sx={{ padding: "1px", paddingTop: "10px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", pl: 1, pb: 1 }}>
            <Typography
              sx={{ fontSize: 14 }}
              style={{
                maxWidth: "100px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {name}
            </Typography>
            <Typography sx={{ fontSize: 12, color: "text.secondary" }}>
              {brand}
            </Typography>
          </Box>
          <CardActions>
            <AshButton variant="contained" size="small">
              {price} and absolute
            </AshButton>
          </CardActions>
        </Box>
        <IconButton
          sx={{ position: "absolute", top: 10, right: 10 }}
          onClick={handleAddToWishlist}
          aria-label="add to wishlist"
        >
          <FavoriteIcon color="error" />
        </IconButton>
      </CardContent>
    </Card>
  );
};

const AshButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[300]),
  backgroundColor: grey[300],
  "&:hover": {
    backgroundColor: grey[400],
  },
}));
