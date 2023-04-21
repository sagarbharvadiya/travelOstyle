import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./css/aos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import TourcardDetails from "./Pages/TourcardDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/tour-details" element={<TourcardDetails />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
