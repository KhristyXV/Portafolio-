import React from "react";
import styled from "styled-components";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";

export const Form = (props) => {
  const formu = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ipm0cpg",
        "template_2rmo8cq",
        formu.current,
        "u2KSdkRc208iNve7t"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setEnteredName("");
    setEnteredNameTouch(false);

    setEnteredEmail("");
    setEnteredEmailTouch(false);
  };

  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouch, setEnteredNameTouch] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouch, setEnteredEmailTouch] = useState(false);

  let regexName = /^([a-zA-Z ]){2,30}$/;

  const enteredNameIsValid = regexName.test(enteredName.trim());
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouch;

  let regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const enteredEmailIsValid = regexEmail.test(enteredEmail.trim());
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouch;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(
      event.target.value
    ); /*Controlador de pulsacion del usuario, toma el valor de cada tecla que toca*/
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(
      event.target.value
    ); /*Controlador de pulsacion del usuario, toma el valor de cada tecla que toca*/
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouch(true);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouch(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault(); /*Cuando creamos el form integramos el button, por las solicitudes http debemos integrar el ePreventDefault para no recargar la pagina*/

    setEnteredNameTouch(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    setEnteredName("");
    setEnteredNameTouch(false);

    setEnteredEmail("");
    setEnteredEmailTouch(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "inputCont invalid"
    : "inputCont";

  const emailInputClasses = emailInputIsInvalid
    ? "inputCont invalid"
    : "inputCont";

  return (
    <Wrapper>
      <div className="title">
        <h1>¡Hablemos!</h1>
        <h4>
          Si estás interesado en mi trabajo o tienes alguna inquietud, no dudes
          en escribirme!
        </h4>
        <div>
          <form
            ref={formu}
            className="formContainer"
            onSubmit={formSubmissionHandler && sendEmail}
          >
            <div className={nameInputClasses}>
              <label>
                Tu nombre
                <input
                  placeholder="Nombre completo"
                  onChange={nameInputChangeHandler}
                  onBlur={nameInputBlurHandler}
                  value={enteredName}
                  type="text"
                  id="name"
                  name="name"
                />
                {nameInputIsInvalid && (
                  <p className="error-text">No se introdujo un nombre</p>
                )}
              </label>
            </div>
            <div className={emailInputClasses}>
              <label>
                Tu E-mail
                <input
                  placeholder="Ejemplo@hotmail.com"
                  onChange={emailInputChangeHandler}
                  onBlur={emailInputBlurHandler}
                  value={enteredEmail}
                  type="email"
                  id="email"
                />
                {emailInputIsInvalid && (
                  <p className="error-text">No se introdujo un Email</p>
                )}
              </label>
            </div>
            <div className="inputCont">
              <label>
                Tu Mensaje
                <textarea
                  placeholder="Hola!..."
                  className="yourMensajeInput"
                  id="message"
                  name="message"
                />
              </label>
            </div>
            <div className="buttonContainer">
              <button disabled={!formIsValid} className="formButton">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  h1 {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 34px;
    line-height: 35px;

    /* identical to box height, or 118% */
    letter-spacing: 0.25px;
  }
  h4 {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;

    /* or 171% */
    text-align: center;
    letter-spacing: 0.1px;
  }
  label {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 85%;
    margin-top: 20px;
    margin-bottom: 20px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
  }
  input {
    padding: 16px 20px;
    gap: 252px;
    color: white;

    width: 82%;
    height: 10Spx;
    background-color: #1c1e22;
    border: 1px solid #a0a0a1;
    border-radius: 8px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.44px;
    margin-top: 10px;
  }
  textarea {
    padding: 16px 20px;
    gap: 252px;
    color: white;

    width: 82%;
    height: 10Spx;
    background-color: #1c1e22;
    border: 1px solid #a0a0a1;
    border-radius: 8px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.44px;
    margin-top: 10px;
  }

  input::placeholder {
    color: #bfbfc0;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.44px;
  }

  .title {
    width: 90%;
  }

  .formContainer {
    background: #26292d;
    border-radius: 8px;
  }
  .inputCont {
    display: flex;
    justify-content: center;
  }
  .formButton {
    display: flex;
    align-items: center;
    padding: 16px 8px;
    gap: 10px;
    justify-content: center;
    width: 85%;
    height: 43px;
    background: #00eee0;
    border-radius: 8px;
    border-color: transparent;
    margin-bottom: 10px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
  }
  .buttonContainer {
    display: flex;
    justify-content: center;
  }
  .yourMensajeInput {
    height: 130px;
    display: flex;

    align-items: flex-start;
  }
  .error-text {
    color: #e40d0de6;
  }
  .invalid input {
    border: 1px solid #b40e0e;
    background-color: #fddddd;
    color: black;
  }
  .invalid input::placeholder {
    color: #000000be;
  }

  .invalid input:focus {
    border-color: 1px solid #ff8800;
    background-color: #fbe8d2;
  }
  button:disabled,
  button:disabled:hover,
  button:disabled:active {
    background-color: #ccc;
    color: #757373;
    border: 0.5px solid #ffffff;
    cursor: not-allowed;
    transition: 700ms all;
  }
`;
