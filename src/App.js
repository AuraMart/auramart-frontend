// // import './App.css';
// // import WebRoutes from './webRoutes/webRoutes';
// // import * as React from 'react';
// // import "aos/dist/aos.css";
// // import Offers from "./components/OffersAndSales/Offers";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";
// // import { BrowserRouter, Route, Routes } from 'react-router-dom';
// // import { Home } from './pages/Home';
// // import FooterSection from './components/Footer/FooterSection';
// // import KidsCategory from './pages/KidsCategory';
// // import ShoesCategory from './pages/ShoesCategory';
// // import WomenCategory from './pages/WomenCategory';
// // import MenCategory from './pages/MenCategory';
// // import ProductPage from "./pages/productDetailPage";
// // import Payment from './pages/Payment';
// // import Navbar from './components/Navigation/Navbar';
// // import ContactUs from './pages/ContactUs';
// // import AboutUs from './pages/AboutUs';
// // import CartPage from './pages/CartPage/CartPage';
// // import WishlistPage from './pages/WishListPage/WishListPage';
// // import LoginPage from './pages/LoginPage/LoginPage';
// // import SignupPage from './pages/SignupPage/SignupPage';

// // function App() {
// //   return (
// //     <div className="mt-10">
// //       <Navbar />
// //       <BrowserRouter>
// //         <Routes>
// //           <Route path="/" element={<Home />} />
// //           <Route path='/login' element={<LoginPage />} />
// //           <Route path="/signup" element={<SignupPage />} />
// //           <Route path="/kidsCategory" element={<KidsCategory />} />
// //           <Route path="/ShoesCategory" element={<ShoesCategory />} />
// //           <Route path="/WomenCategory" element={<WomenCategory />} />
// //           <Route path="/MenCategory" element={<MenCategory />} />
// //           <Route path="/product" element={<ProductPage />} />
// //           <Route path="/offers" element={<Offers />} />
// //           <Route path="/payment" element={<Payment />} />
// //           <Route path="/contact" element={<ContactUs />} />
// //           <Route path="/aboutus" element={<AboutUs />} />
// //           <Route path="/cart" element={<CartPage />} />
// //           <Route path="/wishlist" element={<WishlistPage />} />
// //         </Routes>
// //       </BrowserRouter>
// //       <FooterSection />
// //     </div>
// //   );
// // }

// // export default App;



// import './App.css';
// import WebRoutes from './webRoutes/webRoutes';
// import * as React from 'react';
// import "aos/dist/aos.css";
// import Offers from "./components/OffersAndSales/Offers";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { BrowserRouter, Route, Routes,Router,Navigate } from 'react-router-dom';
// import { Home } from './pages/Home';
// import FooterSection from './components/Footer/FooterSection';
// import KidsCategory from './pages/KidsCategory';
// import ShoesCategory from './pages/ShoesCategory';
// import WomenCategory from './pages/WomenCategory';
// import MenCategory from './pages/MenCategory';
// import ProductPage from "./pages/productDetailPage";
// import Payment from './pages/Payment';
// import Navbar from './components/Navigation/Navbar';
// import ContactUs from './pages/ContactUs';
// import AboutUs from './pages/AboutUs';
// import CartPage from './pages/CartPage/CartPage';
// import WishlistPage from './pages/WishListPage/WishListPage';
// import LoginPage from './pages/LoginPage/LoginPage';
// import SignupPage from './pages/SignupPage/SignupPage';
// import AddProduct from './pages/Admin/AddProduct';



// // Cuatomer Routes Component
// const CustomerRoutes = () => {
//   return (

//       <Routes>
//         <Route path="dashboard" element={<Home />} />
//         <Route path="mens" element={<MenCategory />} />
//         <Route path="women" element={<WomenCategory />} />
//         <Route path="kids" element={<KidsCategory />} />
//         <Route path="payment" element={<Payment />} />
//         <Route path="cart" element={<CartPage />} />
//         <Route path="whishlist" element={<WishlistPage/>} />
//         <Route path="product" element={<ProductPage />} />
//         <Route path="*" element={<Navigate to="dashboard" replace />} />
//       </Routes>
//   );
// };

// // Admin Routes Component
// const AdminRoutes = () => {
//   return (

//       <Routes>
//         <Route path="dashboard" element={<Home />} />
//         <Route path="addproduct" element={<AddProduct/>} />

//         <Route path="*" element={<Navigate to="dashboard" replace />} />
//       </Routes>

//   );
// };
// function App() {
//   return (


//         <div className="flex flex-col min-h-screen bg-gray-100">
//           <Routes>
//             <Route path="/" element={<Home/>} />
//             <Route path="/login" element={<LoginPage/>} />
//             <Route path="/customer/*" element={<CustomerRoutes />} />
//             <Route path="/admin/*" element={<AdminRoutes />} />
//             <Route path="/cart" element={<CartPage />} />
//             <Route path="whishlist" element={<WishlistPage/>} />
//           </Routes>
//         </div>

//   );
// }

// export default App;


import './App.css';
import * as React from 'react';
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import FooterSection from './components/Footer/FooterSection';
import KidsCategory from './pages/KidsCategory';
import ShoesCategory from './pages/ShoesCategory';
import WomenCategory from './pages/WomenCategory';
import MenCategory from './pages/MenCategory';
import ProductPage from "./pages/productDetailPage/ProductPage";
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
import CartPage from './pages/CartPage/CartPage';
import WishlistPage from './pages/WishListPage/WishListPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
// import AddProduct from './pages/Admin/AddProduct';
import ScrollToTop from './components/ScrollToTop';
import Offers from './components/OffersAndSales/Offers';

// Customer Routes Component
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
      <Route path="dashboard" element={<Home />} />
      <Route path="addproduct" element={<AddProduct />} />
      <Route path="*" element={<Navigate to="dashboard" replace />} />
    </Routes>
  );
};


function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-100 mt-[2%]">
        <Navbar />
        <ScrollToTop />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/customer/*" element={<CustomerRoutes />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          {/* <Route path="/login" element={<AddProduct />} /> */}
          {/* <Route path="/login" element={<ProductPage />} /> */}
          <Route path="payment" element={<Payment />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/admin" element={<AdminLayout/>} /> 
          <Route path="add-product" element={<AddProduct/>}/>
          <Route path="/dashboard" element={<AdminDashboard/>}/>
          <Route path="analytics" element={<Analytics/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="view-orders" element={<ViewOrders/>}/>
          <Route path="/mens" element={<MenCategory />} />
          <Route path="/women" element={<WomenCategory />} />
          <Route path="/kids" element={<KidsCategory />} />
          <Route path="/shoes" element={<ShoesCategory />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/product/:productId" element={<ProductPage />} />       
        </Routes>
        <FooterSection />
      </div>
    </BrowserRouter>
  );
}

export default App;
