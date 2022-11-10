import React from "react";
import styled from "styled-components";
import { Modal } from "../../Modal.jsx/Modal";
import { useModal } from "../../../hooks/useModal";
import interrogationRight from "../../../assets/images/interrogationRight.png";
import interrogationLeft from "../../../assets/images/interrogationLeft.png";
import { FaRegPaperPlane } from "react-icons/fa";
import { SlPlane } from "react-icons/sl";
import { GiRocket, GiChainedHeart } from "react-icons/gi";

export const InterrogationModalRight = () => {
  const [isOpenModal, openModal, closeModal] = useModal(false);
  return (
    <Wrapper>
      <div onClick={openModal}>
        <div className="containerInterrogationOne">
          <div className="containerImage">
            <img src={interrogationRight} alt="interrogationRight" />
          </div>
          <div className="containerModal">
            <Modal isOpen={isOpenModal} closeModal={closeModal}>
              <h1> D i g i t i z e</h1>
              <div className="containerText">
                <div className="text">
                  <h3>
                    Digitize es un sitio web que desarrolle de manera grupal
                    cuando tuve mi paso por la organización "No Country".{" "}
                    <p>
                      El objetivo de D i g i t i z e es que las empresas o
                      emprendedores puedan adquirir los servicios tanto de
                      desarrollo web como de marketing. Como podes observar en
                      las tarjetas, Digitize te ofrece diferentes planes según
                      tu necesidad o dimensión del proyecto.
                    </p>
                    <p className="link">
                      ¿ Queres probar el proyecto ?, Pulsa el avión y, ¡ Vamos
                      de viaje !      
                      <a
                        href="https://c6-02-m-mern-ten.vercel.app/"
                        target="_blank"
                      >
                        <FaRegPaperPlane className="plane" />
                      </a>
                    </p>
                  </h3>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export const InterrogationModalRightTwo = () => {
  const [isOpenModal, openModal, closeModal] = useModal(false);
  return (
    <Wrapper>
      <div onClick={openModal}>
        <div className="containerInterrogationOne">
          <div className="containerImage">
            <img src={interrogationRight} alt="interrogationRight" />
          </div>
          <div className="containerModal">
            <Modal isOpen={isOpenModal} closeModal={closeModal}>
              <h1 className="ecoSportTitle"> Eco-Sport </h1>
              <div className="containerText">
                <div className="text">
                  <h3>
                    Eco-Sport al igual que Digitize lo realice en "No Country".
                    Por el momento es mi proyecto favorito, se le dedico mucho
                    tiempo y amor.{" "}
                    <div className="containerHear">
                      <GiChainedHeart className="hear" />
                    </div>
                    <p>
                      Eco-Sport es un E-commerce de ropa deportiva el cual
                      cuenta con una gran variedad de funcionalidades, un diseño
                      tanto Mobile como Desktop, formularios, login/register,
                      proceso de pago, filtros de búsqueda, seguridad TOKEN y
                      panel de administrador. Fue realizado en un periodo de 5
                      semanas y entre 4 desarrolladores.
                    </p>
                    <p className="link">
                      Para este proyecto vamos a precisar un ¡Cohete!, ¡ Vamos a
                      la Luna !
                      <a
                        href="https://s4-06-m-java-react-wljq.vercel.app/"
                        target="_blank"
                      >
                        <GiRocket className="plane" />
                      </a>
                    </p>
                  </h3>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export const InterrogationModalLeft = () => {
  const [isOpenModal, openModal, closeModal] = useModal(false);
  return (
    <WrapperLeft>
      <div onClick={openModal}>
        <div className="containerInterrogationOne">
          <div className="containerImage">
            <img src={interrogationLeft} alt="interrogationRight" />
          </div>
          <div className="containerModal">
            <Modal isOpen={isOpenModal} closeModal={closeModal}>
              <h1 className="climaTitle"> App Clima 2.0 </h1>
              <div className="containerText">
                <div className="text">
                  <h3 className="textoClima">
                    App Clima 2.0 fue mi primer proyecto, creado mientras
                    estudiaba en el bootcamp "Hola Soy Henry".{" "}
                    <p>
                      Verdaderamente, si bien es un proyecto muy simple a
                      comparación de los demás, fue aquel que más me costo
                      realizar, porque con esta app rompí la barrera entre la
                      practica y la teoría, ya estaba creando algo y al tener
                      unas funcionalidades básicas decidí que me esforzaría
                      mucho por el diseño. Allí fue cuando me di cuenta de la
                      importancia de brindar una buena experiencia al Usuario.
                    </p>
                    <p className="link">
                      Mejoramos el avión, ¡ Vamos al segundo destino !      
                      <a
                        href="https://app-clima-2-0-1.vercel.app/"
                        target="_blank"
                      >
                        <SlPlane className="plane" />
                      </a>
                    </p>
                  </h3>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </WrapperLeft>
  );
};

const Wrapper = styled.div`
  a {
    color: white;
    transition: 500ms;
    font-weight: 300;
  }
  h3 {
    font-family: "DM Sans";
    font-weight: 200;
    text-align: left;
    line-height: 22px;
    font-size: 19px;
  }
  h1 {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 30px;
    letter-spacing: 4px;
    text-decoration: underline 1px;

    text-decoration-color: #00ffe0;
    text-underline-offset: 6px;
  }
  .link {
    font-size: 15.5px;
  }
  .hear {
    color: #00ffe0;
    font-size: 26px;
  }
  .containerHear {
    position: absolute;
    margin-left: 205px;
    margin-top: -24px;
  }
  .plane {
    font-size: 30px;
    transition: 150ms ease-in-out;
    color: #00ffe0;
  }
  .plane:hover {
    transform: scale(1.2);
  }
  .containerText {
    display: flex;
    justify-content: center;
  }
  .text {
    display: flex;

    width: 87%;
  }

  .ecoSportTitle {
    line-height: 2px;
  }
  .textoClima {
    line-height: 21px;
  }
  .containerImage {
    z-index: 1;
  }
  .containerModal {
    z-index: 2;
    position: absolute;
  }
  .containerImage {
    transition: 350ms;
  }
  .containerImage:hover {
    transform: scale(1.2);
  }
`;

const WrapperLeft = styled.div`
  a {
    color: white;
    transition: 500ms;
    font-weight: 300;
  }
  h3 {
    font-family: "DM Sans";
    font-weight: 300;
    text-align: left;
    line-height: 22px;
    font-size: 19px;
  }
  h1 {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 30px;
    letter-spacing: 4px;
    text-decoration: underline 1px;
    text-decoration-color: #00ffe0;
    text-underline-offset: 6px;
  }
  .climaTitle {
    line-height: 2px;
  }
  .link {
    font-size: 15.5px;
  }
  .plane {
    font-size: 30px;
    transition: 150ms ease-in-out;
    color: #00ffe0;
  }
  .plane:hover {
    transform: scale(1.2);
  }
  .containerText {
    display: flex;
    justify-content: center;
  }

  .text {
    display: flex;

    width: 87%;
  }
  .containerImage {
    z-index: 1;
  }
  .containerModal {
    z-index: 2;
    position: absolute;
    left: 298px;
  }
  .containerImage {
    transition: 350ms;
  }
  .containerImage:hover {
    transform: scale(1.2);
  }
`;
