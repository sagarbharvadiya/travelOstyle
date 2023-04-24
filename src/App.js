import React from "react";
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

function App() {
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
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;