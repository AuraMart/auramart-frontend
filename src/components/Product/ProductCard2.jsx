import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  Badge,
} from '@mui/material';
import { styled } from "@mui/material";
import { grey } from "@mui/material/colors";
import Fab from "@mui/material/Fab";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ProductCard2 = ({
  product,
  name,
  brand,
  price,
  url,
  availability,
  image,
  onWishlistClick, // Add this prop to handle wishlist action
}) => {
  const [like, setLike] = React.useState(false);

  const handleClick = () => {
    setLike(!like);
    onWishlistClick(product); // Trigger wishlist function on click
  };

  return (
    <div className="">
      <Card sx={{ width: "220px", position: "relative" }}>
        <CardMedia sx={{ height: "260px" }} image={url} title="product" />
        {availability === "In Stock" ? (
          <Badge
            sx={{
              backgroundColor: "greenYellow",
              position: "absolute",
              top: 0,
              left: 5,
              paddingLeft: 1,
              paddingRight: 1,
              borderRadius: "5px",
            }}
          >
            {availability}
          </Badge>
        ) : (
          <Badge
            sx={{
              backgroundColor: "grey",
              position: "absolute",
              top: 0,
              left: 5,
              paddingLeft: 1,
              borderRadius: "5px",
              paddingRight: 1,
            }}
          >
            {availability}
          </Badge>
        )}
        <Fab
          aria-label="like"
          sx={{
            position: "absolute",
            top: 5,
            right: 5,
            width: "35px",
            height: "20px",
          }}
          onClick={handleClick} // Attach the click handler to the Fab button
        >
          {like ? (
            <FavoriteIcon fontSize="small" />
          ) : (
            <FavoriteBorderIcon fontSize="small" />
          )}
        </Fab>
        <CardContent sx={{ padding: "1px", paddingTop: "10px" }}>
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <Box
              sx={{ display: "flex", flexDirection: "column", pl: 1, pb: 1 }}
            >
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
              <AshButton
                variant="contained"
                size="small"
                sx={{ fontSize: "11px" }}
              >
                {price}
              </AshButton>
            </CardActions>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

const AshButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[300]),
  backgroundColor: grey[300],
  "&:hover": {
    backgroundColor: grey[400],
  },
}));

export default ProductCard2;
