import { User, LoginData } from "../utils/types";
import { RootAction, Dispatch } from "../reducers/rootReducer";
import * as api from "../utils/api";

export const LOGIN_SUCCESS = "user/LOGIN_SUCCESS";
export const LOGIN_FAILURE = "user/LOGIN_FAILURE";

type Actions = {
  [LOGIN_SUCCESS]: {
    type: typeof LOGIN_SUCCESS;
    payload: { user: User; token: string };
  };
  [LOGIN_FAILURE]: {
    type: typeof LOGIN_FAILURE;
    payload: { message: string };
  };
};

export type UserActions = Actions[keyof Actions] | { type: "@@INIT" };

interface LoginResponse {
  user: User;
  token: string;
}
export const actionCreators = {
  loginSuccess: (user: User, token: string): Actions[typeof LOGIN_SUCCESS] => ({
    type: LOGIN_SUCCESS,
    payload: { user, token },
  }),
  loginFailure: (message: string): Actions[typeof LOGIN_FAILURE] => ({
    type: LOGIN_FAILURE,
    payload: { message },
  }),
  login: (formData: LoginData) => async (dispatch: Dispatch<RootAction>) => {
    try {
      const response = await api.login(formData);
      const { user, token } = response.data as LoginResponse;

      dispatch(actionCreators.loginSuccess(user, token));
    } catch (err: any) {
      const message = err?.response?.data?.message || "Could not login.";
      dispatch(actionCreators.loginFailure(message));
    }
  },
};
