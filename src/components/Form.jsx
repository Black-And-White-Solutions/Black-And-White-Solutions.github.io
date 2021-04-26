import React, { UseState } from "react";
import "./styles/Form.css";
import contactCard from "../img/contactCard.png";

const Form = ({ formId }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Button pressed");
  };

  return (
    <div className="container-fluid bg">
      <div className="container mainCard">
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
          <div className="col me-3 formText">
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
          <div className="col align-items-center me-3 formMain">
            <form id={formId} onSubmit={handleSubmit} className="form">
              <div class="col mb-4 form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeHolder="Nombre"
                  className="form-control font textBox"
                />
              </div>
              <div className="col mb-4 form-group">
                <input
                  type="text"
                  name="objective"
                  id="objective"
                  placeholder="Objetivo del proyecto"
                  className="form-control font textBox"
                />
              </div>
              <div className="col mb-4 form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="E-mail"
                  className="form-control font textBox"
                />
              </div>
              <div className="col mb-4 form-group">
                <input
                  type="tel"
                  name="telephone"
                  id="telephone"
                  placeholder="Teléfono"
                  className="form-control font textBox"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <button type="submit" className="font bold submitButton">
        Enviar
      </button>
    </div>
  );
};

export default Form;
