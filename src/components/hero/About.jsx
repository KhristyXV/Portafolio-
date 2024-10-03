import React from "react";
import styled from "styled-components";
import Yo from "../../assets/images/yo.png";
import YoBiggest from "../../assets/images/yoBiggest.png";
import arrow from "../../assets/images/arrow.png";

export const About = () => {
  return (
    <Wrapper>
      <div className="subContainer">
        <div className="imageMobileContainer">
          <img src={Yo} alt="imgMobileYo" />
        </div>
        <div className="imageContainer">
          <img src={YoBiggest} alt="imageSantiago" className="imgYoBiggest" />
        </div>
        <div className="textContainer" id="aboutMe">
          <h1> Acerca de mi</h1>
          <h3>
          Soy Santiago, un desarrollador Full Stack con experiencia en Back-End y Front-End. Tengo más de un año de experiencia trabajando con Java (Java 8+), Spring Boot, y API REST en el desarrollo Back-End, así como con JavaScript, React y Node.js para el desarrollo Front-End. Además, cuento con conocimientos en bases de datos relacionales como MySQL.
          He trabajado en entornos ágiles utilizando la metodología SCRUM, desarrollando habilidades clave como el trabajo en equipo, la adaptabilidad, y la gestión del tiempo. Mi formación incluye la Tecnicatura Universitaria en Programación en la UTN, complementada con certificaciones en Java, Spring, React, y en proceso Microservicios.
          Mi experiencia en No Country me permitió trabajar en proyectos grupales donde desarrollé tanto la parte Back-End como Front-End, aplicando principios de diseño como SOLID y usando tecnologías como Hibernate, JWT para la seguridad de API, y Git para el control de versiones. Actualmente, me sigo especializando en Java y el desarrollo Back-End, siempre enfocado en mejorar y adquirir nuevas habilidades.
          </h3>
          <div className="buttonContainer">
            <a
              href="https://www.linkedin.com/in/santiago-schroh-350099221/"
              target="_blank"
            >
              <button className="effectButton">
                Mas acerca de mi
                <img src={arrow} className="arrow" />
              </button>
            </a>
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
  a {
    color: #fff;
    content: "";
  }
  .subContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #141516;
    width: 94%;
    border-radius: 10px;
    height: 1125px;
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
    line-height: 24px;
    letter-spacing: 0.44px;
  }
  .buttonContainer {
    display: block;
    justify-content: left;
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
  .effectButton {
    color: rgba(0, 0, 0, 0) !important;
    transition: all 0.3s ease;
    text-shadow: 0 0 0 #fff, -200px 0 0 #00eee0;
    overflow: hidden;
  }
  .effectButton:hover {
    text-shadow: 200px 0 0 #fff, 0 0 0 #00eee0;
    overflow: hidden;
  }
  .arrowContainer {
    padding-left: 5px;
  }
  .YoBiggest {
    display: none;
  }
  .imageMobileContainer {
    filter: drop-shadow(0px 5px 7px #00eee0);
  }
  .arrow {
    margin-left: 8px;
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
      margin-left: 30px;
      margin-right: 40px;
      margin-top: 20px;
      filter: drop-shadow(12px 5px 7px #00eee0);
      transition: 600ms ease-in-out;
    }
    .imageContainer:hover {
      transform: scale(1.03);
      filter: drop-shadow(12px 5px 7px #ffffff);
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
      line-height: 20px;
      margin-bottom: 10px;
    }
    .textContainer h3 {
      font-family: "DM Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      width: 90%;

      /* or 175% */
      letter-spacing: 0.44px;
    }
    .arrow {
      margin-left: 8px;
    }
    .buttonContainer {
      margin-bottom: 20px;
    }
  }
`;
