import React, { FC } from "react";
import { Background, ModalContainer, Header, Content } from "./Modal.styled";
import { Close } from "@material-ui/icons";

import { StyledButton } from "../../utils/global";

const Modal: FC<{
  isVisible: boolean;
  closeModal: () => void;
}> = ({ isVisible, closeModal, children }) => {
  return (
    <Background isVisible={isVisible}>
      <ModalContainer>
        <Header>
          <StyledButton onClick={() => closeModal()}>
            <Close fontSize="small" />
          </StyledButton>
        </Header>
        <Content>{children}</Content>
      </ModalContainer>
    </Background>
  );
};

export default Modal;
