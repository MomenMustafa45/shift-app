import ChooseUsReason from "../../components/choose-us-reason/ChooseUsReason";
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
          hoverReason="An Example for hover Reason"
        />
        <ChooseUsReason
          reason="Innovation"
          hoverReason="An Example for hover Reason"
        />
        <ChooseUsReason
          reason="Customization"
          hoverReason="An Example for hover Reason"
        />
        <ChooseUsReason
          reason="Client-Centric Approach"
          hoverReason="An Example for hover Reason"
        />
      </div>
    </section>
  );
};

export default ChooseUs;
