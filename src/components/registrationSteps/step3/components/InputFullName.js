import React, { useContext } from "react";
import InputWrapper from "../../../../layout/InputWrapper";
import { UserDataContext } from "../../../../layout/AccountValidationWrraper";

function InputFullName() {
  const { isError, $name, $surname, errClass } = useContext(UserDataContext);

  return (
    <InputWrapper isError={isError} error={[$name.error, $surname.error]}>
      <input
        type="text"
        className={errClass(isError, $name.error || $surname.error)}
        placeholder="First Name"
        defaultValue={$name.value}
        onChange={({ target }) => $name.set(target.value)}
      />
      <input
        type="text"
        className={errClass(isError, $name.error || $surname.error)}
        placeholder="Last Name"
        defaultValue={$surname.value}
        onChange={({ target }) => $surname.set(target.value)}
      />
    </InputWrapper>
  );
}

export default InputFullName;
