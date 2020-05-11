import {
  AUTH_CHANGE_NAME_TEXT,
  AUTH_CHANGE_SURNAME_TEXT,
  AUTH_CHANGE_EMAIL_TEXT,
  AUTH_CHANGE_PASSWORD_TEXT,
  AUTH_SET_IS_AUTH_VALUE,
  AUTH_SET_IS_LOGED_IN
} from "../constants/ActionTypes";

const defaultState = {
  name: "",
  surname: "",
  email: "",
  password: "",
  isAuthValue: false,
  logedIn: false
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case AUTH_CHANGE_NAME_TEXT:
      return {
        ...state,
        name: action.payload
      };
    case AUTH_CHANGE_SURNAME_TEXT:
      return {
        ...state,
        surname: action.payload
      };
    case AUTH_CHANGE_EMAIL_TEXT:
      return {
        ...state,
        email: action.payload
      };
    case AUTH_CHANGE_PASSWORD_TEXT:
      return {
        ...state,
        password: action.payload
      };
    case AUTH_SET_IS_AUTH_VALUE:
      return {
        ...state,
        isAuthValue: action.payload
      };
    case AUTH_SET_IS_LOGED_IN:
      return {
        ...state,
        logedIn: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
