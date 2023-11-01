import "./footer.css";
import footerImg from "../../assests/logo.png";
import { BsSnapchat, BsInstagram } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import FooterListBox from "../../components/footer-list-box/FooterListBox";

const Footer = () => {
  return (
    <footer className="footer-parent">
      <div className="footer-links-container">
        <div className="get-touch-box" data-aos="fade-right">
          <h5>Get in Touch</h5>
          <p>We’d Love to hear From You</p>
          <div className="social-icons-box">
            <BsSnapchat />
            <BsInstagram />
            <FiFacebook />
            <IoLocationSharp />
          </div>
        </div>
        <FooterListBox
          listHeader="ABOUT US"
          listItems={["AI", "CK", "RPA", "EPMO", "MORE"]}
          dataAos="fade-up"
        />
        <FooterListBox
          listHeader="SERVICE"
          listItems={["AI", "CK", "RPA", "EPMO", "MORE"]}
          dataAos="fade-down"
        />
      </div>

      <div className="footer-img-container" data-aos="fade-left">
        <img src={footerImg} alt="this is footer img" />
      </div>
    </footer>
  );
};

export default Footer;
