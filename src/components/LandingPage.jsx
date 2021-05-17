import React, { useState } from 'react';
import './styles/LandingPage.css';
import phoneShowcase from '../img/phoneShowcase.png';

const LandingPage = () => {
  const [colorChange, setColorChange] = useState(false);
  window.addEventListener('scroll', () => {
    setColorChange(window.scrollY > 0);
  });

  return (
    <>
      <div
        className={colorChange ? 'section ColorChange' : 'section'}
        id="landingPage">
        <div className="container-fluid presentation">
          <div className="row pt-2">
            <div className="col-md-7 col-xl-7">
              <h1>Confíanos tus ideas y nosotros desarrollamos la solución</h1>
              <p>
                Black & White Solutions tiene todas las herramientas que
                necesitarás para realizar tus ideas y darle una nueva dimensión
                a tu emprendimiento
              </p>
              <button type="button" className="btn btn-primary">
                Contactanos
              </button>
            </div>
            <div className=" col-md-5 col-xl-5 pt-5">
              <img src={phoneShowcase} alt="Phone" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
