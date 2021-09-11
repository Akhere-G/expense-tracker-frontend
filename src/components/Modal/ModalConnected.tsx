import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import { actionCreators } from "../../actions/modalActions";
import { RootState } from "../../reducers/rootReducer";

const ModalConnected = () => {
  const dispatch = useDispatch();
  const { isVisible, content } = useSelector((state: RootState) => state.modal);
  const closeModal = () => {
    dispatch(actionCreators.setContent(<></>));
    dispatch(actionCreators.setIsVisible(false));
  };

  return (
    <Modal isVisible={isVisible} closeModal={closeModal}>
      {content}
    </Modal>
  );
};

export default ModalConnected;
