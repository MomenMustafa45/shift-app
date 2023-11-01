import React from "react";
import "./services-page.css";
import ServicesPageCard from "../../components/ServicesPageCard/ServicesPageCard";
import { servicesData } from "../../utils/servicesData/servicesData";

const ServicesPage = () => {
  return (
    <div className="services-page-parent">
      <main className="services-page-landing">
        <span className="line line-small"></span>
        <span className="line line-medium"></span>
        <span className="line line-larg"></span>
        <h1>OUR SERVICES</h1>
      </main>
      <section className="services-page-section">
        {servicesData.map((service, index) => (
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
    </div>
  );
};

export default ServicesPage;
