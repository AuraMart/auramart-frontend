import React from "react";
import Carousel from "react-material-ui-carousel";
import items from "../components/Carosel/carousel-items";
import { Item } from "../components/Carosel/Item";

export const Home = () => {
  return (
    <div className="">
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>

    </div>
  );
};
