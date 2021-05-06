import React from 'react';
import logo from '../img/logo.png';
import './styles/Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top">
        <div className="container">
          <a className="navbar-brand logo" href="/#">
            <img src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <div className="mx-auto"></div>
            <ul className="navbar-nav my-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="/#" aria-current="page">
                  Inicio
                </a>
              </li>
              <span className="line"></span>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Servicios
                </a>
              </li>
              <span className="line"></span>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Nosotros
                </a>
              </li>
              <span className="line"></span>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
