import React, { useEffect, useState } from "react";
import "./services-page-card.css";
import icon from "../../assests/icons/icon1.png";

const ServicesPageCard = ({
  img,
  title,
  description,
  direction = "left",
  extraImages,
}) => {
  const [screenWidth, setScreenWidth] = useState(null);
  const [itemsDirection, setItemsDirection] = useState(direction);

  console.log(extraImages);

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
          <div
            className="services-text"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <h4>
              {title.length > 0 && (
                <>
                  <span>{title.slice(0, title.indexOf(" "))}</span>
                  {title.slice(title.indexOf(" "))} data-aos-duration="800"
                </>
              )}
            </h4>
            {description.map((p) => (
              <div className="desc-container">
                <div className="icon-container">
                  <img src={icon} alt="" />
                </div>

                <p>{p}</p>
              </div>
            ))}
          </div>
          <div
            className="services-img"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            {img.length > 0 && <img src={img} alt="." />}
          </div>
        </>
      ) : (
        <>
          <div
            className="services-img"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            {img.length > 0 && <img src={img} alt="." />}
          </div>
          <div
            className="services-text"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <h4>
              {title.length > 0 && (
                <>
                  <span>{title.slice(0, title.indexOf(" "))}</span>
                  {title.slice(title.indexOf(" "))}
                </>
              )}
            </h4>
            {description.map((p) => (
              <div className="desc-container">
                <div className="icon-container">
                  <img src={icon} alt="" />
                </div>

                <p>{p}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ServicesPageCard;
