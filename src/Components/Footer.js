import "./Footer.css";
import FooterIcon from "../assets/FooterIcon.png";
import {AiFillInstagram} from "react-icons/ai";
import {BsFacebook,BsTwitter} from "react-icons/bs";

const Footer = () => {
  return(
    <div className={"FooterContainer"}>
      <div className={"FooterContent"}>
        <div className={"FooterContentMain"}>
          <div className={"FooterLeft"}>
            <img src={FooterIcon} alt={"FooterIcon"} />
            <h1 className={"FooterMessage"}>We help you find your dream plant</h1>
            <div className={"FooterSocial"}>
              <button className={"FooterSocialButton"}>
                <BsFacebook className={"FooterIcon"} />
              </button>
              <button className={"FooterSocialButton"}>
                <AiFillInstagram className={"FooterIcon"} />
              </button>
              <button className={"FooterSocialButton"}>
                <BsTwitter className={"FooterIcon"} />
              </button>
            </div>
          </div>
          <div className={"FooterRight"}>
            <ul className={"FooterUl"}>
              <h1 className={"FooterUlTitle"}>Information</h1>
              <li className={"LiFooter"}>About</li>
              <li className={"LiFooter"}>Product</li>
              <li className={"LiFooter"}>Blog</li>
            </ul>
            <ul className={"FooterUl"}>
              <h1 className={"FooterUlTitle"}>Company</h1>
              <li className={"LiFooter"}>Community</li>
              <li className={"LiFooter"}>Career</li>
              <li className={"LiFooter"}>Our story</li>
            </ul>
            <ul className={"FooterUl"}>
              <h1 className={"FooterUlTitle"}>Contact</h1>
              <li className={"LiFooter"}>Getting Started</li>
              <li className={"LiFooter"}>Pricing</li>
              <li className={"LiFooter"}>Resources</li>
            </ul>
          </div>

        </div>
        <h1 className={"FooterCopy"}>2023 all Right Reserved Term of use GREENMIND</h1>
      </div>

    </div>
  )
};export default Footer;