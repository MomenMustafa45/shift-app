import "./footer.css";
import footerImg from "../../assests/logo shift-01 1.png";
import { BsSnapchat, BsInstagram } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import FooterListBox from "../../components/footer-list-box/FooterListBox";

const Footer = () => {
  return (
    <footer className="footer-parent">
      <div className="footer-links-container">
        <div className="get-touch-box">
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
        />
        <FooterListBox
          listHeader="SERVICE"
          listItems={["AI", "CK", "RPA", "EPMO", "MORE"]}
        />
      </div>

      <div className="footer-img-container">
        <img src={footerImg} alt="this is footer img" />
      </div>
    </footer>
  );
};

export default Footer;
