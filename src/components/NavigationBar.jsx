import React from 'react';
import { Link } from 'react-scroll';
import logo from '../img/logo.png';
import './styles/NavigationBar.css';
import navigationLinks from '../data/listOfNavigation.json';

const NavigationBar = () => {
  const barLinks = [];
  navigationLinks.forEach((item, index) => {
    index ? barLinks.push(<span className="line left-line"></span>) : null;

    barLinks.push(
      <li className="nav-item" key={index.toString()}>
        <Link
          activeClass="active"
          className="nav-link"
          to={item.to}
          spy={true}
          smooth={true}
          offset={item.offset}
          duration={50}>
          {item.name}
        </Link>
      </li>,
    );
  });
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top">
        <div className="container-fluid">
          <Link
            className="navbar-brand logo active"
            to="landingPage"
            offset={-100}>
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
            <ul className="navbar-nav my-auto mb-2 mb-lg-0">{barLinks}</ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
