import React from "react";
import styled from "styled-components";
import download from "../../assets/images/download.png";
import instagram from "../../assets/images/instagram.png";
import linkedin from "../../assets/images/linkedin.png";
import github from "../../assets/images/github.png";
import curriculum from "../../assets/downloads/curriculumSchroh.pdf";
import { Link } from "react-scroll";

export const Home = () => {
  return (
    <HomeContainer id="inicio">
      <div className="nameContainer">
        <span className="soy">Soy</span> {""}
        <div className="nameMobile">
          {" "}
          <span className="name">Santiago Schroh. Front-End</span> Dev
        </div>
        <div className="nameDesktop">
          Soy <span className="colorNameDesktop">Santiago Schroh.</span>
        </div>
        <div className="nameDesktop2">
          <span className="colorNameDesktop">Front-End</span> Developer
        </div>
        <div className="welcomeContainer">
          {" "}
          ¡Bienvenido a mi Portafolio web!{" "}
        </div>
        <div className="buttonsContainer">
          <div className="subButtonsContainer">
            <div>
              <Link
                to={"proyects"}
                spy={true}
                smooth={true}
                offset={-150}
                duration={300}
              >
                <button className="buttonSeeProyects">
                  <span>Ver proyectos</span>
                </button>
              </Link>
            </div>
            <div>
              <a href={curriculum} download="CV Santiago Schroh">
                <button className="buttonDownloadCV">
                  <span className="center">
                    <img src={download} alt="downloadImage" />
                    <span className="downloadCvText">Descargar CV</span>
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="websitesContainer">
        <a
          href="https://github.com/KhristyXV?tab=repositories"
          className="socialImagesGit"
          target="_blank"
        >
          <img src={github} alt="imageGithub" />
        </a>
        <a
          href="https://www.instagram.com/schrohsanti/"
          className="socialImagesInstagram"
          target="_blank"
        >
          <img src={instagram} alt="imageInstagram" />
        </a>
        <a
          href="https://www.linkedin.com/in/santiago-schroh-350099221/"
          className="socialImagesLinkedin"
          target="_blank"
        >
          <img src={linkedin} alt="imageLinkedin" className="linkedinImage" />
        </a>
      </div>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 473px;
  margin-top: 70px;
  .nameContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 34px;
    line-height: 50px;
    text-align: center;
    text-justify: inter-word;
    letter-spacing: 0.25px;
  }
  .welcomeContainer {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.15px;
    margin-top: 20px;
  }
  .buttonsContainer {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    cursor: pointer;
    width: 62%;
    gap: 10px;
  }
  .subButtonsContainer {
    display: flex;
    flex-direction: column;
  }
  .buttonSeeProyects {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    border-color: transparent;
    background: #00eee0;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    height: 48px;
    margin-bottom: 20px;
  }
  .buttonDownloadCV {
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    padding: 16px 20px;
    border: 1px solid #ffffff;
    border-radius: 5px;
    background-color: #0f0f0f;
    cursor: pointer;
    color: #ffffff;
    overflow: hidden;
    color: rgba(0, 0, 0, 0) !important;
    transition: all 0.3s ease;
    text-shadow: 0 0 0 #fff, 0 45px 0 #000;
  }
  .downloadCvText {
    margin-left: 7px;
  }
  .buttonDownloadCV:hover {
    text-shadow: 0 -45px 0 #fff, 0 0 0 #00eee0;
  }
  .center {
    align-items: center;
    display: flex;
  }
  .name {
    color: #00eee0;
  }
  .nameDesktop {
    display: none;
  }
  .nameDesktop2 {
    display: none;
  }
  .websitesContainer {
    display: none;
  }

  @media screen and (min-width: 1024px) {
    height: 800px;
    margin-top: 140px;
    .nameContainer {
      font-family: "DM Sans";
      font-style: normal;
      font-weight: 700;
      font-size: 60px;
      line-height: 90px;
      text-align: center;
      letter-spacing: -0.5px;
      margin-bottom: 130px;
    }
    .nameMobile {
      display: none;
    }
    .soy {
      display: none;
    }
    .nameDesktop {
      display: block;
    }
    .nameDesktop2 {
      display: block;
      white-space: nowrap;
      border-right: 1px solid;
      width: 15ch;
      animation: typing 2400ms steps(19), blink 0.5s infinite step-end alternate;
      overflow: hidden;
    }
    .linkedinImage {
      margin-top: 6px;
    }
    @keyframes typing {
      from {
        width: 0;
      }
    }
    @keyframes blink {
      50% {
        border-color: transparent;
      }
    }
    .colorNameDesktop {
      color: #00eee0;
    }
    .welcomeContainer {
      font-size: 20px;
      letter-spacing: 3px;
      padding-top: 40px;
    }
    .buttonsContainer {
      flex-direction: row;
      justify-content: center;
      gap: 30px;
    }
    .subButtonsContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      gap: 30px;
    }
    .buttonSeeProyects {
      font-size: 19px;
      padding: 20px 40px;
      display: flex;
      height: 63px;
      width: 218.567px;
      position: relative;
      background: black;
      border: 1px solid #00eee0;
    }
    .buttonSeeProyects span {
      display: none;
    }
    .buttonSeeProyects:before {
      font-family: "DM Sans";
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      content: "Espero que te gusten :)";
      display: flex;
      justify-content: center;
      align-items: center;
      color: #0c0c0c;
      background: #00eee0;
      top: 0;
      left: 100%;
      transition: all 1s;
      height: 100%;
      width: 100%;
      position: absolute;
      transform: scale(0) rotatey(0);
      opacity: 0;
    }
    .buttonSeeProyects:hover:before {
      transform: scale(1) rotatey(360deg);
      left: 0;
      opacity: 1;
    }
    .buttonSeeProyects:after {
      font-family: "DM Sans";
      font-style: normal;
      font-weight: 500;
      font-size: 19px;
      content: "Ver Proyectos";
      display: flex;
      justify-content: center;
      align-items: center;
      color: #0c0c0c;
      background: #00eee0;
      top: 0;
      left: 0;
      transition: all 1s;
      height: 100%;
      width: 100%;
      position: absolute;
      transform: scale(1) rotatey(0);
      opacity: 1;
    }
    .buttonSeeProyects:hover:after {
      transform: scale(0) rotatey(360deg);
      left: -100%;
      opacity: 0;
    }

    .buttonDownloadCV {
      font-size: 19px;
      width: 218.567px;
      height: 63px;
      margin-bottom: 18px;
    }
    .downloadCvText {
      margin-left: 14px;
    }
    .websitesContainer {
      display: flex;
      width: 60%;
      justify-content: space-around;
      margin-bottom: 100px;
    }
    .socialImagesLinkedin {
      cursor: pointer;
      transition: all 800ms;
    }
    .socialImagesLinkedin:hover {
      transform: scale(1.4);
      filter: drop-shadow(20px 12px 10px #4444dd);
    }
    .socialImagesInstagram {
      cursor: pointer;
      transition: all 800ms;
    }
    .socialImagesInstagram:hover {
      transform: scale(1.4);
      filter: drop-shadow(0px 15px 15px #bf467c);
    }
    .socialImagesGit {
      cursor: pointer;
      transition: all 800ms;
    }
    .socialImagesGit:hover {
      transform: scale(1.4);
      filter: drop-shadow(-20px 12px 10px #b8e2f296);
    }
  }
`;
