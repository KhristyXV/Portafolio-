import React from "react";
import styled from "styled-components";

export const Form = () => {
  return (
    <Wrapper>
      <div className="title">
        <h1>¡Hablemos!</h1>
        <h4>
          Si estás interesado en mi trabajo o tienes alguna inquietud, no dudes
          en escribirme!
        </h4>
        <div>
          <form className="formContainer">
            <div>
              <label>
                Tu nombre
                <input></input>
              </label>
            </div>
            <div>
              <label>
                Tu E-mail
                <input></input>
              </label>
            </div>
            <div>
              <label>
                Tu Mensaje
                <input></input>
              </label>
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
  .title {
    width: 90%;
  }
  .formContainer {
    background: #26292d;
  }
`;
