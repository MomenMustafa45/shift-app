import "./light-blured-ball.css";

const LightBluredBall = ({ top, right, left, bottom, width, height }) => {
  return (
    <>
      <span
        className="light"
        style={{ top, right, left, bottom, width, height }}
      ></span>
    </>
  );
};

export default LightBluredBall;
