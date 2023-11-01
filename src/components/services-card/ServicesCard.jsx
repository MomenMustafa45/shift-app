import "./services-card.css";
const ServicesCard = ({ cardImage, cardTitle, cardDescription }) => {
  return (
    <div className="card-container">
      <div className="service-card-img-box">
        <img src={cardImage} alt="Hello" />
      </div>
      <div className="card-content">
        <h5>{cardTitle}</h5>
        <p>{cardDescription}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
