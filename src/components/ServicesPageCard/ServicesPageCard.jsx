import React, { useEffect, useState } from "react";
import "./services-page-card.css";

const ServicesPageCard = ({ img, title, description, direction = "left" }) => {
  const [screenWidth, setScreenWidth] = useState(null);
  const [itemsDirection, setItemsDirection] = useState(direction);

  useEffect(() => {
    setItemsDirection(direction);
    setScreenWidth(window.innerWidth);
    if (screenWidth < 768) {
      setItemsDirection("right");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenWidth]);

  return (
    <div className="services-page-container">
      {itemsDirection === "left" ? (
        <>
          <div className="services-text" data-aos="fade-right">
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
          <div className="services-img" data-aos="fade-left">
            <img src={img} alt="this is img" />
          </div>
        </>
      ) : (
        <>
          <div className="services-img" data-aos="fade-right">
            <img src={img} alt="this is img" />
          </div>{" "}
          <div className="services-text" data-aos="fade-left">
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default ServicesPageCard;
