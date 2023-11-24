import "./choose-us.css";
import ChooseUsReason from "../../components/choose-us-reason/ChooseUsReason";
import NetworkImg from "../../components/network-img/NetworkImg";
import networkImg1 from "../../assests/networks-imgs/Group 127.png";

const ChooseUs = () => {
  return (
    <section className="choose-us-parent">
      <NetworkImg img={networkImg1} left="0" top="-20%" />

      <h3>
        WHY CHOOSE <span>US</span>
      </h3>

      <div className="reasons-container">
        <ChooseUsReason
          reason="EXPERTISE"
          hoverReason="Elevating Expertise"
          dataAos="fade-right"
        />
        <ChooseUsReason
          reason="Innovation"
          hoverReason="Pioneering Innovation"
          dataAos="fade-left"
        />
        <ChooseUsReason
          reason="Customization"
          hoverReason="Our Customization Commitment"
          dataAos="fade-right"
        />
        <ChooseUsReason
          reason="Client-Centric Approach"
          hoverReason="Client-First Philosophy"
          dataAos="fade-left"
        />
      </div>
    </section>
  );
};

export default ChooseUs;
