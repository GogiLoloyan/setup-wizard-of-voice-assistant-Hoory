import {
  AUTH_CHANGE_NAME_TEXT,
  AUTH_CHANGE_SURNAME_TEXT,
  AUTH_CHANGE_EMAIL_TEXT,
  AUTH_CHANGE_PASSWORD_TEXT,
  AUTH_SET_IS_AUTH_VALUE,
  AUTH_SET_IS_LOGED_IN
} from "../constants/ActionTypes";

export const setNameText = name => ({
  type: AUTH_CHANGE_NAME_TEXT,
  payload: name
});
export const setSurnameText = surname => ({
  type: AUTH_CHANGE_SURNAME_TEXT,
  payload: surname
});
export const setEmailText = email => ({
  type: AUTH_CHANGE_EMAIL_TEXT,
  payload: email
});
export const setPasswordText = password => ({
  type: AUTH_CHANGE_PASSWORD_TEXT,
  payload: password
});
export const setIsAuthValue = bool => ({
  type: AUTH_SET_IS_AUTH_VALUE,
  payload: bool
});
export const setIsAuthLogedIn = bool => ({
  type: AUTH_SET_IS_LOGED_IN,
  payload: bool
});
