import React from 'react';
import iconFacebook from '../img/facebookLogo.png';
import iconTwitter from '../img/twitterLogo.png';
import iconLinkedIn from '../img/linkedInLogo.png';
import './styles/FooterBar.css';

const FooterBar = () => {
  return (
    <div className="container-fluid footerBar">
      <div className="row">
        <div className="col footerText">
          2020 Black & White Solutions, todos los derechos reservados.
        </div>
        <div className="col footerSocial">
          <div className="row gx-1">
            <a href="https://www.facebook.com/Black-And-White-Solutions-112478920935033/">
              <img
                className="col icon leftIcon"
                src={iconFacebook}
                alt="iconFacebook"
              />
            </a>
            <a href="https://twitter.com/BnW_Solutions">
              <img
                className="col icon centerIcon"
                src={iconTwitter}
                alt="iconTwitter"
              />
            </a>
            <a href="https://www.linkedin.com">
              <img
                className="col icon rightIcon"
                src={iconLinkedIn}
                alt="iconLinkedIn"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBar;
