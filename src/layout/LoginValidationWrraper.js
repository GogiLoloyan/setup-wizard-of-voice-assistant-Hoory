import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLink } from "valuelink";
import { validateEmail } from "../utils/validate";
import { setIsAuthLogedIn } from "../actions/authActions";

const LoginDataContext = React.createContext(null);

const LoginValidationWrraper = props => {
  const { email, password } = useSelector(store => store.auth);
  const dispatch = useDispatch();

  const $email = useLink(email);
  const $error = useLink(false);
  const $password = useLink(password);

  $email.check(
    x => validateEmail(x),
    "You have entered an invalid email address!"
  );
  $password.check(x => x, "Password should not be empty!");

  const errClass = (isError, error) =>
    `login-form__input ${isError && error ? "error" : ""}`;

  const handleOnSubmit = e => {
    e.preventDefault();
    const valid = !$email.error && !$password.error;
    if (valid) dispatch(setIsAuthLogedIn(true));
    $error.set(!valid);
  };

  const state = {
    $email,
    $password,
    isError: $error.value,
    errClass
  };

  return (
    <LoginDataContext.Provider value={state}>
      <section className="login">{props.children(handleOnSubmit)}</section>;
    </LoginDataContext.Provider>
  );
};

export default LoginValidationWrraper;
export { LoginDataContext };
