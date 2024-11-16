import React from 'react'
import { ProductCard } from '../components/Product/ProductCard';
import Masonry from "react-masonry-css";

export const ProductList = () => {
  const products = [
    {
      id: 1,
      name: 'Long Sleeve White Rib Top',
      brand: 'ZigZag brand',
      price: 'Rs. 2,790.00',
      url:"/women 1.png"
    },{
      id: 1,
      name: 'Long Sleeve White Rib Top',
      brand: 'Polo brand',
      price: 'Rs. 2,790.00',
      url:"/women 1.png"
    },{
      id: 1,
      name: 'Long Sleeve White Rib Top',
      brand: 'ZigZag brand',
      price: 'Rs. 2,790.00',
      url:"/women 1.png"
    },{
      id: 1,
      name: 'Long Sleeve White Rib Top',
      brand: 'ZigZag brand',
      price: 'Rs. 2,790.00',
      url:"/women 1.png"
    },{
      id: 1,
      name: 'Long Sleeve White Rib Top',
      brand: 'ZigZag brand',
      price: 'Rs. 2,790.00',
      url:"/women 1.png"
    },{
      id: 1,
      name: 'Long Sleeve White Rib Top',
      brand: 'ZigZag brand',
      price: 'Rs. 2,790.00',
      url:"/women 1.png"
    },{
      id: 1,
      name: 'Long Sleeve White Rib Top',
      brand: 'ZigZag brand',
      price: 'Rs. 2,790.00',
      url:"/women 1.png"
    },{
      id: 1,
      name: 'Long Sleeve White Rib Top',
      brand: 'ZigZag brand',
      price: 'Rs. 2,790.00',
      url:"/women 1.png"
    },{
      id: 1,
      name: 'Long Sleeve White Rib Top',
      brand: 'ZigZag brand',
      price: 'Rs. 2,790.00',
      url:"/women 1.png"
    },
  ]
  return (
    <div className=''> 
      <Masonry breakpointCols={{
          default: 6,
          1024: 4,
          768: 3,
          640: 2,
        }}
        className="flex gap-4 transition-transform  85ms ease-out"
      >
        {products.map((product) => 
          <ProductCard key={product.id} name={product.name} brand={product.brand} price={product.price} url={product.url}/>
        )}
      </Masonry>
    </div>
  )
}
