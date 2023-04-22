import React from "react";
import Footer from "./Components/Footer";
import "./css/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TourcardDetails from "./Pages/TourcardDetails";
import Home from "./Pages/Home";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tour-details/:slug" element={<TourcardDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
