import React from "react";
import styled from "styled-components";
import blackArrow from "../../assets/images/blackArrow.png";
import digitize from "../../assets/videos/digitize.mp4";
import ecoSport from "../../assets/videos/ecoSport.mp4";
import city from "../../assets/videos/appClima.mp4";

export const Proyects = () => {
  return (
    <Wrapper id="proyects">
      <div className="titleAndButton">
        <div className="moveTitleAndButton">
          <h1>Proyectos</h1>
          <button className="buttonDesktop">
            <span className="center">
              <a href="https://github.com/KhristyXV?tab=repositories">
                Ver más en GitHub
              </a>
              <img
                src={blackArrow}
                alt="arrowBlack"
                className="arrowBlacksin"
              />
            </span>
          </button>
        </div>
      </div>
      <div className="videoContainer">
        <div className="containerBoxOne">
          <div className="boxOne">
            <video
              className="resolutionImage"
              id="player"
              playsinline
              controls
              data-poster="/path/to/poster.jpg"
            >
              <source src={digitize} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="containerBoxTwo">
          <div className="boxTwo">
            <video
              className="resolutionImage"
              id="player"
              playsinline
              controls
              data-poster="/path/to/poster.jpg"
            >
              <source src={city} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="containerBoxThree">
          <div className="boxThree">
            <video
              className="resolutionImage"
              id="player"
              playsinline
              controls
              data-poster="/path/to/poster.jpg"
            >
              <source src={ecoSport} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <button className="buttonMobile">
        <span className="center">
          <a href="https://github.com/KhristyXV?tab=repositories">
            Ver más en GitHub
          </a>
          <img src={blackArrow} alt="arrowBlack" className="arrowBlacksin" />
        </span>
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-top: 70px;
  a {
    text-decoration: none;
    color: #171718;
  }
  h1 {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 32px;
  }
  button {
    width: 280px;
    height: 48px;
    background: #00eee0;
    border-radius: 7.98349px;
    border-color: transparent;
    margin-top: 20px;
    cursor: pointer;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
  }
  div {
    cursor: pointer;
  }
  .buttonDesktop {
    display: none;
  }
  .boxOne {
    width: 279px;
    height: 160px;
    border: 1px solid #00ffe0;
    background: url();
    box-shadow: -6px -6px 4px 2px rgba(0, 255, 224, 0.6);
  }
  #fondo {
    background: url("../../assets/images/digitize.png");
  }
  .boxTwo {
    width: 279px;
    height: 160px;
    border: 1px solid #00ffe0;
    box-shadow: 6px 6px 4px 2px rgba(0, 255, 224, 0.6);
  }
  .boxThree {
    width: 279px;
    height: 160px;
    border: 1px solid #00ffe0;

    box-shadow: -6px 6px 4px 2px rgba(0, 255, 224, 0.6);
  }
  .arrowBlacksin {
    padding-left: 10px;
  }
  .center {
    display: flex;
    justify-content: center;
  }
  .resolutionImage {
    width: 100%;
    height: 100%;
  }
  .videoContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 550px;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 210px;
    .buttonMobile {
      display: none;
    }
    .buttonDesktop {
      display: block;
    }
    .titleAndButton {
      display: flex;
      width: 60%;
    }
    .moveTitleAndButton {
      justify-content: left;
    }
    button {
      width: 220px;
    }
    h1 {
      padding-right: 20px;
      font-family: "DM Sans";
      font-style: normal;
      font-weight: 500;
      font-size: 38px;
      line-height: 32px;
      letter-spacing: 1.25px;
    }
    .boxOne {
      width: 600px;
      height: 350px;
      border: 1px solid #00ffe0;
      box-shadow: -12px -12px 8px 4px rgba(0, 255, 224, 0.6);
    }
    .boxTwo {
      width: 600px;
      height: 350px;
      border: 1px solid #00ffe0;
      box-shadow: 12px 12px 8px 4px rgba(0, 255, 224, 0.6);
    }
    .boxThree {
      width: 600px;
      height: 350px;
      border: 1px solid #00ffe0;
      box-shadow: -12px 12px 8px 4px rgba(0, 255, 224, 0.6);
    }
    .videoContainer {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 1200px;
      width: 69%;
      margin-top: 60px;
    }
    .containerBoxOne {
      display: flex;
      width: 100%;
      justify-content: left;
    }
    .containerBoxTwo {
      display: flex;
      width: 100%;
      justify-content: right;
    }
    .containerBoxThree {
      display: flex;
      width: 100%;
      justify-content: left;
    }
  }
`;
