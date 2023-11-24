import React from "react";
import "./network-img.css";

const NetworkImg = ({ top, right, left, bottom, img, width, height }) => {
  return (
    <>
      <span className="network-img-parent" style={{ top, right, left, bottom }}>
        <img src={img} alt="" style={{ width, height }} />
      </span>
    </>
  );
};

export default NetworkImg;
