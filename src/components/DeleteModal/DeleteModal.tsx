import React, { FC } from "react";
import { Container, ButtonContainer, Button } from "./DeleteModal.styled";

interface IDeleteModal {
  deleteTransaction: () => void;
  closeModal: () => void;
}

const DeleteModal: FC<IDeleteModal> = ({ deleteTransaction, closeModal }) => {
  return (
    <Container>
      <h4>Are you sure you want to delete this transaction?</h4>
      <ButtonContainer>
        <Button
          onClick={deleteTransaction}
          variant="outlined"
          color="secondary"
        >
          Yes, delete this transaction
        </Button>
        <Button onClick={closeModal} variant="outlined" color="primary">
          No, keep this transaction
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default DeleteModal;
