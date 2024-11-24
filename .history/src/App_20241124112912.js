import './App.css';
import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import FooterSection from './components/Footer/FooterSection';
import KidsCategory from './pages/KidsCategory';
import ShoesCategory from './pages/ShoesCategory';
import WomenCategory from './pages/WomenCategory';
import MenCategory from './pages/MenCategory';

function App() {
  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/kidsCategory" element={<KidsCategory/>} />
          <Route path="/ShoesCategory" element={<ShoesCategory/>} />
          <Route path="/WomenCategory" element={<WomenCategory/>} />
          <Route path="/MenCategory" element={<MenCategory/>} />
        </Routes>
      </BrowserRouter>
      <FooterSection />
    </div>
  );
}

export default App;
