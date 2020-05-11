import React, { useContext } from "react";
import InputWrapper from "../../../../layout/InputWrapper";
import { LoginDataContext } from "../../../../layout/LoginValidationWrraper";

const InputEmail = () => {
  const { isError, $email, errClass } = useContext(LoginDataContext);

  return (
    <InputWrapper isError={isError} error={$email.error}>
      <input
        type="email"
        className={errClass(isError, $email.error)}
        placeholder="Email"
        defaultValue={$email.value}
        onChange={({ target }) => $email.set(target.value)}
      />
    </InputWrapper>
  );
};

export default InputEmail;
