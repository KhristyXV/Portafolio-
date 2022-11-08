import React from "react";
import styled from "styled-components";
import { Modal } from "../../Modal.jsx/Modal";
import { useModal } from "../../../hooks/useModal";
import interrogationRight from "../../../assets/images/interrogationRight.png";
import interrogationLeft from "../../../assets/images/interrogationLeft.png";

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
            <Modal isOpen={isOpenModal} closeModal={closeModal} />
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
            <Modal isOpen={isOpenModal} closeModal={closeModal} />
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
            <Modal isOpen={isOpenModal} closeModal={closeModal} />
          </div>
        </div>
      </div>
    </WrapperLeft>
  );
};

const Wrapper = styled.div`
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
