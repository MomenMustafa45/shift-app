import React from "react";
import LandingPage from "../landing-page/LandingPage";
import About from "../about/About";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
      <About />
    </>
  );
};

export default Home;
