import "./App.css";
import * as React from "react";
import Button from "@mui/material/Button";
import ProductPage from "./pages/productDetailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductList } from "./pages/ProductList";

function App() {
  return (
    <div className="">
      {/* <ProductList /> */}
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/product" element={<ProductPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
