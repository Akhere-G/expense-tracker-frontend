import {
  UserActions,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
} from "../actions/userActions";
import { User } from "../utils/types";

export type UserState = {
  user: User | null;
  message: string | null;
};

const initialState: UserState = {
  user: null,
  message: null,
};

export const userReducer = (
  state: UserState = initialState,
  action: UserActions
) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { user: action.payload.user, message: null };
    case LOGIN_FAILURE:
      return { ...state, message: action.payload.message };
    default:
      return state;
  }
};
