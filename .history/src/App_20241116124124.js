import './App.css';
import * as React from 'react';
import { ProductList } from './pages/ProductList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WomenCategory from './pages/KidsCategory';

function App() {
  return (

    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/productList" element={<ProductList/>} />
          <Route path="/kidsCategory" element={<WomenCategory/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
