import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ProductCard } from "./Product/ProductCard";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const query = searchParams.get("query");

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`http://localhost:9191/api/v1/products/search?name=${query}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
        
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [query]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="px-8 py-4">
      <h1 className="text-2xl font-bold mb-4 text-gray-400">{query}</h1>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard
              key={product.id} 
              name={product.name}
              brand={product.brand}
              price={`$${product.price}`}
              url={product.imageUrls[0 ]} 
              id={product.id}
            />
          ))}
        </div>
      ) : (
        <div>No products found.</div>
      )}
    </div>
  );
};

export default SearchResults;

