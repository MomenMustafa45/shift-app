import React from "react";
import "./services-page.css";
import ServicesPageCard from "../../components/ServicesPageCard/ServicesPageCard";
import LightBluredBall from "../../components/light-blured-ball/LightBluredBall";
import ScrollToTop from "../../components/scroll-to-top/scrollToTop";

const ServicesPage = ({ title, cardsData, url }) => {
  return (
    <div className="services-page-parent">
      <ScrollToTop />
      <main className="services-page-landing">
        <span className="line line-small"></span>
        <span className="line line-medium"></span>
        <span className="line line-larg"></span>
        <h1>{title}</h1>
        <LightBluredBall left="0px" />
      </main>
      <section className="services-page-section">
        {cardsData.map((service, index) => (
          <>
            <ServicesPageCard
              title={service.title}
              description={service.description}
              img={service.img}
              key={index}
              direction={index % 2 === 0 ? "left" : "right"}
            />
          </>
        ))}
      </section>
      <LightBluredBall right="0px" top="350px" />
    </div>
  );
};

export default ServicesPage;
