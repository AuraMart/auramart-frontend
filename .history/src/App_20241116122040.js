import './App.css';
import * as React from 'react';
import { ProductList } from './pages/ProductList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WomenCategory from './pages/WomenCategory';

function App() {
  return (

    <div className="">
      <ProductList />
      <BrowserRouter>
        <Routes>
          <Route path="/kidsCategory" element={<WomenCategory/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
