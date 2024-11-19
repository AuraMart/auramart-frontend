import './App.css';
import * as React from 'react';
import { ProductList } from './components/Product/ProductList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';

function App() {
  return (

    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/productList" element={<ProductList/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
