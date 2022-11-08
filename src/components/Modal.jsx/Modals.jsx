import React from "react";
import styled from "styled-components";
import { useModal } from "../../hooks/useModal";
import { Modal } from "./Modal";
import interrogationRight from "../../assets/images/interrogationRight.png";
import interrogationLeft from "../../assets/images/interrogationLeft.png";

export const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);

  return (
    <Wrapper>
      <div>
        <button onClick={openModal1}>Acerca de mi</button>
        <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
          <h3>Modal 1</h3>
          <p> Hola !</p>
        </Modal>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
