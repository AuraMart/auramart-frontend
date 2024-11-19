import React from "react";
import Carousel from "react-material-ui-carousel";
import items from "../components/Carosel/carousel-items";
import { Item } from "../components/Carosel/Item";
import { Box } from "@mui/material";
import { ProductList } from "../components/Product/ProductList";

export const Home = () => {
  return (
    <div className="">
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
      {/* <Box
      sx={{
        height:"40vh",
        width:"100%",
        my: 2,
        position: "relative",
      }}
    > */}
      <h1
        style={{
          position: "absolute",
          top: "0%",
          left: "2%",
          color: "black",
          fontSize: "48px",
          fontFamily: "",
        }}
      >
        New Arrival
      </h1>
      <ProductList />
      
    {/* </Box> */}

    </div>
  );
};
