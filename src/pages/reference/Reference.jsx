import React from "react";
import "./reference.css";
import ReactStars from "react-rating-stars-component";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { testimonialsData } from "../../utils/testimonialsData/testimonialData";

import NetworkImg from "../../components/network-img/NetworkImg";
import networkImg1 from "../../assests/networks-imgs/Group 109.png";
import networkImg2 from "../../assests/networks-imgs/Group 108.png";
const Reference = () => {
  return (
    <section className="reference-parent" id="reference">
      <NetworkImg img={networkImg1} height="450px" right="0" top="10%" />
      <NetworkImg img={networkImg2} top="20%" left="0" height="420px" />

      <h3>
        REFERENCE <span>TESTIMONIALS</span>
      </h3>

      <Swiper
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        data-aos="fade-right"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        data-aos-duration="800"
      >
        {testimonialsData.map((t, idx) => (
          <>
            <SwiperSlide>
              <div className="testimonial-box" key={idx + 15}>
                <p className="testimonial-description">{t.description}</p>
                <div className="testimonial-rate">
                  <ReactStars
                    count={5}
                    size={25}
                    value={t.rate}
                    activeColor="#FFD700"
                  />
                </div>
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </section>
  );
};

export default Reference;
