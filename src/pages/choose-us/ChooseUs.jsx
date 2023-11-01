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
          dataAos="fade-right"
        />
        <ChooseUsReason
          reason="Innovation"
          hoverReason="An Example for hover Reason"
          dataAos="fade-left"
        />
        <ChooseUsReason
          reason="Customization"
          hoverReason="An Example for hover Reason"
          dataAos="fade-right"
        />
        <ChooseUsReason
          reason="Client-Centric Approach"
          hoverReason="An Example for hover Reason"
          dataAos="fade-left"
        />
      </div>
    </section>
  );
};

export default ChooseUs;
