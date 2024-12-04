import './App.css';
import WebRoutes from './webRoutes/webRoutes';
import * as React from 'react';
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
import ProductPage from "./pages/productDetailPage";
import Payment from './pages/Payment';
import Navbar from './components/Navigation/Navbar';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import CartPage from './pages/CartPage/CartPage';
import WishlistPage from './pages/WishListPage/WishListPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';

function App() {
  return (
    <div className="mt-10">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/kidsCategory" element={<KidsCategory />} />
          <Route path="/ShoesCategory" element={<ShoesCategory />} />
          <Route path="/WomenCategory" element={<WomenCategory />} />
          <Route path="/MenCategory" element={<MenCategory />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
        </Routes>
      </BrowserRouter>
      <FooterSection />
    </div>
  );
}

export default App;

