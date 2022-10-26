import React from "react";
import styled from "styled-components";
import Yo from "../../assets/images/yo.png";
import YoBiggest from "../../assets/images/yoBiggest.png";
import arrow from "../../assets/images/arrow.png";
import { Modal } from "../Modal.jsx/Modal";
import { Modals } from "../Modal.jsx/Modals";

export const About = () => {
  return (
    <Wrapper>
      <div className="subContainer">
        <div className="imageMobileContainer">
          <img src={Yo} alt="imgMobileYo" />
        </div>
        <div className="imageContainer">
          <img src={YoBiggest} alt="imageSantiago" />
        </div>
        <div className="textContainer" id="aboutMe">
          <h1> Acerca de mi</h1>
          <h3>
            Hola! Mi nombre es Miguel y tengo gran afinidad hacía el trabajo
            colaborativo, me gusta crear diseños que inspiren e involucren a las
            personas. Como diseñador UI, considero que un buen producto no solo
            brinda una solución sino que permite crear una experiencia emocional
            en las personas que lo usan.
          </h3>
          <h3>
            En mi proceso creativo utilizo herramientas como Figma, Adobe XD,
            Photoshop e Illustrator que me ayudan mucho en el flujo de trabajo
            para la producción de interfaces de usuario.
          </h3>

          <div className="buttonContainer">
            <Modals />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  .subContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #141516;
    width: 98%;
    border-radius: 10px;
    height: 1000px;
  }
  .imageContainer {
    display: none;
  }
  .textContainer {
    width: 90%;
    align-items: center;
    justify-content: center;
  }
  .textContainer h1 {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
  }
  .textContainer h3 {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.44px;
  }
  .buttonContainer {
    display: block;
    justify-content: left;
    margin-bottom: 12px;
  }

  button {
    padding: 16px 20px;
    gap: 10px;

    width: 198px;
    height: 48px;

    /* Blanco */
    border: 0.997936px solid #ffffff;
    border-radius: 7.98349px;
    cursor: pointer;
    background-color: transparent;
    color: #ffffff;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
  }
  .hola {
    color: rgba(0, 0, 0, 0) !important;
    transition: all 0.3s ease;
    text-shadow: 0 0 0 #fff, -200px 0 0 #00eee0;
    overflow: hidden;
  }
  .hola:hover {
    text-shadow: 200px 0 0 #fff, 0 0 0 #00eee0;
    overflow: hidden;
  }
  .arrowContainer {
    padding-left: 5px;
  }
  .YoBiggest {
    display: none;
  }
  @media screen and (min-width: 1024px) {
    margin-top: 60px;
    .subContainer {
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      background-color: #141516;
      width: 70%;
      min-width: 1206.1px;
      height: auto;
    }
    .imageMobileContainer {
      display: none;
    }
    .imageContainer {
      display: block;
      margin-left: 15px;
      margin-right: 40px;
      margin-top: 20px;
    }
    .textContainer {
      display: flex;
      flex-direction: column;
      width: 90%;
      align-items: flex-start;
      justify-content: space-between;
      height: 555px;
    }
    .textContainer h1 {
      font-family: "DM Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 56px;
      line-height: 32px;
      margin-bottom: 10px;
    }
    .textContainer h3 {
      font-family: "DM Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 40px;
      width: 90%;

      /* or 175% */
      letter-spacing: 0.44px;
    }
  }
`;
