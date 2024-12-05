import React from 'react'
import { useNavigate } from "react-router-dom";
import ProductDetails from './productDetails'
import CommentSection from './commentSection'

const ProductPage = () => {

  
  const product = {
    id: 1,
    name: "Raven Hoodie with Black Color Design",
    price: 2000.0,
    category: "clothing", // Options: "clothing", "shoes", "bags"
    description: "100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
  };

  return (
    <div>
        <ProductDetails product = {product}/>
        <CommentSection product = {product} />
    </div>
  )
}

export default ProductPage