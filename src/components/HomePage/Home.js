import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Achievement from "./Achievement/Achievement";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Pricing from "./Pricing/Pricing";
import Services from "./Services/Services";
import StayRunning from "./StayRunning/StayRunning";

const Home = () => {
  return (
    <div style={{ backgroundColor: "rgba(104, 212, 255, 0.03)" }}>
      <Header></Header>
      <Services></Services>
      <StayRunning></StayRunning>
      <Achievement></Achievement>
      <Pricing></Pricing>
      <SearchBar></SearchBar>
      <Footer></Footer>
    </div>
  );
};

export default Home;
