import './App.css';
import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import KidsCategory from './pages/KidsCategory';
import ShoesCategory from './pages/ShoesCategory';

function App() {
  return (

    <div className="">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/productList" element={<ProductList/>} /> */}
          <Route path="/kidsCategory" element={<KidsCategory/>} />
          <Route path="/ShoesCategory" element={<ShoesCategory/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
