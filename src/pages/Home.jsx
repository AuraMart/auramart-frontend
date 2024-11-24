import React,{ useRef } from "react";
import Carousel from "react-material-ui-carousel";
import items from "../components/Carosel/carousel-items";
import { Item } from "../components/Carosel/Item";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  styled,
} from "@mui/material";
import { ProductList } from "../components/Product/ProductList";
import { CategorySection } from "../components/Category/CategorySection";
import { MenCategoryList } from "../components/Category/menCategoryList";
import { WomenCategoryList } from "../components/Category/womenCategoryList";
import { grey } from "@mui/material/colors";
import { NewArrival } from "../components/NewArrival";

export const Home = () => {
  const targetRef = useRef(null);

  return (
    <div className="">
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} scrollToRef={targetRef}/>
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
        <div style={{ display: "flex", justifyItems: "center" }}>
          <MenCategoryList />
        </div>
      </Box>

      {/* categories for woman */}
      <Box
        sx={{
          width: "100%",
          marginTop: "3%",
        }}
      >
        <h1 className="font-abril text-[36px] align-left text-gray-500 ml-[4%] mb-[2%]">
          Categories for Women
        </h1>
        <div style={{ display: "flex", justifyItems: "center" }}>
          <WomenCategoryList />
        </div>
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
          <h5 className="absolute top-10 text-center text-5xl text-white font-abril">
            Available Top Brands
          </h5>
          <h3 className="absolute top-28 text-center text-2xl text-yellow-400 font-mogra">
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
                image={"/assets/icons/polo.jpeg"}
                className="h-20 w-40 "
              />
            </Card>
            <Card className="rounded-full">
              <CardMedia
                image={"/assets/icons/HM.png"}
                className="h-20 w-40 "
              />
            </Card>
            <Card className="rounded-full">
              <CardMedia
                image={"/assets/icons/levis.png"}
                className="h-20 w-40 "
              />
            </Card>
            <Card className="rounded-full">
              <CardMedia
                image={"/assets/icons/puma.png"}
                className="h-20 w-40 "
              />
            </Card>
            <Card className="rounded-full h-20 w-40">
              <CardMedia
                image={"/assets/icons/nike.png"}
                className="h-16 w-40 "
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