import React, { UseState } from "react";
import "./Styles/Form.css";

const Form = ({ formId }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Button pressed");
  };

  return (
    <div className="container">
      <div className="mainCard">
        <div className="formMain">
          <form id={formId} onSubmit={handleSubmit} className="form">
            <fieldset>
              <input
                type="text"
                name="name"
                id="name"
                placeHolder="Nombre"
                className="font textBox"
              />
              <input
                type="text"
                name="objective"
                id="objective"
                placeholder="Objetivo del proyecto"
                className="font textBox"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
                className="font textBox"
              />
              <input
                type="tel"
                name="telephone"
								id="telephone"
                placeholder="Teléfono"
                className="font textBox"
              />
            </fieldset>
          </form>
        </div>
      </div>
      <button type="submit" className="font bold submitButton">
        Enviar
      </button>
    </div>
  );
};

export default Form;
