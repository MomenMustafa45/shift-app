import React from "react";
import "./about.css";
import img1 from "../../assests/about1.png";
import img2 from "../../assests/about2.png";
import LightBluredBall from "../../components/light-blured-ball/LightBluredBall";

const About = () => {
  return (
    <section id="about" className="about-parent">
      <div className="about-container">
        <div className="about-text" data-aos="fade-right">
          <h4>
            WHO WE <span>ARE</span>
          </h4>
          <p>
            Shift Advanced Technology is a Digital transformation Company & a
            leading solution provider of Data Analytics & Business Intelligence
            (BI) solutions.  Shift Technology in Real-time business intelligence
            enables business users to get up-to-the-minute data by accessing
            operational systems or loading business transactions into areal-time
            DW or BI system. It provides detailed information for instant
            decision making for those companies that require live and immediate
            response.
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
          <div className="about-text-box">
            <h4>Our Mission</h4>
            <p>
              To be the partner of choice providing technology solutions and
              localized content with an eye onto the innovation and digital
              trends.
            </p>
          </div>
          <div className="about-text-box">
            <h4>Our Vision</h4>
            <p>
              Customer Orientation - Belonging and Ownership - Candor and
              Transparency - Innovativeness.
            </p>
          </div>
          <div className="about-text-box">
            <h4>Our Values</h4>
            <p>
              Motivated, Innovative, Service, Trust, Relationship, Integrity,
              Value, & Excellence.
            </p>
          </div>
        </div>
      </div>

      <LightBluredBall top="315px" right="-180px" />
      <LightBluredBall top="200px" left="-205px" />
    </section>
  );
};

export default About;
