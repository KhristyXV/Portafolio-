import React from "react";
import styled from "styled-components";
import blackArrow from "../../assets/images/blackArrow.png";
import digitize from "../../assets/videos/digitize.mp4";
import digitizeMobile from "../../assets/images/digitizeMobile.jpg";
import city from "../../assets/images/city.jpg";

export const Proyects = () => {
  return (
    <Wrapper>
      <h1>Proyectos</h1>

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
      <div className="boxTwo">
        <img src={city} className="resolutionImage" />
      </div>
      <div className="boxThree">
        <img src={digitizeMobile} className="resolutionImage" />
      </div>
      <button>
        <span className="center">
          Ver más en GitHub
          <img src={blackArrow} alt="arrowBlack" className="arrowBlacksin" />
        </span>
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  height: 750px;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-top: 70px;

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
  .boxContainer {
  }
  .boxOne {
    width: 279px;
    height: 160px;
    border: 3px solid #00ffe0;
    background: url();
    box-shadow: -6px -6px 4px 2px rgba(0, 255, 224, 0.6);
  }
  #fondo {
    background: url("../../assets/images/digitize.png");
  }
  .boxTwo {
    width: 279px;
    height: 160px;
    border: 3px solid #00ffe0;
    box-shadow: 6px 6px 4px 2px rgba(0, 255, 224, 0.6);
  }
  .boxThree {
    width: 279px;
    height: 160px;
    border: 3px solid #00ffe0;
    border: 3px solid #00ffe0;
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
`;
