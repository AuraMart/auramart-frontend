import React, { useRef,useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import items from "../../components/Carosel/carousel-items";
import { Item } from "../../components/Carosel/Item";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  styled,
} from "@mui/material";
import { CategorySection } from "../../components/Category/CategorySection";
import { MenCategoryList } from "../../components/Category/menCategoryList";
import { WomenCategoryList } from "../../components/Category/womenCategoryList";
import { grey } from "@mui/material/colors";
import { NewArrival } from "../../components/NewArrival";
import Navbar from "../../components/Navigation/Navbar";

export const Home = () => {
  const targetRef = useRef(null);



  return (
    <div className="">
      <Navbar/>
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} scrollToRef={targetRef} />
        ))}
      </Carousel>
      {/* new arrival section */}
      <Box
        sx={{
          width: "100%",
          marginTop: "3%",
        }}
      >
        <h1 className="font-abril text-[36px] align-left text-gray-500 ml-[4%] mb-[2%]">
          New Arrival
        </h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <NewArrival />
        </div>
      </Box>
      {/* category types */}
      <Box
        sx={{
          width: "100%",
          marginTop: "3%",
        }}
        ref={targetRef}
      >
        <h1 className="font-abril text-[36px] align-left text-gray-500 ml-[4%] mb-[2%]">
          Shop By Category
        </h1>
        <CategorySection />
      </Box>

      {/* Categories for men */}
      <Box
        sx={{
          width: "100%",
          marginTop: "3%",
        }}
      >
        <h1 className="font-abril text-[36px] align-left text-gray-500 ml-[4%] mb-[2%]">
          Categories for Men
        </h1>
          <MenCategoryList />
      </Box>

      {/* categories for woman */}
      <Box
        sx={{
          marginTop: "3%",
        }}
      >
        <h1 className="font-abril text-[36px] align-left text-gray-500 ml-[4%] mb-[2%]">
          Categories for Women
        </h1>
          <WomenCategoryList />
      </Box>

      {/* top brands */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BlackBox>
          <h5 className="absolute text-5xl text-center text-white top-10 font-abril">
            Available Top Brands
          </h5>
          <h3 className="absolute text-2xl text-center text-yellow-400 top-28 font-mogra">
            - Discover Premium Fashion Labels -
          </h3>
          <Stack
            direction="row"
            spacing={2}
            sx={{ marginTop: "10%" }}
            className="absolute bottom-8"
          >
            <Card className="rounded-full">
              <CardMedia
                image={"https://res.cloudinary.com/dcn64hytu/image/upload/v1732705692/AuraMart-images/brands/polo_offfh4.jpg"}
                className="w-40 h-20 "
              />
            </Card>
            <Card className="rounded-full">
              <CardMedia
                image={"https://res.cloudinary.com/dcn64hytu/image/upload/v1732705691/AuraMart-images/brands/HM_camlg4.png"}
                className="w-40 h-20 "
              />
            </Card>
            <Card className="rounded-full">
              <CardMedia
                image={"https://res.cloudinary.com/dcn64hytu/image/upload/v1732705692/AuraMart-images/brands/levis_aolpsn.png"}
                className="w-40 h-20 "
              />
            </Card>
            <Card className="rounded-full">
              <CardMedia
                image={"https://res.cloudinary.com/dcn64hytu/image/upload/v1732705692/AuraMart-images/brands/puma_kcnzk7.png"}
                className="w-40 h-20 "
              />
            </Card>
            <Card className="w-40 h-20 rounded-full">
              <CardMedia
                image={"https://res.cloudinary.com/dcn64hytu/image/upload/v1732705691/AuraMart-images/brands/nike_aftllh.png"}
                className="w-40 h-16 "
              />
            </Card>
          </Stack>
        </BlackBox>
      </Box>
    </div>
  );
};

const BlackBox = styled(Box)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[300]),
  backgroundColor: grey[900],
  opacity: "0.9",
  marginTop: "4%",
  borderRadius: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "50vh",
  width: "75%",
  position: "relative",
}));
