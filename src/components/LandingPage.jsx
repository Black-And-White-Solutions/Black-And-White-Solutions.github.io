import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './styles/LandingPage.css';
import phoneShowcase from '../img/phoneShowcase.png';
import navigationLinks from '../data/listOfNavigation.json';

const LandingPage = () => {
  const [colorChange, setColorChange] = useState(false);
  window.addEventListener('scroll', () => {
    setColorChange(window.scrollY > 0);
  });

  return (
    <div
      className={
        colorChange
          ? 'container-fluid landing ColorChange'
          : 'container-fluid landing'
      }
      id="landingPage">
      <div className="row landingContent width-limit">
        <div className="col-md col-xl py-2 py-lg-5 landingText app-shadow">
          <h1>Confíanos tus ideas y nosotros desarrollamos la solución</h1>
          <p>
            Black & White Solutions tiene todas las herramientas que necesitarás
            para realizar tus ideas y darle una nueva dimensión a tu
            emprendimiento
          </p>
          <button type="button" className="btn btn-primary landingButton">
            <Link
              activeClass="active"
              className="buttonLink"
              to={navigationLinks[navigationLinks.length - 1].to}
              spy={true}
              smooth={true}
              offset={navigationLinks[navigationLinks.length - 1].offset}
              duration={50}>
              Contactanos
            </Link>
          </button>
        </div>
        <div className="col-md col-xl py-5">
          <img className="landingImage" src={phoneShowcase} alt="Phone" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
