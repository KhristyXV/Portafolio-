import { Link } from "react-scroll";
import React from "react";
import styled from "styled-components";
import { Hamburger } from "./Hamburger";

export const NavBar = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="nameContainer">
          <span className="santiagoName">Santiago Dev</span>
          <span className="hamburger">
            {" "}
            <Hamburger />
          </span>
        </div>
        <div className="optionsContainer">
          <Link
            to={"inicio"}
            spy={true}
            smooth={true}
            offset={-200}
            duration={300}
            className="animatedLine"
          >
            <a>Inicio</a>
          </Link>
          <Link
            to={"aboutMe"}
            spy={true}
            smooth={true}
            offset={-200}
            duration={300}
            className="animatedLine"
          >
            <a>Acerca de mi</a>
          </Link>
          <Link
            to={"proyects"}
            spy={true}
            smooth={true}
            offset={-150}
            duration={300}
            className="animatedLine"
          >
            <a>Proyectos</a>
          </Link>
          <Link
            to={"contactme"}
            spy={true}
            smooth={true}
            offset={-110}
            duration={300}
            className="animatedLine"
          >
            <a>Contactame</a>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: 999;
  display: flex;
  width: 100%;
  height: 54px;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  background-color: #0f0f0fdf;
  a {
    color: white;
  }
  .container {
    display: flex;
    width: 95%;
  }
  .nameContainer {
    display: flex;
    justify-content: space-between;
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.15px;
    margin-left: 5px;
    width: 95%;
  }
  .santiagoName {
    z-index: 2;
  }

  .image {
    cursor: pointer;
  }
  .buttonHamburger {
    background-color: transparent;
    border: none;
  }
  .optionsContainer {
    display: none;
  }

  @media screen and (min-width: 1024px) {
    height: 90px;
    border-bottom: 1px solid;
    border-color: #00eede;

    .hamburger {
      display: none;
    }
    .hamburgerContainer {
      display: none;
    }
    .nameContainer {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-size: 30px;
      width: 65%;
      cursor: cell;
    }
    .optionsContainer {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 40%;
      font-family: "DM Sans";
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 16px;
    }
    .animatedLine {
      background-image: linear-gradient(90deg, #00eee0, #00eee0, #00eee0);
      text-decoration: none;
      background-repeat: no-repeat;
      background-size: 0% 2px; /* La propiedad escencial es esta, con el hover haremos que se habra la linea*/
      background-position: bottom;
      transition: background-size 700ms ease-in-out;
      line-height: 30px;
      color: white;
    }
    .animatedLine:hover {
      background-size: 100% 3px;
    }
  }
`;
