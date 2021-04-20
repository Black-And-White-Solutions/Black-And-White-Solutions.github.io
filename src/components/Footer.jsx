import React from "react";
import iconFacebook from "../img/facebookLogo.png";
import iconTwitter from "../img/twitterLogo.png";
import iconLinkedIn from "../img/linkedInLogo.png";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <div className="footerBar">
      <p className="footerText">
        2020 Black & White Solutions, todos los derechos reservados.
      </p>
      <div className="footerSocial">
        <a href="https://www.facebook.com/Black-And-White-Solutions-112478920935033/">
          <img
            className="icon leftIcon"
            src={iconFacebook}
            alt="iconFacebook"
          />
        </a>
        <a href="https://twitter.com/BnW_Solutions">
          <img
            className="icon centerIcon"
            src={iconTwitter}
            alt="iconTwitter"
          />
        </a>
        <a href="https://www.linkedin.com">
          <img
            className="icon rightIcon"
            src={iconLinkedIn}
            alt="iconLinkedIn"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
