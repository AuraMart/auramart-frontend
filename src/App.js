import './App.css';
import * as React from 'react';
import { ProductList } from './components/Product/ProductList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import FooterSection from './components/Footer/FooterSection';

function App() {
  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/productList" element={<ProductList/>} />
        </Routes>
      </BrowserRouter>
      <FooterSection />
    </div>
  );
}

export default App;
