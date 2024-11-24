import './App.css';
import WebRoutes from './webRoutes/webRoutes';
import * as React from 'react';
import Slide from './components/OffersAndSales/Slide';
import AOS from "aos";
import "aos/dist/aos.css";
import Offers from "./components/OffersAndSales/Offers";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import FooterSection from './components/Footer/FooterSection';
import KidsCategory from './pages/KidsCategory';
import ShoesCategory from './pages/ShoesCategory';
import WomenCategory from './pages/WomenCategory';
import MenCategory from './pages/MenCategory';
import Button from "@mui/material/Button";
import ProductPage from "./pages/productDetailPage";


function App() {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
      <Slide handleOrderPopup={handleOrderPopup} />
      <Offers/>
    <div className="App">
    <WebRoutes/>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/kidsCategory" element={<KidsCategory/>} />
          <Route path="/ShoesCategory" element={<ShoesCategory/>} />
          <Route path="/WomenCategory" element={<WomenCategory/>} />
          <Route path="/MenCategory" element={<MenCategory/>} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
      <FooterSection />
    </div>

    
  );
}

export default App;