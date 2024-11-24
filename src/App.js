
import './App.css';
import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import FooterSection from './components/Footer/FooterSection';
import MensCategory from './pages/MensCategory';
import Button from "@mui/material/Button";
import ProductPage from "./pages/productDetailPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/menscategory" element={<MensCategory />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
      <FooterSection />
    </div>
  );
}

export default App;
