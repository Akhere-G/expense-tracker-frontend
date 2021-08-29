export const SET_CONTENT = "modal/SET_CONTENT";
export const SET_IS_VISIBLE = "modal/SET_IS_VISIBLE";

type Actions = {
  [SET_CONTENT]: {
    type: typeof SET_CONTENT;
    payload: {
      content: JSX.Element;
    };
  };
  [SET_IS_VISIBLE]: {
    type: typeof SET_IS_VISIBLE;
    payload: {
      isVisible: boolean;
    };
  };
};

export type ModalAction = Actions[keyof Actions] | { type: "@@INIT" };

export const actionCreators = {
  setContent: (content: JSX.Element): Actions[typeof SET_CONTENT] => ({
    type: SET_CONTENT,
    payload: { content },
  }),
  setIsVisible: (isVisible: boolean): Actions[typeof SET_IS_VISIBLE] => ({
    type: SET_IS_VISIBLE,
    payload: { isVisible },
  }),
};
