import React from "react";
import "./services-page.css";
import ServicesPageCard from "../../components/ServicesPageCard/ServicesPageCard";
import LightBluredBall from "../../components/light-blured-ball/LightBluredBall";
import ScrollToTop from "../../components/scroll-to-top/scrollToTop";
import { useState } from "react";

const ServicesPage = ({
  title,
  cardsData,
  url,
  headerPageImg,
  headerPageText,
  extraImages,
  servicePagination,
  cardsDataSecond,
  cardsDataThird,
}) => {
  const [currentPaginationPage, setCurrentPaginationPage] = useState("DMO");

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
      {headerPageImg && (
        <div className="img-desc-box">
          <div className="img-container">
            <img src={headerPageImg} alt="" />
          </div>
          <p>{headerPageText}</p>
        </div>
      )}

      <section className="services-page-section">
        {servicePagination && (
          <div className="pagination-services-container">
            {servicePagination.map((p) => (
              <p
                className={p === currentPaginationPage ? "active" : ""}
                onClick={() => setCurrentPaginationPage(p)}
              >
                {p}
              </p>
            ))}
          </div>
        )}

        {currentPaginationPage === "PMO" && cardsDataSecond
          ? cardsDataSecond.map((service, index) => (
              <>
                <ServicesPageCard
                  title={service.title}
                  description={service.description}
                  img={service.img}
                  key={index}
                  direction={index % 2 === 0 ? "left" : "right"}
                />
              </>
            ))
          : currentPaginationPage === "DT" && cardsDataThird
          ? cardsDataThird.map((service, index) => (
              <>
                <ServicesPageCard
                  title={service.title}
                  description={service.description}
                  img={service.img}
                  key={index}
                  direction={index % 2 === 0 ? "left" : "right"}
                />
              </>
            ))
          : cardsData.map((service, index) => (
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
      <div className="extra-images-container">
        {extraImages?.map((img) => (
          <img src={img} alt="" />
        ))}
      </div>
      <LightBluredBall right="0px" top="350px" />
    </div>
  );
};

export default ServicesPage;
