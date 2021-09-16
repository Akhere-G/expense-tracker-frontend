import {
  UserActions,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "../actions/userActions";
import { User } from "../utils/types";

export type UserState = {
  user: User | null;
  message: string | null;
  token: string | null;
};

const initialState: UserState = {
  user: null,
  message: null,
  token: null,
};

export const userReducer = (
  state: UserState = initialState,
  action: UserActions
) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return { user: action.payload.user, token: action.payload.token, message: null };
    case LOGIN_FAILURE:
    case REGISTER_FAILURE:
      return { ...state, message: action.payload.message };
    case LOGOUT:
      return { ...state, user: null, token: null };
    default:
      return state;
  }
};
