import React, { useEffect } from "react";
import Footer from "./Components/Footer";
import "./css/aos.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import TourcardDetails from "./Pages/TourcardDetails";
import Home from "./Pages/Home";
import Header from "./Components/Header";

function App() {
  const location = useLocation();
  const activeSlug = location.pathname.split("/").pop(); // Get the last part of the URL path
  useEffect(() => {
    document.body.classList.add(`page-${activeSlug}`); // Add the class to the body tag
    return () => {
      document.body.classList.remove(`page-${activeSlug}`); // Remove the class from the body tag when the component unmounts
    };
  }, [activeSlug]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tour-details/:slug" element={<TourcardDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
