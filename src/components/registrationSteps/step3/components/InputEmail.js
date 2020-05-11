import React, { useContext } from "react";
import InputWrapper from "../../../../layout/InputWrapper";
import { UserDataContext } from "../../../../layout/AccountValidationWrraper";

const InputEmail = () => {
  const { isError, $email, errClass } = useContext(UserDataContext);

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
