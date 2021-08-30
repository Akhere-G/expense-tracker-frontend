import {
  ModalAction,
  SET_CONTENT,
  SET_IS_VISIBLE,
} from "../actions/modalActions";

export interface ModalState {
  isVisible: boolean;
  content: JSX.Element;
}

const initalState: ModalState = {
  isVisible: false,
  content: <></>,
};

export const modalReducer = (
  state: ModalState = initalState,
  action: ModalAction
) => {
  switch (action.type) {
    case SET_CONTENT:
      return { ...state, content: action.payload.content };
    case SET_IS_VISIBLE:
      return { ...state, isVisible: action.payload.isVisible };
    default:
      return state;
  }
};
