import React from "react";
import styled from "styled-components";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { useInput } from "../../../hooks/useInput";
import swal from "sweetalert";

export const Form = (props) => {
  const seeAlert = () => {
    swal({
      title: "Tu mensaje fue enviado con exito",
      text: "En breve estaremos en contacto,  ¡ Gracias y que tengas linda jornada !. ",
      icon: "success",
      timer: "3000",
      buttons: ["Aceptar"],
    });
  };

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
          seeAlert();
          resetNameInput();
          resetEmailInput();
          resetTextArea();
        },
        (error) => {
          alert("no ha sido enviado");
        }
      );
  };

  let regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  let regexName =
    /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;

  let regexTextArea = /[A-Za-z0-9-\s+@+.+-]/;

  const {
    value: enteredName,
    valueIsValid: nameValueIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => regexName.test(value.trim()));

  const {
    value: enteredEmail,
    valueIsValid: emailValueIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => regexEmail.test(value.trim()));

  const {
    value: enteredTextArea,
    valueIsValid: textAreaValueIsValid,
    hasError: textAreaInputHasError,
    valueChangeHandler: textAreaChangedHandler,
    inputBlurHandler: textAreaBlurHandler,
    reset: resetTextArea,
  } = useInput((value) => regexTextArea.test(value.trim()));

  let formIsValid = false;

  if (nameValueIsValid && emailValueIsValid && textAreaValueIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault(); /*Cuando creamos el form integramos el button, por las solicitudes http debemos integrar el ePreventDefault para no recargar la pagina*/

    if (!nameValueIsValid) {
      return;
    }

    resetNameInput();

    resetEmailInput();

    resetTextArea();
  };

  const nameInputClasses = nameInputHasError
    ? "inputCont invalid"
    : "inputCont";

  const emailInputClasses = emailInputHasError
    ? "inputCont invalid"
    : "inputCont";

  const textAreaInputClasses = textAreaInputHasError
    ? "inputCont invalid"
    : "inputCont";

  return (
    <Wrapper>
      <div className="title">
        <h1 id="contactme">¡Hablemos!</h1>
        <h4>
          Si estás interesado en mi trabajo o tienes alguna inquietud, no dudes
          en escribirme!
        </h4>
        <div className="formBiggestContainer">
          <form
            ref={formu}
            className="formContainer"
            onSubmit={formSubmissionHandler && sendEmail}
          >
            <div className="positionContainer">
              <div className={nameInputClasses}>
                <label>
                  Tu nombre
                  <input
                    placeholder="Nombre completo"
                    onChange={nameChangedHandler}
                    onBlur={nameBlurHandler}
                    value={enteredName}
                    type="text"
                    id="name"
                    name="name"
                  />
                  {nameInputHasError && (
                    <div className="error-text">No se introdujo un nombre</div>
                  )}
                </label>
              </div>
              <div className={emailInputClasses}>
                <label>
                  Tu E-mail
                  <input
                    placeholder="Ejemplo@hotmail.com"
                    onChange={emailChangedHandler}
                    onBlur={emailBlurHandler}
                    value={enteredEmail}
                    type="email"
                    id="email"
                    name="email"
                  />
                  {emailInputHasError && (
                    <div className="error-text">No se introdujo un Email</div>
                  )}
                </label>
              </div>
              <div className={textAreaInputClasses}>
                <label>
                  Tu Mensaje
                  <textarea
                    placeholder="Hola!..."
                    className="yourMensajeInput"
                    id="message"
                    name="message"
                    onChange={textAreaChangedHandler}
                    onBlur={textAreaBlurHandler}
                    value={enteredTextArea}
                  />
                  {textAreaInputHasError && (
                    <div className="error-text">No se introdujo texto</div>
                  )}
                </label>
              </div>
              <div className="buttonContainer">
                <button disabled={!formIsValid} className="formButton">
                  <h3>Enviar</h3>
                </button>
              </div>
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
  margin-top: 100px;

  h1 {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 34px;
    line-height: 35px;

    /* identical to box height, or 118% */
    letter-spacing: 0.25px;
  }
  h3 {
    font-size: 16px;
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
    height: 25px;
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
    height: 99px;
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
  .swal-overlay {
    background-color: #1c1e22;
  }
  .swal-modal {
    background-color: #1c1e22;
    color: white;
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
    align-items: center;
    justify-content: center;
    width: 85%;
    height: 43px;
    background: #00eee0;
    border-radius: 8px;
    border-color: transparent;
    margin-top: 10px;
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
  .invalid textarea {
    border: 1px solid #b40e0e;
    background-color: #fddddd;
    color: black;
  }
  .invalid textarea::placeholder {
    color: #000000be;
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
  @media screen and (min-width: 1024px) {
    margin-top: 150px;
    input {
      width: 92%;
    }
    label {
      width: 100%;
    }
    textarea {
      width: 92%;
    }
    h1 {
      font-family: "DM Sans";
      font-style: normal;
      font-weight: 700;
      font-size: 60px;
      line-height: 71px;
    }
    h4 {
      font-family: "DM Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 20px;
    }
    .formBiggestContainer {
      display: flex;
      justify-content: center;
      margin-bottom: 170px;
      margin-top: 50px;
    }
    .formContainer {
      display: flex;
      align-items: center;
      flex-direction: column;
      background: #26292d;
      border-radius: 8px;
      width: 620px;
    }
    .formButton {
      width: 100%;
      height: 50px;
    }
    .positionContainer {
      display: flex;
      flex-direction: column;
      width: 90%;
    }
    .buttonContainer {
      margin-top: 7px;
      margin-bottom: 15px;
    }
  }
`;
