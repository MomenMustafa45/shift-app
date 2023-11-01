import React from "react";
import LandingPage from "../landing-page/LandingPage";
import About from "../about/About";
import Navbar from "../../components/navbar/Navbar";
import ChooseUs from "../choose-us/ChooseUs";
import Parteners from "../parteners/Parteners";
import Reference from "../reference/Reference";
import ServicesSection from "../services-section/ServicesSection";

const Home = () => {
  return (
    <>
      <LandingPage />
      <About />
      <ServicesSection />
      <ChooseUs />
      <Parteners />
      <Reference />
    </>
  );
};

export default Home;
