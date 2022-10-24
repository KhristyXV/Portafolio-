import React from "react";
import styled from "styled-components";
import Yo from "../../assets/images/yo.png";
import arrow from "../../assets/images/arrow.png";

export const About = () => {
  return (
    <Wrapper>
      <div className="subContainer">
        <div className="imageContainer">
          <img src={Yo} alt="imageSantiago" />
        </div>
        <div className="textContainer">
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
            <button className="hola">
              Mas acerca de mi{" "}
              <img src={arrow} alt="flechita" className="arrowContainer" />
            </button>
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
  }
  .imageContainer {
    margin-top: 15px;
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
    display: flex;
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
`;
