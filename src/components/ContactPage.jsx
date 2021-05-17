import React from 'react';
import './styles/ContactPage.css';
import contactCard from '../img/contactCard.png';

const ContactPage = () => {
  const handleSubmit = e => {
    e.preventDefault();
    alert('Your message has been sent');
  };

  return (
    <div className="container-fluid align-items-center bg">
      <div className="card mainCard">
        <div className="row align-items-center">
          <img
            className="col-2 mt-2 ms-2 contactIcon"
            src={contactCard}
            alt="contactUs"
          />
          <header className="col mt-2 pe-8 justify-content-center text-center formTitle">
            Contacta con nosotros
          </header>
        </div>
        <div className="row mt-3">
          <div className="col-lg me-3 formText">
            <p className="lh-1 formBigText">
              Queremos proveer a cada cliente una experiencia unica
            </p>
            <ul className="formText">
              <li>
                Contacto directo con los miembros del equipo que haran realidad
                tu proyecto soñado.
              </li>
              <li>Entra en contacto con el equipo en menos de 12 horas.</li>
              <li>
                Se proveerá a usted con todas las respuestas a cualquier duda
                que pueda tener en relacion al proyecto...
              </li>
            </ul>
            <p className="formText">
              ... Para que usted pueda estar seguro de poder cumplir su deseo de
              su proyecto soñado.
            </p>
          </div>
          <div className="col-lg me-3 formMain">
            <form
              id="contactForm"
              action="mailto:blacknwhitesolutions.dev@gmail.com"
              method="get"
              encType="text/plain"
              onSubmit={handleSubmit}
              className="form">
              <div className="col mb-4 align-items-center form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nombre"
                  className="form-control formBox"
                />
              </div>
              <div className="col mb-4 form-group">
                <input
                  type="text"
                  name="objective"
                  id="objective"
                  placeholder="Objetivo del proyecto"
                  className="form-control formBox"
                />
              </div>
              <div className="col mb-4 form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="E-mail"
                  className="form-control formBox"
                />
              </div>
              <div className="col mb-4 form-group">
                <input
                  type="tel"
                  name="telephone"
                  id="telephone"
                  placeholder="Teléfono"
                  className="form-control formBox"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <button
        type="submit"
        form="contactForm"
        className="btn btn-primary formButton">
        Enviar
      </button>
    </div>
  );
};

export default ContactPage;
