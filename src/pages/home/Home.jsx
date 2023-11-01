import React from "react";
import LandingPage from "../landing-page/LandingPage";
import About from "../about/About";
import Navbar from "../../components/navbar/Navbar";
import Services from "../services/Services";
import ChooseUs from "../choose-us/ChooseUs";

const Home = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
      <About />
      <Services />
      <ChooseUs />
    </>
  );
};

export default Home;
