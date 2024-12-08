import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardMedia, Typography, CardActions, Button, Box } from "@mui/material";
import { styled } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ key, name, brand, price, url,id }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("id", id);
    navigate(`/product/${id}`);
  };

  return (
      <Card sx={{ width: "300px" }} onClick={handleClick}>
        <CardMedia sx={{ height: "290px" }} image={url} title="green iguana" />
        <CardContent sx={{ padding: "1px", paddingTop: "10px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              position: "relative",
            }}
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
            <CardActions className=" absolute right-2">
              <AshButton
                variant="contained"
                size="small"
                className="text-[11px]"
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
