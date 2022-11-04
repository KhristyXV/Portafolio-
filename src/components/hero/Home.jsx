import React from "react";
import styled from "styled-components";
import download from "../../assets/images/download.png";
import instagram from "../../assets/images/instagram.png";
import linkedin from "../../assets/images/linkedin.png";
import github from "../../assets/images/github.png";
import curriculum from "../../assets/downloads/curriculumSchroh.pdf";

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
          <button className="buttonSeeProyects">Ver proyectos</button>
          <a href={curriculum} download="CV Santiago Schroh">
            <button className="buttonDownloadCV">
              <span className="center">
                <img src={download} alt="downloadImage" />
                Descargar CV
              </span>
            </button>
          </a>
        </div>
      </div>
      <div className="websitesContainer">
        <a
          href="https://github.com/KhristyXV?tab=repositories"
          className="socialImages"
        >
          <img src={github} alt="imageGithub" />
        </a>
        <a
          href="https://www.instagram.com/schrohsanti/"
          className="socialImages"
        >
          <img src={instagram} alt="imageInstagram" />
        </a>
        <a
          href="https://www.linkedin.com/in/santiago-schroh-350099221/"
          className="socialImages"
        >
          <img src={linkedin} alt="imageLinkedin" />
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
  margin-top: 20px;
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
  .buttonSeeProyects {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 16px;
    padding: 16px 20px;
    background: #00eee0;
    border-radius: 5px;
    border-color: transparent;
    cursor: pointer;
  }
  .buttonDownloadCV {
    display: flex;
    align-items: center;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
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
      animation: typing 3s steps(18), blink 0.5s infinite step-end alternate;
      overflow: hidden;
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
    .buttonSeeProyects {
      font-size: 18px;
      padding: 20px 40px;
    }
    .buttonDownloadCV {
      font-size: 18px;
      padding: 20px 40px;
    }
    .websitesContainer {
      display: flex;
      width: 60%;
      justify-content: space-around;
      margin-bottom: 100px;
    }
    .socialImages {
      cursor: pointer;
      transition: all 800ms;
    }
    .socialImages:hover {
      transform: scale(1.4);
    }
  }
`;
