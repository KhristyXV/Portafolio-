import React from "react";
import styled from "styled-components";

export const Modal = ({ children, isOpen, closeModal }) => {
  return (
    <Wrapper>
      <div className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
        <div className="modal-container">
          <button className="modal-close" onClick={closeModal}>
            X
          </button>
          {children}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .modal {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    background-color: #00000037;
    display: none;
    justify-content: center;
    align-items: center;
  }

  .modal.is-open {
    display: flex;
  }
  .modal-container {
    position: relative;
    width: 300px;
    height: 500px;
    bottom: 10px;
    background-color: #000000;
  }
  .modal-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;
