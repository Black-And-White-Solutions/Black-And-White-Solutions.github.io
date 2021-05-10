import React from 'react';
import logo from '../img/logo.png';
import './styles/NavigationBar.css';
import { Link, animateScroll as scroll } from 'react-scroll';

const NavigationBar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top">
        <div className="container-fluid">
          <Link
            className="navbar-brand logo active"
            onClick={scrollToTop}
            to="/">
            <img src={logo} alt="logo" />
          </Link>
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
                <Link
                  activeClass="active"
                  to="landingPage"
                  className="nav-link"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={100}>
                  Inicio
                </Link>
              </li>
              <span className="line"></span>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={100}>
                  Servicios
                </Link>
              </li>
              <span className="line"></span>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="aboutTimelinePage"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={100}>
                  Proceso
                </Link>
              </li>
              <span className="line"></span>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="aboutTeamPage"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={100}>
                  Nosotros
                </Link>
              </li>
              <span className="line"></span>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="contacto"
                  className="nav-link"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={100}>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
