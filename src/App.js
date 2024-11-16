import "./App.css";
import * as React from "react";
import Button from "@mui/material/Button";
import ProductPage from "./pages/productPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="text-xl">
        {/* <h1>AuraMart</h1>
        <Button variant="contained">Hello world</Button> */}
        <Routes>
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
