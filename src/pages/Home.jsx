import React from "react";
import Carousel from "react-material-ui-carousel";
import items from "../components/Carosel/carousel-items";
import { Item } from "../components/Carosel/Item";
import { Box } from "@mui/material";
import { ProductList } from "../components/Product/ProductList";
import { CategorySection } from "../components/Category/CategorySection";
import { MenCategoryList } from "../components/Category/menCategoryList";
import { WomenCategoryList } from "../components/Category/womenCategoryList";

export const Home = () => {
  return (
    <div className="">
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
      {/* new arrival section */}
      <Box
        sx={{
          width: "100%",
          marginTop: "2%",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "black",
            fontSize: "36px",
            fontFamily: "",
          }}
        >
          New Arrival
        </h1>
        <div style={{ display: "flex", justifyItems: "center" }}>
          <ProductList />
        </div>
      </Box>
      {/* category types */}
      <Box
        sx={{
          width: "100%",
          marginTop: "2%",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "black",
            fontSize: "36px",
            fontFamily: "",
          }}
        >
          Shop By Category
        </h1>
        <CategorySection />
      </Box>

      {/* Categories for men */}
      <Box
        sx={{
          width: "100%",
          marginTop: "2%",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "black",
            fontSize: "36px",
            fontFamily: "",
          }}
        >
          Categories for Men
        </h1>
        <div style={{display: "flex", justifyItems: "center" }}>
          <MenCategoryList />
        </div>
      </Box>

      {/* categories for woman */}
      <Box
        sx={{
          width: "100%",
          marginTop: "2%",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "black",
            fontSize: "36px",
            fontFamily: "",
          }}
        >
          Categories for Women
        </h1>
        <div style={{display: "flex", justifyItems: "center" }}>
          <WomenCategoryList />
        </div>
      </Box>
    </div>
  );
};
