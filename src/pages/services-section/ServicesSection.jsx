import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import services style
import "./services-section.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

// import img
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

// import services data
import { servicesData } from "../../utils/servicesData/servicesData";
import ServicesCard from "../../components/services-card/ServicesCard";

const ServicesSection = () => {
  const [screenWidth, setScreenWidth] = useState(null);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  const sliderRef = useRef();

  return (
    <section className="services-parent">
      <div className="services-header-text">
        <h2>
          SHIFT <span>ADVANCED</span> <br />
          Technology Company
        </h2>
      </div>

      <Swiper
        onSwiper={(it) => (sliderRef.current = it)}
        modules={[Navigation]}
        className="mySwiper"
        spaceBetween={0}
        slidesPerView={
          screenWidth > 768
            ? 3
            : screenWidth < 900 && screenWidth > 768
            ? 2
            : 1.25
        }
        data-aos="fade-up"
      >
        {servicesData.map((card, index) => (
          <>
            <SwiperSlide key={index}>
              <ServicesCard
                cardImage={card.img}
                cardTitle={card.title}
                cardDescription={card.description}
              />
            </SwiperSlide>
          </>
        ))}
      </Swiper>

      {/* Swiper Arrows */}
      <div
        className="swiper-next-btn"
        onClick={() => sliderRef.current?.slideNext()}
        data-aos="fade-left"
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
      <div
        className="swiper-prev-btn"
        onClick={() => sliderRef.current?.slidePrev()}
        data-aos="fade-right"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
      {/* Swiper Arrows */}
    </section>
  );
};

export default ServicesSection;
