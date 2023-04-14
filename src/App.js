import React from "react";
import TourCard from "./Components/TourCard";
import About from "./Components/About";
import Banner from './Components/Banner';
import ContactUs from "./Components/ContactUs";
import Header from "./Components/Header";


function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <TourCard />
      <About />
      <ContactUs/>
    </>
  );
}

export default App;
