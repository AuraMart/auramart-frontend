import React, { useState } from "react";
import ClothingCat from "./clothingCat";


const ProductDetail = ({product}) => {

 
  return (
    <div>
        <ClothingCat product={product} />
    </div>
  );
};

export default ProductDetail;
