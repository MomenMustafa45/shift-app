import "./landing-page.css";
import landingVideo from "../../assests/landingVideo.mp4";
import { FaArrowDown } from "react-icons/fa6";
import LightBluredBall from "../../components/light-blured-ball/LightBluredBall";

const LandingPage = () => {
  return (
    <main className="landing-parent">
      {/* <LightBluredBall top={556} right={-30} /> */}
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
        {/* <h1
          className="landing-header-text-bg"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          SLOGAN
        </h1> */}
        <h1
          className="landing-header-text"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          SHIFT ADVANCED TECHNOLOGY
        </h1>
        <p className="landing-text" data-aos="fade-up" data-aos-duration="800">
          Helping you <span style={{ fontSize: "30px" }}>innovation</span>
          <br /> in the{" "}
          <span
            style={{ fontSize: "30px", color: "#9058db", fontWeight: "bold" }}
          >
            future
          </span>{" "}
          your digital
          <br /> transformation are looking
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
