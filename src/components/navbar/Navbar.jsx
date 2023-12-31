import { useState } from "react";
import "./navbar.css";
import { HashLink } from "react-router-hash-link";
import navImg from "../../assests/logo.png";
import navMediaScreensIcon from "../../assests/small-menuIcon.png";
import { FaX } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "ABOUT US", path: "/#about" },
  { name: "SERVICES", path: "/services" },
  { name: "PARTNERS", path: "/#partners" },
  { name: "REFERENCE", path: "/#reference" },
  { name: "NEWS", path: "/#news" },
];

const Navbar = () => {
  const [toggleSmallScreenList, setToggleSmallScreenList] = useState(false);
  const [locationPathname, setLocationPathname] = useState(
    window.location.pathname
  );

  return (
    <header className="navbar-parent">
      <HashLink to="/">
        <img src={navImg} alt="this is nav img" />
      </HashLink>
      {toggleSmallScreenList ? (
        // <FontAwesomeIcon
        //   icon={faX}
        //   style={{ cursor: "pointer", color: "#fff" }}
        //   onClick={() => setToggleSmallScreenList(!toggleSmallScreenList)}
        // />
        <FaX
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
        {navLinks.map((link, index) => (
          <HashLink
            to={link.path}
            className={`${locationPathname === link.path ? "link-active" : ""}`}
            smooth
            onClick={() => setLocationPathname(link.path)}
            key={index}
          >
            {link.name}
          </HashLink>
        ))}
      </nav>
      <HashLink
        className="header-btn"
        to="https://wa.me/966594176721"
        target="_blank"
      >
        <div>
          <p>WHATSAPP</p>
          <p>+966594176721</p>
        </div>
        <div className="header-icon-box">
          <BsWhatsapp />
        </div>
      </HashLink>

      {/* Small Screens Nav Links */}
      {/* Small Screens Nav Links */}
      <div
        className="small-screens-list"
        style={{
          height: `${toggleSmallScreenList ? "calc(100vh - 70px)" : "0px"}`,
        }}
      >
        <nav className="small-screens-links-container">
          {navLinks.map((link, index) => (
            <HashLink
              to={link.path}
              className={`${
                locationPathname === link.path ? "small-screen-link-active" : ""
              }`}
              onClick={() => {
                setToggleSmallScreenList(!toggleSmallScreenList);
                setLocationPathname(link.path);
              }}
              smooth
              key={index}
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
            <BsWhatsapp />
          </div>
        </div>
      </div>
      {/* Small Screens Nav Links */}
      {/* Small Screens Nav Links */}
    </header>
  );
};

export default Navbar;
