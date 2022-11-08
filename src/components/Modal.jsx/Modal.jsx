import React from "react";
import styled from "styled-components";

export const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();
  return (
    <Wrapper>
      <div className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
        <div className="modal-container" onClick={handleModalContainerClick}>
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
  transition: 6s;
  .modal {
    position: absolute;
    display: none;
    background-color: #00000037;
  }
  .modal.is-open {
    display: flex;
  }
  .modal-container {
    border: 1px solid #00ffe0;
    border-radius: 8px;
    position: absolute;
    width: 600px;
    height: 350px;
    background-color: #000000;
  }
  .modal-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;
