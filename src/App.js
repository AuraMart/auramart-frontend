

// import './App.css';
// import * as React from 'react';
// import "aos/dist/aos.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
// import { Home } from './pages/Home';
// import FooterSection from './components/Footer/FooterSection';
// import KidsCategory from './pages/KidsCategory';
// import ShoesCategory from './pages/ShoesCategory';
// import WomenCategory from './pages/WomenCategory';
// import MenCategory from './pages/MenCategory';
// import ProductPage from "./pages/productDetailPage/ProductPage";
// import Payment from './pages/Payment';
// import Navbar from './components/Navigation/Navbar';
// import ContactUs from './pages/ContactUs';
// import AboutUs from './pages/AboutUs';
// // import AddProduct from './components/Admin/AddProduct';
// import AdminDashboard from './components/Admin/AdminDashboard';
// import Analytics from './components/Admin/Analytics';
// import Banner from './components/Admin/Banner';
// import Profile from './components/Admin/Profile';
// import ViewOrders from './components/Admin/ViewOrders';
// import AdminLayout from './pages/layout/AdminLayout';
// import CartPage from './pages/CartPage/CartPage';
// import WishlistPage from './pages/WishListPage/WishListPage';
// import LoginPage from './pages/LoginPage/LoginPage';
// import SignupPage from './pages/SignupPage/SignupPage';
// import AddProduct from './pages/Admin/AddProduct';
// import ScrollToTop from './components/ScrollToTop';
// import Offers from './components/OffersAndSales/Offers';
// import MetricsCard from './components/Admin/MetricsCard';
// import ProductList from './components/Admin/ProductList';
// import Sidebar from './components/Admin/SideBar';

// // Customer Routes Component
// const CustomerRoutes = () => {
//   return (
//     <Routes>
//       <Route path="dashboard" element={<Home />} />
//       <Route path="mens" element={<MenCategory />} />
//       <Route path="women" element={<WomenCategory />} />
//       <Route path="kids" element={<KidsCategory />} />
//       <Route path="shoes" element={<ShoesCategory />} />
//       <Route path="payment" element={<Payment />} />
//       <Route path="cart" element={<CartPage />} />
//       <Route path="wishlist" element={<WishlistPage />} />
//       <Route path="product" element={<ProductPage />} />
//       <Route path="*" element={<Navigate to="dashboard" replace />} />
//     </Routes>
//   );
// };

// // Admin Routes Component
// const AdminRoutes = () => {
//   return (
//     <Routes>
//       <Route path="dashboard" element={<AdminDashboard/>} />
//       <Route path="add" element={<AddProduct />} />
//       <Route path="analys" element={<Analytics />} />
//       <Route path="banner" element={<Banner />} />
//       <Route path="card" element={<MetricsCard />} />
//       <Route path="profile" element={<Profile />} />
//       <Route path="side" element={<Sidebar />} />
//       <Route path="view" element={<ViewOrders />} />
//       <Route path="list" element={<ProductList/>} />
//       <Route path="*" element={<Navigate to="dashboard" replace />} />
//     </Routes>
//   );
// };


// function App() {
//   return (
//     <BrowserRouter>
//       <div className="flex flex-col min-h-screen bg-gray-100 mt-[2%]">
//         <ScrollToTop />
//         <Navbar/>
//         <Routes>
//         <Route path="/" element={<Home />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/signup" element={<SignupPage />} />
//           <Route path="/customer/*" element={<CustomerRoutes />} />
//           <Route path="/admin/*" element={<AdminRoutes />} />
//           <Route path="/cart" element={<CartPage />} />
//           <Route path="/wishlist" element={<WishlistPage />} />
//           <Route path="/addproduct" element={<AddProduct />} />
//           <Route path="/mens" element={<MenCategory />} />
//           <Route path="/women" element={<WomenCategory />} />
//           <Route path="/kids" element={<KidsCategory />} />
//           <Route path="/shoes" element={<ShoesCategory />} />
//           <Route path="/offers" element={<Offers />} />
//           {/* <Route path="payment" element={<Payment />}/> */}
//           {/* <Route path="/product/:productId" element={<ProductPage />} />   */}
//           {/* <Route path="/login" element={<ProductPage />} /> */}
//           {/* <Route path="payment" element={<Payment />} />
//           <Route path="/contact" element={<ContactUs />} />
//           <Route path="/about-us" element={<AboutUs />} />
//           <Route path="/product" element={<ProductPage />} />
//           <Route path="/admin" element={<AdminLayout/>} /> 
//           <Route path="add-product" element={<AddProduct/>}/>
//           <Route path="/dashboard" element={<AdminDashboard/>}/>
//           <Route path="analytics" element={<Analytics/>}/>
//           <Route path="profile" element={<Profile/>}/>
//           <Route path="view-orders" element={<ViewOrders/>}/>
//           <Route path="/mens" element={<MenCategory />} />
//           <Route path="/women" element={<WomenCategory />} />
//           <Route path="/kids" element={<KidsCategory />} />
//           <Route path="/shoes" element={<ShoesCategory />} />
//           <Route path="/offers" element={<Offers />} />
//           <Route path="/product/:productId" element={<ProductPage />} />       
//           <Route path="/offers" element={<Offers />} /> */}
//         </Routes>
//         <FooterSection/>
        
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;



