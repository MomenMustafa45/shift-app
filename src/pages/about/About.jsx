import React from "react";
import "./about.css";
import img1 from "../../assests/about1.png";
import img2 from "../../assests/about2.png";

const About = () => {
  return (
    <section id="about" className="about-parent">
      <div className="about-container">
        <div className="about-text" data-aos="fade-right">
          <h4>
            WHO WE <span>ARE</span>
          </h4>
          <p>
            At [Your Company Name], we are passionate about delivering
            innovative and tailored service solutions to meet the unique needs
            of our clients. With a commitment to excellence and a
            customer-centric approach, we have established ourselves as a
            trusted partner for businesses seeking reliable, efficient, and
            cost-effective service solutions.
          </p>
        </div>
        <div className="about-img" data-aos="fade-left">
          <img src={img1} alt="this is img" />
        </div>
      </div>
      <div className="about-container">
        <div className="about-img" data-aos="fade-left">
          <img src={img2} alt="this is img" />
        </div>
        <div className="about-text" data-aos="fade-right">
          <h4>Process AutomationPortfolio</h4>
          <p>
            At [Your Company Name], we are passionate about delivering
            innovative and tailored service solutions to meet the unique needs
            of our clients. With a commitment to excellence and a
            customer-centric approach, we have established ourselves as a
            trusted partner for businesses seeking reliable, efficient, and
            cost-effective service solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
