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
import AddProduct from './components/Admin/AddProduct';
import AdminDashboard from './components/Admin/AdminDashboard';
import Analytics from './components/Admin/Analytics';
import Banner from './components/Admin/Banner';
import Profile from './components/Admin/Profile';
import ViewOrders from './components/Admin/ViewOrders';
import AdminLayout from './pages/layout/AdminLayout';

function App() {
 

  return (
      
    <div className="App">
      
      
    <WebRoutes/>
    <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/kidsCategory" element={<KidsCategory/>} />
          <Route path="/ShoesCategory" element={<ShoesCategory/>} />
          <Route path="/WomenCategory" element={<WomenCategory/>} />
          <Route path="/MenCategory" element={<MenCategory/>} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/offers" element={<Offers/>} />
          <Route path="/payment" element={<Payment />} /> 
          <Route path="/contact" element={<ContactUs />} /> 
          <Route path="/aboutus" element={<AboutUs/>} />

          
          <Route path="/admin" element={<AdminLayout/>}>
          <Route path="add-product" element={<AddProduct/>}/>
          <Route path="" element={<AdminDashboard/>}/>
          <Route path="analytics" element={<Analytics/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="view-orders" element={<ViewOrders/>}/>
          </Route>
          
        </Routes>
      </BrowserRouter>
      <FooterSection />
    </div>
  );
}

export default App;
