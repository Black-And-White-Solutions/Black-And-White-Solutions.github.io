import React from 'react';
import SocialBar from './SocialBar';
import urls from '../data/listOfFooter.json';
import './styles/Footer.css';

const Footer = () => {
  return (
    <div className="container-fluid footerBar">
      <div className="row">
        <div className="col-md-9 footerText">
          2020 Black & White Solutions, todos los derechos reservados.
        </div>
        <div className="col-md-3 fontSocial">
          <SocialBar
            urlLinkedIn={urls.urlLinkedIn}
            urlTwitter={urls.urlTwitter}
            urlGithub={urls.urlGithub}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
