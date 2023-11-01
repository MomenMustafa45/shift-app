import React from "react";
import LandingPage from "../landing-page/LandingPage";
import About from "../about/About";
import Navbar from "../../components/navbar/Navbar";
import Services from "../services/Services";
import ChooseUs from "../choose-us/ChooseUs";
import Parteners from "../parteners/Parteners";
import Reference from "../reference/Reference";

const Home = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
      <About />
      <Services />
      <ChooseUs />
      <Parteners />
      <Reference />
    </>
  );
};

export default Home;
