import React from "react";
import InvailidMessage from "../components/common/InvailidMessage";

function InputWrapper({ children, error, isError }) {
  if (Array.isArray(children)) {
    return (
      <div className="input-wrapper">
        <div className="input-wrapper">
          {children[0]}
          {isError && <InvailidMessage message={error[0]} />}
        </div>
        <div className="input-wrapper">
          {children[1]}
          {isError && <InvailidMessage message={error[1]} />}
        </div>
      </div>
    );
  }
  return (
    <div className="input-wrapper">
      {children}
      {isError && <InvailidMessage message={error} />}
    </div>
  );
}

export default InputWrapper;
