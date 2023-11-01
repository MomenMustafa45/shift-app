import { FaArrowLeft } from "react-icons/fa6";
import "./choose-us-reason.css";
import { useState } from "react";
import TextTransition, { presets } from "react-text-transition";

const ChooseUsReason = ({ reason, hoverReason, dataAos }) => {
  const [isMouseHovered, setIsMouseHovered] = useState(false);

  return (
    <div className="reason-box" data-aos={dataAos}>
      <div
        className="reason-text-container"
        onMouseEnter={() => setIsMouseHovered(true)}
        onMouseLeave={() => setIsMouseHovered(false)}
      >
        <TextTransition springConfig={presets.default}>
          {isMouseHovered ? hoverReason : reason}
        </TextTransition>
      </div>

      <div
        className="reason-icon-box"
        onClick={() => setIsMouseHovered(!isMouseHovered)}
      >
        <FaArrowLeft style={{ color: "#fff" }} />
      </div>
    </div>
  );
};

export default ChooseUsReason;
