import React, { useState } from 'react';
import './styles/Presentation.css';
import phoneShowcase from '../img/phoneShowcase.png';

const Presentation = () => {
  const [colorChange, setColorChange] = useState(false);
  window.addEventListener('scroll', () => {
    setColorChange(window.scrollY > 0);
  });

  return (
    <>
      <div className={colorChange ? 'section colorChange' : 'section'}>
        <div className="container-fluid presentation">
          <div className="row mt-2">
            <div className="col-md-7 col-sm-12">
              <h1>Confíanos tus ideas y nosotros desarrollamos la solución</h1>
              <p>
                Black & White Solutions tiene todas las herramientas que
                necesitarás para realizar tus ideas y darle una nueva dimensión
                a tu emprendimiento
              </p>
              <button type="button" className="btn btn-primary mt-3">
                Contactanos
              </button>
            </div>
            <div className="col-md-5 col-sm-12 h-2">
              <img src={phoneShowcase} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Presentation;
