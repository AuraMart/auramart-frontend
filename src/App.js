import './App.css';
import * as React from 'react';
import { ProductList } from './pages/ProductList';
import Slide from './components/OffersAndSales/Slide';
import AOS from "aos";
import "aos/dist/aos.css";
import Offers from "./components/OffersAndSales/Offers";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

    <div className="bg-white dark:bg-gray-900 dark:text-white duration-300">
      <Slide handleOrderPopup={handleOrderPopup} />
      <Offers/>
    </div>

    
  );
}

export default App;
