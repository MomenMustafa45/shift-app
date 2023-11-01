import Navbar from "../../components/navbar/Navbar";
import "./landing-page.css";
import landingVideo from "../../assests/landingVideo.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const LandingPage = () => {
  return (
    <main className="landing-parent">
      <video src={landingVideo} autoPlay loop className="landing-video" />

      {/* Landing Content */}
      {/* Landing Content */}
      <div className="landing-content">
        <h1>
          Navigating <br /> <span>Solutions</span> Your Path <br /> To{" "}
          <span>Success</span>
        </h1>
        <div className="landing-content-btn">
          <p>Let's Go</p>
          <div>
            <FontAwesomeIcon icon={faArrowDown} />
          </div>
        </div>
      </div>
      <div className="colored-box"></div>
      {/* Landing Content */}
      {/* Landing Content */}
    </main>
  );
};

export default LandingPage;
