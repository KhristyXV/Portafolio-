import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import instagramSocial from "../../assets/images/instagramSocial.png";
import linkedinSocial from "../../assets/images/linkedinSocial.png";
import whatsappSocial from "../../assets/images/whatsappSocial.png";

export const Footer = () => {
  return (
    <Wrapper>
      <div className="containerOne">
        <div className="subContainerTwo">
          <div className="subContainerThree">
            <div className="name">
              <h1>Santiago Dev</h1>
            </div>
            <div className="menu">
              <h2>Inicio</h2>
              <Link
                to={"aboutMe"}
                spy={true}
                smooth={true}
                offset={-400}
                duration={100}
              >
                <h3>Acerca de mi</h3>
              </Link>

              <Link
                to={"proyects"}
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <h3>Proyectos</h3>
              </Link>
            </div>
            <div className="contact">
              <h2>Contactame</h2>
              <Link
                to={"contactme"}
                spy={true}
                smooth={true}
                offset={-85}
                duration={300}
              >
                <h3>Correo</h3>
              </Link>

              <a
                href="https://www.linkedin.com/in/santiago-schroh-350099221/"
                target="_blank"
              >
                <h3>Linkedin</h3>
              </a>
            </div>

            <div className="containerSocial">
              <div className="social">
                <h2>Social</h2>
              </div>
              <div className="containerIcon">
                <a
                  href="https://www.instagram.com/schrohsanti/"
                  target="_blank"
                >
                  <img src={instagramSocial} alt="miniImageInstagram" />
                </a>
                <a
                  href="https://www.linkedin.com/in/santiago-schroh-350099221/"
                  target="_blank"
                >
                  <img src={linkedinSocial} alt="miniImageLinkedin" />
                </a>
                <a href="https://wa.me/c/5492915131087" target="_blank">
                  <img src={whatsappSocial} alt="miniImageWhatsApp" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h4Container">
        <div className="h4SubContainer">
          <h4 className="containerTwo">© 2022 Santiago Schroh</h4>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  a {
    color: #ffffff;
  }
  h1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 50px;
  }

  h2 {
    color: #00eee0;
    font-size: 16px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: 0.15px;
  }
  h3 {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 34px;
    letter-spacing: 0.25px;
    transition: 200ms ease-in-out;
    cursor: pointer;
  }
  h3:hover {
    transform: scale(1.1);
  }
  h4 {
    font-family: "DM Sans";
    font-style: italic;
    font-weight: 400;
    font-size: 11.4px;
    line-height: 16px;
    letter-spacing: 0.6px;
    color: #ffffffc0;
  }
  img {
    transition: 200ms;
  }
  img:hover {
    transform: scale(1.1);
  }
  .containerTitles {
    padding-top: 18px;
  }
  .containerOne {
    border-top: 0.1px solid #3f3a3a76;
    border-bottom: 0.1px solid #3f3a3a76;
  }
  .containerTwo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
  }
  .containerSocial {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 35px;
  }
  .containerIcon {
    display: flex;
    align-items: center;

    justify-content: space-around;
    width: 47%;
    padding-left: 6px;
  }
  @media screen and (min-width: 1024px) {
    h1 {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-size: 34px;
    }

    h2 {
      color: #00eee0;
      font-size: 20px;
      font-family: "DM Sans";
      font-style: normal;
      font-weight: 500;
      line-height: 36px;
      letter-spacing: 0.15px;
    }

    h3 {
      font-family: "DM Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 34px;
      letter-spacing: 0.25px;
      transition: 200ms ease-in-out;
    }
    h3:hover {
      transform: scale(1.1);
    }
    h4 {
      font-family: "DM Sans";
      font-style: italic;
      font-weight: 400;
      font-size: 15.4px;
      line-height: 16px;
      letter-spacing: 0.6px;
      color: #ffffffc0;
    }
    .name {
      margin-top: -11px;
    }
    .containerOne {
      display: flex;
      justify-content: center;
      height: 300px;
    }
    .subContainerTwo {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      text-align: left;
      align-items: center;
      width: 90%;
    }
    .subContainerThree {
      display: flex;
      justify-content: space-between;

      width: 100%;
    }
    .containerSocial {
      padding-bottom: 64.3px;
      justify-content: space-between;
      width: 125px;
      text-align: left;
    }
    .social {
      margin: 0 auto;
      width: 100%;
      display: flex;
      justify-content: left;
      align-items: left;
      margin-left: 2px;
    }
    .h4Container {
      display: flex;
      justify-content: center;
      width: 100%;
    }
    .h4SubContainer {
      width: 90%;
      text-align: left;
    }
    .containerTwo {
      justify-content: left;
    }
    .containerIcon {
      display: flex;
      align-items: center;

      justify-content: space-between;
      width: 100%;
    }
  }
`;
