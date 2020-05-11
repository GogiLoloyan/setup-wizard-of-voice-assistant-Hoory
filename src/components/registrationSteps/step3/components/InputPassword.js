import React, { useContext } from "react";
import InputWrapper from "../../../../layout/InputWrapper";
import { UserDataContext } from "../../../../layout/AccountValidationWrraper";

function InputPassword() {
  const { isError, $password, errClass } = useContext(UserDataContext);

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
