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
            ¡ Hola !, Mi nombre es Santiago y tengo gran afinidad hacía el
            trabajo grupal, el diseño, el desarrollo y el aprendizaje. Tengo 19
            años y llevo más de un año dentro del mundo del desarrollo web, eh
            realizado varios cursos de programación y mi preparación más intensa
            la tuve en el Bootcamp "Hola Soy Henry". Posteriormente al Bootcamp
            sentí que era hora de poner mis conocimientos en práctica, allí fue
            cuando me uní a "No Country" y realicé diversos proyectos grupales.
          </h3>
          <h3>
            Me considero Front-End Developer, pero cuento con conocimientos de
            Back-End. La decisión de especializarme en el Front-End se basó en
            mi personalidad, gustos y el amor por un buen diseño, además de
            crear la mejor experiencia UX/UI.
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
    width: 98%;
    border-radius: 10px;
    height: 1200px;
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
      line-height: 24px;
      margin-bottom: 10px;
    }
    .textContainer h3 {
      font-family: "DM Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 36px;
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
