import "./footer.css";
import footerImg from "../../assests/logoFooter.png";
import { BsSnapchat, BsInstagram } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import FooterListBox from "../../components/footer-list-box/FooterListBox";

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
            <BsSnapchat />
            <BsInstagram />
            <FiFacebook />
            <IoLocationSharp />
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
