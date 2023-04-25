import React, { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import Footer from "./Components/Footer";
import "./css/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TourcardDetails from "./Pages/TourcardDetails";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import AboutUs from "./Pages/AboutUs";
import TermsCondition from "./Pages/TermsCondition";
import PrivacyPolicy from "./Pages/PrivacePolice";
import RefundPolicy from "./Pages/RefundPolicy";
import BasicPage from "./Pages/BasicPage";

function App() {
  // const location = useLocation();
  // const activeSlug = location.pathname.split('/').pop(); // Get the last part of the URL path
  // useEffect(() => {
  //   document.body.classList.add(`page-${activeSlug}`); // Add the class to the body tag
  //   return () => {
  //     document.body.classList.remove(`page-${activeSlug}`); // Remove the class from the body tag when the component unmounts
  //   };
  // }, [activeSlug]);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/tour-details/:slug" element={<TourcardDetails />} />
          <Route path="AboutUs" element={<AboutUs/>} />
          <Route path="TermsCondition" element={<TermsCondition/>} />
          <Route path="PrivacyPolicy" element={<PrivacyPolicy/>} />
          <Route path="RefundPolicy" element={<RefundPolicy/>} />
          <Route exact path='basicpage/:slug' element={<BasicPage/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;