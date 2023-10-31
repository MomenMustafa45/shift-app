import { useState } from "react";
import "./navbar.css";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import navImg from "../../assests/logo shift-01 1.png";
import navMediaScreensIcon from "../../assests/small-menuIcon.png";
import { faX } from "@fortawesome/free-solid-svg-icons";

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "ABOUT US", path: "#about" },
  { name: "SERVICES", path: "#services" },
  { name: "PARTENERS", path: "#parteners" },
  { name: "REFERENCE", path: "#refernce" },
  { name: "NEWS", path: "#news" },
];

const Navbar = () => {
  const [toggleSmallScreenList, setToggleSmallScreenList] = useState(false);
  const locationPathname = window.location.pathname;

  return (
    <header className="navbar-parent">
      <img src={navImg} alt="this is nav img" />
      {toggleSmallScreenList ? (
        <FontAwesomeIcon
          icon={faX}
          style={{ cursor: "pointer", color: "#fff" }}
          onClick={() => setToggleSmallScreenList(!toggleSmallScreenList)}
        />
      ) : (
        <img
          src={navMediaScreensIcon}
          alt="this is icon"
          className="small-screens-icon"
          onClick={() => setToggleSmallScreenList(!toggleSmallScreenList)}
        />
      )}
      <nav className="nav-links-container">
        {navLinks.map((link) => (
          <HashLink
            to={link.path}
            className={`${locationPathname === link.path ? "link-active" : ""}`}
            smooth
          >
            {link.name}
          </HashLink>
        ))}
      </nav>
      <div className="header-btn">
        <div>
          <p>WHATSAPP</p>
          <p>+966567913779</p>
        </div>
        <div className="header-icon-box">
          <FontAwesomeIcon icon={faWhatsapp} />
        </div>
      </div>

      {/* Small Screens Nav Links */}
      {/* Small Screens Nav Links */}
      <div
        className="small-screens-list"
        style={{
          height: `${toggleSmallScreenList ? "calc(100vh - 70px)" : "0px"}`,
        }}
      >
        <nav className="small-screens-links-container">
          {navLinks.map((link) => (
            <HashLink
              to={link.path}
              className={`${
                locationPathname === link.path ? "small-screen-link-active" : ""
              }`}
              onClick={() => setToggleSmallScreenList(!toggleSmallScreenList)}
              smooth
            >
              {link.name}
            </HashLink>
          ))}
        </nav>
        <div className="small-screens-header-icon">
          <div>
            <p>WHATSAPP</p>
            <p>+966567913779</p>
          </div>
          <div className="header-icon-box">
            <FontAwesomeIcon icon={faWhatsapp} />
          </div>
        </div>
      </div>
      {/* Small Screens Nav Links */}
      {/* Small Screens Nav Links */}
    </header>
  );
};

export default Navbar;
