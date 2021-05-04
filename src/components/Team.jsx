import React from 'react';
import './styles/Team.css';
import personUno from '../img/personUno.png';
import personDos from '../img/personDos.png';
import personTres from '../img/personTres.png';
import personCuatro from '../img/personCuatro.png';

const Team = () => {
  return (
    <>
      <div className="team-boxed">
        <div className="container">
          <div className="intro">
            <header className="section-header pt-5">
              <h2>Nosotros</h2>
            </header>
          </div>
          <div className="row people">
            <div className="col-md-3 col-lg-3 item">
              <div className="box">
                <h3 className="name">Albert William</h3>
                <p className="title">CEO</p>
                <img src={personUno} alt="" />
                <p className="description">
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                  lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                  finibus est, et interdum justo suscipit id. Etiam dictum
                  feugiat tellus, a semper massa.{' '}
                </p>
                <div className="social">
                  <a href="/#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="/#">
                    <i className="fab fa-twitter-square"></i>
                  </a>
                  <a href="/#">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 item">
              <div className="box">
                <h3 className="name">Gabriel Ramos</h3>
                <p className="title">Frontend Developer / UX Designer</p>
                <img src={personCuatro} alt="" />
                <p className="description">
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                  lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                  finibus est, et interdum justo suscipit id. Etiam dictum
                  feugiat tellus, a semper massa.{' '}
                </p>
                <div className="social">
                  <a href="/#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="/#">
                    <i className="fab fa-twitter-square"></i>
                  </a>
                  <a href="/#">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 item">
              <div className="box">
                <h3 className="name">Diosmer Vera</h3>
                <p className="title">Backend Developer</p>
                <img src={personTres} alt="" />
                <p className="description">
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                  lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                  finibus est, et interdum justo suscipit id. Etiam dictum
                  feugiat tellus, a semper massa.{' '}
                </p>
                <div className="social">
                  <a href="/#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="/#">
                    <i className="fab fa-twitter-square"></i>
                  </a>
                  <a href="/#">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 item">
              <div className="box">
                <h3 className="name">Daniel Martinez</h3>
                <p className="title">Frontend Developer / UX Designer</p>
                <img src={personDos} alt="" />
                <p className="description">
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                  lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                  finibus est, et interdum justo suscipit id. Etiam dictum
                  feugiat tellus, a semper massa.{' '}
                </p>
                <div className="social">
                  <a href="/#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="/#">
                    <i className="fab fa-twitter-square"></i>
                  </a>
                  <a href="/#">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
