import React, { useContext } from "react";
import InputWrapper from "../../../../layout/InputWrapper";
import { LoginDataContext } from "../../../../layout/LoginValidationWrraper";

function InputPassword() {
  const { isError, $password, errClass } = useContext(LoginDataContext);

  return (
    <InputWrapper isError={isError} error={$password.error}>
      <input
        type="password"
        className={errClass(isError, $password.error)}
        placeholder="Password"
        defaultValue={$password.value}
        onChange={({ target }) => $password.set(target.value)}
      />
    </InputWrapper>
  );
}

export default InputPassword;
