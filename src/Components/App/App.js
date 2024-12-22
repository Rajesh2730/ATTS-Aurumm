import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes , Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import ContactUs from '../Contact_Us/ContactUs';
import Footer from '../Footer/Footer';
import React , { useState, useEffect } from 'react'
import { Button } from "react-bootstrap";
import { FaArrowUp } from "react-icons/fa";
import "swiper";
import AuPay from '../Services/AuPay';
import AuSales from '../Services/AuSales';
import AuShop from '../Services/AuShop';




function App() {

  const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.scrollY > 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener("scroll", toggleVisibility);
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

  return (
    <div className="App">
      <Routes>
        <Route path='/ATTS-Aurumm' element={<LandingPage/>} />
        <Route path='/Contact-Us' element={<ContactUs/>} />
        <Route path='/Service-AuPay' element={<AuPay/>} />
        <Route path='/Service-AuSales' element={<AuSales/>} />
        <Route path='/Service-AuShop' element={<AuShop/>} />
      </Routes>
      <Footer/>





      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="sticky-button"
          variant="primary"
        ><FaArrowUp/>
        </Button>
      )}
    </div>
  );
}

export default App;
