import "./landing-page.css";
import landingVideo from "../../assests/landingVideo.mp4";
import { FaArrowDown } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <main className="landing-parent">
      <video
        src={landingVideo}
        autoPlay
        loop
        className="landing-video"
        playsInline={true}
        muted={true}
      />

      {/* Landing Content */}
      {/* Landing Content */}
      <div className="landing-content">
        <h1 className="landing-header-text-bg">SLOGAN</h1>
        <h1 className="landing-header-text">SLOGAN</h1>
        <p className="landing-text">
          Time is now to invest in Digital Transformation to win in today’s
          world
        </p>
        <div className="landing-content-btn">
          <p>Let's Go</p>
          <div>
            <FaArrowDown />
          </div>
        </div>
      </div>
      <div className="text-line-scroll">
        <div className="rightToLeft">
          <p>Digital transformation</p>
          <p>Digital transformation</p>
          <p>Digital transformation</p>
          <p>Digital transformation</p>
          <p>Digital transformation</p>
          <p>Digital transformation</p>
          <p>Digital transformation</p>
          <p>Digital transformation</p>
          <p>Digital transformation</p>
        </div>
      </div>
      {/* Landing Content */}
      {/* Landing Content */}
    </main>
  );
};

export default LandingPage;
