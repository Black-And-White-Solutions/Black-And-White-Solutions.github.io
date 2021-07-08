import React from 'react';
import emailjs from 'emailjs-com';
import './styles/ContactPage.css';
import contactCard from '../img/contactCard.png';

const ContactPage = () => {
  const sendEmail = e => {
    e.preventDefault();
    console.log(e);
    emailjs
      .sendForm(
        'main_contact_mail',
        'contact_homepage',
        e.target,
        'user_ggIETGBrdyPyMlsHnJfKq',
      )
      .then(
        result => {
          console.log('SUCCESS!', result.status, result.text);
          alert(
            `¡Su información fue enviada exitosamente!\nPronto nos contactaremos con usted.`,
          );
        },
        error => {
          console.log('FAILED...', error.text);
          alert(`Algo salio mal, intentelo de nuevo más tarde.`);
        },
      );

    e.target.reset();
  };

  return (
    <div className="container-fluid align-items-center bg" id="contactPage">
      <div className="card mainCard">
        <div className="row align-items-center">
          <img
            className="col-sm-2 mt-2 ms-2 contactIcon"
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
              method="get"
              encType="text/plain"
              onSubmit={sendEmail}
              className="form">
              <div className="col mb-4 align-items-center form-group">
                <input
                  type="text"
                  name="contactName"
                  id="name"
                  placeholder="Nombre"
                  className="form-control formBox"
                />
              </div>
              <div className="col mb-4 form-group">
                <input
                  type="text"
                  name="contactObjective"
                  id="objective"
                  placeholder="Objetivo del proyecto"
                  className="form-control formBox"
                />
              </div>
              <div className="col mb-4 form-group">
                <input
                  type="email"
                  name="contactEmail"
                  id="email"
                  placeholder="E-mail"
                  className="form-control formBox"
                />
              </div>
              <div className="col mb-4 form-group">
                <input
                  type="tel"
                  name="contactPhone"
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
