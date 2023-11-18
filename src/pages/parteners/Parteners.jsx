import "./parteners.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

import { partnersData } from "../../utils/partenersData/partenersData";
import { useEffect, useState } from "react";

const Parteners = () => {
  const [windowScreenWidth, setWindowScreenWidth] = useState(null);

  useEffect(() => {
    setWindowScreenWidth(window.innerWidth);
  }, []);

  return (
    <section className="partners-parent" id="parteners">
      <h3>
        OUR <span>PARTNERS</span>
      </h3>

      <Swiper
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        spaceBetween={0}
        slidesPerView={
          windowScreenWidth > 900
            ? 5
            : windowScreenWidth > 768 && windowScreenWidth < 900
            ? 4
            : 2
        }
        pagination={{ clickable: true }}
        data-aos="fade-up"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {partnersData.map((p, index) => (
          <>
            <SwiperSlide>
              <div
                className="partener-img-container"
                key={index + Math.floor(Math.random() * 100 + 1)}
              >
                <img src={p.img} alt="" />
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </section>
  );
};

export default Parteners;
