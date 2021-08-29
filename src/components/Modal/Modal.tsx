import React, { FC } from "react";
import { Background, ModalContainer, Header, Content } from "./Modal.styled";

import { CloseButton } from "../../global";

const Modal: FC<{
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ show, setShow, children }) => {
  return (
    <Background show={show}>
      <ModalContainer>
        <Header>
          <CloseButton fontSize="small" onClick={() => setShow(false)} />
        </Header>
        <Content>{children}</Content>
      </ModalContainer>
    </Background>
  );
};

export default Modal;
