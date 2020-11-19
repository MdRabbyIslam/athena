import React from "react";
import Achievement from "./Achievement/Achievement";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Pricing from "./Pricing/Pricing";
import Services from "./Services/Services";
import StayRunning from "./StayRunning/StayRunning";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <StayRunning></StayRunning>
      <Achievement></Achievement>
      <Pricing></Pricing>
      <Footer></Footer>
    </div>
  );
};

export default Home;
