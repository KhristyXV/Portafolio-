import React from "react";
import styled from "styled-components";
import { useModal } from "../../hooks/useModal";
import { Modal } from "./Modal";

export const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  return (
    <Wrapper>
      <div>
        <button onClick={openModal1}>Acerca de mi</button>
        <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
          <h3>Modal 1</h3>
          <p> Hola Zorra !</p>
        </Modal>
        <Modal isOpen={isOpenModal2} closeModal2={closeModal2}>
          <h1>HOLA</h1>
        </Modal>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
