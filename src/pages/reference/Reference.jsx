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

const Reference = () => {
  return (
    <section className="reference-parent" id="reference">
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
          delay: 3000,
          disableOnInteraction: false,
        }}
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
                  <p className="testi-user">{t.user}</p>
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
