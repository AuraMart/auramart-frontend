import React from "react";
import Stack from "@mui/material/Stack";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  CardMedia,
  Button,
  styled,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

export const CategorySection = () => {
  const navigate = useNavigate();

    const directToMensCategory = () => {
        navigate("/mens");
    }

    const directToWomensCategory = () => {
      navigate("/women");
  }

  const directToShoeCategory = () => {
    navigate("/shoes");
  }

  const directToKidsCategory = () => {
    navigate("/kids");
  };
  return (
    <Stack spacing={2} sx={{ alignItems: "center" }}>
      <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
        <Card
          sx={{
            width: "515px",
            textAlign: "center",
            position: "relative",
            height: "280px",
          }}
        >
          <CardMedia
            component="img"
            height="150"
            image="https://res.cloudinary.com/dcn64hytu/image/upload/v1732704862/AuraMart-images/men_osield.jpg"
            alt="Mens"
          />
          <CardContent>
            <Typography
              variant="h3"
              sx={{ position: "absolute", top: "10%", right: "15%" }}
            >
              Mens
            </Typography>
            <Typography
              variant="h6"
              sx={{
                position: "absolute",
                top: "35%",
                right: "5%",
                width: "200px",
              }}
            >
              Sharp and stylish outfits crafted for the modern man
            </Typography>
            <CardActions>
              <AshButton
                size="small"
                variant="outlined"
                sx={{ position: "absolute", bottom: "10%", right: "15%" }}
                onClick={directToMensCategory}
              >
                Shop Now
              </AshButton>
            </CardActions>
          </CardContent>
        </Card>

        {/* women category */}
        <Card
          sx={{
            width: "515px",
            textAlign: "center",
            position: "relative",
            height: "280px",
          }}
        >
          <CardMedia
            component="img"
            height="150"
            image="https://res.cloudinary.com/dcn64hytu/image/upload/v1732704870/AuraMart-images/women_iuiwwg.png"
            alt="Mens"
          />
          <CardContent>
            <Typography
              variant="h3"
              sx={{ position: "absolute", top: "10%", right: "5%" }}
            >
              Womens
            </Typography>
            <Typography
              variant="h6"
              sx={{
                position: "absolute",
                top: "35%",
                right: "5%",
                width: "200px",
              }}
            >
              Trendy and timeless fashion for every woman.
            </Typography>
            <CardActions>
              <AshButton
                size="small"
                variant="outlined"
                sx={{ position: "absolute", bottom: "10%", right: "15%" }}
                onClick={directToWomensCategory}
              >
                Shop Now
              </AshButton>
            </CardActions>
          </CardContent>
        </Card>
      </Stack>

      <Stack direction="row" spacing={2}>
      <Card
          sx={{
            width: "515px",
            textAlign: "center",
            position: "relative",
            height: "280px",
          }}
        >
          <CardMedia
            component="img"
            height="150"
            image="https://res.cloudinary.com/dcn64hytu/image/upload/v1732704861/AuraMart-images/shoes_rrd3k7.jpg"
            alt="Mens"
          />
          <CardContent>
            <Typography
              variant="h3"
              sx={{ position: "absolute", top: "10%", right: "15%" }}
            >
              Shoes
            </Typography>
            <Typography
              variant="h6"
              sx={{
                position: "absolute",
                top: "35%",
                right: "5%",
                width: "200px",
              }}
            >
                Step into fashion with footwear for all occasions.
            </Typography>
            <CardActions>
              <AshButton
                size="small"
                variant="outlined"
                sx={{ position: "absolute", bottom: "10%", right: "15%" }}
                onClick={directToShoeCategory}
              >
                Shop Now
              </AshButton>
            </CardActions>
          </CardContent>
        </Card>
        {/* kids section */}
        <Card
          sx={{
            width: "515px",
            textAlign: "center",
            position: "relative",
            height: "280px",
          }}
        >
          <CardMedia
            component="img"
            height="150"
            image="https://res.cloudinary.com/dcn64hytu/image/upload/v1732704875/AuraMart-images/kids_tkxvtu.jpg"
            alt="Kids"
          />
          <CardContent>
            <Typography
              variant="h3"
              sx={{ position: "absolute", top: "10%", right: "15%" }}
            >
              Kids
            </Typography>
            <Typography
              variant="h6"
              sx={{
                position: "absolute",
                top: "35%",
                right: "5%",
                width: "200px",
              }}
            >
              Fun and comfy styles for little ones.
            </Typography>
            <CardActions>
              <AshButton
                size="small"
                variant="outlined"
                sx={{ position: "absolute", bottom: "10%", right: "15%" }}
                onClick={directToKidsCategory}
              >
                Shop Now
              </AshButton>
            </CardActions>
          </CardContent>
        </Card>
      </Stack>
    </Stack>
  );
};


const AshButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[300]),
    backgroundColor: grey[300],
    "&:hover": {
      backgroundColor: grey[400],
    },
    borderColor: grey[800],
  }));
  