import "./landing-page.css";
import landingVideo from "../../assests/landingVideo.mp4";
import { FaArrowDown } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";
import Marquee from "react-fast-marquee";

const textLineArray = [
  { text: "Data Analytics", path: "/data-analytics" },
  { text: "Business process Automation", path: "/business-process-automation" },
  { text: "Artificial Intelligence - Ai", path: "/artificial-intelligence" },
  { text: "Mobility Services", path: "/mobility-services" },
  { text: "Enterprise Project Management", path: "/enterprise-management" },
  { text: "CONSULTING SERVICES", path: "/consulting-services" },
];

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
        <h1 className="landing-header-text-bg" data-aos="fade-right">
          SLOGAN
        </h1>
        <h1 className="landing-header-text" data-aos="fade-left">
          SLOGAN
        </h1>
        <p className="landing-text" data-aos="fade-up">
          Time is now to invest in Digital Transformation to win in today’s
          world
        </p>
        <div className="landing-content-btn" data-aos="fade-right">
          <p>Let's Go</p>
          <div>
            <FaArrowDown />
          </div>
        </div>
      </div>

      <div className="text-line-scroll">
        <div className="rightToLeft">
          <Marquee loop={0} speed={80} autoFill={true} play={true}>
            {textLineArray.map((p) => (
              <span>
                {""}
                <HashLink target="_blank" to={p.path}>
                  {p.text.toUpperCase()}
                </HashLink>
              </span>
            ))}
          </Marquee>
        </div>
      </div>
      {/* Landing Content */}
      {/* Landing Content */}
    </main>
  );
};

export default LandingPage;
