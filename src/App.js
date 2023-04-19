import React from "react";
import Header from "./Components/Header";
import "./css/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import TourcardDetails from "./Pages/TourcardDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tour-details" element={<TourcardDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