import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import FooterSection from './components/Footer/FooterSection';
import Home from './pages/Home';

import KidsCategory from './pages/KidsCategory';
import ShoesCategory from './pages/ShoesCategory';
import WomenCategory from './pages/WomenCategory';
import MenCategory from './pages/MenCategory';
import ProductPage from "./pages/productDetailPage/ProductPage";
import Payment from './pages/Payment';
import Navbar from './components/Navigation/Navbar';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
// import AddProduct from './components/Admin/AddProduct';
// import AdminDashboard from './components/Admin/AdminDashboard';
// import Analytics from './components/Admin/Analytics';
// import Banner from './components/Admin/Banner';
// import Profile from './components/Admin/Profile';
// import ViewOrders from './components/Admin/ViewOrders';
// import AdminLayout from './pages/layout/AdminLayout';
import CartPage from './pages/CartPage/CartPage';
import WishlistPage from './pages/WishListPage/WishListPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import AddProduct from './pages/Admin/AddProduct';
import ScrollToTop from './components/ScrollToTop';
import Offers from './components/OffersAndSales/Offers';

// sethmi - new - features
import AdminLayout from './pages/Admin/AdminLayout';
import Products from './pages/Admin/Products';
import AdminProfile from './pages/Admin/AdminProfile';
import AdminAnalytics from './pages/Admin/AdminAnalytics';
import AdminSettings from './pages/Admin/AdminSettings';
import AdminHelp from './pages/Admin/AdminHelp';
import AdminOrders from './pages/Admin/AdminOrders';
import AdminDashboard from './pages/Admin/AdminDashboard';
// sethmi - new - features
// import MetricsCard from './components/Admin/MetricsCard';
// import ProductList from './components/Admin/ProductList';
// import Sidebar from './components/Admin/SideBar';
// import OrderDataUser from './pages/OrderDataUser';


const CustomerRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<Home />} />
      <Route path="mens" element={<MenCategory />} />
      <Route path="women" element={<WomenCategory />} />
      <Route path="kids" element={<KidsCategory />} />
      <Route path="shoes" element={<ShoesCategory />} />
      <Route path="payment" element={<Payment />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="wishlist" element={<WishlistPage />} />
      <Route path="product" element={<ProductPage />} />
      <Route path="*" element={<Navigate to="dashboard" replace />} />
    </Routes>
  );
};



// Admin Routes Component
const AdminRoutes = () => {
  return (
    <Routes>
// <<<<<<< New_admin
      <Route path="" element={<AdminLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="profile" element={<AdminProfile />} />
        <Route path="add-product" element={<Products />} />
        <Route path="orders" element={<AdminOrders />} />
        <Route path="analytics" element={<AdminAnalytics />} />
        <Route path="settings" element={<AdminSettings />} />
        <Route path="help" element={<AdminHelp />} />
        <Route path="*" element={<Navigate to="dashboard" replace />} />
//       </Route>
// =======
//       <Route path="add" element={<AddProduct />} />
//       <Route path="banner" element={<Banner />} />
//       <Route path="profile" element={<Profile />} />
//       <Route path="side" element={<Sidebar />} />
//       <Route path="view" element={<ViewOrders />} />
//       <Route path="list" element={<ProductList/>} />
//       <Route path="*" element={<Navigate to="dashboard" replace />} />
// >>>>>>> dev-login
    </Routes>
  );
};

function App() {
  const [authToken, setAuthToken] = useState(null);
  const [role, setRole] = useState(null);

  // Check localStorage on app load
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const userRole = localStorage.getItem('userRole');
    setAuthToken(token);
    setRole(userRole);
  }, []);

  // Logout Function
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userId');
    setAuthToken(null);
    setRole(null);
  };

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <ScrollToTop />
        <Navbar handleLogout={handleLogout} isLoggedIn={!!authToken} role={role} />
        <Routes>
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="payment" element={<Payment />}/>
          <Route path="/product/:productId" element={<ProductPage />} /> 
          <Route path="/orderData" element={<OrderDataUser />} /> 
          {/* <Route path="/login" element={<ProductPage />} /> */}
          {/* <Route path="payment" element={<Payment />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/admin" element={<AdminLayout/>} /> 
          <Route path="add-product" element={<AddProduct/>}/>
          <Route path="/dashboard" element={<AdminDashboard/>}/>
          <Route path="analytics" element={<Analytics/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="view-orders" element={<ViewOrders/>}/>
          {/* Public Routes */}
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={authToken ? <Navigate to="/" /> : <LoginPage />} />
          <Route path="/signup" element={authToken ? <Navigate to="/" /> : <SignupPage />} />
          <Route path="/mens" element={<MenCategory />} />
           <Route path="/women" element={<WomenCategory />} />
           <Route path="/kids" element={<KidsCategory />} />
           <Route path="/shoes" element={<ShoesCategory />} />
           <Route path="/offers" element={<Offers />} />
           <Route path="/cart" element={<CartPage />} />
           <Route path="/wishlist" element={<WishlistPage />} />
          {/* Role-Based Routes */}
          {role === 'ADMIN' && (
            <Route path="/admin/*" element={<AdminRoutes />} />
          )}
          {role === 'CUSTOMER' && (
            <Route path="/customer/*" element={<CustomerRoutes />} />
          )}

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <FooterSection/>
      </div>
    </BrowserRouter>
  );
}

export default App;

