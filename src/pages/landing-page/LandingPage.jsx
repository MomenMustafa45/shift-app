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
        <h1
          className="landing-header-text-bg"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          SLOGAN
        </h1>
        <h1
          className="landing-header-text"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          SLOGAN
        </h1>
        <p className="landing-text" data-aos="fade-up" data-aos-duration="800">
          Time is now to invest in Digital Transformation to win in today’s
          world
        </p>
        <div
          className="landing-content-btn"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <p>Let's Go</p>
          <div>
            <FaArrowDown />
          </div>
        </div>
      </div>

      {/* <div className="text-line-scroll"> */}

      {/* <div className="rightToLeft"> */}

      {/* </div> */}
      {/* </div> */}
      {/* Landing Content */}
      {/* Landing Content */}
    </main>
  );
};

export default LandingPage;
