import ChooseUsReason from "../../components/choose-us-reason/ChooseUsReason";
import LightBluredBall from "../../components/light-blured-ball/LightBluredBall";
import "./choose-us.css";

const ChooseUs = () => {
  return (
    <section className="choose-us-parent">
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
      <LightBluredBall top="287px" left="-172px" />
    </section>
  );
};

export default ChooseUs;
