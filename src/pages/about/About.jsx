import React from "react";
import "./about.css";
import img1 from "../../assests/about1.png";
import img2 from "../../assests/about2.png";
import Marquee from "react-fast-marquee";
import { HashLink } from "react-router-hash-link";
import NetworkImg from "../../components/network-img/NetworkImg";
import networkImage1 from "../../assests/networks-imgs/decoration.png";
import networkImage2 from "../../assests/networks-imgs/Group 111.png";

const textLineArray = [
  { text: "Data Analytics", path: "/data-analytics" },
  { text: "Business process Automation", path: "/business-process-automation" },
  { text: "Artificial Intelligence - Ai", path: "/artificial-intelligence" },
  { text: "Mobility Services", path: "/mobility-services" },
  { text: "Enterprise Project Management", path: "/enterprise-management" },
  { text: "CONSULTING SERVICES", path: "/consulting-services" },
];

const About = () => {
  return (
    <section id="about" className="about-parent">
      <NetworkImg img={networkImage1} top="75%" right="0" height="240px" />
      <NetworkImg img={networkImage2} top="85%" left="0" height="240px" />
      <Marquee style={{ marginBottom: "80px" }}>
        {textLineArray.map((p) => (
          <span>
            {""}
            <HashLink target="_blank" to={p.path}>
              {p.text.toUpperCase()}
            </HashLink>
          </span>
        ))}
      </Marquee>
      <div className="first-about-container">
        <div
          className="about-text"
          data-aos="fade-right"
          data-aos-duration="800"
        >
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
        <div className="about-img" data-aos="fade-left" data-aos-duration="800">
          <img src={img1} alt="this is img" />
        </div>
      </div>
      <div className="last-about-container">
        <div className="about-img" data-aos="fade-left" data-aos-duration="800">
          <img src={img2} alt="this is img" />
        </div>
        <div
          className="about-text"
          data-aos="fade-right"
          data-aos-duration="800"
        >
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
      {/* 
      <LightBluredBall top="458px" right="4px" />
      <LightBluredBall top="45px" left="20px" /> */}
    </section>
  );
};

export default About;
