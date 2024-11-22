import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Payment from './pages/Payment';
import Navbar from './components/Navigation/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/productlist" element={<ProductList />} /> {/* ProductList */}
        <Route path="/payment" element={<Payment />} /> {/* Payment */}
      </Routes>
    </Router>
  );
}

export default App;
