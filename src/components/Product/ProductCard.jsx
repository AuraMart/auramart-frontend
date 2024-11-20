import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Box,
  Badge,
  styled,
  Fab,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const ProductCard = ({ name, brand, price, url, availability }) => {
  const [like, setLike] = React.useState(false);

  const handleClick = () => {
    setLike(!like);
  };

  return (
      <Card sx={{ width: "250px", position: "relative" }}>
        <CardMedia sx={{ height: "300px" }} image={url} title="green iguana" />
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
        >
          {like ? (
            <FavoriteIcon onClick={() => handleClick()} fontSize="25px" />
          ) : (
            <FavoriteBorderIcon onClick={() => handleClick()} fontSize="25px" />
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
                  maxWidth: "130px",
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
  );
};

const AshButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[300]),
  backgroundColor: grey[300],
  "&:hover": {
    backgroundColor: grey[400],
  },
}));
