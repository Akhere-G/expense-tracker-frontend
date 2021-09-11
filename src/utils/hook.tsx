import { actionCreators as modalActions } from "../actions/modalActions";
import { useDispatch } from "react-redux";

export const useModal = () => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(modalActions.setIsVisible(false));
    dispatch(modalActions.setContent(<></>));
  };

  const addModal = (content: JSX.Element) => {
    dispatch(modalActions.setContent(content));
    dispatch(modalActions.setIsVisible(true));
  };

  return { closeModal, addModal };
};
