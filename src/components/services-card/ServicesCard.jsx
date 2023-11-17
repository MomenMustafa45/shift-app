import { HashLink } from "react-router-hash-link";
import "./services-card.css";
const ServicesCard = ({ cardImage, cardTitle, cardDescription, url }) => {
  return (
    <div className="card-container">
      <HashLink to={url}>
        <div className="service-card-img-box">
          <img src={cardImage} alt="Hello" />
        </div>
        <div className="card-content">
          <h5>{cardTitle}</h5>
          {/* <p>{cardDescription}</p> */}
        </div>
      </HashLink>
    </div>
  );
};

export default ServicesCard;
