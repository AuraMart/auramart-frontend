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
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const Categorycard = ({ title, image }) => {
  return (
    <Card sx={{ width: "280px", position: "relative", marginRight: "10px" }}>
      <CardMedia sx={{ height: "310px" }} image={image} title={title}/>
      <CardContent sx={{ padding: "1px", paddingTop: "10px" }}>
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
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
              {title}
            </Typography>
            <Typography sx={{ fontSize: 12, color: "text.secondary" }}>
              Explore Now
            </Typography>
          </Box>
          <CardActions sx={{position:'absolute',right:0}}>
            <ArrowForwardIcon />
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
