import "./footer.css";
import footerImg from "../../assests/logoFooter.png";
import { BsSnapchat, BsInstagram, BsMailbox } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import FooterListBox from "../../components/footer-list-box/FooterListBox";
import { CiMail } from "react-icons/ci";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="footer-parent">
      <div className="footer-links-container">
        <div
          className="get-touch-box"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <h5>Get in Touch</h5>
          <p>We’d Love to hear From You</p>
          <div className="social-icons-box">
            <HashLink>
              <BsSnapchat />
            </HashLink>

            <HashLink>
              <BsInstagram />
            </HashLink>
            <HashLink>
              <FiFacebook />
            </HashLink>

            <HashLink
              to="https://www.google.com/maps/search/Al%20Rajhi%20Bank%20%28%D9%85%D8%B5%D8%B1%D9%81%20%D8%A7%D9%84%D8%B1%D8%A7%D8%AC%D8%AD%D9%8A%29/@24.6688480377197,46.7293357849121,17z"
              target="_blank"
            >
              <IoLocationSharp />
            </HashLink>
          </div>
          <div className="mail-box">
            <p>
              <CiMail />
            </p>
            <p>info@shift-adv.com</p>
          </div>
        </div>
        <FooterListBox
          listHeader="ABOUT US"
          listItems={["WHO WE ARE", "Our Mission", "Our Vision", "Our Values"]}
          dataAos="fade-up"
          data-aos-duration="800"
        />
        <FooterListBox
          listHeader="SERVICE"
          listItems={[
            "Data Analytics",
            "Business process automation",
            "Artificial Intelligence - ai",
            "Mobility services",
            "Enterprise project Management",
            "CONSULTING SERVICES",
          ]}
          dataAos="fade-down"
          data-aos-duration="800"
        />
      </div>

      <div
        className="footer-img-container"
        data-aos="fade-left"
        data-aos-duration="800"
      >
        <img src={footerImg} alt="this is footer img" />
      </div>
    </footer>
  );
};

export default Footer;
