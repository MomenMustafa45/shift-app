import "./choose-us.css";
import { FaArrowLeft } from "react-icons/fa6";

const ChooseUs = () => {
  return (
    <section className="choose-us-parent">
      <h3>
        WHY CHOOSE <span>US</span>
      </h3>
      <div className="reasons-container">
        <div className="reason-box">
          <p>EXPERTISE</p>
          <div className="reason-icon-box">
            <FaArrowLeft style={{ color: "#fff" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
