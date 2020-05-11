import React from "react";
import { useSelector } from "react-redux";
import { useLink } from "valuelink";
import { validateEmail, validatePassword } from "../utils/validate";
import {
  setPasswordText,
  setNameText,
  setSurnameText,
  setEmailText
} from "../actions/authActions";

const UserDataContext = React.createContext(null);

const AccountValidationWrraper = props => {
  const { name, surname, email, password } = useSelector(store => store.auth);

  const $name = useLink(name);
  const $surname = useLink(surname);
  const $email = useLink(email);
  const $password = useLink(password);
  const $error = useLink(false);

  $name.check(x => x, "First name should not be empty.");
  $surname.check(x => x, "Last name should not be empty.");
  $email.check(x => validateEmail(x), "You have entered an invalid email address!");
  $password.check(x => validatePassword(x), "Password must contain alphabetical and numeric character and must be 8 characters or longer");

  const errClass = (isError, error) => `registration-form__input ${isError && error ? "error" : ""}`;

  const handleOnSubmit = e => {
    e.preventDefault();
    const isError = ({ error }) => !error;
    const valid = [$name, $surname, $email, $password].every(isError);
    if (valid) handleDispatch();
    $error.set(!valid);
  };

  const handleDispatch = () => {
    const name = setNameText($name.value);
    const surname = setSurnameText($surname.value);
    const email = setEmailText($email.value);
    const password = setPasswordText($password.value);
    const step = 4;
    props.nextStep([name, surname, email, password], step);
  };

  const state = {
    $name,
    $surname,
    $email,
    $password,
    isError: $error.value,
    errClass
  };

  return (
    <UserDataContext.Provider value={state}>
      {props.children(handleOnSubmit)}
    </UserDataContext.Provider>
  );
};

export default AccountValidationWrraper;
export { UserDataContext };
